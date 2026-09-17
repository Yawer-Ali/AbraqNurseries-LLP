import { Link } from "react-router-dom";
import { Sprout, Scissors, Leaf, FlaskConical, Compass, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SoilLabSpectrometer from "../components/SoilLabSpectrometer";
import CTASection from "../components/CTASection";
import { services } from "../data/services";

const iconMap: Record<string, typeof Sprout> = {
  sprout: Sprout,
  leaf: Leaf,
  scissors: Scissors,
  flask: FlaskConical,
  compass: Compass,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7656731/pexels-photo-7656731.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Planting a tree sapling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">Our Services</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display text-balance">
              Full-cycle orchard<br /><span className="italic font-400 text-honey-200">support services</span>
            </h1>
            <p className="mt-5 text-cream-100/80 text-lg max-w-xl">
              From soil to harvest — everything you need to establish and
              maintain a productive orchard in Kashmir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((s, i) => {
                const Icon = iconMap[s.icon] ?? Sprout;
                return (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="group flex flex-col bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 hover:border-forest-200 hover:shadow-xl transition-all duration-400"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-2xl bg-cream-50/90 backdrop-blur-sm text-forest-700">
                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                      </span>
                      <span className="absolute top-4 right-4 text-5xl font-700 font-display text-cream-50/40">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="p-6 md:p-7 flex flex-col flex-1">
                      <span className="text-xs font-600 text-honey-600 uppercase tracking-wide">{s.tagline}</span>
                      <h3 className="mt-2 text-xl font-600 text-forest-900 font-display">{s.title}</h3>
                      <p className="mt-3 text-sm text-charcoal-700/70 leading-relaxed flex-1">{s.description}</p>
                      <div className="mt-5 flex items-center gap-2 text-forest-600 font-600 text-sm group-hover:text-forest-800 transition-colors">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SoilLabSpectrometer />

      <CTASection
        title="Not sure which service you need?"
        subtitle="Tell us about your land and goals — we'll recommend the right approach."
        buttonText="Get a Free Consultation"
      />
    </div>
  );
}
