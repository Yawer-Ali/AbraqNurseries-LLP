import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { varieties } from "../data/varieties";

export function ModernVarietiesShowcase() {
  const featured = varieties.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-50 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-honey-50 opacity-40 blur-3xl" />

      <ScrollReveal>
        <div className="container-wide relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">What We Grow</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-600 text-forest-900 leading-tight text-balance font-display">
                Varieties for<br /><span className="italic font-400 text-gradient-green">Kashmir's climate</span>
              </h2>
            </div>
            <Link
              to="/varieties"
              className="group inline-flex items-center gap-2 text-forest-600 font-600 hover:text-forest-800 transition-colors"
            >
              View all varieties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 reveal-stagger">
            {featured.map((v) => (
              <Link key={v.id} to="/varieties" className="block">
                <TiltCard maxTilt={10} scale={1.03} className="rounded-2xl">
                  <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-honey-900/0 via-transparent to-transparent group-hover:from-forest-900/40 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-2.5 py-1 bg-forest-600/80 backdrop-blur-sm text-cream-50 rounded-full text-xs font-600 mb-2">
                        {v.category}
                      </span>
                      <h3 className="text-cream-50 text-lg font-600 font-display">{v.name}</h3>
                      <p className="text-cream-200/70 text-xs mt-1">{v.flavorProfile}</p>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ModernVarietiesShowcase;
