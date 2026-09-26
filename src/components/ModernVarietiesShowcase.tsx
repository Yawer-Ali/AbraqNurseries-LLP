import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { varieties } from "../data/varieties";
import { KashmirDivider } from "./motifs/KashmirMotifs";

/**
 * "What we grow" — apple-first, real photographs only. The high-density apple
 * (the core of the business) leads; the two apple varieties with real photos
 * follow; the rest of the nursery catalogue is listed as text.
 */
export function ModernVarietiesShowcase() {
  const apples = varieties.filter((v) => v.category === "Apple" && v.image);
  const others = varieties.filter((v) => v.category !== "Apple");

  return (
    <section className="py-24 md:py-36 bg-cream-100 relative overflow-hidden">
      <div className="container-wide relative">
        <SectionHeading
          index="02"
          variant="watermark"
          watermark="Apples"
          eyebrow="What We Grow"
          title="Apples first,"
          accent="grown for Kashmir"
          description="High-density apple is what we do best — feathered trees on dwarfing rootstocks, trained on trellis for early, even cropping."
          aside={
            <Link to="/varieties" className="btn-lux btn-ghost-dark">
              View all varieties <ArrowUpRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Feature: high-density apple */}
          <ScrollReveal variant="mask" className="lg:col-span-7">
            <Link to="/services/orchard-development" className="group relative block h-full min-h-[460px] lg:min-h-[640px] rounded-[1.75rem] overflow-hidden img-zoom">
              <img
                src="/images/real/netted-orchard-harvest-1600.webp"
                alt="High-density apple rows heavy with fruit under anti-hail netting"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent" />
              <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full glass-card text-cream-50 text-[10px] font-700 tracking-[0.2em] uppercase">
                Our speciality
              </span>
              <div className="absolute left-6 right-6 bottom-6 md:left-10 md:right-10 md:bottom-10 text-cream-50">
                <h3 className="font-display text-4xl md:text-6xl leading-[1.02]">
                  High-density <span className="serif-italic text-honey-200">apple</span>
                </h3>
                <p className="mt-4 max-w-lg text-cream-100/80 leading-relaxed">
                  Up to 330 trees a kanal on M9 rootstock, with the first commercial crop in the second year.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 link-underline text-sm font-700 text-honey-200">
                  How we build an orchard <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Apple varieties with real photographs */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-6">
            {apples.map((v, i) => (
              <ScrollReveal key={v.id} delay={120 + i * 100}>
                <Link to="/varieties" className="group grid grid-cols-[42%_1fr] lg:grid-cols-[46%_1fr] h-full rounded-[1.5rem] overflow-hidden bg-cream-50 border border-cream-300/80 hover-lift">
                  <div className="relative min-h-[220px] lg:min-h-[300px] img-zoom">
                    <img src={v.image.replace("-1600.webp", "-800.webp")} alt={v.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5 md:p-7 flex flex-col justify-between">
                    <div>
                      <span className="numeral italic text-sm text-honey-700">0{i + 1}</span>
                      <h3 className="mt-2 font-display text-3xl text-forest-900 leading-tight group-hover:text-honey-700 transition-colors duration-500">
                        {v.name}
                      </h3>
                      <p className="mt-1 text-xs text-charcoal-700/70 tracking-wide">{v.flavorProfile}</p>
                      <p className="mt-4 text-sm text-charcoal-700/75 leading-relaxed line-clamp-3">{v.description}</p>
                    </div>
                    <span className="mt-5 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-charcoal-700/70">
                      Harvest · {v.season}
                      <ArrowUpRight className="w-4 h-4 text-forest-900 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* The wider nursery catalogue, as text */}
        <ScrollReveal>
          <div className="mt-14 md:mt-16 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 pt-8 border-t border-cream-300">
            <span className="eyebrow shrink-0">Also from our nursery</span>
            <ul className="flex flex-wrap gap-x-2 gap-y-3">
              {others.map((v) => (
                <li key={v.id}>
                  <Link
                    to="/varieties"
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cream-300 text-forest-900 hover:bg-forest-900 hover:border-forest-900 hover:text-cream-50 transition-all duration-500"
                  >
                    <span className="font-display text-lg leading-none">{v.name}</span>
                    <span className="text-[10px] tracking-[0.16em] uppercase text-charcoal-700/70 group-hover:text-honey-200 transition-colors">{v.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <KashmirDivider className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}

export default ModernVarietiesShowcase;
