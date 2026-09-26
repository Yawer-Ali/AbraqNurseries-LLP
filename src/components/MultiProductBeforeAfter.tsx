
import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
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
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

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
      beforeImage: "/images/real/traditional-orchard-1600.webp",
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
      afterImage: "/images/real/soil-probe-drip-1600.webp",
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
      beforeImage: "/images/real/traditional-orchard-1600.webp",
      afterImage: "/images/real/harvest-crates-1600.webp",
      beforeTitle: "Traditional Orchard Harvest",
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
      beforeImage: "/images/real/young-orchard-block-1600.webp",
      afterImage: "/images/real/net-canopy-bloom-1600.webp",
      beforeTitle: "Open, Unprotected Orchard",
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
      beforeImage: "/images/real/raw-land-before-1600.webp",
      afterImage: "/images/real/adding-manure-1600.webp",
      beforeTitle: "Untested, Unprepared Soil",
      afterTitle: "Lab-Guided Soil Preparation",
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
    <section id="transformation" className="ds-section py-24 md:py-36 bg-cream-50 overflow-hidden">
      <div className="ds-container">
        <SectionHeading
          index="07"
          variant="center"
          accentStyle="plain"
          eyebrow="Interactive Transformation Engine"
          title="Before & After: The"
          accent="High-Density Proof"
          description="Explore side-by-side interactive visual proof across every dimension of your orchard — from density and irrigation to Mandi grading and hail protection."
        />

        {/* Category tabs */}
        <ScrollReveal>
          <div className="-mx-5 px-5 overflow-x-auto no-scrollbar mb-10 md:mb-14">
            <div role="tablist" className="flex md:justify-center gap-1 min-w-max border-b border-border">
              {scenarios.map((sc, idx) => {
                const Icon = sc.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={sc.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleTabChange(idx)}
                    className={`relative px-4 md:px-5 py-4 text-xs md:text-[13px] font-700 tracking-wide transition-colors duration-300 flex items-center gap-2 ${
                      isSelected ? "text-forest-900" : "text-muted-foreground hover:text-forest-900"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-honey-600" : ""}`} strokeWidth={1.7} />
                    <span>{sc.tabLabel}</span>
                    <span
                      className={`absolute left-0 right-0 -bottom-px h-[2px] bg-honey-500 origin-left transition-transform duration-500 ${
                        isSelected ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div key={current.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-fade-up">
          {/* Narrative + ledger */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="eyebrow">{current.category}</span>
            <h3 className="mt-5 font-display text-3xl sm:text-4xl font-500 text-forest-900 leading-[1.05]">
              {current.title}
            </h3>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{current.subtitle}</p>

            <div className="mt-8 divide-y divide-border border-y border-border">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="py-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-700 text-muted-foreground uppercase tracking-[0.22em]">{m.label}</p>
                    <span className="flex items-center gap-1 text-[11px] font-700 text-honey-700 text-right">
                      <TrendingUp className="w-3 h-3 shrink-0" />
                      {m.improvement}
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <span className="numeral text-2xl text-forest-900">{m.afterVal}</span>
                    <span className="text-xs text-apple-600 line-through text-right">{m.beforeVal}</span>
                  </div>
                  <div className="mt-3 w-full bg-cream-200 h-[3px] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-forest-700 via-forest-500 to-honey-400 transition-all duration-1000"
                      style={{ width: `${m.progressPercentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider + point lists */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-card">
                <span className="text-[10px] font-700 tracking-[0.2em] uppercase text-muted-foreground px-3 hidden sm:inline">Presets</span>
                {[
                  { label: "100% Before", pos: 100, active: sliderPosition > 80 },
                  { label: "50 / 50 Split", pos: 50, active: sliderPosition >= 40 && sliderPosition <= 60 },
                  { label: "100% After", pos: 0, active: sliderPosition < 20 },
                ].map((p) => (
                  <button
                    key={p.label}
                    onClick={() => { setIsAutoScanning(false); setSliderPosition(p.pos); }}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-700 transition-all duration-300 ${
                      p.active ? "bg-forest-900 text-cream-50" : "text-muted-foreground hover:text-forest-900"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsAutoScanning(!isAutoScanning)}
                className={`px-4 py-2 rounded-full text-[11px] font-700 flex items-center gap-2 transition-all duration-300 border ${
                  isAutoScanning
                    ? "bg-honey-400 border-honey-400 text-forest-950"
                    : "border-border text-forest-900 hover:border-forest-900"
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

            {/* Slider viewport */}
            <div
              ref={containerRef}
              onMouseDown={() => { setIsAutoScanning(false); setIsDragging(true); }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-4/3 sm:aspect-16/10 rounded-[1.5rem] overflow-hidden shadow-luxe select-none cursor-ew-resize group touch-pan-y"
            >
              <img
                src={current.afterImage}
                alt={current.afterTitle}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-forest-950/70 backdrop-blur-md text-honey-200 border border-honey-400/40 text-[10px] font-700 uppercase tracking-[0.18em] flex items-center gap-2 max-w-[45%]">
                <span className="w-1.5 h-1.5 rounded-full bg-honey-300 shrink-0" />
                <span className="truncate">{current.afterTitle}</span>
              </div>

              <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                <img
                  src={current.beforeImage}
                  alt={current.beforeTitle}
                  className="absolute inset-0 w-full h-full object-cover max-w-none grayscale-[35%] brightness-90"
                  style={{
                    width: containerRef.current ? containerRef.current.clientWidth : "100%"
                  }}
                  draggable={false}
                />
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-forest-950/80 backdrop-blur-md text-cream-50 border border-cream-50/20 text-[10px] font-700 uppercase tracking-[0.18em] flex items-center gap-2 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-400" />
                  {current.beforeTitle}
                </div>
              </div>

              <div
                className="absolute top-0 bottom-0 w-px bg-cream-50 shadow-[0_0_24px_rgba(233,214,168,0.9)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-cream-50/90 backdrop-blur-md text-forest-900 shadow-2xl flex items-center justify-center border border-honey-400 group-hover:scale-110 active:scale-95 transition-transform duration-300">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-3 px-1 gap-2">
              <span className="hidden sm:inline">← {current.beforeTitle}</span>
              <span className="font-700 text-forest-900 mx-auto sm:mx-0 text-center">↔ Drag handle or touch left/right to compare</span>
              <span className="hidden sm:inline">{current.afterTitle} →</span>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className={`p-6 rounded-[1.25rem] border transition-all duration-500 ${
                sliderPosition > 50 ? "border-apple-300 bg-apple-50" : "border-border bg-cream-100/60"
              }`}>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-700 uppercase tracking-[0.16em] text-apple-600 flex items-center gap-1.5">
                    <X className="w-4 h-4 shrink-0" /> {current.beforeTitle}
                  </span>
                  <span className="text-[10px] font-700 text-muted-foreground">Traditional</span>
                </div>
                <ul className="space-y-2.5 text-sm text-charcoal-700/80">
                  {current.beforePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-apple-500 shrink-0 mt-0.5">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-[1.25rem] border transition-all duration-500 ${
                sliderPosition <= 50 ? "border-forest-900 bg-forest-900 text-cream-50 shadow-luxe" : "border-border bg-card"
              }`}>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-[11px] font-700 uppercase tracking-[0.16em] flex items-center gap-1.5 ${sliderPosition <= 50 ? "text-honey-300" : "text-forest-700"}`}>
                    <Check className="w-4 h-4 shrink-0" /> {current.afterTitle}
                  </span>
                  <span className={`text-[10px] font-700 ${sliderPosition <= 50 ? "text-honey-200" : "text-forest-700"}`}>
                    Abraq Guaranteed
                  </span>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {current.afterPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${sliderPosition <= 50 ? "text-honey-300" : "text-forest-600"}`} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiProductBeforeAfter;
