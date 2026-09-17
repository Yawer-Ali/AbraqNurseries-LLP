
import React, { useState, useEffect } from "react";
import { 
  Sprout, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Info,
  Play,
  Pause
} from "lucide-react";
import { Link } from 'react-router-dom';
import { TiltCard } from "./TiltCard";

export const NurseryShowcase: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [stageProgress, setStageProgress] = useState<number>(0);
  const [selectedRootstock, setSelectedRootstock] = useState<"M9" | "MM106" | "MM111">("M9");

  const nurseryStages = [
    {
      id: "mother-block",
      stageNumber: "01",
      title: "Certified Mother Blocks & Layering Beds",
      subtitle: "European Nuclear Stock Clonal Multiplication",
      badge: "DNA Verified",
      image: "/images/nursery/dsc03589.webp",
      description: "Our certified mother stool beds propagate true-to-type Italian M9-T337, MM106, and MM111 clones under strict sanitary containment to ensure zero systemic viral pathogens.",
      specs: [
        "100% Virus-tested (Apple Mosaic, Chlorotic Leaf Spot free)",
        "Organic sawdust layering for dense lateral root initiation",
        "SKUAST-K & Directorate of Horticulture approved progeny",
        "Consistent root collar diameter calibrated at 10–12mm"
      ]
    },
    {
      id: "bench-grafting",
      stageNumber: "02",
      title: "Precision Chip-Budding & Omega Grafting",
      subtitle: "Micro-Surgical Cambium Fusion",
      badge: "99% Graft Take",
      image: "/images/nursery/dsc03608.webp",
      description: "Carried out inside climate-regulated callus tunnels. Certified scion budwood of Gala Schniga, King Roat®, and Red Velox is grafted with perfect cambium alignment.",
      specs: [
        "Omega-cut mechanized grafting ensures 99%+ union success",
        "Degradable photographic tape prevents girdling during rapid spring swell",
        "Scions sourced exclusively from verified high-coloring mother blocks",
        "Zero graft knotting or latent graft incompatibility"
      ]
    },
    {
      id: "feather-training",
      stageNumber: "03",
      title: "2-Year Feathered 'Knip-Boom' Development",
      subtitle: "Pre-Formed Fruiting Lateral Branches",
      badge: "Year-2 Fruiting Guarantee",
      image: "/images/nursery/dsc03616.webp",
      description: "Unlike ordinary 1-year whips, our 2-year knip trees possess 5 to 8 horizontal feathered branches pre-loaded with productive fruit spurs, ensuring a heavy commercial crop in the very 2nd year.",
      specs: [
        "5–8 wide-angle feathered lateral branches (no pruning lag)",
        "Well-developed central leader standing 1.8m to 2.2m tall",
        "Pre-budded floral clusters ready for first-spring blooming",
        "Saves 5 to 7 years compared to traditional Kashmiri seedling trees"
      ]
    },
    {
      id: "sanitization-packing",
      stageNumber: "04",
      title: "Mycorrhizal Root Bath & Moisture-Lock Packing",
      subtitle: "Transplant Shock Immunity",
      badge: "98%+ Field Survival",
      image: "/images/nursery/dsc03638.webp",
      description: "Immediately upon dormant lifting, roots undergo organic antifungal sanitization and are dipped into beneficial mycorrhizal inoculant and hydrogel before breathable jute wrapping.",
      specs: [
        "Beneficial mycorrhizal root inoculation boosts nutrient uptake 300%",
        "Hydrogel moisture coating prevents desiccation during transit",
        "Ventilated packaging designed for immediate planting across Kashmir",
        "Direct orchard delivery in refrigerated vehicles with planting guide"
      ]
    }
  ];

  const rootstocks = {
    M9: {
      name: "M9-T337 (Dwarf)",
      density: "330 Trees / Kanal",
      densityPercent: 95,
      treeHeight: "8 – 9 Feet (No Ladders)",
      firstHarvest: "Year 2 (Immediate Cashflow)",
      speedScore: 98,
      peakYield: "30 – 35 MT / Acre",
      yieldScore: 96,
      subsidy: "Up to 80% under MIDH J&K",
      subsidyScore: 95,
      soilType: "Rich Karewa Loam & Sandy Loam with Drip Fertigation",
      accent: "from-primary to-teal-400"
    },
    MM106: {
      name: "MM106 (Semi-Dwarf)",
      density: "150 – 180 Trees / Kanal",
      densityPercent: 65,
      treeHeight: "12 – 14 Feet",
      firstHarvest: "Year 3",
      speedScore: 75,
      peakYield: "20 – 25 MT / Acre",
      yieldScore: 78,
      subsidy: "50% Govt Approved",
      subsidyScore: 70,
      soilType: "Well-Drained Heavy Loams & Clay Mixes",
      accent: "from-blue-500 to-cyan-400"
    },
    MM111: {
      name: "MM111 (Deep Anchor)",
      density: "80 – 100 Trees / Kanal",
      densityPercent: 40,
      treeHeight: "15 – 18 Feet",
      firstHarvest: "Year 4",
      speedScore: 55,
      peakYield: "15 – 18 MT / Acre",
      yieldScore: 65,
      subsidy: "Standard Horticulture Scheme",
      subsidyScore: 60,
      soilType: "Drought-Prone Karewas & Sloping Foothills",
      accent: "from-purple-500 to-pink-400"
    }
  };

  // Auto-cycle timer with progress bar
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setStageProgress((prev) => {
        if (prev >= 100) {
          setActiveStage((current) => (current + 1) % nurseryStages.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nurseryStages.length]);

  const handleStageSelect = (index: number) => {
    setActiveStage(index);
    setStageProgress(0);
  };

  const currentStage = nurseryStages[activeStage];
  const currentRootstock = rootstocks[selectedRootstock];

  return (
    <section id="nursery" className="ds-section py-24 bg-muted/30 dark:bg-background relative overflow-hidden border-t border-border">
      {/* Dynamic Animated Radiant Orbs */}
      <div className="pointer-events-none absolute top-12 -left-24 w-[650px] h-[650px] bg-accent dark:bg-accent/80 rounded-full blur-[160px] -z-10 animate-float" />
      <div className="pointer-events-none absolute bottom-12 -right-24 w-[600px] h-[600px] bg-teal-500/15 dark:bg-teal-500/10 rounded-full blur-[150px] -z-10 animate-float-reverse" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 dark:bg-primary/15 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-primary/90 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sprout className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: "8s" }} />
            <span>Abraq Certified High-Density Nursery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Scientific Nursery & Rootstock Operations
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
            Take an interactive visual tour through our mother stool layering beds, chip-grafting chambers, and 2-year feathered knip-boom trees engineered for Kashmir.
          </p>

          {/* Winter Booking Live Availability Banner */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/95 dark:bg-alpine-900/90 backdrop-blur-md border border-primary/25 shadow-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-foreground">
              Winter Dormancy Planting Season Bookings Now Open: <strong className="text-primary font-extrabold">M9 Knip Stock 85% Reserved</strong>
            </span>
          </div>
        </div>

        {/* 4-Stage Interactive Nursery Pipeline with Auto-Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left Navigation Steps */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Nursery Execution Stages</span>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-extrabold bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                {isAutoPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
                <span>{isAutoPlaying ? "Pause Tour" : "Auto Play"}</span>
              </button>
            </div>

            {nurseryStages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.id}
                  onClick={() => handleStageSelect(idx)}
                  className={`group relative p-5 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden flex items-start gap-4 ${
                    isSelected
                      ? "bg-card border-emerald-500 shadow-xl shadow-emerald-950/15 translate-x-2 ring-1 ring-emerald-500/30"
                      : "bg-white/60 dark:bg-alpine-900/40 border-border/80 hover:border-primary/25 hover:bg-white dark:hover:bg-alpine-900 hover:translate-x-1"
                  }`}
                >
                  {/* Progress Fill Bar on Active Step */}
                  {isSelected && (
                    <div 
                      className="absolute bottom-0 left-0 top-0 bg-accent/80 transition-all duration-100 ease-linear pointer-events-none"
                      style={{ width: `${stageProgress}%` }}
                    />
                  )}

                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0 transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-secondary text-muted-foreground group-hover:bg-emerald-100 group-hover:text-emerald-800"
                  }`}>
                    {stage.stageNumber}
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className={`font-display font-bold text-sm transition-colors ${isSelected ? "text-foreground" : "text-foreground/80 group-hover:text-zinc-950 dark:group-hover:text-white"}`}>
                        {stage.title}
                      </h3>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 transition-colors ${
                        isSelected 
                          ? "bg-emerald-100 dark:bg-primary/15 text-emerald-800 dark:text-primary/90 border border-emerald-300 dark:border-emerald-700" 
                          : "bg-secondary text-zinc-500"
                      }`}>
                        {stage.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1 font-medium">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Stage Showcase Detail Box with 3D Tilt & Specular Light */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={8} scale={1.01} className="rounded-3xl border-2 border-border bg-white/95 dark:bg-alpine-900/90 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
              {/* Image Preview with Dynamic Zoom */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-6 group border border-border/80 shadow-lg">
                <img
                  src={currentStage.image}
                  alt={currentStage.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md text-white border border-white/25 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                  <span>Stage {currentStage.stageNumber}: {currentStage.badge}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                    {currentStage.title}
                  </h3>
                  <p className="text-xs text-white/90 font-medium mt-1">
                    {currentStage.subtitle}
                  </p>
                </div>
              </div>

              {/* Stage Description & Bullet Specs with Micro-Animations */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal mb-5">
                {currentStage.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {currentStage.specs.map((spec, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50/80 dark:bg-secondary/80 border border-border text-xs font-semibold text-foreground/90 transition-all hover:translate-x-1 hover:border-primary/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Certified Rootstock Spec Matrix with Animated Gauges */}
        <div className="rounded-3xl border border-border bg-white/95 dark:bg-alpine-900/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">
                Rootstock Genetics Selector
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Choose the Ideal Rootstock for Your Kashmiri Soil
              </h3>
            </div>

            {/* Rootstock Selector Pills */}
            <div className="inline-flex p-1.5 rounded-2xl bg-secondary border border-border shadow-inner">
              {(["M9", "MM106", "MM111"] as const).map((rst) => (
                <button
                  key={rst}
                  onClick={() => setSelectedRootstock(rst)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                    selectedRootstock === rst
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "text-muted-foreground hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {rst} Clone
                </button>
              ))}
            </div>
          </div>

          {/* Rootstock Live Spec Grid with Animated Fill Meters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-border flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Orchard Density</p>
                <p className="text-base font-bold text-foreground">{currentRootstock.density}</p>
                <p className="text-[11px] text-muted-foreground mt-1">High spatial light capture</p>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-4 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${currentRootstock.accent} transition-all duration-700 rounded-full`}
                  style={{ width: `${currentRootstock.densityPercent}%` }}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-border flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">First Harvest</p>
                <p className="text-base font-bold text-primary">{currentRootstock.firstHarvest}</p>
                <p className="text-[11px] text-muted-foreground mt-1">vs 8-10 yrs for traditional</p>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-4 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${currentRootstock.accent} transition-all duration-700 rounded-full`}
                  style={{ width: `${currentRootstock.speedScore}%` }}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-border flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Maturity Yield</p>
                <p className="text-base font-bold text-foreground">{currentRootstock.peakYield}</p>
                <p className="text-[11px] text-muted-foreground mt-1">90%+ Grade-A export packout</p>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-4 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${currentRootstock.accent} transition-all duration-700 rounded-full`}
                  style={{ width: `${currentRootstock.yieldScore}%` }}
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-border flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Govt Subsidy</p>
                <p className="text-base font-bold text-amber-600 dark:text-amber-400">{currentRootstock.subsidy}</p>
                <p className="text-[11px] text-muted-foreground mt-1">MIDH & UT schemes</p>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-4 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${currentRootstock.accent} transition-all duration-700 rounded-full`}
                  style={{ width: `${currentRootstock.subsidyScore}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <Info className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Recommended Soil: <strong className="text-foreground">{currentRootstock.soilType}</strong></span>
            </div>

            <Link
              to="/services/book-orchard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-primary dark:hover:bg-emerald-400 text-white dark:text-zinc-950 text-xs font-bold shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Book {selectedRootstock} Saplings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NurseryShowcase;
