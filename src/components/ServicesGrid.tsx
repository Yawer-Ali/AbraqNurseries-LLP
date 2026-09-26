import { useState } from "react";
import { Link } from "react-router-dom";
import { Sprout, Scissors, Leaf, FlaskConical, Compass, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/services";
import { TrellisLines } from "./motifs/KashmirMotifs";

const iconMap: Record<string, typeof Sprout> = {
  sprout: Sprout,
  leaf: Leaf,
  scissors: Scissors,
  flask: FlaskConical,
  compass: Compass,
};

export function ServicesGrid() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-36 bg-pine-gradient text-cream-50 overflow-hidden">
      <TrellisLines className="bottom-0 text-honey-300/[0.09] [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="container-wide relative">
        <SectionHeading
          index="01"
          variant="columns"
          tone="dark"
          eyebrow="What We Offer"
          title="Services from"
          accent="the nursery team"
          description="From turnkey orchard development to a single sapling — we support growers, investors, and institutions across Jammu & Kashmir."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Index list */}
          <ul className="lg:col-span-7 border-t border-cream-50/15">
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <li key={s.id} className="border-b border-cream-50/15">
                  <ScrollReveal delay={i * 70}>
                    <Link
                      to={`/services/${s.id}`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-5 md:gap-8 py-7 md:py-9"
                    >
                      <span
                        className={`absolute left-0 bottom-[-1px] h-px bg-honey-400 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                      <span className={`numeral italic text-sm pt-2 transition-colors duration-500 ${isActive ? "text-honey-300" : "text-cream-50/55"}`}>
                        0{i + 1}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-display text-3xl md:text-[2.6rem] font-500 leading-tight transition-all duration-500 ${
                            isActive ? "text-cream-50 md:translate-x-2" : "text-cream-50/70"
                          }`}
                        >
                          {s.shortTitle}
                        </h3>
                        <p
                          className={`mt-2 text-sm leading-relaxed max-w-lg transition-colors duration-500 ${
                            isActive ? "text-cream-100/70" : "text-cream-100/65"
                          }`}
                        >
                          {s.description}
                        </p>
                        {/* Mobile image */}
                        <div className="lg:hidden mt-5 aspect-[16/9] rounded-xl overflow-hidden">
                          <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </div>
                      <span
                        className={`mt-1 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? "bg-honey-400 border-honey-400 text-forest-950 rotate-0"
                            : "border-cream-50/20 text-cream-50/60 -rotate-45"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </Link>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>

          {/* Crossfading image stage */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-honey-400/20">
                {services.map((s, i) => {
                  const Icon = iconMap[s.icon] ?? Sprout;
                  return (
                    <div
                      key={s.id}
                      className={`absolute inset-0 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"
                      }`}
                    >
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
                      <div className="absolute left-7 right-7 bottom-7 flex items-end justify-between gap-4">
                        <div>
                          <span className="text-[10px] tracking-[0.25em] uppercase text-honey-300">{s.tagline}</span>
                          <p className="font-display text-3xl mt-2">{s.title}</p>
                        </div>
                        <span className="w-12 h-12 shrink-0 rounded-full glass-card flex items-center justify-center text-honey-200">
                          <Icon className="w-5 h-5" strokeWidth={1.6} />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 flex items-center gap-2">
                {services.map((s, i) => (
                  <span
                    key={s.id}
                    className={`h-px transition-all duration-700 ${active === i ? "w-12 bg-honey-400" : "w-5 bg-cream-50/25"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
