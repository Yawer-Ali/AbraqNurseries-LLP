import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { projects } from "../data/projects";

export function ModernCaseStudies() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-honey-50 opacity-40 blur-3xl" />

      <ScrollReveal>
        <div className="container-wide relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">Our Work</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-600 text-forest-900 leading-tight text-balance font-display">
                Projects across<br /><span className="italic font-400 text-gradient-green">Kashmir's districts</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-forest-600 font-600 hover:text-forest-800 transition-colors"
            >
              All projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {featured.map((p) => (
              <Link key={p.id} to="/projects" className="block">
                <TiltCard maxTilt={6} scale={1.02}>
                  <div className="group rounded-3xl overflow-hidden bg-cream-100 border border-cream-200 hover:shadow-xl transition-all duration-400">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-forest-600/90 backdrop-blur-sm text-cream-50 rounded-full text-xs font-600">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-charcoal-700/50 text-xs mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {p.location} · {p.area} · {p.year}
                      </div>
                      <h3 className="text-lg font-600 text-forest-900 font-display mb-2">{p.title}</h3>
                      <p className="text-sm text-charcoal-700/70 leading-relaxed line-clamp-3">{p.description}</p>
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

export default ModernCaseStudies;
