
import React from "react";
import { Link } from 'react-router-dom';
import { 
  Trees, 
  Droplets, 
  FlaskConical, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers
} from "lucide-react";

export const ModernBentoFeatures: React.FC = () => {
  return (
    <section className="ds-section py-24 border-t border-border bg-background relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/3 -left-20 w-[600px] h-[600px] bg-accent/80 dark:bg-primary/5 rounded-full blur-[160px] -z-10 animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-amber-500/10 dark:bg-[#d4af37]/5 rounded-full blur-[150px] -z-10 animate-float-reverse" />

      <div className="ds-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Kashmir High-Density Ecosystem</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Engineered for Precision & <span className="font-serif italic font-normal text-primary">High Returns</span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed font-medium">
            Every component of our turnkey orchard packages is scientifically tailored for Kashmiri soils, heavy winter snow loads, and maximum export-grade Mandi packout.
          </p>
        </div>

        {/* Asymmetric Luxury Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Certified Rootstocks (7 cols) */}
          <div className="md:col-span-7 rounded-3xl border border-border bg-card dark:bg-card/75 p-8 sm:p-10 flex flex-col justify-between hover-lift relative overflow-hidden group shadow-card dark:shadow-card-dark">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/80 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-accent text-primary flex items-center justify-center border border-primary/20 shadow-xs">
                  <Trees className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-secondary dark:bg-secondary text-foreground text-xs font-bold border border-border">
                  Italian Clonal Standard
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Certified European M9 Rootstocks
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Imported directly with viral phytosanitary quarantine clearance. 2-year feathered knip-boom trees pre-loaded with productive fruit spurs for immediate cash flow.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "100% Virus-Tested Progeny",
                  "330 Trees per Kanal Density",
                  "Year 2 Commercial Harvest",
                  "Gala Schniga & King Roat®"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-foreground/90 p-3 rounded-2xl bg-secondary/60 dark:bg-secondary/70 border border-border/70">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 relative z-10 flex items-center justify-between border-t border-border mt-6">
              <Link
                to="/varieties"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                <span>View Cultivar Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-mono font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                98%+ Field Survival
              </span>
            </div>
          </div>

          {/* Card 2: Chadoora Soil Lab (5 cols) */}
          <div className="md:col-span-5 rounded-3xl border border-border bg-card dark:bg-card/75 p-8 sm:p-10 flex flex-col justify-between hover-lift relative overflow-hidden group shadow-card dark:shadow-card-dark">
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/30 shadow-xs">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-500/20">
                  Chadoora Lab
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-amber-500 transition-colors">
                  14-Test Soil Chemistry Lab
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  Our specialized testing facility in Chadoora analyzes NPK, pH, EC, Organic Carbon, and Micronutrients (Zinc, Boron, Calcium) with customized dosage charts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/80 dark:bg-secondary/80 border border-border text-xs space-y-1">
                <p className="text-muted-foreground font-medium">🔬 Diagnostic Metrics:</p>
                <p className="font-bold text-foreground">NPK, pH, EC, Zinc, Boron, Calcium, Magnesium & Organic Carbon</p>
              </div>
            </div>

            <div className="pt-6 relative z-10 border-t border-border mt-6">
              <Link
                to="/services/soil-testing-lab"
                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1.5"
              >
                <span>Book Soil Lab Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Micro-Drip Fertigation (5 cols) */}
          <div className="md:col-span-5 rounded-3xl border border-border bg-card dark:bg-card/75 p-8 sm:p-10 flex flex-col justify-between hover-lift relative overflow-hidden group shadow-card dark:shadow-card-dark">
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/30 shadow-xs">
                  <Droplets className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-500/20">
                  60% Water Saved
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                  Automated Micro-Drip Fertigation
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  Rootzone precision irrigation and nutrient injection saves up to 60% water while preventing weed growth in inter-row alleys.
                </p>
              </div>
            </div>

            <div className="pt-6 relative z-10 border-t border-border mt-6">
              <Link
                to="/services/micro-drip-irrigation"
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
              >
                <span>Explore Precision Drip Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 4: Trellis & Anti-Hail Netting (7 cols) */}
          <div className="md:col-span-7 rounded-3xl border border-border bg-card dark:bg-card/75 p-8 sm:p-10 flex flex-col justify-between hover-lift relative overflow-hidden group shadow-card dark:shadow-card-dark">
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-500/30 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-accent text-primary text-xs font-bold border border-primary/20">
                  Up to 80% MIDH Subsidy
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-teal-500 transition-colors">
                  Snow-Load Trellis & Anti-Hail Netting
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Pre-stressed concrete and galvanized GI pipe support systems engineered for heavy winter snowfall. Retractable UV-treated anti-hail safety netting protects 100% of your bumper crop.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/80 dark:bg-secondary/80 border border-border flex items-center justify-between text-xs max-w-md">
                <span className="font-bold text-foreground">Govt Subsidy:</span>
                <span className="text-primary font-bold">Eligible up to 50%–80% MIDH</span>
              </div>
            </div>

            <div className="pt-6 relative z-10 border-t border-border mt-6">
              <Link
                to="/services/hail-safety-netting"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
              >
                <span>Learn More About Trellis & Netting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernBentoFeatures;
