import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

export function ModernCaseStudies() {
  const featured = projects.slice(0, 3);
  const [lead, ...rest] = featured;

  return (
    <section className="py-24 md:py-36 bg-cream-50 relative overflow-hidden">
      <div className="container-wide relative">
        <SectionHeading
          index="03"
          accentStyle="underline"
          eyebrow="Our Work"
          title="Projects across"
          accent="Kashmir's districts"
          aside={
            <Link to="/projects" className="btn-lux btn-ghost-dark">
              All projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Lead story */}
          {lead && (
            <ScrollReveal variant="mask" className="lg:col-span-7">
              <Link to="/projects" className="group block">
                <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-[1.75rem] overflow-hidden img-zoom">
                  <img src={lead.image} alt={lead.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/45 to-forest-950/5" />
                  <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full glass-card text-cream-50 text-[10px] font-700 tracking-[0.2em] uppercase">
                    {lead.category}
                  </span>
                  <div className="absolute left-6 right-6 bottom-6 md:left-10 md:right-10 md:bottom-10 text-cream-50">
                    <div className="flex items-center gap-2 text-cream-100/70 text-xs tracking-wide">
                      <MapPin className="w-3.5 h-3.5 text-honey-300" />
                      {lead.location} · {lead.area} · {lead.year}
                    </div>
                    <h3 className="mt-3 font-display text-3xl md:text-5xl font-500 leading-[1.05] max-w-xl">{lead.title}</h3>
                    <p className="mt-4 text-sm text-cream-100/75 leading-relaxed line-clamp-3 max-w-xl hidden sm:block">{lead.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Supporting stories */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-8">
            {rest.map((p, i) => (
              <ScrollReveal key={p.id} delay={150 + i * 120}>
                <Link to="/projects" className="group grid grid-cols-[42%_1fr] sm:grid-cols-[45%_1fr] gap-5 md:gap-6 items-start">
                  <div className="relative aspect-[4/5] rounded-[1.25rem] overflow-hidden img-zoom">
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="pt-1">
                    <span className="numeral italic text-sm text-honey-700">0{i + 2}</span>
                    <span className="block mt-3 text-[10px] font-700 tracking-[0.2em] uppercase text-forest-600">{p.category}</span>
                    <h3 className="mt-2 font-display text-2xl md:text-[1.75rem] font-500 text-forest-900 leading-tight group-hover:text-honey-700 transition-colors duration-500">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1.5 text-charcoal-700/70 text-xs">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{p.location} · {p.area} · {p.year}</span>
                    </div>
                    <p className="mt-3 text-sm text-charcoal-700/70 leading-relaxed line-clamp-3 hidden md:block">{p.description}</p>
                    <span className="mt-4 inline-flex link-underline text-xs font-700 tracking-wide text-forest-800">
                      Read case <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernCaseStudies;
