import { useState } from "react";
import { MapPin, Check } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import { projects } from "../data/projects";

const categories = ["All", "Orchard Development", "Nursery Supply", "Plantation Support", "Consulting"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3019836/pexels-photo-3019836.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Farmer harvesting apples in India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">Our Work</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display text-balance">
              Orchard projects<br /><span className="italic font-400 text-honey-200">across J&K</span>
            </h1>
            <p className="mt-5 text-cream-100/80 text-lg max-w-xl">
              Real orchards, real results. See how we've helped growers across
              Kashmir's districts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-500 transition-all duration-300 ${
                    filter === cat ? "bg-forest-600 text-cream-50" : "bg-cream-100 text-charcoal-700 hover:bg-cream-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="group bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 hover:shadow-xl transition-all duration-400"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-forest-600/90 backdrop-blur-sm text-cream-50 rounded-full text-xs font-600">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-1.5 text-charcoal-700/50 text-xs mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.location} · {p.area} · {p.year}
                    </div>
                    <h3 className="text-xl font-600 text-forest-900 font-display mb-3">{p.title}</h3>
                    <p className="text-sm text-charcoal-700/70 leading-relaxed mb-4">{p.description}</p>
                    <div className="space-y-2">
                      {p.results.map((r) => (
                        <div key={r} className="flex items-center gap-2 text-sm text-charcoal-700">
                          <Check className="w-4 h-4 text-forest-500 flex-shrink-0" strokeWidth={2.5} />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <CTASection
        title="Want to be our next success story?"
        subtitle="Let's discuss your land and build an orchard that thrives for generations."
        buttonText="Start Your Project"
      />
    </div>
  );
}
