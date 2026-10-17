// Vercel serverless function: /api/credentials-admin
// Revoke and delete the credentials of /certified-geo-expert, for the requests
// that reach privacy@genezio.com. Not public: it needs the bearer token
// CREDENTIALS_ADMIN_TOKEN, and without that variable it answers 404.
//
//   POST /api/credentials-admin  Authorization: Bearer <CREDENTIALS_ADMIN_TOKEN>
//     {"action": "get",    "id": "GEO-2026-…"}    the full record, email included
//     {"action": "find",   "email": "a@b.com"}    the records of an address
//     {"action": "revoke", "id": "GEO-2026-…"}    the verification page shows not found
//     {"action": "delete", "id": "GEO-2026-…"}    the record is gone
//     {"action": "delete", "email": "a@b.com"}    every record of the address is gone
//     {"action": "withdraw-consent", "email": "a@b.com"}  no more contact; the credentials stay
//
//   curl -X POST https://genezio.com/api/credentials-admin \
//     -H "Authorization: Bearer $CREDENTIALS_ADMIN_TOKEN" \
//     -H "Content-Type: application/json" -d '{"action":"find","email":"a@b.com"}'

const crypto = require("node:crypto");
const { isConfigured, kv, kvAtomic } = require("./_kv");
const { key, normalizeId } = require("./_credentials");

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!authorized(req)) return res.status(404).json({ error: "Not found" });
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!isConfigured()) return res.status(503).json({ error: "KV_REST_API_URL / KV_REST_API_TOKEN not set" });

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};
  const email = body.email ? String(body.email).trim().toLowerCase() : null;
  const id = body.id ? normalizeId(body.id) : null;
  if (body.id && !id) return res.status(400).json({ error: "Malformed id" });

  try {
    const ids = id ? [id] : email ? await kv("SMEMBERS", key.email(email)) : null;
    if (!ids) return res.status(400).json({ error: "Give an id or an email" });
    const records = (await Promise.all(ids.map((i) => kv("GET", key.cred(i)))))
      .map((raw) => (raw ? JSON.parse(raw) : null))
      .filter(Boolean);

    switch (body.action) {
      case "get":
      case "find":
        return res.status(200).json({ records });

      case "revoke":
        if (!id) return res.status(400).json({ error: "Revoke takes an id" });
        if (!records.length) return res.status(404).json({ error: "No such credential" });
        records[0].status = "revoked";
        records[0].revokedAt = new Date().toISOString();
        await kvAtomic([
          ["SET", key.cred(id), JSON.stringify(records[0]), "KEEPTTL"],
          ["ZREM", key.scores, id],
        ]);
        console.log("[credentials] revoked", id);
        return res.status(200).json({ revoked: id });

      case "delete": {
        const commands = [];
        for (const i of ids) commands.push(["DEL", key.cred(i)], ["ZREM", key.scores, i]);
        for (const r of records) commands.push(["SREM", key.email(r.email), r.id]);
        if (email) commands.push(["DEL", key.email(email)]);
        await kvAtomic(commands);
        // The tokens of the confirmation point at nothing now, and expire on their own.
        console.log("[credentials] deleted", ids.length, "record(s)");
        return res.status(200).json({ deleted: records.map((r) => r.id) });
      }

      case "withdraw-consent": {
        const changed = records.filter((r) => r.contactConsent);
        for (const r of changed) {
          r.contactConsent = false;
          r.consentWithdrawnAt = new Date().toISOString();
        }
        if (changed.length) {
          await kvAtomic(changed.map((r) => ["SET", key.cred(r.id), JSON.stringify(r), "KEEPTTL"]));
        }
        console.log("[credentials] consent withdrawn", changed.length, "record(s)");
        return res.status(200).json({ withdrawn: changed.map((r) => r.id) });
      }

      default:
        return res.status(400).json({ error: "action is one of get, find, revoke, delete, withdraw-consent" });
    }
  } catch (err) {
    console.error("[credentials] admin failed", err);
    return res.status(503).json({ error: String(err.message || err) });
  }
};

function authorized(req) {
  const expected = process.env.CREDENTIALS_ADMIN_TOKEN;
  if (!expected) return false;
  const given = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  const a = crypto.createHash("sha256").update(given).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}
