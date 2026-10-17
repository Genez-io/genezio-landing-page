// Vercel serverless function: /api/credentials
// The credentials of /certified-geo-expert.
//
//   POST /api/credentials        issue a credential, as `pending`, and email the
//                                confirmation link: the verification page with
//                                ?confirm=<token>, which POSTs it to
//                                api/credentials-confirm.js
//   GET  /api/credentials?id=…   the public record of an active credential, for
//                                /certified-geo-expert/verify/. Never the email.
//
// The answers are scored here against bank.json; the score that the page sends
// is not read. A holder who ticks the optional contact box is a lead: the team
// hears of it once the email is confirmed (api/credentials-confirm.js). The page holds the answers too, thus a determined visitor can
// still post a perfect set: the confirmation of the email and the rate limit
// stop the casual and the bulk cases, and nothing more is attempted.
//
// Configure via env vars in Vercel:
//   KV_REST_API_URL, KV_REST_API_TOKEN - Upstash Redis (the Vercel integration sets them)
//   RESEND_API_KEY                     - sends the confirmation email
//   CREDENTIALS_MAIL_FROM              - optional verified sender of that email
//   CREDENTIALS_REPLY_TO               - optional reply-to (default privacy@genezio.com)
//   SITE_URL                           - optional origin of the links (default: genezio.com
//                                        in production, the request host elsewhere)

const crypto = require("node:crypto");
const { clean, isEmail } = require("./_notify");
const { isConfigured, kv, kvAtomic } = require("./_kv");
const {
  CONSENT_TEXT,
  PENDING_TTL,
  VERIFY_PATH,
  clientIp,
  key,
  newId,
  normalizeId,
  publicView,
  score,
  sendConfirmation,
  siteUrl,
  verifyUrl,
} = require("./_credentials");

// Issuances per day. A retake that passes again is a new credential, thus the
// limit of an address is a few, not one.
const LIMIT_PER_IP = 10;
const LIMIT_PER_EMAIL = 3;
// The rank is shown once it says something.
const RANK_MIN_HOLDERS = 25;

module.exports = async function handler(req, res) {
  if (req.method === "GET" || req.method === "HEAD") return lookup(req, res);
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    return res.status(204).end();
  }
  if (req.method === "POST") return issue(req, res);
  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ error: "Method not allowed" });
};

async function lookup(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const id = normalizeId(req.query && req.query.id);
  if (!id || !isConfigured()) return notFound(res);

  let record = null;
  try {
    const raw = await kv("GET", key.cred(id));
    record = raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("[credentials] lookup failed", err);
    res.setHeader("Cache-Control", "no-store");
    return res.status(503).json({ error: "The credential service is unavailable. Try again shortly." });
  }
  if (!record || record.status !== "active") return notFound(res);

  // A revocation reaches every visitor within a minute.
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=60");
  return res.status(200).json(publicView(record));
}

function notFound(res) {
  // Not cached: a pending credential becomes active when its link is clicked.
  res.setHeader("Cache-Control", "no-store");
  return res.status(404).json({ status: "not_found" });
}

async function issue(req, res) {
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const name = clean(body.name, 100).replace(/\s+/g, " ");
  const email = clean(body.email, 200).toLowerCase();
  const company = clean(body.company, 120).replace(/\s+/g, " ");
  // Only an explicit true: the box on the page is optional and starts unticked.
  const contactConsent = body.contactConsent === true;

  if (name.length < 2) {
    return res.status(400).json({ error: "Enter the name you want on the credential." });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: "That email doesn't look right." });
  }

  const result = score(body.answers);
  if (!result.passed) {
    return res.status(422).json({
      error: `That's ${result.percent}%. You need ${result.passPercent}% to certify.`,
      percent: result.percent,
    });
  }

  if (!isConfigured()) {
    console.error("[credentials] KV_REST_API_URL / KV_REST_API_TOKEN not set");
    return res.status(503).json({ error: "The credential service isn't available right now. Try again later." });
  }

  const now = new Date();
  const day = now.toISOString().slice(0, 10).replace(/-/g, "");
  try {
    const [byIp, , byEmail] = await kvAtomic([
      ["INCR", key.rate("ip", clientIp(req), day)],
      ["EXPIRE", key.rate("ip", clientIp(req), day), 2 * 86400],
      ["INCR", key.rate("email", email, day)],
      ["EXPIRE", key.rate("email", email, day), 2 * 86400],
    ]);
    if (byIp > LIMIT_PER_IP || byEmail > LIMIT_PER_EMAIL) {
      return res.status(429).json({ error: "Too many credentials issued today from here. Try again tomorrow." });
    }

    const record = {
      name,
      email,
      company,
      score: result.score,
      total: result.total,
      percent: result.percent,
      modules: result.modules,
      issued: now.toISOString().slice(0, 10),
      status: "pending",
      createdAt: now.toISOString(),
      contactConsent,
      ...(contactConsent ? { consentAt: now.toISOString(), consentText: CONSENT_TEXT } : {}),
    };

    // A collision of ids is next to impossible; NX makes it harmless.
    let id = null;
    for (let attempt = 0; attempt < 3 && !id; attempt++) {
      const candidate = newId(now.getUTCFullYear());
      const ok = await kv("SET", key.cred(candidate), JSON.stringify({ id: candidate, ...record }), "EX", PENDING_TTL, "NX");
      if (ok === "OK") id = candidate;
    }
    if (!id) throw new Error("no free id");

    const token = crypto.randomBytes(24).toString("base64url");
    await kvAtomic([
      ["SET", key.confirm(token), id, "EX", PENDING_TTL],
      ["SADD", key.email(email), id],
    ]);

    const site = siteUrl(req);
    const confirmUrl = `${site}${VERIFY_PATH}?confirm=${token}`;
    const sent = await sendConfirmation({ to: email, name, id, confirmUrl, contactConsent });
    if (!sent) {
      // A failed email issued nothing, thus it does not count against the limit.
      await kvAtomic([
        ["DEL", key.cred(id)],
        ["DEL", key.confirm(token)],
        ["SREM", key.email(email), id],
        ["DECR", key.rate("ip", clientIp(req), day)],
        ["DECR", key.rate("email", email, day)],
      ]).catch(() => {});
      return res.status(502).json({
        error: "We couldn't send the confirmation email just now. Your answers are saved here; try again in a few minutes.",
      });
    }

    console.log("[credentials] issued", JSON.stringify({ id, percent: result.percent, issued: record.issued }));

    const response = { id, url: verifyUrl(site, id), status: "pending" };
    const rank = await rankText(result.percent).catch(() => null);
    if (rank) response.rank = rank;
    return res.status(201).json(response);
  } catch (err) {
    console.error("[credentials] issue failed", err);
    return res.status(503).json({ error: "The credential service isn't available right now. Try again later." });
  }
}

/** "Top 12% of 1,284 people certified so far.", from the active credentials. */
async function rankText(percent) {
  const [holders, above] = await kvAtomic([
    ["ZCARD", key.scores],
    ["ZCOUNT", key.scores, `(${percent}`, "+inf"],
  ]);
  if (holders < RANK_MIN_HOLDERS) return null;
  const top = Math.max(1, Math.ceil(((above + 1) / (holders + 1)) * 100));
  return `Top ${top}% of ${holders.toLocaleString("en-US")} people certified so far.`;
}
