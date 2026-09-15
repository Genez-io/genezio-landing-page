// Serve the functions of `api/` on localhost, so the pages that call them can
// be driven from `npm run dev`.
//
// `vite` serves the client and nothing else: a call to `/api/...` from the dev
// server reaches no function and comes back as the HTML of the page. `vercel
// dev` answers that, but it runs the whole SSG build first, which is minutes
// for a change of one function. This is the short loop; `vercel dev` stays the
// way to check the deployment itself.
//
//   node scripts/dev-api.mjs                            # in one terminal
//   cd new-landing && npm run dev                       # in another
//
// `vite.config.ts` proxies `/api` here, thus the page calls the same paths in
// development as in production. A `vite` that finds nothing on this port
// answers 500, thus a page that shows one means that this server is not up.
//
// `.env.local` at the root of the repo holds the credentials, and this reads
// it at the start. The shell environment wins over it, in the same way as a
// variable of the Vercel project wins over a file of the repo.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const API_DIR = path.join(ROOT, "api");
const PORT = Number(process.env.PORT) || 3001;

// The file is optional: the functions each say which variable they miss, thus
// a run with no credentials still starts and still explains itself.
const ENV_FILE = path.join(ROOT, ".env.local");
const hasEnvFile = fs.existsSync(ENV_FILE);
if (hasEnvFile) process.loadEnvFile(ENV_FILE);

// Vercel ignores a file of `api/` whose name starts with `_`, and so does this.
function handlerPathFor(name) {
  if (!/^[a-z0-9-]+$/i.test(name)) return null;
  const file = path.join(API_DIR, `${name}.js`);
  return fs.existsSync(file) ? file : null;
}

// The shape that a function of Vercel's Node runtime receives. Only the parts
// that the functions of this repo touch are here.
function decorate(req, res, query, body) {
  req.query = query;
  req.body = body;

  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    if (!res.getHeader("Content-Type")) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
    }
    res.end(JSON.stringify(payload));
    return res;
  };
  res.send = (payload) => {
    res.end(typeof payload === "string" ? payload : String(payload));
    return res;
  };
}

// The mtime of the copy that the require cache holds, per file.
const loadedAt = new Map();

function loadHandler(file) {
  const mtime = fs.statSync(file).mtimeMs;
  if (loadedAt.get(file) !== mtime) {
    // An edit drops the module, and nothing else does. A reload on each
    // request would also drop whatever a function keeps between calls — the
    // cached token of `leaderboard.js` is exactly that — and a run here would
    // then ask for a token every time, which a warm instance on Vercel does
    // not. The local behaviour has to be the one that ships.
    delete require.cache[require.resolve(file)];
    loadedAt.set(file, mtime);
  }
  return require(file);
}

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const match = url.pathname.match(/^\/api\/([^/]+)\/?$/);

  if (!match) {
    res.statusCode = 404;
    res.end(`No function for ${url.pathname}. The routes are /api/<file of api/>.`);
    return;
  }

  const file = handlerPathFor(match[1]);
  if (!file) {
    res.statusCode = 404;
    res.end(`No function named ${match[1]} in api/`);
    return;
  }

  const query = Object.fromEntries(url.searchParams);
  const raw = req.method === "GET" || req.method === "HEAD" ? "" : await readBody(req);
  let body = raw;
  if (raw && (req.headers["content-type"] || "").includes("application/json")) {
    try {
      body = JSON.parse(raw);
    } catch {
      body = {};
    }
  }

  decorate(req, res, query, body);

  try {
    const handler = loadHandler(file);
    const started = Date.now();
    await handler(req, res);
    console.log(
      `${req.method} ${url.pathname}${url.search} → ${res.statusCode} (${Date.now() - started}ms)`,
    );
  } catch (error) {
    console.error(`${req.method} ${url.pathname} threw:`, error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: String((error && error.message) || error) }));
    }
  }
});

server.listen(PORT, () => {
  const names = fs
    .readdirSync(API_DIR)
    .filter((f) => f.endsWith(".js") && !f.startsWith("_"))
    .map((f) => `  http://localhost:${PORT}/api/${f.replace(/\.js$/, "")}`);
  console.log(`The functions of api/ are on port ${PORT}:\n${names.join("\n")}\n`);
  console.log(
    hasEnvFile
      ? `Credentials read from ${path.relative(ROOT, ENV_FILE)}\n`
      : "No .env.local at the root of the repo: the functions run with the " +
          "environment of this shell alone.\n",
  );
});
