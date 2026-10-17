// Vercel serverless function: /api/credentials-confirm
// The second step of the double opt-in of /certified-geo-expert.
//
//   POST /api/credentials-confirm  {"token": "…"}  → {"id", "status": "active"}
//
// The email links to /certified-geo-expert/verify/?confirm=<token>, and that
// page POSTs the token here when the holder clicks its button. A GET link that
// activated by itself would be clicked by the link scanners of mail servers,
// and the confirmation would then prove nothing.
//
// The token stays valid until it expires, thus a second click confirms again
// and gets the same answer.

const { isConfigured, kv, kvAtomic } = require("./_kv");
const { key, siteUrl, verifyUrl } = require("./_credentials");
const { recipients, sendEmail, sendSlack, slackField } = require("./_notify");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const token = String((body && body.token) || "");
  if (!/^[A-Za-z0-9_-]{32}$/.test(token) || !isConfigured()) return expired(res);

  try {
    const id = await kv("GET", key.confirm(token));
    const raw = id ? await kv("GET", key.cred(id)) : null;
    if (!raw) return expired(res);

    const record = JSON.parse(raw);
    if (record.status === "revoked") return expired(res);
    if (record.status === "pending") {
      record.status = "active";
      record.confirmedAt = new Date().toISOString();
      // SET with no EX drops the expiry of the pending record.
      await kvAtomic([
        ["SET", key.cred(id), JSON.stringify(record)],
        ["ZADD", key.scores, record.percent, id],
      ]);
      console.log("[credentials] confirmed", id);
      if (record.contactConsent) await notifyLead(record, verifyUrl(siteUrl(req), id));
    }
    return res.status(200).json({ id, status: "active", url: verifyUrl(siteUrl(req), id) });
  } catch (err) {
    console.error("[credentials] confirm failed", err);
    return res.status(503).json({ error: "The credential service is unavailable. Try again shortly." });
  }
};

// A holder who agreed to be contacted, with a confirmed address: a lead.
// Best-effort, as for the other forms: the credential is active either way.
function notifyLead(record, url) {
  const rows = [
    ["Name", record.name],
    ["Email", record.email],
    ["Company", record.company || "—"],
    ["Score", `${record.percent}%`],
    ["Credential", url],
    ["Consent", `${record.consentText} (${record.consentAt})`],
  ];
  return Promise.allSettled([
    sendEmail({
      tag: "credentials",
      from: "Genezio Certification <notifications@genez.io>",
      to: recipients("CERTIFICATION_NOTIFY_TO"),
      replyTo: record.email,
      subject: `New Certified GEO Expert lead: ${record.company || record.name} (${record.percent}%)`,
      title: "New Certified GEO Expert who agreed to be contacted",
      rows,
    }),
    sendSlack({
      tag: "credentials",
      webhook: process.env.SLACK_CERTIFICATION_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL,
      webhookName: "SLACK_CERTIFICATION_WEBHOOK_URL",
      text: `New Certified GEO Expert lead: ${record.name} (${record.email}), ${record.percent}%`,
      blocks: [
        { type: "header", text: { type: "plain_text", text: "🎓 New Certified GEO Expert lead", emoji: true } },
        { type: "section", fields: rows.slice(0, 5).map(([label, value]) => slackField(label, value)) },
        { type: "context", elements: [{ type: "mrkdwn", text: "Agreed to be contacted with follow-up questions." }] },
      ],
    }),
  ]);
}

function expired(res) {
  return res.status(404).json({
    error: "This confirmation link has expired or was already withdrawn. Take the test again to get a new one.",
  });
}
