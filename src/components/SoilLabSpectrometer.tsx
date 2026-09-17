import { useState } from "react";
import { FlaskConical, Beaker, Droplet, Leaf, RotateCcw, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const parameters = [
  { name: "pH Level", icon: Beaker, min: 6.0, max: 7.0, unit: "", optimal: 6.5 },
  { name: "Nitrogen (N)", icon: Leaf, min: 200, max: 400, unit: "kg/ha", optimal: 300 },
  { name: "Phosphorus (P)", icon: Droplet, min: 20, max: 50, unit: "kg/ha", optimal: 35 },
  { name: "Potassium (K)", icon: FlaskConical, min: 150, max: 300, unit: "kg/ha", optimal: 225 },
];

export function SoilLabSpectrometer() {
  const [values, setValues] = useState([6.5, 300, 35, 225]);

  const reset = () => setValues([6.5, 300, 35, 225]);

  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-forest-50 opacity-40 blur-3xl" />
      <ScrollReveal>
        <div className="container-wide relative">
          <div className="max-w-2xl mb-12">
            <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">Interactive Tool</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-600 text-forest-900 leading-tight font-display">
              Soil lab<br /><span className="italic font-400 text-gradient-green">spectrometer</span>
            </h2>
            <p className="mt-4 text-charcoal-700/70 text-lg leading-relaxed">
              Adjust soil parameters to see how they affect orchard suitability. Green means optimal — red means amendments needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {parameters.map((param, i) => {
              const val = values[i];
  const pct = ((val - param.min) / (param.max - param.min)) * 100;
  const inRange = val >= param.min && val <= param.max;
  const isOptimal = Math.abs(val - param.optimal) < (param.max - param.min) * 0.15;

              return (
                <div key={param.name} className="bg-cream-100 rounded-2xl p-5 border border-cream-200 hover-lift transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                        isOptimal ? "bg-forest-100 text-forest-600" : inRange ? "bg-honey-100 text-honey-600" : "bg-apple-100 text-apple-600"
                      }`}>
                        <param.icon className="w-5 h-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <div className="font-600 text-charcoal-800 text-sm">{param.name}</div>
                        <div className="text-xs text-charcoal-700/50">Optimal: {param.min}–{param.max} {param.unit}</div>
                      </div>
                    </div>
                    <div className={`text-right`}>
                      <div className={`text-xl font-700 font-display ${isOptimal ? "text-forest-600" : inRange ? "text-honey-600" : "text-apple-600"}`}>
                        {val.toFixed(param.unit ? 0 : 1)}{param.unit && ` ${param.unit}`}
                      </div>
                      {isOptimal ? (
                        <span className="text-xs text-forest-500 font-500 flex items-center gap-0.5 justify-end">
                          <Check className="w-3 h-3" /> Optimal
                        </span>
                      ) : inRange ? (
                        <span className="text-xs text-honey-500 font-500">Acceptable</span>
                      ) : (
                        <span className="text-xs text-apple-500 font-500">Needs amendment</span>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="range"
                      min={param.min * 0.5}
                      max={param.max * 1.5}
                      step={param.unit ? 1 : 0.1}
                      value={val}
                      onChange={(e) => {
                        const newValues = [...values];
                        newValues[i] = Number(e.target.value);
                        setValues(newValues);
                      }}
                      className="w-full accent-forest-600"
                    />
                    <div className="flex justify-between text-xs text-charcoal-700/40 mt-1">
                      <span>{(param.min * 0.5).toFixed(param.unit ? 0 : 1)}</span>
                      <span className="text-forest-500 font-500">Optimal range</span>
                      <span>{(param.max * 1.5).toFixed(param.unit ? 0 : 1)}</span>
                    </div>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-cream-200 overflow-hidden relative">
                    <div className="absolute h-full bg-forest-200" style={{ left: "33%", width: "34%" }} />
                    <div
                      className={`absolute h-full w-3 rounded-full border-2 border-cream-50 transition-all ${
                        isOptimal ? "bg-forest-500" : inRange ? "bg-honey-400" : "bg-apple-500"
                      }`}
                      style={{ left: `calc(${pct}% - 6px)` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-cream-100 text-charcoal-700 rounded-full text-sm font-500 hover:bg-cream-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Reset to optimal
              </button>
            </div>
            <div className={`p-4 rounded-2xl flex-1 min-w-[200px] transition-colors ${
              values.every((v, i) => v >= parameters[i].min && v <= parameters[i].max)
                ? "bg-forest-50 text-forest-700 border border-forest-100"
                : "bg-apple-50 text-apple-700 border border-apple-100"
            }`}>
              <p className="text-sm font-500">
                {values.every((v, i) => v >= parameters[i].min && v <= parameters[i].max)
                  ? "Soil parameters are within acceptable range for orchard establishment."
                  : "Some parameters need amendment before planting. Book a soil test for detailed analysis."}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SoilLabSpectrometer;
