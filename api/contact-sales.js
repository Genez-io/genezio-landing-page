// Vercel serverless function: /api/contact-sales
// Receives a "Contact sales" submission from /contact-sales, validates it,
// records it (function logs), emails the team and pings the dedicated Slack
// channel (#contact-sales). Configure via env vars in Vercel:
//   RESEND_API_KEY                  - Resend API key (https://resend.com) — enables email
//   MAIL_FROM                       - verified sender, e.g. "Genezio <notifications@genez.io>"
//   CONTACT_SALES_NOTIFY_TO         - optional comma-separated override of email recipients
//   SLACK_CONTACT_SALES_WEBHOOK_URL - Slack Incoming Webhook for #contact-sales
//                                     (falls back to SLACK_WEBHOOK_URL if unset)
// Email and Slack are independent: whichever env vars are set will fire.

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

/** Trim and cap a free-text field so one submission can't flood Slack/email. */
function clean(value, maxLength) {
  return String(value == null ? "" : value)
    .trim()
    .slice(0, maxLength);
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
  body = body || {};

  const submission = {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    email: clean(body.email, 200),
    companyName: clean(body.companyName, 200),
    companyRevenue: clean(body.companyRevenue, 100),
    phone: clean(body.phone, 40),
    heardAbout: clean(body.heardAbout, 100),
    message: clean(body.message, 4000),
  };

  if (
    !submission.firstName ||
    !submission.lastName ||
    !submission.email ||
    !submission.companyName ||
    !submission.companyRevenue
  ) {
    return res.status(400).json({
      error: "Please fill in your name, work email, company name and company revenue.",
    });
  }
  if (!isWorkEmail(submission.email)) {
    return res.status(422).json({
      error: "Please use your work email. Free inboxes like Gmail or Outlook aren't accepted.",
    });
  }

  const submittedAt = new Date().toISOString();
  // Record the submission in the function logs (queryable in Vercel).
  console.log("[contact-sales] submission", JSON.stringify({ ...submission, submittedAt }));

  // Fire email and Slack notifications independently and best-effort: the
  // visitor always gets a success response as long as the submission is recorded.
  await Promise.allSettled([
    sendEmail({ ...submission, submittedAt }),
    sendSlack({ ...submission, submittedAt }),
  ]);

  return res.status(200).json({ ok: true });
};

async function sendEmail(lead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact-sales] RESEND_API_KEY not set, email skipped");
    return;
  }
  const from = process.env.MAIL_FROM || "Genezio Contact Sales <notifications@genez.io>";
  const to = (process.env.CONTACT_SALES_NOTIFY_TO
    ? process.env.CONTACT_SALES_NOTIFY_TO.split(",").map((s) => s.trim()).filter(Boolean)
    : DEFAULT_RECIPIENTS);

  const fullName = `${lead.firstName} ${lead.lastName}`;
  const rows = [
    ["Name", fullName],
    ["Work email", lead.email],
    ["Company", lead.companyName],
    ["Company revenue", lead.companyRevenue],
    ["Phone", lead.phone || "—"],
    ["Heard about us", lead.heardAbout || "—"],
    ["How can we help", lead.message || "—"],
    ["Submitted", lead.submittedAt],
  ];

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
        reply_to: lead.email,
        subject: `New Contact sales request: ${lead.companyName} (${fullName})`,
        text:
          `New Contact sales submission\n\n` +
          rows.map(([label, value]) => `${label}: ${value}`).join("\n") +
          `\n`,
        html:
          `<h2 style="margin:0 0 12px">New Contact sales request</h2>` +
          `<p style="margin:0;line-height:1.6">` +
          rows
            .map(
              ([label, value]) =>
                `<strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}`
            )
            .join("<br/>") +
          `</p>`,
      }),
    });
    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      console.error("[contact-sales] email send failed", resp.status, detail);
    }
  } catch (err) {
    console.error("[contact-sales] email error", err);
  }
}

async function sendSlack(lead) {
  const webhook =
    process.env.SLACK_CONTACT_SALES_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[contact-sales] SLACK_CONTACT_SALES_WEBHOOK_URL not set, Slack skipped");
    return;
  }

  const fullName = `${lead.firstName} ${lead.lastName}`;
  const blocks = [
    {
      type: "header",
      text: { type: "plain_text", text: "💬 New Contact sales request", emoji: true },
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Name:*\n${fullName}` },
        { type: "mrkdwn", text: `*Work email:*\n${lead.email}` },
        { type: "mrkdwn", text: `*Company:*\n${lead.companyName}` },
        { type: "mrkdwn", text: `*Company revenue:*\n${lead.companyRevenue}` },
        { type: "mrkdwn", text: `*Phone:*\n${lead.phone || "—"}` },
        { type: "mrkdwn", text: `*Heard about us:*\n${lead.heardAbout || "—"}` },
      ],
    },
  ];

  if (lead.message) {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*How can we help:*\n${lead.message}` },
    });
  }

  blocks.push({
    type: "context",
    elements: [{ type: "mrkdwn", text: `Submitted ${lead.submittedAt}` }],
  });

  try {
    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `New Contact sales request: ${lead.companyName} — ${fullName} (${lead.email})`,
        blocks,
      }),
    });
    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      console.error("[contact-sales] slack post failed", resp.status, detail);
    }
  } catch (err) {
    console.error("[contact-sales] slack error", err);
  }
}
