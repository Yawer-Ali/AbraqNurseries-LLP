
import React, { useState } from "react";
import { galleryItems } from "../data/galleryData";
import type { GalleryItem } from "../data/galleryData";
import { Camera, MapPin, X, ZoomIn } from "lucide-react";

export const InteractiveGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ["All", "Trellis & Setup", "Harvest & Fruit", "Drip Irrigation", "Nursery & Soil"];

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((i) => i.category === selectedCategory);

  return (
    <section id="gallery" className="ds-section py-24 bg-muted/30 dark:bg-background relative overflow-hidden border-t border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ds-badge text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Field Evidence & Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            From Kashmir’s Fields & Orchards
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real installations, bumper harvests, drip fertigation projects, and laboratory soil operations across Jammu & Kashmir.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-emerald-900/20"
                    : "bg-card border border-border text-foreground/80 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-2xl hover:border-emerald-600 dark:hover:border-primary/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-1.5"
            >
              <div className="aspect-4/5 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Location Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>{item.location}</span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Text Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-base font-bold leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/10 relative">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-primary mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeItem.location}</span>
                <span>•</span>
                <span>{activeItem.category}</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-foreground mb-2">
                {activeItem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InteractiveGallery;
