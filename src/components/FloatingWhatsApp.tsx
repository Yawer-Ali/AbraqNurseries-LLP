import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { company } from "../data/company";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${company.phone.replace(/[^0-9]/g, "")}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      {expanded && (
        <div className="absolute bottom-16 right-0 w-72 bg-cream-50 rounded-2xl shadow-2xl border border-cream-200 p-5 animate-scale-in">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-500">
                <MessageCircle className="w-5 h-5 text-cream-50" />
              </span>
              <div>
                <div className="font-600 text-forest-900 text-sm">Chat with us</div>
                <div className="text-xs text-charcoal-700/60">Usually replies in minutes</div>
              </div>
            </div>
            <button onClick={() => setExpanded(false)} className="text-charcoal-700/40 hover:text-charcoal-700 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-charcoal-700/80 mb-4">
            Have questions about saplings, orchard development, or our services? Send us a WhatsApp message.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-forest-600 text-cream-50 rounded-xl font-600 text-sm hover:bg-forest-700 transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-forest-500 text-cream-50 shadow-xl hover:bg-forest-600 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp chat"
      >
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-forest-500 animate-ping opacity-30" />
        )}
        <MessageCircle className="w-7 h-7 relative" strokeWidth={1.8} />
      </button>
    </div>
  );
}

export default FloatingWhatsApp;
