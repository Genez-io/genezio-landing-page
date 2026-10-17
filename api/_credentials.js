// The parts that the functions of the credentials of /certified-geo-expert
// share: the question bank, the scoring, the keys of the store, the URLs and
// the Slack message of a lead.
//
// The store (api/_kv.js) holds, for each credential:
//   geo:cred:<id>          the record (JSON)
//   geo:email:<sha256>     the ids of one address, for revoke and delete
//   geo:scores             a sorted set of the active ids by percent, for the rank
// and the counters of the rate limit, geo:rl:<kind>:<sha256>:<day>.

const crypto = require("node:crypto");
const { sendSlack, slackField } = require("./_notify");

// The page reads the same file, thus the key cannot drift from the questions.
const BANK = require("../new-landing/public/certified-geo-expert/bank.json");

// The words of the contact box of the claim form, kept with each consent as its proof.
// Change it here when the page changes.
const CONSENT_TEXT =
  "Genezio may email me with follow-up questions about GEO and how my team works on it.";
const QUIZ_PATH = "/certified-geo-expert/";
const VERIFY_PATH = "/certified-geo-expert/verify/";

const key = {
  cred: (id) => `geo:cred:${id}`,
  email: (email) => `geo:email:${sha256(email.toLowerCase())}`,
  scores: "geo:scores",
  rate: (kind, value, day) => `geo:rl:${kind}:${sha256(value)}:${day}`,
};

function sha256(value) {
  return crypto.createHash("sha256").update(String(value)).digest("hex");
}

/**
 * Score `answers` ({"<section>.<question>": <option index>}) against the bank.
 * The score that the page sends is never read.
 */
function score(answers) {
  const given = answers && typeof answers === "object" ? answers : {};
  let correct = 0;
  let total = 0;
  const modules = BANK.modules.map((m, i) => {
    let s = 0;
    m.qs.forEach((q, j) => {
      if (Number(given[`${i}.${j}`]) === q.a) s++;
    });
    correct += s;
    total += m.qs.length;
    return { id: m.id, score: s, total: m.qs.length };
  });
  return {
    score: correct,
    total,
    percent: Math.round((correct / total) * 100),
    passed: correct / total >= BANK.pass,
    passPercent: Math.round(BANK.pass * 100),
    modules,
  };
}

// No 0/O, 1/I/L: an id is read off a certificate and typed in.
const ID_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

function newId(year) {
  const bytes = crypto.randomBytes(7);
  let s = "";
  for (const b of bytes) s += ID_ALPHABET[b % ID_ALPHABET.length];
  return `GEO-${year}-${s}`;
}

const ID_SYNTAX = /^GEO-\d{4}-[2-9A-HJKMNP-Z]{7}$/;

function normalizeId(value) {
  const id = String(value || "").trim().toUpperCase();
  return ID_SYNTAX.test(id) ? id : null;
}

/**
 * The origin of the links in the response and the Slack message. SITE_URL wins; the
 * production deployment is genezio.com; a preview uses its own host.
 */
function siteUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/, "");
  if (process.env.VERCEL_ENV === "production") return "https://genezio.com";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const proto = req.headers["x-forwarded-proto"] || (/^localhost|^127\./.test(host) ? "http" : "https");
  return `${proto}://${host}`;
}

function verifyUrl(site, id) {
  return `${site}${VERIFY_PATH}?id=${encodeURIComponent(id)}`;
}

/** What the verification page may show. Never the email. */
function publicView(record) {
  return {
    id: record.id,
    name: record.name,
    company: record.company || "",
    percent: record.percent,
    issued: record.issued,
    status: record.status,
    modules: record.modules,
  };
}

function clientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return forwarded || req.headers["x-real-ip"] || (req.socket && req.socket.remoteAddress) || "unknown";
}

/**
 * Tell the team on Slack about a holder who agreed to be contacted: a lead.
 * Best-effort, as for the other forms: the credential is active either way.
 */
function notifyLead(record, url) {
  const rows = [
    ["Name", record.name],
    ["Email", record.email],
    ["Company", record.company || "—"],
    ["Score", `${record.percent}%`],
    ["Credential", url],
  ];
  return sendSlack({
    tag: "credentials",
    webhook: process.env.SLACK_CERTIFICATION_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL,
    webhookName: "SLACK_CERTIFICATION_WEBHOOK_URL",
    text: `New Certified GEO Expert lead: ${record.name} (${record.email}), ${record.percent}%`,
    blocks: [
      { type: "header", text: { type: "plain_text", text: "🎓 New Certified GEO Expert lead", emoji: true } },
      { type: "section", fields: rows.map(([label, value]) => slackField(label, value)) },
      { type: "context", elements: [{ type: "mrkdwn", text: `Agreed to be contacted with follow-up questions (${record.consentAt}).` }] },
    ],
  });
}

module.exports = {
  BANK,
  CONSENT_TEXT,
  QUIZ_PATH,
  VERIFY_PATH,
  clientIp,
  key,
  newId,
  normalizeId,
  notifyLead,
  publicView,
  score,
  sha256,
  siteUrl,
  verifyUrl,
};
