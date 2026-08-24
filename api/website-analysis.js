// Vercel serverless function: /api/website-analysis
// Receives a Website Analyzer submission, validates it, records it (function
// logs) and emails the team. Configure email via env vars in Vercel:
//   RESEND_API_KEY   - Resend API key (https://resend.com)
//   MAIL_FROM        - verified sender, e.g. "Genezio <notifications@genez.io>"
//   NOTIFY_TO        - optional comma-separated override of recipients

const DEFAULT_RECIPIENTS = ["paula@genez.io", "andra.patru@genezio.com"];

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "ymail.com",
  "rocketmail.com", "hotmail.com", "hotmail.co.uk", "outlook.com", "live.com",
  "msn.com", "icloud.com", "me.com", "mac.com", "aol.com", "proton.me",
  "protonmail.com", "gmx.com", "gmx.net", "mail.com", "yandex.com", "yandex.ru",
  "zoho.com", "pm.me", "hey.com", "fastmail.com", "tutanota.com", "qq.com",
  "163.com", "126.com", "web.de", "orange.fr", "free.fr",
]);

function isWorkEmail(email) {
  const at = String(email).lastIndexOf("@");
  if (at === -1) return false;
  const domain = String(email).slice(at + 1).trim().toLowerCase();
  if (!domain || !domain.includes(".")) return false;
  return !FREE_EMAIL_DOMAINS.has(domain);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const domain = (body && body.domain ? String(body.domain) : "").trim();
  const email = (body && body.email ? String(body.email) : "").trim();

  if (!domain || !email) {
    return res.status(400).json({ error: "Please enter your website and work email." });
  }
  if (!isWorkEmail(email)) {
    return res.status(422).json({
      error: "Please use your work email. Free inboxes like Gmail or Outlook aren't accepted.",
    });
  }

  const submittedAt = new Date().toISOString();
  // Record the submission in the function logs (queryable in Vercel).
  console.log("[website-analysis] submission", JSON.stringify({ domain, email, submittedAt }));

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM || "Genezio Website Analyzer <notifications@genez.io>";
  const to = (process.env.NOTIFY_TO
    ? process.env.NOTIFY_TO.split(",").map((s) => s.trim()).filter(Boolean)
    : DEFAULT_RECIPIENTS);

  if (!apiKey) {
    // No email provider configured yet: the submission is still recorded above.
    console.warn("[website-analysis] RESEND_API_KEY not set, email skipped");
    return res.status(202).json({ ok: true });
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New Website Analyzer request: ${domain}`,
        text:
          `New Website Analyzer submission\n\n` +
          `Website: ${domain}\n` +
          `Work email: ${email}\n` +
          `Submitted: ${submittedAt}\n`,
        html:
          `<h2 style="margin:0 0 12px">New Website Analyzer request</h2>` +
          `<p style="margin:0;line-height:1.6">` +
          `<strong>Website:</strong> ${escapeHtml(domain)}<br/>` +
          `<strong>Work email:</strong> ${escapeHtml(email)}<br/>` +
          `<strong>Submitted:</strong> ${submittedAt}` +
          `</p>`,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      console.error("[website-analysis] email send failed", resp.status, detail);
      // The submission is recorded; report success to the visitor either way.
      return res.status(200).json({ ok: true });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[website-analysis] error", err);
    return res.status(200).json({ ok: true });
  }
};
