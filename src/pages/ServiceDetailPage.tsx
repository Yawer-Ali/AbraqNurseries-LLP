import { useParams, Link, Navigate } from "react-router-dom";
import { Sprout, Scissors, Leaf, FlaskConical, Compass, Check, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import FieldFilms from "../components/FieldFilms";

// Channel films that show each service in practice
const serviceFilms: Record<string, string[]> = {
  "orchard-development": ["267HeSApgXs", "aEgfGYaqJzw", "-a2PhaziAik", "iQ4BR1uiM1w", "v6ftyeYwcS0"],
  "nursery-saplings": ["LL015R8U28k", "EftSQMYWu4c", "pFLWjZgXSFk", "e36xDNf9LTc", "90ZcQGoTFe0"],
  "scientific-plantation": ["PZfOqeoDPZI", "F2O31SxSoXA", "iYQpAF1YaMA", "90ZcQGoTFe0", "PaBA1SsZ0ic"],
  "soil-testing": ["e36xDNf9LTc", "BObJ6rr_VcA", "EftSQMYWu4c", "LL015R8U28k"],
  consulting: ["PZfOqeoDPZI", "F2O31SxSoXA", "PaBA1SsZ0ic", "n3mpeqTXKH4", "coKIJZ7xY4U"],
};
import { services } from "../data/services";

const iconMap: Record<string, typeof Sprout> = {
  sprout: Sprout,
  leaf: Leaf,
  scissors: Scissors,
  flask: FlaskConical,
  compass: Compass,
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] ?? Sprout;
  const currentIndex = services.findIndex((s) => s.id === service.id);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <div>
      <PageHero
        image={service.image}
        alt={service.title}
        eyebrow={service.tagline}
        title={service.title}
        before={
          <div className="flex items-center gap-5">
            <Link to="/services" className="group inline-flex items-center gap-2 text-cream-100/75 hover:text-cream-50 transition-colors text-sm">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All Services
            </Link>
            <span className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-honey-200">
              <Icon className="w-5 h-5" strokeWidth={1.6} />
            </span>
          </div>
        }
      />

      <section className="py-24 md:py-36 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade">
                <span className="eyebrow">Overview</span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <p className="mt-6 font-display text-2xl md:text-[2rem] leading-snug text-forest-900 text-pretty">
                  {service.longDescription}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <h3 className="mt-20 display-md text-forest-900">
                  Our <span className="serif-italic text-honey-600">Process</span>
                </h3>
              </ScrollReveal>
              <ol className="mt-10 relative">
                <span className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-gradient-to-b from-honey-400 via-cream-300 to-transparent" aria-hidden="true" />
                {service.process.map((step, i) => (
                  <ScrollReveal key={step.step} delay={i * 90}>
                    <li className="relative flex gap-6 pb-10">
                      <span className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-forest-900 text-honey-200 numeral text-lg flex-shrink-0 ring-8 ring-cream-50">
                        {i + 1}
                      </span>
                      <div className="pt-1.5">
                        <h4 className="font-display text-2xl text-forest-900">{step.step}</h4>
                        <p className="text-charcoal-700/70 mt-2 leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <ScrollReveal variant="scale">
                  <div className="relative bg-pine-gradient text-cream-50 rounded-[1.75rem] p-7 md:p-9 overflow-hidden">
                    <div className="absolute inset-3 rounded-[1.25rem] border border-honey-400/20 pointer-events-none" />
                    <div className="relative">
                      <h3 className="text-[11px] font-700 tracking-[0.25em] uppercase text-honey-300 font-sans">What's Included</h3>
                      <ul className="mt-6 space-y-4">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-cream-100/85 pb-4 border-b border-cream-50/10 last:border-0 last:pb-0">
                            <Check className="w-4 h-4 text-honey-300 flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-cream-50/15">
                        <div className="text-[10px] font-700 text-cream-200/60 uppercase tracking-[0.25em] mb-2">Pricing</div>
                        <p className="font-display text-xl text-cream-50">{service.pricing}</p>
                      </div>
                      <Link to="/services/book-orchard" className="mt-8 btn-lux btn-gold w-full">
                        Book This Service <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {serviceFilms[service.id] && (
        <FieldFilms
          ids={serviceFilms[service.id]}
          title="See it"
          accent="in our orchards"
          description="Short films from our channel showing this work on the ground."
        />
      )}

      <section className="bg-cream-100 border-t border-cream-300">
        <Link
          to={`/services/${nextService.id}`}
          className="group block container-wide py-14 md:py-20"
        >
          <div className="flex items-center justify-between gap-8">
            <div>
              <div className="eyebrow">Next Service</div>
              <div className="mt-4 display-md text-forest-900 group-hover:text-honey-700 transition-colors duration-500">{nextService.title}</div>
            </div>
            <span className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border border-forest-900/25 flex items-center justify-center group-hover:bg-forest-900 group-hover:text-cream-50 group-hover:border-forest-900 transition-all duration-500">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </section>

      <CTASection />
    </div>
  );
}
