import { useState } from "react";
import { X, Calendar, Thermometer, Droplets, Mountain, FlaskRound, Sparkles } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import { varieties } from "../data/varieties";

const categories = ["All", "Apple", "Cherry", "Pear", "Plum", "Apricot", "Pomegranate", "Almond"];

export default function VarietiesPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof varieties[0] | null>(null);

  const filtered = filter === "All" ? varieties : varieties.filter((v) => v.category === filter);

  return (
    <div className="pt-20">
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/18607500/pexels-photo-18607500.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Apple orchard in Kashmir"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">Our Catalog</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display text-balance">
              Fruit varieties for<br /><span className="italic font-400 text-honey-200">every season</span>
            </h1>
            <p className="mt-5 text-cream-100/80 text-lg max-w-xl">
              25+ varieties of fruit saplings — all grafted, certified, and
              adapted to Kashmir's highland climate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-500 transition-all duration-300 ${
                    filter === cat
                      ? "bg-forest-600 text-cream-50"
                      : "bg-cream-100 text-charcoal-700 hover:bg-cream-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelected(v)}
                  className="group text-left bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 hover:border-forest-200 hover:shadow-xl transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-forest-600/90 backdrop-blur-sm text-cream-50 rounded-full text-xs font-600">
                      {v.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-600 text-forest-900 font-display">{v.name}</h3>
                    <p className="text-xs text-charcoal-700/50 italic mt-1">{v.scientificName}</p>
                    <p className="mt-3 text-sm text-charcoal-700/70 leading-relaxed line-clamp-2">{v.description}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-charcoal-700/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {v.season}
                      </span>
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        {v.flavorProfile}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal-900/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-cream-50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-cream-50/90 backdrop-blur-sm p-2 rounded-full text-charcoal-700 hover:bg-cream-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-600">{selected.category}</span>
                <span className="text-charcoal-700/50 text-sm italic">{selected.scientificName}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-600 text-forest-900 font-display">{selected.name}</h2>
              <p className="mt-4 text-charcoal-700/80 leading-relaxed">{selected.description}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <InfoRow icon={Calendar} label="Harvest Season" value={selected.season} />
                <InfoRow icon={Sparkles} label="Flavor Profile" value={selected.flavorProfile} />
                <InfoRow icon={Mountain} label="Climate" value={selected.climate} />
                <InfoRow icon={Thermometer} label="Temperature" value={selected.temperature} />
                <InfoRow icon={Droplets} label="Rainfall" value={selected.rainfall} />
                <InfoRow icon={FlaskRound} label="Soil Type" value={selected.soilType} />
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-600 text-forest-700 uppercase tracking-wide mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.features.map((f) => (
                    <span key={f} className="px-3 py-1.5 bg-forest-50 text-forest-700 rounded-full text-sm border border-forest-100">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-honey-50 rounded-2xl border border-honey-100">
                <p className="text-sm text-charcoal-700/80">
                  <span className="font-600 text-honey-700">Yield timeline:</span> {selected.yieldTime} · <span className="font-600 text-honey-700">Origin:</span> {selected.origin}
                </p>
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
    <div className="flex items-center gap-3 p-3 bg-cream-100 rounded-xl">
      <Icon className="w-5 h-5 text-forest-500 flex-shrink-0" strokeWidth={1.8} />
      <div>
        <div className="text-xs text-charcoal-700/50 font-500">{label}</div>
        <div className="text-sm text-charcoal-800 font-500">{value}</div>
      </div>
    </div>
  );
}
