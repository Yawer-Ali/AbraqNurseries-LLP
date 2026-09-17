import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, Globe, Send, ArrowRight } from "lucide-react";
import { company } from "../data/company";

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
    <footer className="bg-charcoal-900 text-cream-200/60 pt-16 pb-8">
      <div className="container-wide">
        <div className="grid md:grid-cols-5 gap-10 pb-12 border-b border-cream-200/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-600">
                <Leaf className="w-5 h-5 text-cream-50" strokeWidth={2.2} />
              </span>
              <span className="font-display text-xl font-600 text-cream-50">Abraq Nurseries LLP</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Orchard developers and nursery specialists based in Srinagar, Kashmir.
              Providing certified saplings, scientific plantation support, and turnkey
              orchard development across J&K.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-forest-400 flex-shrink-0 mt-0.5" />
                <span>{company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.state} {company.address.pincode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-forest-400 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="hover:text-honey-200 transition-colors">{company.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-forest-400 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-honey-200 transition-colors">{company.email}</a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[Globe, Send, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-cream-200/5 hover:bg-forest-600 text-cream-200/70 hover:text-cream-50 transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-cream-50 font-600 font-display text-base mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-honey-200 transition-colors duration-300 flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Abraq Nurseries LLP. All rights reserved.</p>
          <p className="text-cream-200/40">Srinagar, Jammu & Kashmir · 190014</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
