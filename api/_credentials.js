// The parts that the functions of the credentials of /certified-geo-expert
// share: the question bank, the scoring, the keys of the store, the URLs and
// the confirmation email.
//
// The store (api/_kv.js) holds, for each credential:
//   geo:cred:<id>          the record (JSON). A pending one expires after
//                          PENDING_TTL; the confirmation makes it permanent.
//   geo:confirm:<token>    the id that the confirmation link activates
//   geo:email:<sha256>     the ids of one address, for revoke and delete
//   geo:scores             a sorted set of the active ids by percent, for the rank
// and the counters of the rate limit, geo:rl:<kind>:<sha256>:<day>.

const crypto = require("node:crypto");

// The page reads the same file, thus the key cannot drift from the questions.
const BANK = require("../new-landing/public/certified-geo-expert/bank.json");

const PENDING_TTL = 7 * 24 * 3600;

// The words of the contact box of the claim form, kept with each consent as its proof.
// Change it here when the page changes.
const CONSENT_TEXT =
  "Genezio may email me with follow-up questions about GEO and how my team works on it.";
const QUIZ_PATH = "/certified-geo-expert/";
const VERIFY_PATH = "/certified-geo-expert/verify/";

const key = {
  cred: (id) => `geo:cred:${id}`,
  confirm: (token) => `geo:confirm:${token}`,
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
 * The origin of the links in the response and the email. SITE_URL wins; the
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

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * The sender of the confirmation email. Resend refuses an address whose domain
 * the account has not verified, thus this takes the address of MAIL_FROM, the
 * one that the emails of the other forms already send from, under the name of
 * the certification. CREDENTIALS_MAIL_FROM overrides both.
 */
function sender() {
  if (process.env.CREDENTIALS_MAIL_FROM) return process.env.CREDENTIALS_MAIL_FROM;
  const shared = process.env.MAIL_FROM || "";
  const match = shared.match(/<([^>]+)>/);
  const address = match ? match[1] : shared.trim() || "notifications@genez.io";
  return `Certified GEO Expert <${address}>`;
}

/**
 * Email the confirmation link with Resend. Gives true when Resend took it.
 * With no RESEND_API_KEY off Vercel, the link goes to the log instead, thus
 * the flow can be driven on a laptop.
 */
async function sendConfirmation({ to, name, id, confirmUrl, contactConsent }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.VERCEL) {
      console.error("[credentials] RESEND_API_KEY not set, no confirmation email");
      return false;
    }
    console.warn(`[credentials] RESEND_API_KEY not set. Confirmation link of ${id}: ${confirmUrl}`);
    return true;
  }
  const privacy = contactConsent
    ? "Your email is not shown on the credential. You agreed that Genezio may email you with follow-up questions; reply to this email to withdraw that, or to recover, revoke or delete the credential."
    : "Your email is not shown on the credential and is not used for marketing. Reply to this email to recover, revoke or delete the credential.";
  const text =
    `Hi ${name},\n\n` +
    `You passed the Certified GEO Expert test. Confirm your email to activate credential ${id}:\n\n` +
    `${confirmUrl}\n\n` +
    `Until you click it, the verification link of the credential shows nothing. ` +
    `The link works for 7 days.\n\n` +
    `If you didn't take the test, ignore this email and nothing will be published.\n\n` +
    `${privacy}\n`;
  const html =
    `<p>Hi ${escapeHtml(name)},</p>` +
    `<p>You passed the Certified GEO Expert test. Confirm your email to activate credential <strong>${escapeHtml(id)}</strong>:</p>` +
    `<p><a href="${escapeHtml(confirmUrl)}" style="display:inline-block;background:#8E2740;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none">Confirm and activate</a></p>` +
    `<p style="color:#55646F">Until you click it, the verification link of the credential shows nothing. The link works for 7 days.</p>` +
    `<p style="color:#55646F">If you didn't take the test, ignore this email and nothing will be published.</p>` +
    `<p style="color:#55646F;font-size:13px">${escapeHtml(privacy)}</p>`;
  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender(),
        to: [to],
        reply_to: process.env.CREDENTIALS_REPLY_TO || "privacy@genezio.com",
        subject: `Confirm your Certified GEO Expert credential (${id})`,
        text,
        html,
      }),
    });
    if (!resp.ok) {
      console.error("[credentials] email send failed", resp.status, await resp.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[credentials] email error", err);
    return false;
  }
}

module.exports = {
  BANK,
  CONSENT_TEXT,
  PENDING_TTL,
  QUIZ_PATH,
  VERIFY_PATH,
  clientIp,
  key,
  newId,
  normalizeId,
  publicView,
  score,
  sendConfirmation,
  sha256,
  siteUrl,
  verifyUrl,
};
