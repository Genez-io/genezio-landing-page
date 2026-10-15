// The parts that /api/contact-sales and /api/website-analysis share: the check
// of a work email, and the email (Resend) and the Slack message that tell the
// team about a submission.
//
// Vercel makes no route for a file of api/ whose name starts with `_`, thus
// this file is only a module of the two functions.
//
// The visitor gets a success response when the function log holds the
// submission, also when the email or the Slack message fails. Thus each value
// must be valid for Resend and for Slack before it goes to them: a value that
// they refuse loses the notification, and only the log holds the lead.

const DEFAULT_RECIPIENTS = ["paula@genez.io", "andra.patru@genezio.com"];

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "ymail.com",
  "rocketmail.com", "hotmail.com", "hotmail.co.uk", "outlook.com", "live.com",
  "msn.com", "icloud.com", "me.com", "mac.com", "aol.com", "proton.me",
  "protonmail.com", "gmx.com", "gmx.net", "mail.com", "yandex.com", "yandex.ru",
  "zoho.com", "pm.me", "hey.com", "fastmail.com", "tutanota.com", "qq.com",
  "163.com", "126.com", "web.de", "orange.fr", "free.fr",
]);

// One @, no space, and a dot in the domain. Resend refuses a `reply_to` such
// as "john smith@acme.com" or "a@b@acme.com", and then it sends no email.
const EMAIL_SYNTAX = /^[^\s@<>(),;:"[\]\\]+@[^\s@<>(),;:"[\]\\]+\.[^\s@<>(),;:"[\]\\]+$/;

// The limits of Slack for a text object. Slack refuses the whole message when
// one text is longer.
const SLACK_FIELD_MAX = 2000;
const SLACK_SECTION_MAX = 3000;

function isWorkEmail(email) {
  const value = String(email).trim();
  if (!EMAIL_SYNTAX.test(value)) return false;
  const domain = value.slice(value.lastIndexOf("@") + 1).toLowerCase();
  return !FREE_EMAIL_DOMAINS.has(domain);
}

/** Trim and cap a free-text field, thus one submission cannot flood Slack or the email. */
function clean(value, maxLength) {
  return String(value == null ? "" : value)
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Slack reads <!channel>, <!here> and <url|label> in mrkdwn. A visitor must
// not ping the channel or show a false link, thus the text of a visitor gets
// the escapes of Slack. Then the text is cut to the limit of Slack.
function slackText(value, maxLength) {
  const text = String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  if (text.length <= maxLength) return text;
  // Do not cut an escape in two.
  return `${text.slice(0, maxLength - 1).replace(/&[a-z]*$/, "")}…`;
}

/** A field of a Slack section: a bold label and the value of the visitor. */
function slackField(label, value) {
  const prefix = `*${label}:*\n`;
  return { type: "mrkdwn", text: prefix + slackText(value, SLACK_FIELD_MAX - prefix.length) };
}

/** A section of Slack for a long text of the visitor, such as a message. */
function slackSection(label, value) {
  const prefix = `*${label}:*\n`;
  return {
    type: "section",
    text: { type: "mrkdwn", text: prefix + slackText(value, SLACK_SECTION_MAX - prefix.length) },
  };
}

function recipients(variable) {
  const value = process.env[variable];
  return value ? value.split(",").map((s) => s.trim()).filter(Boolean) : DEFAULT_RECIPIENTS;
}

/**
 * Send an email to the team with Resend. `rows` is a list of [label, value].
 * A missing RESEND_API_KEY skips the email.
 */
async function sendEmail({ tag, from, to, replyTo, subject, title, rows }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(`[${tag}] RESEND_API_KEY not set, email skipped`);
    return;
  }
  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM || from,
        to,
        reply_to: replyTo,
        subject,
        text:
          `${title}\n\n` +
          rows.map(([label, value]) => `${label}: ${value}`).join("\n") +
          `\n`,
        html:
          `<h2 style="margin:0 0 12px">${escapeHtml(title)}</h2>` +
          `<p style="margin:0;line-height:1.6">` +
          rows
            .map(([label, value]) => `<strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}`)
            .join("<br/>") +
          `</p>`,
      }),
    });
    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      console.error(`[${tag}] email send failed`, resp.status, detail);
    }
  } catch (err) {
    console.error(`[${tag}] email error`, err);
  }
}

/** Post a message to a Slack Incoming Webhook. A missing webhook skips it. */
async function sendSlack({ tag, webhook, webhookName, text, blocks }) {
  if (!webhook) {
    console.warn(`[${tag}] ${webhookName} not set, Slack skipped`);
    return;
  }
  try {
    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: slackText(text, SLACK_SECTION_MAX), blocks }),
    });
    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      console.error(`[${tag}] slack post failed`, resp.status, detail);
    }
  } catch (err) {
    console.error(`[${tag}] slack error`, err);
  }
}

module.exports = {
  clean,
  isWorkEmail,
  recipients,
  sendEmail,
  sendSlack,
  slackField,
  slackSection,
};
