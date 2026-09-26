import { useState } from "react";
import { MapPin, Check } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import FieldFilms from "../components/FieldFilms";
import ValleyMap from "../components/ValleyMap";
import { projects } from "../data/projects";

const categories = ["All", "Orchard Development", "Nursery Supply", "Plantation Support", "Consulting"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <PageHero
        image="/images/real/aerial-mustard-valley-1600.webp"
        alt="Aerial view of a high-density orchard among mustard fields in Kashmir"
        eyebrow="Our Work"
        title="Orchard projects"
        accent="across J&K"
        description="Real orchards, real results. See how we've helped growers across Kashmir's districts."
      />

      <section className="py-20 md:py-28 bg-cream-50">
        <div className="container-wide">
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap mb-14 md:mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`chip shrink-0 ${filter === cat ? "chip-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div key={filter} className="space-y-20 md:space-y-32">
            {filtered.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <article key={p.id} className="group grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  <ScrollReveal variant="mask" className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[16/11] rounded-[1.75rem] overflow-hidden img-zoom">
                      <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full glass-card text-cream-50 text-[10px] font-700 tracking-[0.2em] uppercase">
                        {p.category}
                      </span>
                      <span className="absolute bottom-5 right-5 numeral italic text-6xl md:text-7xl text-cream-50/80 leading-none drop-shadow">
                        {p.year}
                      </span>
                    </div>
                  </ScrollReveal>
                  <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <ScrollReveal delay={100}>
                      <div className="flex items-center gap-2 text-charcoal-700/70 text-xs tracking-wide">
                        <MapPin className="w-3.5 h-3.5 text-honey-600" />
                        {p.location} · {p.area} · {p.year}
                      </div>
                      <h3 className="mt-4 font-display text-4xl md:text-5xl text-forest-900 leading-[1.02]">{p.title}</h3>
                      <p className="mt-5 text-charcoal-700/70 leading-relaxed">{p.description}</p>
                    </ScrollReveal>
                    <ScrollReveal delay={180}>
                      <div className="mt-8 border-t border-cream-300">
                        {p.results.map((r) => (
                          <div key={r} className="flex items-center gap-3 py-3.5 border-b border-cream-300 text-sm text-forest-900">
                            <span className="w-6 h-6 rounded-full bg-forest-900 text-honey-200 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3" strokeWidth={3} />
                            </span>
                            {r}
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ValleyMap />

      <FieldFilms
        ids={["iQ4BR1uiM1w", "iYQpAF1YaMA", "v6ftyeYwcS0", "am5HgbtafU8", "PPfQXxHmju4"]}
        eyebrow="Filmed on site"
        title="Our orchards,"
        accent="from the air and between the rows"
      />

      <CTASection
        title="Want to be our next success story?"
        subtitle="Let's discuss your land and build an orchard that thrives for generations."
        buttonText="Start Your Project"
      />
    </div>
  );
}
