
import React, { useState } from "react";
import { 
  Sparkles, 
  FlaskConical, 
  Trees, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Microscope,
  ShieldCheck,
  Droplets,
  Award
} from "lucide-react";
import { Link } from 'react-router-dom';
import { SoilLabSpectrometer } from "./SoilLabSpectrometer";

export const EcosystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"aash" | "ziraat">("aash");

  const workflowSteps = [
    { number: "01", icon: FlaskConical, title: "14-Test Soil Lab", desc: "ZIRAAT™ Chadoora chemical diagnosis", color: "text-amber-500" },
    { number: "02", icon: Trees, title: "Certified M9 Clones", desc: "AASH™ Italian knip rootstocks", color: "text-emerald-500" },
    { number: "03", icon: ShieldCheck, title: "Trellis & Anti-Hail", desc: "Snow-load engineered structural frames", color: "text-blue-500" },
    { number: "04", icon: Droplets, title: "Micro-Drip Fertigation", desc: "Rootzone automated nutrition flow", color: "text-teal-500" },
    { number: "05", icon: Award, title: "90% Grade-A Export", desc: "Peak market realization across India", color: "text-purple-500" }
  ];

  return (
    <section className="ds-section py-24 bg-background relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/80 dark:bg-primary/5 rounded-full blur-[160px] -z-10 animate-pulse-soft" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[150px] -z-10 animate-float" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Abraq Integrated Ecosystem</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Integrated Agritech Initiatives
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
            Discover our two pioneering wings powering Kashmir's modern agriculture from root to harvest.
          </p>

          {/* Tab Switcher with Sleek Glass Pill */}
          <div className="inline-flex p-1.5 rounded-2xl bg-muted/80 backdrop-blur-md border border-border mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab("aash")}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === "aash"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Trees className="w-4 h-4" />
              <span>AASH™ Sustainable Harvests</span>
            </button>

            <button
              onClick={() => setActiveTab("ziraat")}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === "ziraat"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>ZIRAAT™ Plant Nutrition</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content Cards */}
        {activeTab === "aash" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-8 sm:p-12 glass border border-primary/20 shadow-2xl transition-all duration-500">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/80 text-primary text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Turnkey Orchard Architecture
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                AASH™ — Alilals Agrico Sustainable Harvests
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                AASH™ is our flagship orchard establishment initiative that bridges European nursery technology with Kashmiri terroir. We provide end-to-end design, soil leveling, certified viral-free knip plants, and structural GI/concrete trellis frames designed for heavy snow.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Italian M9-T337 certified rootstocks",
                  "Turnkey GI pipe & concrete trellis",
                  "Retractable anti-hail protective netting",
                  "2nd-year commercial crop guarantee"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-foreground/90 p-3 rounded-xl bg-card/90 backdrop-blur-md border border-border/80 shadow-2xs hover:border-primary/50 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/services/book-orchard"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-extrabold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore AASH™ Orchard Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative group">
              <div className="aspect-16/11 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/25">
                <img
                  src="/images/hero/kashmir-orchard-aerial-2.webp"
                  alt="AASH High Density Orchard in Kashmir"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl text-xs max-w-xs transition-transform group-hover:-translate-y-1">
                <p className="font-extrabold text-foreground text-sm">AASH™ Commercial Standard</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">330 trees/kanal with 4x yield increase in Shopian & Pulwama</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-8 sm:p-12 glass border border-amber-500/30 shadow-2xl transition-all duration-500">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                <Microscope className="w-3.5 h-3.5" /> In-House Chemical Lab & Nutrition
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                ZIRAAT™ — Advanced Soil & Plant Nutrition
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                Operating directly out of our Chadoora Laboratory in Budgam, ZIRAAT™ specializes in scientific soil analysis, foliar micro-nutrition charts, bio-fertilizers, and customized calcium/boron fertigation blends to prevent Bitter Pit and boost fruit color.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "14-parameter soil & water analysis",
                  "Digital soil health card with exact NPK",
                  "Chelated Zinc, Boron & Calcium blends",
                  "Zero toxic residue organic bio-stimulants"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-foreground/90 p-3 rounded-xl bg-card/90 backdrop-blur-md border border-border/80 shadow-2xs hover:border-amber-500/50 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/services/book-orchard"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-zinc-950 text-xs sm:text-sm font-extrabold shadow-xl shadow-amber-900/25 hover:shadow-amber-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book ZIRAAT™ Soil Lab Test</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative group">
              <div className="aspect-16/11 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/40">
                <img
                  src="/images/nursery/dsc03589.webp"
                  alt="ZIRAAT Soil Chemistry Laboratory Chadoora"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-amber-500/30 shadow-2xl text-xs max-w-xs transition-transform group-hover:-translate-y-1">
                <p className="font-extrabold text-foreground text-sm">Chadoora Analytical Lab</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">Comprehensive soil chemistry and customized fertilizer prescription charts</p>
              </div>
            </div>
          </div>
        )}

        {/* Integrated 5-Step Process Pipeline */}
        <div className="mt-16 pt-12 border-t border-border/80">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">
              End-to-End Execution Flow
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              How AASH™ & ZIRAAT™ Power Your High-Yield Orchard
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">
                        {step.number}
                      </span>
                      <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${step.color}`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h5 className="font-display font-extrabold text-sm text-foreground mb-1">
                      {step.title}
                    </h5>
                    <p className="text-xs text-muted-foreground font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Soil Lab Spectrometer Simulation */}
        <SoilLabSpectrometer />
      </div>
    </section>
  );
};

export default EcosystemShowcase;
