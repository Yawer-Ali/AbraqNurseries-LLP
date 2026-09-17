import { useState } from "react";
import { Calculator, TrendingUp, MapPin, Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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

export function OrchardEstimator() {
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

  return (
    <section className="py-24 md:py-32 bg-forest-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-100 opacity-40 blur-3xl" />
      <ScrollReveal>
        <div className="container-wide relative">
          <div className="max-w-2xl mb-12">
            <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">Interactive Tool</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-600 text-forest-900 leading-tight font-display">
              Orchard investment<br /><span className="italic font-400 text-gradient-green">estimator</span>
            </h2>
            <p className="mt-4 text-charcoal-700/70 text-lg leading-relaxed">
              Get a rough estimate of costs, yield, and revenue for your orchard project. Adjust the parameters to explore scenarios.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-cream-50 rounded-3xl p-6 md:p-8 border border-cream-200 shadow-lg space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-600 text-forest-700 mb-3">
                  <MapPin className="w-4 h-4" /> Land area: <span className="text-forest-900 font-700">{acres} acres</span>
                </label>
                <input
                  type="range" min="1" max="50" value={acres}
                  onChange={(e) => setAcres(Number(e.target.value))}
                  className="w-full accent-forest-600"
                />
                <div className="flex justify-between text-xs text-charcoal-700/40 mt-1">
                  <span>1 acre</span><span>50 acres</span>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-600 text-forest-700 mb-3">
                  <Sprout className="w-4 h-4" /> Fruit variety
                </label>
                <select
                  value={varietyIdx}
                  onChange={(e) => setVarietyIdx(Number(e.target.value))}
                  className="form-input"
                >
                  {varietyOptions.map((opt, i) => (
                    <option key={i} value={i}>{opt.name}</option>
                  ))}
                </select>
                <p className="text-xs text-charcoal-700/50 mt-2">Spacing: {v.spacing} · {v.treesPerAcre} trees/acre</p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-600 text-forest-700 mb-3">
                  <TrendingUp className="w-4 h-4" /> Expected price: <span className="text-forest-900 font-700">₹{pricePerKg}/kg</span>
                </label>
                <input
                  type="range" min="30" max="200" step="5" value={pricePerKg}
                  onChange={(e) => setPricePerKg(Number(e.target.value))}
                  className="w-full accent-forest-600"
                />
                <div className="flex justify-between text-xs text-charcoal-700/40 mt-1">
                  <span>₹30/kg</span><span>₹200/kg</span>
                </div>
              </div>
            </div>

            <div className="bg-forest-800 rounded-3xl p-6 md:p-8 text-cream-50 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                background: "radial-gradient(circle at 70% 30%, rgba(232,150,31,0.5) 0%, transparent 50%)",
              }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-5 h-5 text-honey-300" />
                  <h3 className="text-lg font-600 font-display">Estimated projections</h3>
                </div>

                <div className="space-y-4">
                  <ResultRow label="Total trees needed" value={totalTrees.toLocaleString()} />
                  <ResultRow label="Sapling cost" value={`₹${saplingCost.toLocaleString()}`} />
                  <ResultRow label="Establishment cost (Year 1)" value={`₹${establishmentCost.toLocaleString()}`} highlight />
                  <div className="h-px bg-cream-100/10 my-2" />
                  <ResultRow label="Annual yield (mature)" value={`${annualYield.toLocaleString()} kg`} />
                  <ResultRow label="Annual revenue (mature)" value={`₹${annualRevenue.toLocaleString()}`} highlight />
                  <ResultRow label="Estimated break-even" value={`Year ${breakEvenYear}`} />
                </div>

                <div className="mt-6 p-4 bg-cream-100/5 rounded-2xl border border-cream-100/10">
                  <p className="text-xs text-cream-200/60 leading-relaxed">
                    Estimates are indicative only — actual results depend on soil, climate, management, and market conditions.
                    Book a consultation for a detailed feasibility study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ResultRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-cream-200/70 text-sm">{label}</span>
      <span className={`font-600 font-display ${highlight ? "text-honey-200 text-xl" : "text-cream-50 text-base"}`}>
        {value}
      </span>
    </div>
  );
}

export default OrchardEstimator;
