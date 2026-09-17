
import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  Sparkles, 
  MoveHorizontal, 
  Check, 
  X, 
  Trees, 
  Droplets, 
  ShieldCheck, 
  FlaskConical,
  Award,
  Play,
  Pause,
  TrendingUp
} from "lucide-react";

interface TransformationScenario {
  id: string;
  category: string;
  tabLabel: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeTitle: string;
  afterTitle: string;
  metrics: {
    label: string;
    beforeVal: string;
    afterVal: string;
    improvement: string;
    progressPercentage: number;
  }[];
  beforePoints: string[];
  afterPoints: string[];
}

export const MultiProductBeforeAfter: React.FC = () => {
  const scenarios: TransformationScenario[] = [
    {
      id: "orchard-density",
      category: "Turnkey Architecture",
      tabLabel: "Orchard Density & Trellis",
      icon: Trees,
      title: "Traditional Seedling vs. M9 High-Density Trellis",
      subtitle: "Experience the monumental shift from low-density 25-tree spacing to 330 certified knip trees per kanal.",
      beforeImage: "/images/hero/kashmir-orchard-aerial-4.webp",
      afterImage: "/images/hero/kashmir-orchard-aerial-1.webp",
      beforeTitle: "Traditional Seedling Orchard",
      afterTitle: "Abraq M9 High-Density Trellis",
      metrics: [
        { label: "Plant Density", beforeVal: "25-30 Trees/Kanal", afterVal: "330 Trees/Kanal", improvement: "11x Density", progressPercentage: 92 },
        { label: "First Commercial Crop", beforeVal: "8 – 10 Years", afterVal: "Year 2", improvement: "4x Faster ROI", progressPercentage: 80 },
        { label: "Maturity Yield", beforeVal: "6-8 MT / Acre", afterVal: "30-35 MT / Acre", improvement: "5x Higher Yield", progressPercentage: 88 }
      ],
      beforePoints: [
        "Uncontrolled canopy height (20+ ft) requiring dangerous ladder work",
        "8 to 10 years of zero cashflow while trees mature",
        "Lower branches heavily shaded leading to green/yellow pale fruit",
        "Vulnerable to heavy Kashmir snowfall branch breakage"
      ],
      afterPoints: [
        "Uniform 9-foot tall spindle canopy accessible without high ladders",
        "Commercial fruiting starts in Year 2, full peak by Year 4",
        "360-degree sunlight penetration ensuring 100% full crimson color",
        "Galvanized iron & concrete trellis engineered for Kashmir snow load"
      ]
    },
    {
      id: "irrigation-system",
      category: "Water & Nutrients",
      tabLabel: "Micro-Drip vs Flood",
      icon: Droplets,
      title: "Flood Irrigation vs. Automated Root Drip",
      subtitle: "Eliminate water stress and nutrient leaching with targeted rootzone fertigation.",
      beforeImage: "/images/hero/kashmir-orchard-aerial-3.webp",
      afterImage: "/images/trellis/dsc08911.webp",
      beforeTitle: "Conventional Flood Irrigation",
      afterTitle: "Automated Micro-Drip Fertigation",
      metrics: [
        { label: "Water Efficiency", beforeVal: "35% Absorbed (65% Loss)", afterVal: "95% Direct to Roots", improvement: "60% Water Saved", progressPercentage: 95 },
        { label: "Fertilizer Waste", beforeVal: "High Runoff / Leaching", afterVal: "Zero Waste (Venturi)", improvement: "40% Fertilizer Saved", progressPercentage: 85 },
        { label: "Bitter Pit Incidence", beforeVal: "18% - 25% Defective", afterVal: "< 2% Controlled", improvement: "90% Reduction", progressPercentage: 90 }
      ],
      beforePoints: [
        "Severe cycles of waterlogging followed by drought stress",
        "High fertilizer runoff polluting local streams and groundwater",
        "Massive weed proliferation in alleys between tree rows",
        "Irregular calcium uptake causing Bitter Pit skin corking"
      ],
      afterPoints: [
        "Pressure-compensating emitters deliver precise 2.2 L/hr directly at roots",
        "Venturi injector blends soluble NPK & Calcium directly into water flow",
        "Zero weed growth in inter-row pathways, saving weedicide costs",
        "Consistent soil moisture tension preventing fruit cracking"
      ]
    },
    {
      id: "fruit-grading",
      category: "Market Value",
      tabLabel: "Fruit Packout & Grading",
      icon: Award,
      title: "Traditional Blemished Crop vs. Export Grade-A Packout",
      subtitle: "How high-density Italian clones command top-tier rates in Azadpur Mandi Delhi & Mumbai wholesale.",
      beforeImage: "/images/varieties/ziola.webp",
      afterImage: "/images/harvest/dsc07836.webp",
      beforeTitle: "Traditional Harvest Packout",
      afterTitle: "Abraq Gala & King Roat® Grade-A",
      metrics: [
        { label: "Grade-A Percentage", beforeVal: "35% - 45% Packout", afterVal: "90% - 95% Packout", improvement: "+50% Grade-A", progressPercentage: 92 },
        { label: "Farm Gate Mandi Rate", beforeVal: "₹50 - ₹75 / kg", afterVal: "₹140 - ₹185 / kg", improvement: "2.5x Price Realization", progressPercentage: 85 },
        { label: "CA Store Longevity", beforeVal: "3 – 4 Months", afterVal: "8 – 10 Months", improvement: "Extended Shelf Life", progressPercentage: 90 }
      ],
      beforePoints: [
        "Uneven sizing (55mm to 85mm mixed in same tree)",
        "Partial color (green shoulders and shaded blotches)",
        "Lower Mandi rates requiring manual sorting and high labor costs",
        "Susceptible to post-harvest decay and skin bruising"
      ],
      afterPoints: [
        "Uniform 75mm - 80mm calibrated export diameter",
        "100% solid luminous crimson skin coverage on all branches",
        "Commands immediate premium buyers in Delhi, Bengaluru & Mumbai",
        "Dense crisp flesh with prolonged cold storage longevity"
      ]
    },
    {
      id: "hail-defense",
      category: "Climate Resilience",
      tabLabel: "Anti-Hail Protection",
      icon: ShieldCheck,
      title: "Unprotected Hail Devastation vs. Retractable UV Canopy",
      subtitle: "Safeguard your entire season's earnings against unpredictable summer hailstorms in Kashmir.",
      beforeImage: "/images/trellis/dsc08866.webp",
      afterImage: "/images/trellis/dsc08851.webp",
      beforeTitle: "Unprotected Hail Damaged Crop",
      afterTitle: "Abraq Anti-Hail Retractable Canopy",
      metrics: [
        { label: "Crop Protection", beforeVal: "0% (100% Loss Risk)", afterVal: "100% Shielded", improvement: "Zero Hail Loss", progressPercentage: 100 },
        { label: "Sunburn / Scald", beforeVal: "15% Damaged by Sun", afterVal: "< 1% Diffused Light", improvement: "Skin Protection", progressPercentage: 94 },
        { label: "Structure Warranty", beforeVal: "N/A", afterVal: "10-Year HDPE UV", improvement: "Long-term Security", progressPercentage: 96 }
      ],
      beforePoints: [
        "A single 15-minute hailstorm can destroy 100% of seasonal harvest",
        "Pitted fruit sold at scrap processing prices (₹10 - ₹15/kg)",
        "Harsh direct sun burns tender apple skin during July heatwaves",
        "Heavy bird and insect predation on upper canopy fruit"
      ],
      afterPoints: [
        "High-density polyethylene netting deflects 100% of hail stones",
        "Engineered anchor cables withstand up to 90 km/h wind gusts",
        "Diffuses harsh midday UV sunlight, enhancing uniform skin coloration",
        "Easily retractable into protective sleeves before winter snowfall"
      ]
    },
    {
      id: "soil-nutrition",
      category: "Soil Science",
      tabLabel: "14-Parameter Soil Health",
      icon: FlaskConical,
      title: "Nutrient-Locked Soil vs. Chadoora Laboratory Balance",
      subtitle: "Atomic absorption spectrometer testing to eliminate chlorosis and optimize root vitality.",
      beforeImage: "/images/nursery/dsc03671.webp",
      afterImage: "/images/nursery/dsc03589.webp",
      beforeTitle: "Nutrient Locked / Chlorotic Soil",
      afterTitle: "Chadoora Lab Balanced Rootzone",
      metrics: [
        { label: "Plant Survival Rate", beforeVal: "70% - 80% Survival", afterVal: "98%+ Guaranteed", improvement: "+25% Survival", progressPercentage: 98 },
        { label: "Fertilizer Overdose", beforeVal: "₹8,000/kanal wasted", afterVal: "Precision Dosage", improvement: "Zero Guesswork", progressPercentage: 88 },
        { label: "Soil Parameters Tested", beforeVal: "0 (Guesswork)", afterVal: "14 Parameters", improvement: "Complete Chemistry", progressPercentage: 95 }
      ],
      beforePoints: [
        "Blind chemical urea and DAP application causing severe soil acidification",
        "Iron and Zinc deficiency causing yellowed leaves (chlorosis)",
        "High root mortality due to undetected alkaline Karewa lime zones",
        "Poor root anchorage in unbalanced clay-dense soils"
      ],
      afterPoints: [
        "Detailed digital soil card measuring pH, EC, Organic Carbon & 14 minerals",
        "Pre-planting lime or sulfur soil amendment guaranteeing 98%+ survival",
        "Customized ZIRAAT™ bio-stimulant & micro-nutrient prescription",
        "Maximized root feeder density and explosive spring shoot growth"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAutoScanning, setIsAutoScanning] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scanDirection = useRef<"forward" | "backward">("forward");

  const current = scenarios[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isAutoScanning) setIsAutoScanning(false);
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    if (isAutoScanning) setIsAutoScanning(false);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    if (!isAutoScanning) return;

    const interval = setInterval(() => {
      setSliderPosition((prev) => {
        if (prev >= 85) {
          scanDirection.current = "backward";
        } else if (prev <= 15) {
          scanDirection.current = "forward";
        }

        const delta = scanDirection.current === "forward" ? 0.8 : -0.8;
        return Math.max(10, Math.min(90, prev + delta));
      });
    }, 25);

    return () => clearInterval(interval);
  }, [isAutoScanning]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setSliderPosition(50);
    setIsAutoScanning(false);
  };

  return (
    <section id="transformation" className="ds-section py-24 bg-background relative overflow-hidden border-y border-border">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent/80 dark:bg-primary/5 rounded-full blur-[160px] -z-10 animate-float" />
      <div className="pointer-events-none absolute bottom-10 -right-20 w-[550px] h-[550px] bg-amber-500/10 dark:bg-[#d4af37]/5 rounded-full blur-[150px] -z-10 animate-float-reverse" />

      <div className="ds-container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Interactive Transformation Engine</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
            Before & After: The <span className="font-serif italic font-normal text-primary">High-Density Proof</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
            Explore side-by-side interactive visual proof across every dimension of your orchard — from density and irrigation to Mandi grading and hail protection.
          </p>

          {/* 5 Transformation Category Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {scenarios.map((sc, idx) => {
              const Icon = sc.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={sc.id}
                  onClick={() => handleTabChange(idx)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-lg shadow-alpine-950/20 scale-105"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-white" : "text-primary"}`} />
                  <span>{sc.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Transformation Card Showcase */}
        <div className="rounded-3xl border border-border bg-card dark:bg-card/75 p-6 sm:p-10 shadow-card dark:shadow-card-dark">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">
              {current.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed font-medium">
              {current.subtitle}
            </p>
          </div>

          {/* Metrics Improvement Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
            {current.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-secondary/80 dark:bg-secondary/80 border border-border flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{m.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Before: <strong className="line-through text-red-500/90 font-medium">{m.beforeVal}</strong>
                    </p>
                    <p className="text-xs font-bold text-foreground">
                      After: <span className="text-primary font-bold">{m.afterVal}</span>
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent border border-primary/20 text-primary text-[11px] font-bold shrink-0 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    {m.improvement}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden mt-1">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 transition-all duration-1000"
                    style={{ width: `${m.progressPercentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Drag-and-Compare Image Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs List */}
            <div className="lg:col-span-4 space-y-3.5">
              {/* Before Card */}
              <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                sliderPosition > 50 
                  ? "bg-red-500/10 border-red-500/40 shadow-xs" 
                  : "bg-secondary/40 border-border opacity-80"
              }`}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500 shrink-0" /> {current.beforeTitle}
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Traditional</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground font-medium">
                  {current.beforePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Card */}
              <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                sliderPosition <= 50 
                  ? "bg-accent border-emerald-500/50 shadow-lg shadow-emerald-950/15 ring-1 ring-emerald-500/30" 
                  : "bg-card border-border"
              }`}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary shrink-0" /> {current.afterTitle}
                  </span>
                  <span className="text-[10px] font-bold text-primary bg-accent border border-primary/20 px-2.5 py-0.5 rounded-full">
                    Abraq Guaranteed
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-foreground font-bold">
                  {current.afterPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Interactive Image Slider */}
            <div className="lg:col-span-8">
              {/* Slider Control HUD: Quick Snap Presets & Auto-Scan */}
              <div className="flex items-center justify-between gap-2 mb-3 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-muted-foreground mr-1 hidden sm:inline">Presets:</span>
                  <button
                    onClick={() => { setIsAutoScanning(false); setSliderPosition(100); }}
                    className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      sliderPosition > 80 
                        ? "bg-red-600 text-white shadow-xs" 
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    100% Before
                  </button>
                  <button
                    onClick={() => { setIsAutoScanning(false); setSliderPosition(50); }}
                    className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      sliderPosition >= 40 && sliderPosition <= 60 
                        ? "bg-foreground text-background shadow-xs" 
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    50 / 50 Split
                  </button>
                  <button
                    onClick={() => { setIsAutoScanning(false); setSliderPosition(0); }}
                    className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      sliderPosition < 20 
                        ? "bg-primary text-white shadow-xs" 
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    100% After
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoScanning(!isAutoScanning)}
                    className={`px-3.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isAutoScanning
                        ? "bg-primary text-white shadow-md animate-pulse"
                        : "bg-secondary hover:bg-muted text-foreground"
                    }`}
                  >
                    {isAutoScanning ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        <span>Pause Scan</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Auto-Scan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Slider Viewport Container */}
              <div
                ref={containerRef}
                onMouseDown={() => { setIsAutoScanning(false); setIsDragging(true); }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border-2 border-border select-none cursor-ew-resize group"
              >
                {/* AFTER IMAGE */}
                <img
                  src={current.afterImage}
                  alt={current.afterTitle}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  draggable={false}
                />
                <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-primary/90 border border-emerald-500/50 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {current.afterTitle}
                </div>

                {/* BEFORE IMAGE (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={current.beforeImage}
                    alt={current.beforeTitle}
                    className="absolute inset-0 w-full h-full object-cover max-w-none filter brightness-90 transition-transform duration-700 group-hover:scale-102"
                    style={{
                      width: containerRef.current ? containerRef.current.clientWidth : "100%"
                    }}
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md text-white border border-white/25 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    {current.beforeTitle}
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-white via-emerald-300 to-white shadow-[0_0_20px_rgba(0,229,117,0.9)] cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card text-foreground shadow-2xl flex items-center justify-center border-2 border-emerald-500 group-hover:scale-110 active:scale-95 transition-transform duration-200">
                    <MoveHorizontal className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Slider Footer */}
              <div className="flex items-center justify-between text-xs text-muted-foreground font-medium mt-3 px-1">
                <span>← Traditional Seedling</span>
                <span className="font-bold text-foreground">↔ Drag handle or touch left/right to compare</span>
                <span>Abraq M9 High-Density →</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MultiProductBeforeAfter;
