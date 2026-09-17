import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const polaroids = [
  {
    image: "https://images.pexels.com/photos/3019836/pexels-photo-3019836.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    caption: "Apple harvest · Shopian",
    rotation: -6,
  },
  {
    image: "https://images.pexels.com/photos/33328094/pexels-photo-33328094.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    caption: "Cherry season · Baramulla",
    rotation: 4,
  },
  {
    image: "https://images.pexels.com/photos/15908026/pexels-photo-15908026.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    caption: "Almond blossom · Spring",
    rotation: -3,
  },
  {
    image: "https://images.pexels.com/photos/3127146/pexels-photo-3127146.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    caption: "Nursery saplings · Wazabagh",
    rotation: 7,
  },
  {
    image: "https://images.pexels.com/photos/28939324/pexels-photo-28939324.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    caption: "Apricot harvest · Ladakh",
    rotation: -5,
  },
  {
    image: "https://images.pexels.com/photos/34060258/pexels-photo-34060258.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    caption: "Saffron fields · Pampore",
    rotation: 3,
  },
];

export function PolaroidDeck() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-honey-50 opacity-30 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-forest-50 opacity-40 blur-3xl" />

      <ScrollReveal>
        <div className="container-wide relative">
          <div className="text-center mb-14">
            <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">Moments</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-600 text-forest-900 leading-tight font-display">
              Life across our<br /><span className="italic font-400 text-gradient-green">orchards & nurseries</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {polaroids.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="bg-cream-50 p-3 pb-12 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-400 cursor-pointer hover:z-10"
                style={{
                  transform: hovered === i
                    ? `rotate(0deg) translateY(-12px) scale(1.05)`
                    : `rotate(${p.rotation}deg)`,
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
                }}
              >
                <div className="w-44 h-44 md:w-48 md:h-48 overflow-hidden rounded-sm">
                  <img src={p.image} alt={p.caption} className="w-full h-full object-cover" />
                </div>
                <p className="mt-3 text-center text-sm font-500 text-charcoal-700/70 font-display">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default PolaroidDeck;
