import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { galleryItems } from "../data/gallery";
import ChannelLibrary from "../components/ChannelLibrary";

const categories = ["All", "orchard", "bloom", "harvest", "work", "people", "landscape"];

const categoryLabels: Record<string, string> = {
  orchard: "Orchards",
  bloom: "Bloom",
  harvest: "Harvest",
  work: "Field work",
  people: "People",
  landscape: "Landscapes",
};

// Varying tile heights create a natural masonry rhythm
const heights = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-[5/6]"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const PAGE = 24;
  const [visible, setVisible] = useState(PAGE);
  const touchX = useRef<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);
  const selected = index !== null ? filtered[index] : null;
  const setSelected = (item: typeof galleryItems[0] | null) => setIndex(item ? filtered.indexOf(item) : null);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, go]);

  // Preload neighbours so next/previous feel instant
  useEffect(() => {
    if (index === null) return;
    [1, -1].forEach((d) => {
      const n = filtered[(index + d + filtered.length) % filtered.length];
      if (n) new Image().src = n.image;
    });
  }, [index, filtered]);

  return (
    <div>
      <PageHero
        image="/images/real/aerial-orchard-valley-1600.webp"
        alt="Aerial view of orchards across the Kashmir valley"
        eyebrow="Gallery"
        title="Kashmir through"
        accent="our lens"
      />

      <section className="py-20 md:py-28 bg-cream-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat); setVisible(PAGE); }}
                  aria-pressed={filter === cat}
                  className={`chip shrink-0 ${filter === cat ? "chip-active" : ""}`}
                >
                  {cat === "All" ? "All" : categoryLabels[cat]}
                </button>
              ))}
            </div>
            <span className="numeral italic text-charcoal-700/70">{filtered.length} frames</span>
          </div>

          <div key={filter} className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4 reveal-stagger">
            {filtered.slice(0, visible).map((item, i) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`group relative block w-full break-inside-avoid rounded-[1.25rem] overflow-hidden bg-cream-200 ${heights[i % heights.length]}`}
              >
                <img
                  src={item.image.replace("-1600.webp", "-800.webp")}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream-50/90 text-forest-900 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Plus className="w-4 h-4" />
                </span>
                <span className="absolute bottom-4 left-4 right-4 text-left text-cream-50 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="block text-[10px] tracking-[0.22em] uppercase text-honey-300">{categoryLabels[item.category]}</span>
                  <span className="block mt-1 font-display text-lg leading-snug line-clamp-2">{item.alt}</span>
                </span>
              </button>
            ))}
          </div>

          {visible < filtered.length && (
            <div className="mt-14 flex flex-col items-center gap-4">
              <span className="numeral italic text-charcoal-700/70">
                Showing {Math.min(visible, filtered.length)} of {filtered.length}
              </span>
              <button onClick={() => setVisible((v) => v + PAGE)} className="btn-lux btn-ghost-dark">
                Show more photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Every film from the company YouTube channel */}
      <ChannelLibrary />

      {selected && index !== null && createPortal(
        <div
          className="fixed inset-0 z-[60] bg-forest-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelected(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 rounded-full border border-cream-50/25 text-cream-50 flex items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          {filtered.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-cream-50/25 text-cream-50 items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500 z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-cream-50/25 text-cream-50 items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500 z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          <figure className="relative max-w-5xl w-full md:px-20" onClick={(e) => e.stopPropagation()}>
            <img key={selected.image} src={selected.image} alt={selected.alt} className="w-full max-h-[76vh] object-contain rounded-[1.25rem] animate-fade-in" />
            <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
              <span className="numeral italic text-honey-300">
                {String(index + 1).padStart(2, "0")}
                <span className="text-cream-50/60"> / {String(filtered.length).padStart(2, "0")}</span>
              </span>
              <span className="w-6 h-px bg-cream-50/30" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-honey-300">{categoryLabels[selected.category]}</span>
              <span className="w-6 h-px bg-cream-50/30" />
              <span className="font-display italic text-xl text-cream-100/85">{selected.alt}</span>
            </figcaption>
            <div className="md:hidden mt-5 flex justify-center gap-3">
              <button onClick={() => go(-1)} className="w-12 h-12 rounded-full border border-cream-50/25 text-cream-50 flex items-center justify-center" aria-label="Previous photo">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => go(1)} className="w-12 h-12 rounded-full border border-cream-50/25 text-cream-50 flex items-center justify-center" aria-label="Next photo">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </figure>
        </div>,
        document.body,
      )}
    </div>
  );
}
