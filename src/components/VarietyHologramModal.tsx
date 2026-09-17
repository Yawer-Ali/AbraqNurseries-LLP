
import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  Sun, 
  CheckCircle2,
  Trees,
  Activity
} from "lucide-react";
import type { AppleVariety } from "../data/varietiesData";

interface VarietyHologramModalProps {
  variety: AppleVariety | null;
  onClose: () => void;
  onSelectForEstimator: (varietyName: string) => void;
}

export const VarietyHologramModal: React.FC<VarietyHologramModalProps> = ({
  variety,
  onClose,
  onSelectForEstimator
}) => {
  const [ripeningStage, setRipeningStage] = useState<number>(100); // 0 = Early Pink Bud, 50 = Color Break, 100 = Peak Harvest

  if (!variety) return null;

  // Dynamic scientific measurements computed from ripening stage
  const brixSugar = (11.2 + (ripeningStage / 100) * 3.8).toFixed(1);
  const fleshFirmness = (9.2 - (ripeningStage / 100) * 1.8).toFixed(1);
  const anthocyaninCover = Math.round(35 + (ripeningStage / 100) * 65);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-background text-white border border-primary/25 shadow-2xl shadow-emerald-950/60 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        {/* Top Floating Glow Rim */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-amber-400 to-teal-400" />

        {/* Modal Header */}
        <div className="p-6 sm:px-8 sm:py-6 border-b border-border/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-accent text-primary flex items-center justify-center border border-primary/25 shadow-sm">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                <Activity className="w-3 h-3" /> Phenology & Fruit Quality Spectrometry
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-none mt-0.5">
                {variety.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-alpine-900 border border-border text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive 3D Apple Visual & Ripening Slider */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-primary/20 bg-black shadow-2xl group">
                <img
                  src={variety.image}
                  alt={variety.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    filter: `saturate(${0.4 + (ripeningStage / 100) * 0.95}) brightness(${0.9 + (ripeningStage / 100) * 0.22}) contrast(${0.9 + (ripeningStage / 100) * 0.28})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-primary/90">
                  <span className="font-bold">Color Index: {anthocyaninCover}% Solid Blush</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px]">
                    {variety.origin}
                  </span>
                </div>
              </div>

              {/* Ripening Interactive Color Slider */}
              <div className="bg-alpine-900/90 p-4 rounded-2xl border border-border space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-300">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Sun className="w-3.5 h-3.5" /> Sunlight Color & Ripening Timeline:
                  </span>
                  <span className="font-mono text-primary font-bold">{ripeningStage}% Matured</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ripeningStage}
                  onChange={(e) => setRipeningStage(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>July (Cell Division)</span>
                  <span>August (Sugar Build)</span>
                  <span className="text-primary font-bold">September (Peak Harvest)</span>
                </div>
              </div>

              {/* Real-Time Fruit Quality Scientific Telemetry */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-alpine-900/90 border border-border text-center">
                  <p className="text-[10px] uppercase text-zinc-400 font-bold">Brix Sweetness</p>
                  <p className="font-display text-lg font-bold text-amber-400">{brixSugar}° Bx</p>
                </div>
                <div className="p-3 rounded-xl bg-alpine-900/90 border border-border text-center">
                  <p className="text-[10px] uppercase text-zinc-400 font-bold">Flesh Pressure</p>
                  <p className="font-display text-lg font-bold text-blue-400">{fleshFirmness} kg/cm²</p>
                </div>
                <div className="p-3 rounded-xl bg-alpine-900/90 border border-border text-center">
                  <p className="text-[10px] uppercase text-zinc-400 font-bold">CA Storage Life</p>
                  <p className="font-display text-lg font-bold text-primary">8–10 Mos</p>
                </div>
              </div>
            </div>

            {/* Right: Flavor, Economics & Agronomy Data */}
            <div className="md:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-alpine-900/80 border border-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    Grade-A Farmgate Rate
                  </span>
                  <p className="font-display text-xl font-bold text-primary">
                    {variety.marketRateGradeA}
                  </p>
                  <p className="text-[10px] text-zinc-500">Peak Mandi Realization</p>
                </div>

                <div className="p-4 rounded-2xl bg-alpine-900/80 border border-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    Chilling Requirement
                  </span>
                  <p className="font-display text-xl font-bold text-blue-400">
                    {variety.chillingHours}
                  </p>
                  <p className="text-[10px] text-zinc-500">Hours below 7.2°C</p>
                </div>
              </div>

              {/* Flavor Profile */}
              <div className="p-4 rounded-2xl bg-alpine-900/80 border border-border space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                  Flavor & Texture Architecture
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
                  {variety.flavor}
                </p>
              </div>

              {/* Agronomic Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                  Commercial Agronomy Strengths
                </span>
                <div className="space-y-1.5">
                  {variety.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-border/80 bg-alpine-900/70 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-zinc-400">
            Supplied with European phytosanitary quarantine certification & root bath treatment.
          </span>

          <button
            onClick={() => {
              onSelectForEstimator(variety.name);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-primary hover:brightness-110 text-white text-xs font-bold transition-all shadow-lg shadow-alpine-950/30 flex items-center justify-center gap-2 cursor-pointer ds-shimmer"
          >
            <Trees className="w-4 h-4" />
            <span>Select {variety.name.split(" ")[0]} in Orchard Wizard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VarietyHologramModal;
