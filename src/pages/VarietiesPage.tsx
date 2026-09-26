import { useEffect, useState } from "react";
import { X, Calendar, Thermometer, Droplets, Mountain, FlaskRound, Sparkles, ArrowUpRight } from "lucide-react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import VarietyArt from "../components/VarietyArt";
import { varieties } from "../data/varieties";

const categories = ["All", "Apple", "Cherry", "Pear", "Plum", "Apricot", "Pomegranate", "Almond"];

export default function VarietiesPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof varieties[0] | null>(null);

  const filtered = filter === "All" ? varieties : varieties.filter((v) => v.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div>
      <PageHero
        image="/images/real/ripe-apples-sky-1600.webp"
        alt="Ripe apples against a Kashmir sky"
        eyebrow="Our Catalog"
        title="Fruit varieties for"
        accent="every season"
        description={<>25+ varieties of fruit saplings — all grafted, certified, and adapted to Kashmir's highland climate.</>}
      />

      <section className="pb-24 md:pb-36 bg-cream-50">
        {/* Sticky filter rail */}
        <div className="sticky top-[5.25rem] z-30 bg-cream-50/85 backdrop-blur-xl border-b border-cream-300/70">
          <div className="container-wide py-4 flex items-center gap-6">
            <span className="hidden md:block text-[10px] font-700 tracking-[0.25em] uppercase text-charcoal-700/70 shrink-0">Filter</span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`chip shrink-0 ${filter === cat ? "chip-active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="hidden lg:block ml-auto numeral italic text-charcoal-700/70 shrink-0">
              {filtered.length} varieties
            </span>
          </div>
        </div>

        <div className="container-wide pt-14 md:pt-20">
          <div key={filter} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 reveal-stagger">
            {filtered.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setSelected(v)}
                className={`group text-left ${i % 3 === 1 ? "lg:mt-12" : ""}`}
              >
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-cream-200 img-zoom">
                  {v.image ? (
                    <img src={v.image} alt={v.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <VarietyArt category={v.category} name={v.name} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-700" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-card text-cream-50 text-[10px] font-700 tracking-[0.2em] uppercase">
                    {v.category}
                  </span>
                  <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between text-cream-50 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="flex items-center gap-2 text-xs"><Calendar className="w-3.5 h-3.5 text-honey-300" /> {v.season}</span>
                    <span className="w-10 h-10 rounded-full bg-cream-50 text-forest-900 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-3xl text-forest-900 leading-tight group-hover:text-honey-700 transition-colors duration-500">{v.name}</h3>
                  <p className="text-sm text-charcoal-700/70 italic font-display mt-0.5">{v.scientificName}</p>
                  <p className="mt-3 text-sm text-charcoal-700/70 leading-relaxed line-clamp-2">{v.description}</p>
                  <div className="mt-4 pt-4 border-t border-cream-300 flex items-center gap-2 text-xs text-charcoal-700/70">
                    <Sparkles className="w-3.5 h-3.5 text-honey-600" />
                    {v.flavorProfile}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-forest-950/85 backdrop-blur-md flex items-end md:items-center justify-center md:p-6 animate-fade-in"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          <div
            className="bg-cream-50 rounded-t-[1.75rem] md:rounded-[1.75rem] max-w-5xl w-full max-h-[92vh] overflow-y-auto md:overflow-hidden shadow-2xl animate-fade-up grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-full">
              {selected.image ? (
                <img src={selected.image} alt={selected.name} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <VarietyArt category={selected.category} name={selected.name} compact />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent md:hidden" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 md:hidden w-11 h-11 rounded-full bg-cream-50/90 backdrop-blur-sm text-forest-900 flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7 md:p-10 md:max-h-[88vh] md:overflow-y-auto relative">
              <button
                onClick={() => setSelected(null)}
                className="hidden md:flex absolute top-6 right-6 w-11 h-11 rounded-full border border-cream-300 text-forest-900 items-center justify-center hover:bg-forest-900 hover:text-cream-50 hover:border-forest-900 transition-all duration-500"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">{selected.category}</span>
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest-900 leading-none pr-12">{selected.name}</h2>
              <p className="mt-2 text-charcoal-700/70 italic font-display text-lg">{selected.scientificName}</p>
              <p className="mt-6 text-charcoal-700/80 leading-relaxed">{selected.description}</p>

              <div className="mt-8 grid grid-cols-2 border-t border-l border-cream-300">
                <InfoRow icon={Calendar} label="Harvest Season" value={selected.season} />
                <InfoRow icon={Sparkles} label="Flavor Profile" value={selected.flavorProfile} />
                <InfoRow icon={Mountain} label="Climate" value={selected.climate} />
                <InfoRow icon={Thermometer} label="Temperature" value={selected.temperature} />
                <InfoRow icon={Droplets} label="Rainfall" value={selected.rainfall} />
                <InfoRow icon={FlaskRound} label="Soil Type" value={selected.soilType} />
              </div>

              <div className="mt-8">
                <h4 className="text-[10px] font-700 text-charcoal-700/70 uppercase tracking-[0.25em] mb-4 font-sans">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.features.map((f) => (
                    <span key={f} className="px-3.5 py-1.5 bg-forest-50 text-forest-800 rounded-full text-sm border border-forest-100">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-5 bg-forest-900 text-cream-100 rounded-2xl text-sm leading-relaxed">
                <span className="font-600 text-honey-300">Yield timeline:</span> {selected.yieldTime} · <span className="font-600 text-honey-300">Origin:</span> {selected.origin}
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection
        title="Need help choosing a variety?"
        subtitle="Our team will match the right varieties to your land's altitude, soil, and water conditions."
        buttonText="Get Variety Advice"
        buttonLink="/contact"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-4 border-r border-b border-cream-300">
      <Icon className="w-4 h-4 text-honey-600 flex-shrink-0 mt-0.5" strokeWidth={1.7} />
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.18em] uppercase text-charcoal-700/70 font-600">{label}</div>
        <div className="text-sm text-forest-900 font-500 mt-0.5">{value}</div>
      </div>
    </div>
  );
}
