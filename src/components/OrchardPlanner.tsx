import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { ModernConfigurator } from "./ModernConfigurator";
import OrchardEstimator from "./OrchardEstimator";
import { KhatambandPattern } from "./motifs/KashmirMotifs";

type Mode = "apple" | "fruit";

const modes: { key: Mode; label: string; unit: string; blurb: string }[] = [
  {
    key: "apple",
    label: "High-density apple",
    unit: "Priced by kanal",
    blurb: "Rootstock, trellis, drip and hail-net — a full turnkey quotation with your MIDH subsidy estimate and a downloadable PDF.",
  },
  {
    key: "fruit",
    label: "Other fruit orchards",
    unit: "Estimated by acre",
    blurb: "Cherry, pear, plum, apricot, almond, pomegranate or traditional apple — rough establishment cost, yield and revenue.",
  },
];

/** One planning section combining the kanal-based apple configurator and the acre-based fruit estimator. */
export function OrchardPlanner() {
  const [mode, setMode] = useState<Mode>("apple");

  return (
    <section id="configurator" className="dark ds-section py-24 md:py-36 bg-pine-gradient text-foreground overflow-hidden">
      <KhatambandPattern className="text-honey-300/[0.07] [mask-image:radial-gradient(ellipse_at_70%_20%,black,transparent_70%)]" size={52} />

      <div className="ds-container relative">
        <SectionHeading
          variant="columns"
          index="05"
          tone="dark"
          eyebrow="Plan your orchard"
          title="Estimate your orchard"
          accent="investment & subsidy"
          accentStyle="underline"
          description="Configure your land, genetics and infrastructure for an instant, transparent cost breakdown — or get a quick estimate for any other fruit."
        />

        {/* Mode switch */}
        <ScrollReveal>
          <div role="tablist" aria-label="Choose a planner" className="grid sm:grid-cols-2 gap-3 mb-10 md:mb-12">
            {modes.map((m, i) => {
              const active = mode === m.key;
              return (
                <button
                  key={m.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setMode(m.key)}
                  className={`group relative text-left rounded-[1.25rem] border p-5 md:p-6 transition-all duration-500 overflow-hidden ${
                    active ? "border-honey-400/70 bg-honey-400/10" : "border-cream-50/15 hover:border-cream-50/35"
                  }`}
                >
                  <span className={`absolute left-0 top-0 h-full w-[3px] bg-honey-400 origin-top transition-transform duration-500 ${active ? "scale-y-100" : "scale-y-0"}`} />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="numeral italic text-honey-300/80">0{i + 1}</span>
                      <p className="mt-1 font-display text-2xl md:text-3xl text-cream-50">{m.label}</p>
                      <p className="mt-1 text-[10px] font-700 tracking-[0.22em] uppercase text-honey-300">{m.unit}</p>
                    </div>
                    <span className={`mt-1 w-5 h-5 rounded-full border-2 shrink-0 transition-all duration-500 ${active ? "border-honey-300 bg-honey-300 shadow-[inset_0_0_0_3px_#0f231a]" : "border-cream-50/35"}`} />
                  </div>
                  <p className="mt-3 text-sm text-cream-200/70 leading-relaxed max-w-md">{m.blurb}</p>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div key={mode} className="animate-fade-up">
          {mode === "apple" ? <ModernConfigurator embedded /> : <OrchardEstimator embedded />}
        </div>
      </div>
    </section>
  );
}

export default OrchardPlanner;
