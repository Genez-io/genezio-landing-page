// Put the documentation site (apps/docs) under /docs of the landing page.
//
//   node scripts/add-docs.mjs --site .vercel/output --docs ../docs/output
//
// genezio.com is one deployment of Vercel. `vercel build` writes the landing
// page in the Build Output API of Vercel (--site): the files, the functions of
// api/ and the routes. scripts/seo.mjs of apps/docs writes the documentation
// in the same format (--docs). This script copies the files of the
// documentation into the output of the landing page and puts the routes of the
// documentation before the routes of the landing page.
//
// The order of the routes is important:
//
// 1. The redirects of a host, such as www.genezio.com to genezio.com, stay
//    first, thus they also apply to /docs.
// 2. The routes of the documentation: the redirects of the old URLs, and the
//    RSC payload for a request with the header `rsc`.
// 3. A route that sends each other path of /docs to its file. It stops the
//    routes of the landing page for /docs. The landing page and the
//    documentation each use a slash at the end of a path (`trailingSlash`).
// 4. The routes of the landing page.
//
// The script also merges /docs/sitemap.xml into /sitemap.xml. The two sites
// write one sitemap each, thus a crawler that reads /sitemap.xml alone found
// no page of /docs.

import { cpSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

function argument(name) {
  const index = process.argv.indexOf(name);
  if (index === -1 || !process.argv[index + 1]) {
    console.error(`❌ give ${name} <directory>`);
    process.exit(1);
  }
  return resolve(process.argv[index + 1]);
}

const SITE = argument("--site");
const DOCS = argument("--docs");
const BASE = "docs";

function readConfig(output) {
  const file = join(output, "config.json");
  if (!existsSync(file)) {
    console.error(`❌ ${file} does not exist`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(file, "utf8"));
}

const site = readConfig(SITE);
const docs = readConfig(DOCS);

// --- Files -------------------------------------------------------------------

const target = join(SITE, "static", BASE);
if (existsSync(target)) {
  console.error(`❌ the landing page has files in /${BASE}: remove public/${BASE} of the landing page`);
  process.exit(1);
}
// Only the files under /docs. The robots.txt at the root of the
// documentation is not used: the landing page has its own robots.txt.
cpSync(join(DOCS, "static", BASE), target, { recursive: true });

// --- The sitemap -------------------------------------------------------------

// scripts/generate-sitemap.js of the landing page writes /sitemap.xml with the
// pages of the landing page. scripts/seo.mjs of apps/docs writes
// /docs/sitemap.xml with the pages of the documentation. genezio.com is one
// site, thus /sitemap.xml must give each page of the site. This copies the
// entries of the documentation into /sitemap.xml. /docs/sitemap.xml stays
// available, and robots.txt of the landing page gives both files.
function addTheDocsToTheSitemap() {
  const main = join(SITE, "static", "sitemap.xml");
  const docsSitemap = join(target, "sitemap.xml");
  for (const file of [main, docsSitemap]) {
    if (!existsSync(file)) {
      console.error(`❌ ${file} does not exist`);
      process.exit(1);
    }
  }

  const entries = readFileSync(docsSitemap, "utf8").match(/<url>[\s\S]*?<\/url>/g) || [];
  if (entries.length === 0) {
    console.error(`❌ ${docsSitemap} has no page`);
    process.exit(1);
  }

  const text = readFileSync(main, "utf8");
  if (!text.includes("</urlset>")) {
    console.error(`❌ ${main} is not a sitemap`);
    process.exit(1);
  }
  // The replacement is a function, thus a $ of a URL stays a $.
  const merged = text.replace(
    "</urlset>",
    () => `${entries.map((entry) => `  ${entry}`).join("\n")}\n</urlset>`,
  );
  writeFileSync(main, merged);
  console.log(`✅ /sitemap.xml: ${entries.length} pages of /${BASE}`);
}

addTheDocsToTheSitemap();

const overrides = { ...(site.overrides || {}) };
for (const [file, override] of Object.entries(docs.overrides || {})) {
  if (file.startsWith(`${BASE}/`)) overrides[file] = override;
}

// --- Routes ------------------------------------------------------------------

const isHostRoute = (route) => (route.has || []).some((condition) => condition.type === "host");

// The documentation alone sends / to /docs. On genezio.com, / is the landing
// page. The phases (`handle`) of the documentation are not used: the routes
// of the documentation go into the main phase of the landing page.
const docsRoutes = docs.routes.filter((route) => !route.handle && route.src !== "^/$");

const routes = [
  ...site.routes.filter(isHostRoute),
  ...docsRoutes,
  { src: `^/${BASE}/?$`, dest: `/${BASE}` },
  { src: `^/${BASE}/(.+?)/?$`, dest: `/${BASE}/$1` },
  ...site.routes,
];

writeFileSync(
  join(SITE, "config.json"),
  `${JSON.stringify({ ...site, routes, overrides }, null, 2)}\n`,
);
console.log(
  `✅ /${BASE}: ${Object.keys(overrides).filter((file) => file.startsWith(`${BASE}/`)).length} pages, ` +
    `${docsRoutes.length} routes of the documentation`,
);
