import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";
import { company } from "../data/company";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${company.whatsapp}`;

  return (
    <div
      className={`hidden md:block fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      {expanded && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-2.5rem)] max-w-80 rounded-3xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(11,26,19,0.6)] border border-honey-400/20 animate-scale-in origin-bottom-right">
          <div className="bg-pine-gradient p-6 text-cream-50">
            <div className="flex items-start justify-between">
              <div>
                <span className="eyebrow !text-honey-300 !text-[10px]">Concierge</span>
                <div className="font-display text-2xl mt-2">Chat with us</div>
                <div className="flex items-center gap-2 mt-1 text-xs text-cream-100/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-300" /> Usually replies in minutes
                </div>
              </div>
              <button onClick={() => setExpanded(false)} className="text-cream-100/65 hover:text-cream-50 p-1" aria-label="Close chat">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-cream-50 p-6">
            <p className="text-sm text-charcoal-700/80 leading-relaxed mb-5">
              Have questions about saplings, orchard development, or our services? Send us a WhatsApp message.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lux btn-ink w-full"
            >
              Start WhatsApp Chat <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-forest-900 text-honey-200 border border-honey-400/40 shadow-[0_20px_40px_-15px_rgba(11,26,19,0.7)] hover:bg-forest-700 hover:scale-105 transition-all duration-500"
        aria-label="WhatsApp chat"
        aria-expanded={expanded}
      >
        {!expanded && <span className="absolute inset-0 rounded-full animate-glow-pulse" />}
        {expanded ? <X className="w-6 h-6 relative" /> : <MessageCircle className="w-6 h-6 relative" strokeWidth={1.6} />}
      </button>
    </div>
  );
}

export default FloatingWhatsApp;
