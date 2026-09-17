import { Link } from "react-router-dom";
import { Sprout, Scissors, Leaf, FlaskConical, Compass, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { services } from "../data/services";

const iconMap: Record<string, typeof Sprout> = {
  sprout: Sprout,
  leaf: Leaf,
  scissors: Scissors,
  flask: FlaskConical,
  compass: Compass,
};

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-forest-100 opacity-30 blur-3xl animate-float-slow" />

      <ScrollReveal>
        <div className="container-wide relative">
          <div className="max-w-2xl mb-14">
            <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">What We Offer</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-600 text-forest-900 leading-tight text-balance font-display">
              Services from<br /><span className="italic font-400 text-gradient-green">the nursery team</span>
            </h2>
            <p className="mt-5 text-charcoal-700/70 text-lg leading-relaxed">
              From turnkey orchard development to a single sapling — we support
              growers, investors, and institutions across Jammu & Kashmir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 reveal-stagger">
            {services.map((s) => {
              const Icon = iconMap[s.icon] ?? Sprout;
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group relative bg-cream-50 rounded-3xl p-7 border border-cream-200 hover:border-forest-300 hover-lift hover-glow transition-all duration-400 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-50/0 to-honey-50/0 group-hover:from-forest-50/40 group-hover:to-honey-50/20 transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-forest-50 text-forest-600 group-hover:bg-forest-600 group-hover:text-cream-50 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                      </span>
                      <ArrowRight className="w-5 h-5 text-cream-300 group-hover:text-forest-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-xl font-600 text-forest-900 mb-2 font-display">{s.shortTitle}</h3>
                    <p className="text-charcoal-700/70 leading-relaxed text-sm">{s.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ServicesGrid;
