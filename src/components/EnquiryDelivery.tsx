import { Check, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { mailtoLink, whatsappLink } from "../utils/enquiry";

export interface DeliveryResult {
  subject: string;
  text: string;
  emailed: boolean;
  whatsappOpened: boolean;
}

/** Success-screen summary of where the enquiry went, with one-tap retries for each channel. */
export function EnquiryDelivery({ result }: { result: DeliveryResult }) {
  const rows = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      done: result.whatsappOpened,
      doneText: "Opened with your message — just tap send",
      href: whatsappLink(result.text),
      cta: result.whatsappOpened ? "Open again" : "Send on WhatsApp",
    },
    {
      icon: Mail,
      label: "Email",
      done: result.emailed,
      doneText: "Delivered to our team",
      href: mailtoLink(result.subject, result.text),
      cta: result.emailed ? null : "Send by email",
    },
  ];

  return (
    <ul className="mt-8 w-full max-w-md mx-auto text-left border-t border-cream-300">
      {rows.map((r) => (
        <li key={r.label} className="flex items-center justify-between gap-4 py-4 border-b border-cream-300">
          <span className="flex items-center gap-3 min-w-0">
            <span
              className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${
                r.done ? "bg-forest-900 text-honey-200" : "border border-cream-300 text-honey-700"
              }`}
            >
              {r.done ? <Check className="w-4 h-4" strokeWidth={2.5} /> : <r.icon className="w-4 h-4" strokeWidth={1.7} />}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-600 text-forest-900">{r.label}</span>
              <span className="block text-xs text-charcoal-700/70">{r.done ? r.doneText : "One tap to send"}</span>
            </span>
          </span>
          {r.cta && (
            <a
              href={r.href}
              target={r.label === "WhatsApp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-xs font-700 text-forest-900 link-underline"
            >
              {r.cta} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default EnquiryDelivery;
