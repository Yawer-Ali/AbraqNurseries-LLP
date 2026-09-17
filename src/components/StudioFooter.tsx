
import React from "react";
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  Sprout,
  Clock,
  Calculator,
} from "lucide-react";

interface StudioFooterProps {
  onOpenBooking: () => void;
}

export const StudioFooter: React.FC<StudioFooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="border-t border-border bg-card text-foreground pt-20 pb-10 relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="ds-container">
        <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-secondary/80 via-card to-secondary/60 dark:from-card dark:via-background dark:to-card border border-primary/15 mb-16 shadow-card dark:shadow-card-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="ds-badge">
                <Sprout className="w-3.5 h-3.5 text-primary" />
                <span>High-Density Apple Season 2026–2027</span>
              </div>
              <h3 className="ds-heading-lg">
                Transform Your Kashmiri Land into a{" "}
                <span className="font-serif italic font-normal text-primary">High-Yield Orchard</span>
              </h3>
              <p className="ds-body-sm">
                Schedule an on-site survey with our senior horticulturists in Shopian, Pulwama, Baramulla, Anantnag, or Srinagar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <button onClick={onOpenBooking} className="ds-btn-primary ds-shimmer">
                <Phone className="w-4 h-4" />
                <span>Book Free Site Inspection</span>
              </button>
              <Link to="/services/book-orchard" className="ds-btn-outline">
                <Calculator className="w-4 h-4 text-primary" />
                <span>Calculate Cost & Subsidy</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-border">
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-soft transition-transform duration-300 group-hover:scale-105">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-foreground">
                ABRAQ NURSERIES LLP
              </span>
            </Link>
            <p className="ds-body-sm">
              Kashmir&apos;s foremost horticultural biotech enterprise. Certified European M9-T337 rootstocks, snow-resistant trellis engineering, automated drip fertigation, and Chadoora in-house atomic soil chemistry.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>MIDH Govt Subsidy Certified Partner</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <Award className="w-4 h-4 text-copper-500 shrink-0" />
                <span>ISO 9001:2015 · SKUAST-K Aligned Protocols</span>
              </div>
              <p className="text-[11px] text-muted-foreground font-mono font-semibold">
                LLPIN: ACJ-3212 · Est. 2018
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-foreground uppercase tracking-wider text-xs">Platform</h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-medium">
              {[
                { href: "/", label: "High-Density Orchards" },
                { href: "/varieties", label: "Varieties & M9 Rootstock" },
                { href: "/services", label: "Turnkey Services Hub" },
                { href: "/services/book-orchard", label: "Orchard Cost Wizard", highlight: true },
                { href: "/projects", label: "Field Case Studies" },
                { href: "/about", label: "Founding Heritage" },
                { href: "/knowledge", label: "Agronomy Guides" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`hover:text-foreground hover:translate-x-0.5 inline-block transition-all duration-200 ${link.highlight ? "text-primary font-semibold" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-foreground uppercase tracking-wider text-xs">Valley Desks</h4>
            <div className="space-y-3.5 text-xs text-muted-foreground">
              {[
                { icon: MapPin, color: "text-primary", title: "Srinagar Head Office:", address: "56 Murad House, Pine Lane-8, Kursoo Rajbagh, Srinagar - 190008" },
                { icon: MapPin, color: "text-copper-500", title: "Chadoora Soil Testing Lab:", address: "Alamdar Road, Chadoora, Budgam - 191201" },
                { icon: MapPin, color: "text-primary", title: "Pulwama Sub-Office:", address: "Circular Road, Tahab Crossing, Pulwama - 192301" },
              ].map((office) => (
                <div key={office.title}>
                  <p className={`font-semibold text-foreground flex items-center gap-1.5 mb-0.5`}>
                    <office.icon className={`w-3.5 h-3.5 ${office.color}`} />
                    {office.title}
                  </p>
                  <p className="leading-relaxed pl-5 font-medium">{office.address}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-foreground uppercase tracking-wider text-xs">Agronomy Hotline</h4>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:01947961490" className="font-bold text-foreground text-sm hover:text-primary transition-colors">
                  0194-796-1490
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@abraqnurseries.com" className="hover:text-foreground transition-colors font-medium">
                  info@abraqnurseries.com
                </a>
              </p>
              <p className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
              </p>
              <button onClick={onOpenBooking} className="ds-btn-outline w-full ds-btn-sm mt-2">
                <span>Request Agronomist Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-medium">© {new Date().getFullYear()} Abraq Nurseries LLP. All rights reserved. Kashmir, India.</p>
          <div className="flex items-center gap-6 font-medium">
            {["/about", "/varieties", "/services", "/contact"].map((href, i) => (
              <Link key={href} to={href} className="hover:text-foreground transition-colors">
                {["About", "Rootstocks", "Services", "Contact"][i]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StudioFooter;
