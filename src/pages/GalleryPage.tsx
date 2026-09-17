import { useState } from "react";
import { X } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { galleryItems } from "../data/gallery";
import { ProcessVideoGallery } from "../components/ProcessVideoGallery";

const categories = ["All", "orchard", "nursery", "landscape", "harvest"];

const categoryLabels: Record<string, string> = {
  orchard: "Orchards",
  nursery: "Nursery",
  landscape: "Landscapes",
  harvest: "Harvest",
};

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="pt-20">
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/15879648/pexels-photo-15879648.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Srinagar mountain range at twilight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">Gallery</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display">
              Kashmir through<br /><span className="italic font-400 text-honey-200">our lens</span>
            </h1>
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
                  className={`px-4 py-2 rounded-full text-sm font-500 transition-all duration-300 ${filter === cat ? "bg-forest-600 text-cream-50" : "bg-cream-100 text-charcoal-700 hover:bg-cream-200"
                    }`}
                >
                  {cat === "All" ? "All" : categoryLabels[cat]}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="group relative rounded-2xl overflow-hidden aspect-square bg-cream-200 hover-lift transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-cream-50 text-xs font-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {categoryLabels[item.category]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Process Video Gallery Section */}
      <ProcessVideoGallery />

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal-900/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-cream-100 hover:text-cream-50 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selected.image} alt={selected.alt} className="w-full rounded-2xl" />
            <p className="text-cream-200/80 text-sm mt-4 text-center">{selected.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
