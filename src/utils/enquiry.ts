import { company } from "../data/company";

/**
 * Sends website enquiries two ways:
 *  1. Email — via Web3Forms (free, no server needed). Set VITE_WEB3FORMS_KEY in a
 *     `.env` file (get a key at https://web3forms.com using the inbox that should
 *     receive enquiries). Without a key, email falls back to a pre-filled mailto link.
 *  2. WhatsApp — opens a chat to the company number with the enquiry pre-typed.
 */

/** Bring the success card into view after the (taller) form collapses */
export function revealResult(id: string) {
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" }));
}

export type EnquiryFields = Record<string, string | undefined>;

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export const emailConfigured = Boolean(WEB3FORMS_KEY);

/** Human-readable summary used for both channels */
export function formatEnquiry(title: string, fields: EnquiryFields) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`);
  return `${title}\n\n${lines.join("\n")}`;
}

export function whatsappLink(text: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(subject: string, text: string) {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

/** Posts the enquiry to Web3Forms. Resolves true when the email was accepted. */
export async function sendEnquiryEmail(subject: string, fields: EnquiryFields, replyTo?: string): Promise<boolean> {
  if (!WEB3FORMS_KEY) return false;
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject,
      from_name: "Abraq Nurseries website",
      ...(replyTo ? { replyto: replyTo } : {}),
      ...fields,
    }),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok && data.success !== false;
}

/**
 * Opens WhatsApp immediately (must run inside the click so the browser allows it)
 * and sends the email in the background. Returns the email result.
 */
export async function submitEnquiry(subject: string, fields: EnquiryFields, replyTo?: string) {
  const text = formatEnquiry(subject, fields);
  // (not using the "noopener" feature string: it makes window.open always return null)
  const tab = window.open(whatsappLink(text), "_blank");
  if (tab) tab.opener = null;
  let emailed = false;
  try {
    emailed = await sendEnquiryEmail(subject, fields, replyTo);
  } catch {
    emailed = false;
  }
  return { emailed, whatsappOpened: tab !== null, text };
}
