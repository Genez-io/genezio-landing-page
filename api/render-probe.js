// Vercel serverless function: /api/render-probe/
//
// A test of the crawlers of the answer engines: which of them run the
// JavaScript of genezio.com, with which user agent, from which IP, and for how
// long. A small inline script in new-landing/index.html, thus in each page,
// calls this function when the page runs in a browser. A crawler that only
// fetches the HTML never calls it.
//
// The script sends a beacon "t0" with a fingerprint of the browser. This
// function keeps the beacon only when the client looks like a bot:
//   - its user agent names a crawler, a headless browser or an HTTP library;
//   - its fingerprint shows automation (navigator.webdriver, HeadlessChrome);
//   - its IP is in a range that OpenAI, Microsoft (Bing), Google or Perplexity
//     publish for their crawlers.
// For such a client the answer is {"watch": true}, and the script then sends
// the beacons d1, d3, d5, d10 and d20 after that many seconds: the last one
// that arrives shows how long the renderer waits. A person gets
// {"watch": false}, and nothing about the visit is stored.
//
// Routes:
//   POST /api/render-probe/?b=<kind>&id=<id>&p=<path>  a beacon
//   GET  /api/render-probe/?log=1[&limit=2000]          the log, grouped by id.
//        Needs Authorization: Bearer $RENDER_PROBE_ADMIN_TOKEN; without that
//        variable it answers 404.
//
// The log is a list in Upstash (api/_kv.js), render-probe:events, with the
// last MAX_EVENTS events. It holds IP addresses, thus the list expires
// RETENTION_DAYS after its last write.
//
//   curl -s "https://genezio.com/api/render-probe/?log=1" \
//     -H "Authorization: Bearer $RENDER_PROBE_ADMIN_TOKEN" | jq .

const crypto = require("node:crypto");
const { isConfigured, kv, kvAtomic } = require("./_kv");

const EVENTS_KEY = "render-probe:events";
const MAX_EVENTS = 50000;
const RETENTION_DAYS = 30;
const ID_RE = /^[0-9a-f]{8}$/;
const BEACON_KINDS = new Set(["t0", "d1", "d3", "d5", "d10", "d20"]);
const BOT_UA_RE =
  /bot|crawl|spider|slurp|headless|gpt|oai-|chatgpt|openai|perplexity|claude|anthropic|bing|google-|googleother|bytespider|facebookexternalhit|meta-external|amazon|applebot|duckduck|yandex|baidu|petal|python|curl|wget|node-fetch|undici|axios|go-http|java\/|okhttp|playwright|puppeteer|phantom|selenium|lighthouse/i;
// The request headers that help to tell the clients apart. Cookies are not here.
const LOGGED_HEADERS = [
  "accept-language", "referer", "from", "sec-ch-ua", "sec-ch-ua-platform",
  "sec-fetch-site", "x-vercel-ip-country", "x-vercel-ip-as-number",
];

// The IP ranges that the operators publish for their crawlers and fetchers.
const RANGE_LISTS = {
  "openai-searchbot": "https://openai.com/searchbot.json",
  "openai-chatgpt-user": "https://openai.com/chatgpt-user.json",
  "openai-gptbot": "https://openai.com/gptbot.json",
  "bingbot": "https://www.bing.com/toolbox/bingbot.json",
  "googlebot": "https://developers.google.com/static/search/apis/ipranges/googlebot.json",
  "google-special": "https://developers.google.com/static/search/apis/ipranges/special-crawlers.json",
  "google-user-fetch": "https://developers.google.com/static/search/apis/ipranges/user-triggered-fetchers.json",
  "perplexitybot": "https://www.perplexity.ai/perplexitybot.json",
  "perplexity-user": "https://www.perplexity.ai/perplexity-user.json",
};
const RANGES_TTL_MS = 12 * 3600 * 1000;
let ranges = null; // [{ owner, v6, net, bits }]
let rangesAt = 0;

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const q = req.query || {};

  if (q.log) return showLog(req, res, q);

  const kind = String(q.b || "");
  const id = String(q.id || "");
  if (!BEACON_KINDS.has(kind) || !ID_RE.test(id)) {
    return res.status(400).json({ error: "Malformed beacon" });
  }

  const ua = String(req.headers["user-agent"] || "").slice(0, 500);
  const ip = clientIp(req);
  const fp = fingerprint(req.body);
  const owner = await ipOwner(ip);
  const reasons = [];
  if (BOT_UA_RE.test(ua)) reasons.push("ua");
  if (fp && (fp.webdriver === true || /headless/i.test(String(fp.ua || "")))) reasons.push("automation");
  if (owner) reasons.push("ip");
  // A delayed beacon comes only after a "t0" that was kept, thus it is kept too.
  const watch = reasons.length > 0 || kind !== "t0";

  if (watch) {
    const headers = {};
    for (const name of LOGGED_HEADERS) {
      if (req.headers[name]) headers[name] = String(req.headers[name]).slice(0, 300);
    }
    await record({
      kind, id, path: String(q.p || "").slice(0, 300), at: new Date().toISOString(),
      ua, ip, owner, reasons, fp, headers,
    });
  }
  return res.status(200).json({ watch });
};

