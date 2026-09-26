import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { company } from "../data/company";

/** Phone-only sticky action bar: Book · Call · WhatsApp. Appears after the first screen. */
export function MobileActionBar() {
  const { pathname } = useLocation();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setShown(window.scrollY > window.innerHeight * 0.6);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  if (pathname === "/services/book-orchard") return null;

  const whatsappUrl = `https://wa.me/${company.whatsapp}`;

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-30 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "translate-y-0" : "translate-y-[130%]"
      }`}
    >
      <nav
        aria-label="Quick actions"
        className="flex items-center gap-2 rounded-full bg-forest-950/90 backdrop-blur-xl border border-honey-400/20 p-1.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]"
      >
        <Link
          to="/services/book-orchard"
          tabIndex={shown ? 0 : -1}
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-br from-honey-300 via-honey-400 to-honey-500 text-forest-950 text-[12px] font-700 tracking-[0.1em] uppercase"
        >
          Book Orchard <ArrowUpRight className="w-4 h-4" />
        </Link>
        <a
          href={`tel:${company.phone}`}
          tabIndex={shown ? 0 : -1}
          aria-label="Call Abraq Nurseries"
          className="w-12 h-12 shrink-0 rounded-full border border-cream-50/20 text-cream-50 flex items-center justify-center"
        >
          <Phone className="w-[18px] h-[18px]" strokeWidth={1.7} />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={shown ? 0 : -1}
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 shrink-0 rounded-full border border-cream-50/20 text-cream-50 flex items-center justify-center"
        >
          <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.7} />
        </a>
      </nav>
    </div>
  );
}

export default MobileActionBar;
