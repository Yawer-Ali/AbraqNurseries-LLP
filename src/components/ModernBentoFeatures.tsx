import React from "react";
import { Link } from "react-router-dom";
import {
  Trees,
  Droplets,
  FlaskConical,
  ShieldCheck,
  ArrowUpRight,
  Check,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export const ModernBentoFeatures: React.FC = () => {
  return (
    <section className="ds-section py-24 md:py-36 bg-cream-50 overflow-hidden">
      <div className="ds-container">
        <SectionHeading
          eyebrow="Kashmir High-Density Ecosystem"
          title="Engineered for Precision &"
          accent="High Returns"
          description="Every component of our turnkey orchard packages is scientifically tailored for Kashmiri soils, heavy winter snow loads, and maximum export-grade Mandi packout."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          {/* Card 1: Certified Rootstocks — image-led feature tile */}
          <ScrollReveal variant="mask" className="md:col-span-7 md:row-span-2">
            <div className="group relative h-full min-h-[560px] rounded-[1.75rem] overflow-hidden text-cream-50 img-zoom">
              <img
                src="/images/nursery/dsc03616.webp"
                alt="Rows of feathered high-density apple trees heavy with fruit"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/10" />

              <div className="relative h-full flex flex-col justify-between p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-honey-200">
                    <Trees className="w-5 h-5" strokeWidth={1.6} />
                  </span>
                  <span className="px-4 py-1.5 rounded-full glass-card text-[10px] font-700 tracking-[0.2em] uppercase text-cream-50">
                    Italian Clonal Standard
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-4xl sm:text-5xl font-500 leading-[1.02] max-w-lg">
                    Certified European <span className="serif-italic text-honey-200">M9 Rootstocks</span>
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-cream-100/75 leading-relaxed max-w-xl">
                    Imported directly with viral phytosanitary quarantine clearance. 2-year feathered knip-boom trees pre-loaded with productive fruit spurs for immediate cash flow.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-7">
                    {[
                      "100% Virus-Tested Progeny",
                      "330 Trees per Kanal Density",
                      "Year 2 Commercial Harvest",
                      "Gala Schniga & King Roat®",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-cream-50/90 border-b border-cream-50/15 pb-3">
                        <Check className="w-4 h-4 text-honey-300 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <Link to="/varieties" className="btn-lux btn-gold !py-3">
                      View Cultivar Catalog <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <span className="numeral italic text-honey-200 text-xl">98%+ Field Survival</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Chadoora Soil Lab — ivory tile */}
          <ScrollReveal delay={120} className="md:col-span-5">
            <div className="group relative h-full rounded-[1.75rem] border border-cream-300/80 bg-cream-50 p-7 sm:p-9 flex flex-col justify-between hover-lift hover-glow overflow-hidden">
              <span className="absolute -right-10 -top-10 w-40 h-40 rounded-full border border-honey-400/30 group-hover:scale-125 transition-transform duration-1000" />
              <span className="absolute -right-2 -top-2 w-24 h-24 rounded-full border border-honey-400/20 group-hover:scale-125 transition-transform duration-1000" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-full bg-honey-100 text-honey-700 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5" strokeWidth={1.6} />
                  </span>
                  <span className="text-[10px] font-700 tracking-[0.22em] uppercase text-honey-700">Chadoora Lab</span>
                </div>
                <h3 className="mt-8 font-display text-3xl sm:text-[2.1rem] font-500 text-forest-900 leading-tight">
                  14-Test Soil Chemistry Lab
                </h3>
                <p className="mt-3 text-sm text-charcoal-700/70 leading-relaxed">
                  Our specialized testing facility in Chadoora analyzes NPK, pH, EC, Organic Carbon, and Micronutrients (Zinc, Boron, Calcium) with customized dosage charts.
                </p>
                <div className="mt-6 pt-5 border-t border-cream-300/80 text-xs">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-charcoal-700/70">🔬 Diagnostic Metrics</p>
                  <p className="mt-2 font-600 text-forest-900 leading-relaxed">NPK, pH, EC, Zinc, Boron, Calcium, Magnesium & Organic Carbon</p>
                </div>
              </div>
              <Link to="/services/soil-testing" className="relative mt-8 link-underline text-sm font-700 text-forest-800 self-start">
                Book Soil Lab Diagnostic <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 3: Micro-Drip — pine tile */}
          <ScrollReveal delay={220} className="md:col-span-5">
            <div className="group relative h-full rounded-[1.75rem] bg-forest-900 text-cream-50 p-7 sm:p-9 flex flex-col justify-between hover-lift overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(400px_200px_at_100%_0%,rgba(201,168,106,0.35),transparent)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-full border border-honey-400/40 text-honey-200 flex items-center justify-center">
                    <Droplets className="w-5 h-5" strokeWidth={1.6} />
                  </span>
                  <span className="numeral text-5xl text-honey-200 leading-none">60<span className="text-2xl">%</span></span>
                </div>
                <p className="mt-2 text-right text-[10px] tracking-[0.22em] uppercase text-cream-200/55">Water Saved</p>
                <h3 className="mt-6 font-display text-3xl sm:text-[2.1rem] font-500 leading-tight">
                  Automated Micro-Drip Fertigation
                </h3>
                <p className="mt-3 text-sm text-cream-100/65 leading-relaxed">
                  Rootzone precision irrigation and nutrient injection saves up to 60% water while preventing weed growth in inter-row alleys.
                </p>
              </div>
              <Link to="/services/orchard-development" className="relative mt-8 link-underline text-sm font-700 text-honey-200 self-start">
                Explore Precision Drip Systems <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 4: Trellis & Netting — wide split tile */}
          <ScrollReveal delay={100} className="md:col-span-12">
            <div className="group grid md:grid-cols-12 rounded-[1.75rem] overflow-hidden border border-cream-300/80 bg-cream-50 hover-lift">
              <div className="md:col-span-5 relative min-h-[260px] img-zoom">
                <img
                  src="/images/trellis/dsc08851.webp"
                  alt="Snow-load trellis rows in spring bloom"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream-50/10" />
              </div>
              <div className="md:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-forest-50 text-forest-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" strokeWidth={1.6} />
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-honey-400/50 text-[10px] font-700 tracking-[0.2em] uppercase text-honey-700">
                    Up to 80% MIDH Subsidy
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-500 text-forest-900 leading-[1.05]">
                  Snow-Load Trellis & <span className="serif-italic text-honey-600">Anti-Hail Netting</span>
                </h3>
                <p className="mt-4 text-sm sm:text-base text-charcoal-700/70 leading-relaxed max-w-2xl">
                  Pre-stressed concrete and galvanized GI pipe support systems engineered for heavy winter snowfall. Retractable UV-treated anti-hail safety netting protects 100% of your bumper crop.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-5 pt-6 border-t border-cream-300/80">
                  <p className="text-sm">
                    <span className="font-700 text-forest-900">Govt Subsidy:</span>{" "}
                    <span className="text-honey-700 font-600">Eligible up to 50%–80% MIDH</span>
                  </p>
                  <Link to="/services/orchard-development" className="link-underline text-sm font-700 text-forest-800">
                    Learn More About Trellis & Netting <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ModernBentoFeatures;
