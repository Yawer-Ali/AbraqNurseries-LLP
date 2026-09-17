
import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  BadgePercent, 
  Download,
  PhoneCall,
  Trees
} from "lucide-react";
import { calculateOrchardEstimate, formatINR } from "@/utils/calculations";
import type { EstimateInput } from "@/utils/calculations";
import { generateOrchardQuotePDF } from "@/utils/pdfExport";

interface ModernConfiguratorProps {
  onOpenBooking?: (summary?: string) => void;
}

export const ModernConfigurator: React.FC<ModernConfiguratorProps> = ({ onOpenBooking }) => {
  const [kanals, setKanals] = useState<number>(4);
  const [rootstockKey, setRootstockKey] = useState<"M9-T337" | "MM106" | "MM111">("M9-T337");
  const [trellisType, setTrellisType] = useState<"concrete" | "gi-steel" | "bamboo-hybrid">("concrete");
  const [includeDrip, setIncludeDrip] = useState<boolean>(true);
  const [includeHailNet, setIncludeHailNet] = useState<boolean>(true);

  const estimateInput: EstimateInput = useMemo(() => ({
    kanals,
    rootstockKey,
    trellisType,
    includeDrip,
    includeHailNet,
    includeSoilTest: true,
    primaryVariety: "Gala Schniga & King Roat"
  }), [kanals, rootstockKey, trellisType, includeDrip, includeHailNet]);

  const result = useMemo(() => calculateOrchardEstimate(estimateInput), [estimateInput]);

  const handleDownloadPDF = () => {
    generateOrchardQuotePDF(
      estimateInput,
      result,
      "Grower",
      "Not specified",
      "Kashmir Valley, J&K"
    );
  };

  return (
    <section id="configurator" className="ds-section py-24 border-t border-border bg-background relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[700px] h-[700px] bg-accent/80 dark:bg-primary/5 rounded-full blur-[160px] -z-10 animate-pulse-soft" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[600px] h-[600px] bg-amber-500/10 dark:bg-[#d4af37]/5 rounded-full blur-[150px] -z-10 animate-float" />

      <div className="ds-container">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span>Interactive Financial Architecture</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Estimate Your Orchard <span className="font-serif italic font-normal text-primary">Investment & Subsidy</span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed font-medium">
            Configure your acreage, rootstock genetics, and turnkey infrastructure to generate an instant transparent cost breakdown and government subsidy forecast.
          </p>
        </div>

        {/* Studio Split: Configurator (Left) vs Summary Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Land Area Slider with Animated Visual Plant Matrix */}
            <div className="p-7 sm:p-8 rounded-3xl border border-border bg-card dark:bg-card/75 shadow-card dark:shadow-card-dark space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                    Step 1 · Land Configuration
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">Total Orchard Land Area</h3>
                  <p className="text-xs text-muted-foreground font-medium">Adjust your planned orchard acreage in Kashmiri Kanals</p>
                </div>
                
                <div className="text-right p-3 rounded-2xl bg-secondary dark:bg-secondary border border-border shadow-xs">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-primary font-mono">
                    {kanals}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground ml-1.5 uppercase tracking-wider">Kanals</span>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={20}
                value={kanals}
                onChange={(e) => setKanals(parseInt(e.target.value))}
                className="w-full h-3 bg-secondary dark:bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
              />

              <div className="flex items-center justify-between text-xs text-muted-foreground font-bold pt-1">
                <span>1 Kanal (~5,440 sq ft)</span>
                <span className="font-bold text-foreground bg-accent text-primary px-3.5 py-1.5 rounded-full border border-primary/20 flex items-center gap-1.5 shadow-xs">
                  <Trees className="w-3.5 h-3.5 text-emerald-500 animate-bounce" />
                  Calculated: {result.totalPlants} Certified Trees
                </span>
                <span>20 Kanals</span>
              </div>

              {/* Dynamic Visual Spacing Pod Preview */}
              <div className="p-3.5 rounded-2xl bg-secondary/50 dark:bg-background/70 border border-border flex items-center justify-between text-[11px] font-bold text-muted-foreground">
                <span className="flex items-center gap-1.5 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  Estimated Acreage: {(kanals * 0.125).toFixed(3)} Acres
                </span>
                <span className="text-primary font-bold">
                  Recommended Layout: 3.2m Row × 0.9m Tree Spacing
                </span>
              </div>
            </div>

            {/* 2. Rootstock Selection */}
            <div className="p-7 sm:p-8 rounded-3xl border border-border bg-card dark:bg-card/75 shadow-card dark:shadow-card-dark space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                  Step 2 · Clonal Genetics
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">Rootstock Architecture</h3>
                <p className="text-xs text-muted-foreground font-medium">Select dwarfing level, planting density, and fruiting year</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3.5 pt-1">
                {[
                  { key: "M9-T337" as const, name: "M9-T337 (Dwarf)", density: "330 Trees/Kanal", yield: "Year 2 Fruiting", tag: "Highest Yield" },
                  { key: "MM106" as const, name: "MM106 (Semi-Dwarf)", density: "180 Trees/Kanal", yield: "Year 3 Fruiting", tag: "Gentle Slopes" },
                  { key: "MM111" as const, name: "MM111 (Semi-Std)", density: "110 Trees/Kanal", yield: "Year 4 Fruiting", tag: "Dry Karewa" }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setRootstockKey(item.key)}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rootstockKey === item.key
                        ? "border-emerald-500 bg-accent text-foreground ring-2 ring-emerald-500/40 font-bold shadow-lg scale-102 shadow-glow"
                        : "border-border bg-secondary/50 dark:bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-muted text-foreground block w-max mb-2">
                        {item.tag}
                      </span>
                      <p className="text-xs font-bold text-foreground mb-1">{item.name}</p>
                      <p className="text-[11px] text-primary font-bold">{item.density}</p>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-3 pt-2 border-t border-border/60">{item.yield}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Protection */}
            <div className="p-7 sm:p-8 rounded-3xl border border-border bg-card dark:bg-card/75 shadow-card dark:shadow-card-dark space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                  Step 3 · Climate & Nutrients
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">Turnkey Infrastructure & Protection</h3>
                <p className="text-xs text-muted-foreground font-medium">Select required irrigation and climate shield components</p>
              </div>

              <div className="space-y-3 pt-1">
                <label className="flex items-center justify-between p-4 rounded-2xl bg-secondary/60 dark:bg-secondary/60 border border-border cursor-pointer hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <input
                      type="checkbox"
                      checked={includeDrip}
                      onChange={(e) => setIncludeDrip(e.target.checked)}
                      className="w-4.5 h-4.5 rounded text-emerald-600 accent-emerald-500 cursor-pointer"
                    />
                    <div>
                      <p className="text-xs font-bold text-foreground">Automated Micro-Drip Fertigation</p>
                      <p className="text-[11px] text-muted-foreground">Pressure-compensating emitters + Venturi fertilizer injection</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-foreground font-mono">{formatINR(kanals * 22000)}</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-2xl bg-secondary/60 dark:bg-secondary/60 border border-border cursor-pointer hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <input
                      type="checkbox"
                      checked={includeHailNet}
                      onChange={(e) => setIncludeHailNet(e.target.checked)}
                      className="w-4.5 h-4.5 rounded text-emerald-600 accent-emerald-500 cursor-pointer"
                    />
                    <div>
                      <p className="text-xs font-bold text-foreground">Anti-Hail Retractable Safety Netting</p>
                      <p className="text-[11px] text-muted-foreground">UV-treated 10-year reinforced canopy shield</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-foreground font-mono">{formatINR(kanals * 48000)}</span>
                </label>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-foreground">Trellis Architecture Framework</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "concrete" as const, label: "Pre-stressed RCC" },
                      { key: "gi-steel" as const, label: "Galvanized Steel" },
                      { key: "bamboo-hybrid" as const, label: "Hybrid Trellis" },
                    ].map((t) => (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => setTrellisType(t.key)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          trellisType === t.key
                            ? "border-primary bg-accent text-primary ring-1 ring-primary"
                            : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Live Quote Summary Box (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-7 sm:p-9 rounded-3xl border-2 border-primary/20 dark:border-primary/20 bg-card dark:bg-card/95 shadow-2xl space-y-6 sticky top-28 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Live Proposal Summary</span>
                  <h4 className="font-display text-2xl font-bold text-foreground">{kanals} Kanals · {rootstockKey}</h4>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-accent text-primary text-xs font-bold">
                  {result.totalPlants} Trees
                </span>
              </div>

              {/* Itemized Breakdown */}
              <div className="space-y-2.5 text-xs text-muted-foreground font-medium">
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span>Certified Plants ({result.totalPlants} Trees):</span>
                  <span className="text-foreground font-bold font-mono">{formatINR(result.plantCost)}</span>
                </div>
                
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span>Trellis Support Frame:</span>
                  <span className="text-foreground font-bold font-mono">{formatINR(result.trellisCost)}</span>
                </div>

                {includeDrip && (
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span>Micro-Drip Fertigation:</span>
                    <span className="text-foreground font-bold font-mono">{formatINR(result.dripCost)}</span>
                  </div>
                )}

                {includeHailNet && (
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span>Anti-Hail Netting Canopy:</span>
                    <span className="text-foreground font-bold font-mono">{formatINR(result.hailNetCost)}</span>
                  </div>
                )}

                <div className="flex justify-between py-1 border-b border-border/50">
                  <span>14-Test Soil Lab Diagnostic:</span>
                  <span className="text-foreground font-bold font-mono">{formatINR(result.soilTestCost)}</span>
                </div>
              </div>

              {/* Financial Subtotals & Subsidy */}
              <div className="pt-2 space-y-3">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Gross Turnkey Total:</span>
                  <span className="font-bold text-foreground font-mono text-sm">{formatINR(result.subtotal)}</span>
                </div>

                <div className="flex justify-between text-xs text-primary font-bold p-3 rounded-2xl bg-accent border border-primary/20">
                  <span className="flex items-center gap-1.5">
                    <BadgePercent className="w-4 h-4" />
                    Est. Govt Capital Subsidy (MIDH):
                  </span>
                  <span className="font-mono text-sm font-bold">- {formatINR(result.estimatedSubsidy)}</span>
                </div>

                <div className="p-5 rounded-2xl bg-secondary dark:bg-secondary border border-border flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
                      Estimated Net Farmer Cost
                    </span>
                    <p className="font-display text-3xl font-bold text-primary font-mono">
                      {formatINR(result.netFarmerCost)}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-muted-foreground block uppercase">Est. Break-Even</span>
                    <span className="text-xs font-bold text-foreground bg-card px-2.5 py-1 rounded-md border border-border inline-block">
                      Year {result.breakEvenYear}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onOpenBooking?.(`${kanals} Kanals - ${rootstockKey} - Net ${formatINR(result.netFarmerCost)}`)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-alpine-400 hover:from-primary hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/25 transition-all flex items-center justify-center gap-2 cursor-pointer ds-shimmer border border-emerald-400/30"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Free On-Site Survey for this Plan</span>
                </button>

                <button
                  onClick={handleDownloadPDF}
                  className="w-full py-3.5 rounded-2xl border border-border bg-card hover:bg-secondary text-foreground font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:scale-102"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Download Official PDF Quotation</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernConfigurator;
