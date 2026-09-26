import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Send, ArrowUpRight, ArrowUp } from "lucide-react";
import { company } from "../data/company";
import { Logo } from "./Navbar";
import YouTubeMark from "./youtube/YouTubeMark";
import { ChinarLeaf, KhatambandPattern } from "./motifs/KashmirMotifs";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Varieties", path: "/varieties" },
      { label: "Projects", path: "/projects" },
      { label: "Gallery", path: "/gallery" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Orchard Development", path: "/services/orchard-development" },
      { label: "Nursery & Saplings", path: "/services/nursery-saplings" },
      { label: "Scientific Plantation", path: "/services/scientific-plantation" },
      { label: "Soil Testing", path: "/services/soil-testing" },
      { label: "Consulting", path: "/services/consulting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Hub", path: "/knowledge" },
      { label: "Gallery", path: "/gallery" },
      { label: "Book Orchard", path: "/services/book-orchard" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-pine-gradient text-cream-200/65 overflow-hidden">
      <KhatambandPattern className="text-honey-300/[0.05] [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" size={56} />
      {/* Oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 font-display font-500 leading-none text-[26vw] tracking-tight text-cream-50/[0.035] whitespace-nowrap"
      >
        Abraq
      </div>

      <div className="relative container-wide pt-24 md:pt-32">
        {/* Statement row */}
        <div className="grid lg:grid-cols-12 gap-10 items-end pb-16 md:pb-20 border-b border-honey-400/15">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <ChinarLeaf className="w-6 h-6 text-honey-300/80" />
              <span className="eyebrow !text-honey-300">From the valley</span>
            </div>
            <p className="display-md mt-6 text-cream-50 text-balance">
              Orchards planted today, <span className="serif-italic text-gradient-gold">harvested for generations.</span>
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end flex flex-wrap gap-3">
            <Link to="/services/book-orchard" className="btn-lux btn-gold">
              Book Orchard <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-lux btn-ghost-light">
              Contact
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 py-16 md:py-20">
          <div className="col-span-2 md:col-span-5">
            <Logo tagline />
            <p className="mt-6 text-sm leading-relaxed max-w-sm">
              Orchard developers and nursery specialists based in Srinagar, Kashmir.
              Providing certified saplings, scientific plantation support, and turnkey
              orchard development across J&K.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-honey-400 flex-shrink-0 mt-0.5" />
                <span>{company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.state} {company.address.pincode}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-honey-400 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="link-underline hover:text-cream-50 transition-colors">{company.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-honey-400 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="link-underline hover:text-cream-50 transition-colors">{company.email}</a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <a
                href={company.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 h-11 pl-4 pr-5 rounded-full border border-cream-50/15 text-cream-100/80 hover:bg-honey-400 hover:border-honey-400 hover:text-forest-950 transition-all duration-500 text-xs font-700 tracking-[0.12em] uppercase"
                aria-label="Abraq Nurseries on YouTube"
              >
                <YouTubeMark className="w-4 h-4" /> YouTube
              </a>
              {[Globe, Send, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-cream-50/15 text-cream-200/70 hover:bg-honey-400 hover:border-honey-400 hover:text-forest-950 transition-all duration-500"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title} className="md:col-span-2 last:col-span-2 md:last:col-span-3">
              <h4 className="text-[11px] font-700 tracking-[0.28em] uppercase text-honey-300 mb-6 font-sans">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-2 text-[15px] text-cream-100/70 hover:text-cream-50 transition-colors duration-300"
                    >
                      <span className="w-0 h-px bg-honey-400 transition-all duration-500 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative py-8 pb-28 md:pb-8 border-t border-honey-400/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Abraq Nurseries LLP. All rights reserved.</p>
          <p className="text-cream-200/60">Srinagar, Jammu & Kashmir · 190014</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-cream-100/70 hover:text-honey-200 transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-cream-50/20 flex items-center justify-center group-hover:border-honey-300 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
