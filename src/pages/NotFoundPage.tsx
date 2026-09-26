import { Link } from "react-router-dom";
import { ArrowUpRight, Home } from "lucide-react";
import { ChinarLeaf, KhatambandPattern, RidgeLines } from "../components/motifs/KashmirMotifs";

const suggestions = [
  { label: "Varieties", to: "/varieties" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

/** Branded "lost in the orchard" page for unknown routes. */
export default function NotFoundPage() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-pine-gradient text-cream-50">
      <KhatambandPattern className="text-honey-300/[0.06]" size={52} />
      <RidgeLines className="absolute bottom-0 left-0 h-28 md:h-40 text-honey-300/30" />

      <div className="relative container-wide pt-32 pb-40 text-center">
        <div className="flex items-center justify-center gap-4 text-honey-300 animate-fade-up">
          <span className="h-px w-12 bg-current opacity-60" />
          <ChinarLeaf className="w-7 h-7 animate-float-slow" />
          <span className="h-px w-12 bg-current opacity-60" />
        </div>

        <p className="mt-8 numeral italic text-[7rem] md:text-[11rem] leading-none text-gradient-gold animate-fade-up" style={{ animationDelay: "0.1s" }}>
          404
        </p>
        <h1 className="display-lg mt-4 text-balance animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Lost in the <span className="serif-italic text-gradient-gold">orchard</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-cream-100/75 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          This row doesn’t lead anywhere. The page may have moved, or the address may be mistyped.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/" className="btn-lux btn-gold">
            <Home className="w-4 h-4" /> Back to home
          </Link>
          <Link to="/services/book-orchard" className="btn-lux btn-ghost-light">
            Book an orchard <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <nav aria-label="Popular pages" className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {suggestions.map((s) => (
            <Link key={s.to} to={s.to} className="link-underline text-cream-100/80 hover:text-honey-200 transition-colors">
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
