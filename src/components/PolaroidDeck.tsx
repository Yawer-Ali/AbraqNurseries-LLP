import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useInView } from "./ScrollReveal";

const polaroids = [
  {
    image: "/images/real/harvest-crates-800.webp",
    caption: "Harvest crates",
    rotation: -6,
  },
  {
    image: "/images/real/first-blossom-800.webp",
    caption: "First blossom · April",
    rotation: 4,
  },
  {
    image: "/images/real/net-install-crew-800.webp",
    caption: "Raising the hail net",
    rotation: -3,
  },
  {
    image: "/images/real/planting-sapling-father-son-800.webp",
    caption: "Planting day · March",
    rotation: 7,
  },
  {
    image: "/images/real/survey-total-station-800.webp",
    caption: "Surveying a new block",
    rotation: -5,
  },
  {
    image: "/images/real/grower-pir-panjal-800.webp",
    caption: "Under the Pir Panjal",
    rotation: 3,
  },
];

export function PolaroidDeck() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, visible } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-24 md:py-36 bg-cream-100 paper-grain relative overflow-hidden">
      <div className="container-wide relative">
        <SectionHeading
          align="center"
          eyebrow="Moments"
          title="Life across our"
          accent="orchards & nurseries"
        />

        <div
          ref={ref}
          className="-mx-5 px-5 pt-4 md:mx-0 md:px-0 flex md:justify-center gap-5 md:gap-0 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-10 md:pb-6"
        >
          {polaroids.map((p, i) => (
            <figure
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative shrink-0 snap-center bg-[#fffdf7] p-3 pb-14 shadow-[0_24px_40px_-24px_rgba(11,26,19,0.45)] hover:shadow-[0_40px_70px_-30px_rgba(11,26,19,0.55)] cursor-pointer md:-mx-2 lg:-mx-1"
              style={{
                zIndex: hovered === i ? 20 : 10 - Math.abs(2.5 - i),
                opacity: visible ? 1 : 0,
                transform: !visible
                  ? `translateY(80px) rotate(${p.rotation * 2}deg)`
                  : hovered === i
                    ? `rotate(0deg) translateY(-18px) scale(1.06)`
                    : `rotate(${p.rotation}deg) translateY(${i % 2 ? 18 : 0}px)`,
                transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${visible && hovered === null ? i * 90 : 0}ms, opacity 0.9s ease ${i * 90}ms, box-shadow 0.4s ease`,
              }}
            >
              {/* tape */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-honey-200/70 rotate-[-3deg] shadow-sm" aria-hidden="true" />
              <div className="w-48 h-52 md:w-[7.5rem] md:h-36 lg:w-40 lg:h-44 xl:w-44 xl:h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.caption}
                  className={`w-full h-full object-cover transition-all duration-700 ${hovered === i ? "saturate-110 scale-105" : "saturate-[0.85]"}`}
                  loading="lazy"
                />
              </div>
              <figcaption className="absolute left-2 right-2 bottom-4 text-center font-display italic text-lg md:text-sm lg:text-base xl:text-lg leading-tight text-forest-900/80">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PolaroidDeck;
