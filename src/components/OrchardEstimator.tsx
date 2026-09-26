import { useState } from "react";
import { Calculator, TrendingUp, MapPin, Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const varietyOptions = [
  { name: "Apple (Ambri/Maharaji)", saplingCost: 150, yieldPerTree: 45, spacing: "6m x 4m", treesPerAcre: 200 },
  { name: "Apple (HDP - M9 rootstock)", saplingCost: 220, yieldPerTree: 12, spacing: "1.5m x 2.5m", treesPerAcre: 1600 },
  { name: "Cherry", saplingCost: 180, yieldPerTree: 25, spacing: "4m x 4m", treesPerAcre: 275 },
  { name: "Pear (Babugosha)", saplingCost: 130, yieldPerTree: 40, spacing: "5m x 4m", treesPerAcre: 220 },
  { name: "Plum", saplingCost: 120, yieldPerTree: 30, spacing: "4m x 3m", treesPerAcre: 335 },
  { name: "Apricot", saplingCost: 140, yieldPerTree: 35, spacing: "5m x 4m", treesPerAcre: 220 },
  { name: "Almond", saplingCost: 160, yieldPerTree: 8, spacing: "6m x 5m", treesPerAcre: 145 },
  { name: "Pomegranate", saplingCost: 130, yieldPerTree: 20, spacing: "4m x 3m", treesPerAcre: 335 },
];

export function OrchardEstimator({ embedded = false }: { embedded?: boolean } = {}) {
  const [acres, setAcres] = useState(5);
  const [varietyIdx, setVarietyIdx] = useState(0);
  const [pricePerKg, setPricePerKg] = useState(80);

  const v = varietyOptions[varietyIdx];
  const totalTrees = Math.round(acres * v.treesPerAcre);
  const saplingCost = totalTrees * v.saplingCost;
  const establishmentCost = saplingCost + acres * 25000;
  const annualYield = totalTrees * v.yieldPerTree;
  const annualRevenue = annualYield * pricePerKg;
  const breakEvenYear = Math.ceil(establishmentCost / (annualRevenue * 0.6));

  const tool = (
    <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
      <ScrollReveal className="lg:col-span-5">
        <div className="h-full bg-cream-50 rounded-[1.75rem] p-7 md:p-10 border border-cream-300/80 space-y-10">
          <div>
            <label htmlFor="est-acres" className="flex items-center justify-between gap-2 mb-5">
              <span className="flex items-center gap-2 text-[11px] font-700 tracking-[0.2em] uppercase text-charcoal-700/70">
                <MapPin className="w-4 h-4 text-honey-600" /> Land area
              </span>
              <span className="numeral text-3xl text-forest-900">{acres} <span className="text-base italic text-charcoal-700/70">acres</span></span>
            </label>
            <input
              id="est-acres"
              type="range" min="1" max="50" value={acres}
              onChange={(e) => setAcres(Number(e.target.value))}
              className="range-lux"
              style={{ ["--pct" as string]: `${((acres - 1) / 49) * 100}%` }}
            />
            <div className="flex justify-between text-[11px] text-charcoal-700/70 mt-3">
              <span>1 acre</span><span>50 acres</span>
            </div>
          </div>

          <div>
            <label htmlFor="est-variety" className="flex items-center gap-2 text-[11px] font-700 tracking-[0.2em] uppercase text-charcoal-700/70 mb-4">
              <Sprout className="w-4 h-4 text-honey-600" /> Fruit variety
            </label>
            <select
              id="est-variety"
              value={varietyIdx}
              onChange={(e) => setVarietyIdx(Number(e.target.value))}
              className="form-input"
            >
              {varietyOptions.map((opt, i) => (
                <option key={i} value={i}>{opt.name}</option>
              ))}
            </select>
            <p className="text-xs text-charcoal-700/70 mt-3">Spacing: {v.spacing} · {v.treesPerAcre} trees/acre</p>
          </div>

          <div>
            <label htmlFor="est-price" className="flex items-center justify-between gap-2 mb-5">
              <span className="flex items-center gap-2 text-[11px] font-700 tracking-[0.2em] uppercase text-charcoal-700/70">
                <TrendingUp className="w-4 h-4 text-honey-600" /> Expected price
              </span>
              <span className="numeral text-3xl text-forest-900">₹{pricePerKg}<span className="text-base italic text-charcoal-700/70">/kg</span></span>
            </label>
            <input
              id="est-price"
              type="range" min="30" max="200" step="5" value={pricePerKg}
              onChange={(e) => setPricePerKg(Number(e.target.value))}
              className="range-lux"
              style={{ ["--pct" as string]: `${((pricePerKg - 30) / 170) * 100}%` }}
            />
            <div className="flex justify-between text-[11px] text-charcoal-700/70 mt-3">
              <span>₹30/kg</span><span>₹200/kg</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120} className="lg:col-span-7">
        <div className="h-full bg-forest-900 rounded-[1.75rem] p-7 md:p-10 text-cream-50 relative overflow-hidden border border-honey-400/20">
          <img
            src="/images/harvest/dsc07836.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-luminosity"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[radial-gradient(500px_300px_at_90%_0%,rgba(201,168,106,0.25),transparent)]" />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center gap-3">
              <Calculator className="w-4 h-4 text-honey-300" />
              <h3 className="text-[11px] font-700 tracking-[0.25em] uppercase text-honey-300 font-sans">Estimated projections</h3>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-8 pb-8 border-b border-cream-50/15">
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-cream-200/55">Annual revenue (mature)</p>
                <p className="numeral mt-2 text-4xl md:text-5xl text-gradient-gold break-words">₹{annualRevenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-cream-200/55">Establishment cost (Year 1)</p>
                <p className="numeral mt-2 text-4xl md:text-5xl text-cream-50 break-words">₹{establishmentCost.toLocaleString()}</p>
              </div>
            </div>

            <div className="py-6 grid sm:grid-cols-2 gap-x-10">
              <ResultRow label="Total trees needed" value={totalTrees.toLocaleString()} />
              <ResultRow label="Sapling cost" value={`₹${saplingCost.toLocaleString()}`} />
              <ResultRow label="Annual yield (mature)" value={`${annualYield.toLocaleString()} kg`} />
              <ResultRow label="Estimated break-even" value={`Year ${breakEvenYear}`} highlight />
            </div>

            <p className="mt-auto pt-6 border-t border-cream-50/10 text-xs text-cream-200/55 leading-relaxed">
              Estimates are indicative only — actual results depend on soil, climate, management, and market conditions.
              Book a consultation for a detailed feasibility study.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );

  if (embedded) return tool;

  return (
    <section className="py-24 md:py-36 bg-cream-100 paper-grain relative overflow-hidden">
      <div className="container-wide relative">
        <SectionHeading
          index="06"
          eyebrow="Interactive Tool"
          title="Orchard investment"
          accent="estimator"
          description="Get a rough estimate of costs, yield, and revenue for your orchard project. Adjust the parameters to explore scenarios."
        />

        {tool}
      </div>
    </section>
  );
}

function ResultRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-cream-50/10">
      <span className="text-cream-200/65 text-sm">{label}</span>
      <span className={`numeral ${highlight ? "text-honey-200 text-2xl italic" : "text-cream-50 text-xl"}`}>
        {value}
      </span>
    </div>
  );
}

export default OrchardEstimator;
