// Vercel serverless function: /api/website-analysis
// Receives a Website Analyzer submission, validates it, records it (function
// logs), emails the team and pings a Slack channel. Configure via env vars in
// Vercel:
//   RESEND_API_KEY    - Resend API key (https://resend.com) — enables email
//   MAIL_FROM         - verified sender, e.g. "Genezio <notifications@genez.io>"
//   NOTIFY_TO         - optional comma-separated override of email recipients
//   SLACK_WEBHOOK_URL - Slack Incoming Webhook URL for the target channel —
//                       enables the Slack notification (set it to the webhook of
//                       the new channel you create)
// Email and Slack are independent: whichever env vars are set will fire.

const {
  clean,
  isWorkEmail,
  recipients,
  sendEmail,
  sendSlack,
  slackField,
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
  // The same caps as /api/contact-sales. A longer value goes over the limits
  // of Slack and of the subject of an email.
  const domain = clean(body.domain, 200);
  const email = clean(body.email, 200);

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

  // Fire email and Slack notifications independently and best-effort: the
  // visitor always gets a success response as long as the submission is recorded.
  await Promise.allSettled([
    emailTeam({ domain, email, submittedAt }),
    postToSlack({ domain, email, submittedAt }),
  ]);

  return res.status(200).json({ ok: true });
};

function emailTeam({ domain, email, submittedAt }) {
  return sendEmail({
    tag: "website-analysis",
    from: "Genezio Website Analyzer <notifications@genez.io>",
    to: recipients("NOTIFY_TO"),
    replyTo: email,
    subject: `New Website Analyzer request: ${domain}`,
    title: "New Website Analyzer request",
    rows: [
      ["Website", domain],
      ["Work email", email],
      ["Submitted", submittedAt],
    ],
  });
}

function postToSlack({ domain, email, submittedAt }) {
  return sendSlack({
    tag: "website-analysis",
    webhook: process.env.SLACK_WEBHOOK_URL,
    webhookName: "SLACK_WEBHOOK_URL",
    text: `New Website Analyzer request: ${domain} (${email})`,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "🔍 New Website Analyzer request", emoji: true },
      },
      {
        type: "section",
        fields: [slackField("Website", domain), slackField("Work email", email)],
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: `Submitted ${submittedAt}` }],
      },
    ],
  });
}
