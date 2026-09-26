import { useState } from "react";
import { FlaskConical, Beaker, Droplet, Leaf, RotateCcw, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const parameters = [
  { name: "pH Level", icon: Beaker, min: 6.0, max: 7.0, unit: "", optimal: 6.5 },
  { name: "Nitrogen (N)", icon: Leaf, min: 200, max: 400, unit: "kg/ha", optimal: 300 },
  { name: "Phosphorus (P)", icon: Droplet, min: 20, max: 50, unit: "kg/ha", optimal: 35 },
  { name: "Potassium (K)", icon: FlaskConical, min: 150, max: 300, unit: "kg/ha", optimal: 225 },
];

export function SoilLabSpectrometer() {
  const [values, setValues] = useState([6.5, 300, 35, 225]);

  const reset = () => setValues([6.5, 300, 35, 225]);
  const allInRange = values.every((v, i) => v >= parameters[i].min && v <= parameters[i].max);

  return (
    <section className="py-24 md:py-36 bg-cream-100 paper-grain relative overflow-hidden">
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Interactive Tool"
          title="Soil lab"
          accent="spectrometer"
          description="Adjust soil parameters to see how they affect orchard suitability. Green means optimal — red means amendments needed."
        />

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {parameters.map((param, i) => {
            const val = values[i];
            const lo = param.min * 0.5;
            const hi = param.max * 1.5;
            const pct = ((val - param.min) / (param.max - param.min)) * 100;
            const trackPct = ((val - lo) / (hi - lo)) * 100;
            const inRange = val >= param.min && val <= param.max;
            const isOptimal = Math.abs(val - param.optimal) < (param.max - param.min) * 0.15;
            const tone = isOptimal ? "text-forest-700" : inRange ? "text-honey-700" : "text-apple-600";

            return (
              <ScrollReveal key={param.name} delay={i * 90}>
                <div className="h-full bg-cream-50 rounded-[1.5rem] p-6 md:p-8 border border-cream-300/80 hover-lift">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-500 ${
                        isOptimal ? "border-forest-300 bg-forest-50 text-forest-700" : inRange ? "border-honey-300 bg-honey-50 text-honey-700" : "border-apple-200 bg-apple-50 text-apple-600"
                      }`}>
                        <param.icon className="w-5 h-5" strokeWidth={1.6} />
                      </span>
                      <div>
                        <div className="font-display text-2xl text-forest-900 leading-tight">{param.name}</div>
                        <div className="text-xs text-charcoal-700/70">Optimal: {param.min}–{param.max} {param.unit}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`numeral text-3xl leading-none transition-colors duration-500 ${tone}`}>
                        {val.toFixed(param.unit ? 0 : 1)}
                        {param.unit && <span className="text-sm italic ml-1">{param.unit}</span>}
                      </div>
                      <span className={`mt-1.5 text-[10px] font-700 tracking-[0.18em] uppercase flex items-center gap-1 justify-end ${tone}`}>
                        {isOptimal ? (<><Check className="w-3 h-3" /> Optimal</>) : inRange ? "Acceptable" : "Needs amendment"}
                      </span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={lo}
                    max={hi}
                    step={param.unit ? 1 : 0.1}
                    value={val}
                    aria-label={param.name}
                    onChange={(e) => {
                      const newValues = [...values];
                      newValues[i] = Number(e.target.value);
                      setValues(newValues);
                    }}
                    className="range-lux mt-8"
                    style={{ ["--pct" as string]: `${trackPct}%` }}
                  />
                  <div className="flex justify-between text-[11px] text-charcoal-700/70 mt-3">
                    <span>{lo.toFixed(param.unit ? 0 : 1)}</span>
                    <span className="text-forest-600 font-600">Optimal range</span>
                    <span>{hi.toFixed(param.unit ? 0 : 1)}</span>
                  </div>

                  {/* Spectrum bar */}
                  <div className="mt-5 h-1.5 rounded-full bg-gradient-to-r from-apple-200 via-forest-200 to-apple-200 relative">
                    <div className="absolute inset-y-0 bg-forest-400/60 rounded-full" style={{ left: "33%", width: "34%" }} />
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-cream-50 shadow transition-all duration-300 ${
                        isOptimal ? "bg-forest-700" : inRange ? "bg-honey-500" : "bg-apple-500"
                      }`}
                      style={{ left: `calc(${Math.max(0, Math.min(100, 33 + pct * 0.34))}% - 7px)` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-5 flex flex-col sm:flex-row items-stretch gap-4">
            <button onClick={reset} className="btn-lux btn-ghost-dark shrink-0">
              <RotateCcw className="w-4 h-4" /> Reset to optimal
            </button>
            <div className={`flex-1 px-6 py-4 rounded-full flex items-center gap-3 transition-colors duration-500 ${
              allInRange ? "bg-forest-900 text-cream-50" : "bg-apple-50 text-apple-700 border border-apple-200"
            }`}>
              <span className={`w-2 h-2 rounded-full shrink-0 ${allInRange ? "bg-honey-300" : "bg-apple-500"}`} />
              <p className="text-sm font-500">
                {allInRange
                  ? "Soil parameters are within acceptable range for orchard establishment."
                  : "Some parameters need amendment before planting. Book a soil test for detailed analysis."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default SoilLabSpectrometer;
