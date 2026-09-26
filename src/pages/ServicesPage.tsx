import { Link } from "react-router-dom";
import { Sprout, Scissors, Leaf, FlaskConical, Compass, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SoilLabSpectrometer from "../components/SoilLabSpectrometer";
import { ModernBentoFeatures } from "../components/ModernBentoFeatures";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
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
    <div>
      <PageHero
        image="/images/real/net-crew-ladders-1600.webp"
        imagePosition="100% 40%"
        alt="The Abraq team installing anti-hail netting over an orchard"
        eyebrow="Our Services"
        title="Full-cycle orchard"
        accent="support services"
        description="From soil to harvest — everything you need to establish and maintain a productive orchard in Kashmir."
      />

      <section className="py-24 md:py-36 bg-cream-50 overflow-hidden">
        <div className="container-wide space-y-24 md:space-y-36">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sprout;
            const flip = i % 2 === 1;
            return (
              <Link key={s.id} to={`/services/${s.id}`} className="group grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <ScrollReveal
                  variant="mask"
                  className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[16/11] rounded-[1.75rem] overflow-hidden img-zoom">
                    <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
                    <span className="absolute top-5 left-5 w-12 h-12 rounded-full glass-card flex items-center justify-center text-cream-50">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </span>
                  </div>
                </ScrollReveal>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <ScrollReveal delay={100}>
                    {/* Decorative ornament numeral — drawn via CSS so it isn't read or treated as body text */}
                    <span
                      aria-hidden="true"
                      data-num={`0${i + 1}`}
                      className="numeral italic text-7xl md:text-8xl text-honey-500/35 leading-none block select-none before:content-[attr(data-num)]"
                    />
                  </ScrollReveal>
                  <ScrollReveal delay={160}>
                    <span className="eyebrow mt-4">{s.tagline}</span>
                    <h3 className="mt-5 font-display text-4xl md:text-5xl text-forest-900 leading-[1.02] group-hover:text-honey-700 transition-colors duration-500">
                      {s.title}
                    </h3>
                  </ScrollReveal>
                  <ScrollReveal delay={220}>
                    <p className="mt-5 text-charcoal-700/70 leading-relaxed text-base md:text-lg">{s.description}</p>
                    <span className="mt-8 inline-flex items-center gap-4 text-sm font-700 tracking-wide text-forest-900">
                      <span className="w-12 h-12 rounded-full border border-forest-900/25 flex items-center justify-center group-hover:bg-forest-900 group-hover:text-cream-50 group-hover:border-forest-900 transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                      </span>
                      Learn more
                    </span>
                  </ScrollReveal>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ModernBentoFeatures />

      <SoilLabSpectrometer />

      <CTASection
        title="Not sure which service you need?"
        subtitle="Tell us about your land and goals — we'll recommend the right approach."
        buttonText="Get a Free Consultation"
      />
    </div>
  );
}
