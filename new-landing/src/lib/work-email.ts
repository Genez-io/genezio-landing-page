/** Consumer inboxes we don't accept for gated reports, work email only. */
export const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "ymail.com",
  "rocketmail.com", "hotmail.com", "hotmail.co.uk", "outlook.com", "live.com",
  "msn.com", "icloud.com", "me.com", "mac.com", "aol.com", "proton.me",
  "protonmail.com", "gmx.com", "gmx.net", "mail.com", "yandex.com", "yandex.ru",
  "zoho.com", "pm.me", "hey.com", "fastmail.com", "tutanota.com", "qq.com",
  "163.com", "126.com", "web.de", "orange.fr", "free.fr",
]);

/** True when the email looks valid and its domain is not a free consumer inbox. */
export function isWorkEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at === -1) return false;
  const domain = email.slice(at + 1).trim().toLowerCase();
  if (!domain || !domain.includes(".")) return false;
  return !FREE_EMAIL_DOMAINS.has(domain);
}
