import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  BadgePercent,
  Download,
  PhoneCall,
  Trees,
  Check,
} from "lucide-react";
import { calculateOrchardEstimate, formatINR } from "@/utils/calculations";
import type { EstimateInput } from "@/utils/calculations";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

interface ModernConfiguratorProps {
  onOpenBooking?: (summary?: string) => void;
  /** Render only the tool (no section wrapper / heading) — used by OrchardPlanner */
  embedded?: boolean;
}

export const ModernConfigurator: React.FC<ModernConfiguratorProps> = ({ onOpenBooking, embedded = false }) => {
  const navigate = useNavigate();
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

  const handleDownloadPDF = async () => {
    // jsPDF is heavy (~500 KB) — fetch it only when a quote is actually requested
    const { generateOrchardQuotePDF } = await import("@/utils/pdfExport");
    generateOrchardQuotePDF(
      estimateInput,
      result,
      "Grower",
      "Not specified",
      "Kashmir Valley, J&K"
    );
  };

  const handleBooking = () => {
    const summary = `${kanals} Kanals - ${rootstockKey} - Net ${formatINR(result.netFarmerCost)}`;
    if (onOpenBooking) onOpenBooking(summary);
    else navigate("/services/book-orchard");
  };

  const sliderPct = ((kanals - 1) / 19) * 100;

  const tool = (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
      {/* Left: controls */}
      <div className="lg:col-span-7 space-y-4">
        {/* Step 1 */}
        <ScrollReveal>
          <div className="rounded-[1.5rem] border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-8">
            <StepHeader n="01" label="Land Configuration" title="Total Orchard Land Area" desc="Adjust your planned orchard acreage in Kashmiri Kanals" />

            <div className="mt-8 flex items-end justify-between gap-4">
              <div className="numeral text-7xl sm:text-8xl text-primary leading-none">{kanals}</div>
              <div className="text-right text-[10px] tracking-[0.22em] uppercase text-muted-foreground pb-2">
                Kanals
                <div className="mt-1 text-foreground normal-case tracking-normal text-sm">
                  {(kanals * 0.125).toFixed(3)} Acres
                </div>
              </div>
            </div>

            <input
              type="range"
              min={1}
              max={20}
              value={kanals}
              onChange={(e) => setKanals(parseInt(e.target.value))}
              aria-label="Orchard land area in kanals"
              className="mt-6 w-full h-1.5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-honey-300 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-forest-950 [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_#c9a86a] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-honey-300 [&::-moz-range-thumb]:border-0"
              style={{ background: `linear-gradient(90deg, #c9a86a ${sliderPct}%, rgba(233,214,168,0.15) ${sliderPct}%)` }}
            />

            <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>1 Kanal (~5,440 sq ft)</span>
              <span>20 Kanals</span>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2.5 rounded-xl border border-border px-4 py-3">
                <Trees className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground font-600">Calculated: {result.totalPlants} Certified Trees</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-border px-4 py-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Recommended Layout: 3.2m Row × 0.9m Tree Spacing
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 2 */}
        <ScrollReveal delay={80}>
          <div className="rounded-[1.5rem] border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-8">
            <StepHeader n="02" label="Clonal Genetics" title="Rootstock Architecture" desc="Select dwarfing level, planting density, and fruiting year" />

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              {[
                { key: "M9-T337" as const, name: "M9-T337 (Dwarf)", density: "330 Trees/Kanal", yield: "Year 2 Fruiting", tag: "Highest Yield" },
                { key: "MM106" as const, name: "MM106 (Semi-Dwarf)", density: "180 Trees/Kanal", yield: "Year 3 Fruiting", tag: "Gentle Slopes" },
                { key: "MM111" as const, name: "MM111 (Semi-Std)", density: "110 Trees/Kanal", yield: "Year 4 Fruiting", tag: "Dry Karewa" }
              ].map((item) => {
                const active = rootstockKey === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setRootstockKey(item.key)}
                    aria-pressed={active}
                    className={`relative p-5 rounded-2xl border text-left transition-all duration-500 flex flex-col justify-between ${
                      active
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {active && (
                      <span className="absolute top-4 right-4 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                    )}
                    <div>
                      <span className="text-[9px] font-700 tracking-[0.2em] uppercase text-primary">{item.tag}</span>
                      <p className="mt-3 font-display text-xl text-foreground leading-tight">{item.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.density}</p>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-4 pt-3 border-t border-border">{item.yield}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Step 3 */}
        <ScrollReveal delay={160}>
          <div className="rounded-[1.5rem] border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-8">
            <StepHeader n="03" label="Climate & Nutrients" title="Turnkey Infrastructure & Protection" desc="Select required irrigation and climate shield components" />

            <div className="space-y-3 mt-6">
              <ToggleRow
                checked={includeDrip}
                onChange={setIncludeDrip}
                title="Automated Micro-Drip Fertigation"
                desc="Pressure-compensating emitters + Venturi fertilizer injection"
                price={formatINR(kanals * 22000)}
              />
              <ToggleRow
                checked={includeHailNet}
                onChange={setIncludeHailNet}
                title="Anti-Hail Retractable Safety Netting"
                desc="UV-treated 10-year reinforced canopy shield"
                price={formatINR(kanals * 48000)}
              />

              <div className="pt-4">
                <p className="text-[10px] font-700 tracking-[0.22em] uppercase text-muted-foreground mb-3">Trellis Architecture Framework</p>
                <div className="grid grid-cols-3 gap-2 p-1.5 rounded-full border border-border">
                  {[
                    { key: "concrete" as const, label: "Pre-stressed RCC" },
                    { key: "gi-steel" as const, label: "Galvanized Steel" },
                    { key: "bamboo-hybrid" as const, label: "Hybrid Trellis" },
                  ].map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setTrellisType(t.key)}
                      aria-pressed={trellisType === t.key}
                      className={`py-2.5 px-2 rounded-full text-center text-[11px] sm:text-xs font-700 transition-all duration-500 ${
                        trellisType === t.key
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Right: live proposal "receipt" */}
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <ScrollReveal variant="scale">
          <div className="relative rounded-[1.75rem] bg-cream-50 text-forest-950 p-7 sm:p-9 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-3 rounded-[1.25rem] border border-honey-500/30 pointer-events-none" />
            <div className="relative">
              <div className="flex items-start justify-between pb-6 border-b border-dashed border-cream-300">
                <div>
                  <span className="text-[10px] font-700 tracking-[0.25em] uppercase text-honey-700">Live Proposal Summary</span>
                  <h4 className="mt-2 font-display text-3xl text-forest-950">{kanals} Kanals · {rootstockKey}</h4>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-forest-900 text-cream-50 text-[11px] font-700 whitespace-nowrap">
                  {result.totalPlants} Trees
                </span>
              </div>

              <div className="py-5 space-y-3 text-sm text-charcoal-700/75">
                <Line label={`Certified Plants (${result.totalPlants} Trees):`} value={formatINR(result.plantCost)} />
                <Line label="Trellis Support Frame:" value={formatINR(result.trellisCost)} />
                {includeDrip && <Line label="Micro-Drip Fertigation:" value={formatINR(result.dripCost)} />}
                {includeHailNet && <Line label="Anti-Hail Netting Canopy:" value={formatINR(result.hailNetCost)} />}
                <Line label="14-Test Soil Lab Diagnostic:" value={formatINR(result.soilTestCost)} />
              </div>

              <div className="pt-5 border-t border-dashed border-cream-300 space-y-3">
                <div className="flex justify-between text-sm text-charcoal-700/75">
                  <span>Gross Turnkey Total:</span>
                  <span className="font-700 text-forest-950 tabular-nums">{formatINR(result.subtotal)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-700 text-forest-700 rounded-xl bg-forest-50 px-4 py-3">
                  <span className="flex items-center gap-2">
                    <BadgePercent className="w-4 h-4" />
                    Est. Govt Capital Subsidy (MIDH):
                  </span>
                  <span className="tabular-nums">- {formatINR(result.estimatedSubsidy)}</span>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-700 tracking-[0.22em] uppercase text-charcoal-700/70 block">
                    Estimated Net Farmer Cost
                  </span>
                  <p key={result.netFarmerCost} className="numeral mt-1 text-4xl sm:text-5xl text-forest-900 animate-fade-in">
                    {formatINR(result.netFarmerCost)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-700 tracking-[0.18em] text-charcoal-700/70 block uppercase">Est. Break-Even</span>
                  <span className="numeral italic text-2xl text-honey-700">Year {result.breakEvenYear}</span>
                </div>
              </div>

              <div className="space-y-3 mt-8">
                <button onClick={handleBooking} className="btn-lux btn-ink w-full ds-shimmer">
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Free On-Site Survey for this Plan</span>
                </button>
                <button onClick={handleDownloadPDF} className="btn-lux btn-ghost-dark w-full">
                  <Download className="w-4 h-4" />
                  <span>Download Official PDF Quotation</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );

  if (embedded) return tool;

  return (
    <section id="configurator" className="dark ds-section py-24 md:py-36 bg-pine-gradient text-foreground overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(233,214,168,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(233,214,168,0.6)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="ds-container relative">
        <SectionHeading
          index="02"
          tone="dark"
          eyebrow="Interactive Financial Architecture"
          title="Estimate Your Orchard"
          accent="Investment & Subsidy"
          description="Configure your acreage, rootstock genetics, and turnkey infrastructure to generate an instant transparent cost breakdown and government subsidy forecast."
        />

        {tool}
      </div>
    </section>
  );
};

function StepHeader({ n, label, title, desc }: { n: string; label: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-5">
      <span className="numeral italic text-3xl text-primary/70 leading-none pt-1">{n}</span>
      <div>
        <span className="text-[10px] font-700 uppercase tracking-[0.25em] text-primary block">Step {n.replace(/^0/, "")} · {label}</span>
        <h3 className="mt-1.5 font-display text-2xl sm:text-3xl text-foreground">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function ToggleRow({ checked, onChange, title, desc, price }: { checked: boolean; onChange: (v: boolean) => void; title: string; desc: string; price: string }) {
  return (
    <label className={`flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-500 ${checked ? "border-primary/60 bg-primary/5" : "border-border hover:border-primary/40"}`}>
      <div className="flex items-center gap-4">
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" />
        <span className={`relative w-11 h-6 rounded-full shrink-0 transition-colors duration-500 peer-focus-visible:ring-2 peer-focus-visible:ring-primary ${checked ? "bg-primary" : "bg-muted border border-border"}`}>
          <span className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-500 ${checked ? "left-6 bg-primary-foreground" : "left-1 bg-muted-foreground"}`} />
        </span>
        <div>
          <p className="text-sm font-700 text-foreground">{title}</p>
          <p className="text-[11px] text-muted-foreground">{desc}</p>
        </div>
      </div>
      <span className="text-sm font-700 text-foreground tabular-nums whitespace-nowrap">{price}</span>
    </label>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span>{label}</span>
      <span className="text-forest-950 font-700 tabular-nums">{value}</span>
    </div>
  );
}

export default ModernConfigurator;
