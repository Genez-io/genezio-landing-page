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

const {
  clean,
  isWorkEmail,
  recipients,
  sendEmail,
  sendSlack,
  slackField,
  slackSection,
} = require("./_notify");

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
    emailTeam({ ...submission, submittedAt }),
    postToSlack({ ...submission, submittedAt }),
  ]);

  return res.status(200).json({ ok: true });
};

function emailTeam(lead) {
  const fullName = `${lead.firstName} ${lead.lastName}`;
  return sendEmail({
    tag: "contact-sales",
    from: "Genezio Contact Sales <notifications@genez.io>",
    to: recipients("CONTACT_SALES_NOTIFY_TO"),
    replyTo: lead.email,
    subject: `New Contact sales request: ${lead.companyName} (${fullName})`,
    title: "New Contact sales request",
    rows: [
      ["Name", fullName],
      ["Work email", lead.email],
      ["Company", lead.companyName],
      ["Company revenue", lead.companyRevenue],
      ["Phone", lead.phone || "—"],
      ["Heard about us", lead.heardAbout || "—"],
      ["How can we help", lead.message || "—"],
      ["Submitted", lead.submittedAt],
    ],
  });
}

function postToSlack(lead) {
  const fullName = `${lead.firstName} ${lead.lastName}`;
  const blocks = [
    {
      type: "header",
      text: { type: "plain_text", text: "💬 New Contact sales request", emoji: true },
    },
    {
      type: "section",
      fields: [
        slackField("Name", fullName),
        slackField("Work email", lead.email),
        slackField("Company", lead.companyName),
        slackField("Company revenue", lead.companyRevenue),
        slackField("Phone", lead.phone || "—"),
        slackField("Heard about us", lead.heardAbout || "—"),
      ],
    },
  ];

  if (lead.message) blocks.push(slackSection("How can we help", lead.message));

  blocks.push({
    type: "context",
    elements: [{ type: "mrkdwn", text: `Submitted ${lead.submittedAt}` }],
  });

  return sendSlack({
    tag: "contact-sales",
    webhook: process.env.SLACK_CONTACT_SALES_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL,
    webhookName: "SLACK_CONTACT_SALES_WEBHOOK_URL",
    text: `New Contact sales request: ${lead.companyName} — ${fullName} (${lead.email})`,
    blocks,
  });
}