async function record(event) {
  if (!isConfigured()) {
    console.warn("[render-probe] KV not configured, event not stored", JSON.stringify(event));
    return;
  }
  try {
    await kvAtomic([
      ["LPUSH", EVENTS_KEY, JSON.stringify(event)],
      ["LTRIM", EVENTS_KEY, 0, MAX_EVENTS - 1],
      ["EXPIRE", EVENTS_KEY, RETENTION_DAYS * 24 * 3600],
    ]);
  } catch (err) {
    console.error("[render-probe] store failed", err);
  }
}

function clientIp(req) {
  const real = req.headers["x-real-ip"];
  if (real) return String(real);
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return forwarded || (req.socket && req.socket.remoteAddress) || null;
}

/** The fingerprint that the page sends, kept small: a beacon body is public input. */
function fingerprint(body) {
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { return null; }
  }
  if (!body || typeof body !== "object") return null;
  const text = JSON.stringify(body);
  return text.length > 2000 ? { truncated: text.slice(0, 2000) } : body;
}

/** The operator whose published crawler range holds the IP, or null. */
async function ipOwner(ip) {
  const parsed = parseIp(ip);
  if (!parsed) return null;
  for (const r of await loadRanges()) {
    if (r.v6 !== parsed.v6) continue;
    const shift = (parsed.v6 ? 128n : 32n) - BigInt(r.bits);
    if ((parsed.n >> shift) === (r.net >> shift)) return r.owner;
  }
  return null;
}

/** The ranges, from memory while they are fresh. A list that fails to load is skipped. */
async function loadRanges() {
  if (ranges && Date.now() - rangesAt < RANGES_TTL_MS) return ranges;
  const lists = await Promise.all(
    Object.entries(RANGE_LISTS).map(async ([owner, url]) => {
      try {
        const resp = await fetch(url, { signal: AbortSignal.timeout(5000) });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        return (data.prefixes || [])
          .map((p) => p.ipv4Prefix || p.ipv6Prefix)
          .filter(Boolean)
          .map((cidr) => {
            const [addr, bits] = cidr.split("/");
            const parsed = parseIp(addr);
            return parsed && { owner, v6: parsed.v6, net: parsed.n, bits: Number(bits) };
          })
          .filter(Boolean);
      } catch (err) {
        console.warn(`[render-probe] range list ${owner} not loaded:`, err.message || err);
        return [];
      }
    }),
  );
  ranges = lists.flat();
  rangesAt = Date.now();
  return ranges;
}

/** An IPv4 or IPv6 address as a BigInt, or null. */
function parseIp(ip) {
  if (!ip) return null;
  ip = String(ip).replace(/^::ffff:(?=\d+\.)/, "");
  if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
    const parts = ip.split(".").map(Number);
    if (parts.some((x) => x > 255)) return null;
    return { v6: false, n: parts.reduce((acc, x) => (acc << 8n) | BigInt(x), 0n) };
  }
  if (!ip.includes(":")) return null;
  const [head, tail] = ip.split("::");
  const h = head ? head.split(":") : [];
  const t = tail ? tail.split(":") : [];
  const groups = tail === undefined ? h : [...h, ...Array(Math.max(0, 8 - h.length - t.length)).fill("0"), ...t];
  if (groups.length !== 8 || groups.some((g) => !/^[0-9a-f]{1,4}$/i.test(g))) return null;
  return { v6: true, n: groups.reduce((acc, g) => (acc << 16n) | BigInt(parseInt(g, 16)), 0n) };
}

async function showLog(req, res, q) {
  if (!authorized(req)) return res.status(404).json({ error: "Not found" });
  if (!isConfigured()) return res.status(503).json({ error: "KV_REST_API_URL / KV_REST_API_TOKEN not set" });
  const limit = Math.min(Math.max(Number(q.limit) || 2000, 1), MAX_EVENTS);
  let events;
  try {
    const raw = await kv("LRANGE", EVENTS_KEY, 0, limit - 1);
    events = raw.map((r) => JSON.parse(r)).reverse();
  } catch (err) {
    console.error("[render-probe] read failed", err);
    return res.status(503).json({ error: String(err.message || err) });
  }

  // One entry per run of a page: who ran it, and the last beacon that came back.
  const byId = {};
  for (const e of events) {
    const run = (byId[e.id] = byId[e.id] || {
      path: e.path, at: e.at, ua: e.ua, ip: e.ip, owner: e.owner,
      reasons: e.reasons, fp: e.fp, kinds: [],
    });
    run.kinds.push(e.kind);
  }
  for (const run of Object.values(byId)) {
    const delays = run.kinds.filter((k) => k[0] === "d").map((k) => Number(k.slice(1)));
    run.lastBeaconSec = delays.length ? Math.max(...delays) : 0;
  }
  return res.status(200).json({ count: events.length, runs: Object.keys(byId).length, byId });
}

function authorized(req) {
  const expected = process.env.RENDER_PROBE_ADMIN_TOKEN;
  if (!expected) return false;
  const given = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  const a = crypto.createHash("sha256").update(given).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}
