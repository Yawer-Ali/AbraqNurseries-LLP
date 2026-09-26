import { useState } from "react";
import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { KhatambandPattern } from "./motifs/KashmirMotifs";
import { projects } from "../data/projects";

/** Approximate relative positions of Kashmir valley districts (illustrative, not to scale). */
const districts: Record<string, [number, number]> = {
  Kupwara: [250, 150],
  Bandipora: [415, 165],
  Baramulla: [205, 285],
  Ganderbal: [560, 245],
  Srinagar: [480, 318],
  Budgam: [380, 380],
  Pulwama: [540, 420],
  Shopian: [420, 490],
  Kulgam: [555, 520],
  Anantnag: [705, 480],
};

const districtOf = (location: string) => location.split(",")[0].trim();

export function ValleyMap() {
  const pins = projects.filter((p) => districts[districtOf(p.location)]);
  const [active, setActive] = useState(0);
  const current = pins[active];
  const activeDistrict = current ? districtOf(current.location) : "";

  return (
    <section className="dark relative py-24 md:py-32 bg-pine-gradient text-cream-50 overflow-hidden">
      <KhatambandPattern className="text-honey-300/[0.05]" size={56} />
      <div className="container-wide relative">
        <SectionHeading
          variant="watermark"
          watermark="Valley"
          tone="dark"
          eyebrow="Where we work"
          title="Across the valley,"
          accent="district by district"
          description="Select a pin to see the project behind it."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Map */}
          <ScrollReveal variant="scale" className="lg:col-span-7">
            <div className="relative rounded-[1.75rem] border border-honey-400/15 bg-forest-950/40 p-3 md:p-6">
              <svg viewBox="100 70 720 560" className="w-full h-auto" role="group" aria-label="Illustrative map of Kashmir valley districts with Abraq projects">
                {/* surrounding ranges — contour rings */}
                <g fill="none" stroke="currentColor" className="text-honey-300/[0.14]" pointerEvents="none">
                  {[0, 1, 2, 3].map((i) => (
                    <path
                      key={i}
                      strokeWidth="1"
                      d={`M ${120 - i * 26} ${300 + i * 6}
                          C ${150 - i * 26} ${120 - i * 22}, ${420} ${70 - i * 24}, ${560 + i * 10} ${130 - i * 22}
                          S ${840 + i * 22} ${360}, ${760 + i * 18} ${545 + i * 18}
                          S ${420} ${640 + i * 12}, ${250 - i * 12} ${520 + i * 16}
                          S ${100 - i * 24} ${400}, ${120 - i * 26} ${300 + i * 6} Z`}
                    />
                  ))}
                </g>
                {/* valley floor */}
                <path
                  d="M 150 300 C 170 150, 420 95, 560 150 S 800 360, 740 520 S 430 610, 280 505 S 130 400, 150 300 Z"
                  pointerEvents="none"
                  className="fill-forest-800/60"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  style={{ color: "rgba(201,168,106,0.35)" }}
                />
                {/* Wular lake */}
                <ellipse cx="335" cy="215" rx="40" ry="22" className="fill-forest-600/60" pointerEvents="none" />
                <text x="335" y="219" textAnchor="middle" className="fill-cream-100/60 font-display italic" style={{ fontSize: 13 }}>Wular</text>
                {/* Jhelum */}
                <path
                  d="M 735 470 C 660 450, 610 430, 560 390 S 500 330, 470 312 S 400 250, 360 222 S 270 250, 220 275 S 150 292, 120 300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="1 7"
                  className="text-honey-300/70"
                />
                <text x="610" y="400" className="fill-honey-200/70 font-display italic" style={{ fontSize: 14 }} transform="rotate(28 610 400)">Jhelum</text>

                {/* districts */}
                {Object.entries(districts).map(([name, [x, y]]) => {
                  const idx = pins.findIndex((p) => districtOf(p.location) === name);
                  const hasProject = idx !== -1;
                  const isActive = name === activeDistrict;
                  if (!hasProject) {
                    return (
                      <g key={name}>
                        <circle cx={x} cy={y} r={3} className="fill-cream-50/35" />
                        <text x={x} y={y + 20} textAnchor="middle" className="fill-cream-100/55 font-sans" style={{ fontSize: 11, letterSpacing: "0.12em", fontWeight: 600 }}>
                          {name.toUpperCase()}
                        </text>
                      </g>
                    );
                  }
                  return (
                    <g
                      key={name}
                      role="button"
                      tabIndex={0}
                      aria-label={`${name}: ${pins[idx].title}`}
                      aria-pressed={isActive}
                      onClick={() => setActive(idx)}
                      onMouseEnter={() => setActive(idx)}
                      onFocus={() => setActive(idx)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(idx)}
                      className="cursor-pointer outline-none"
                    >
                      {/* generous hit target covering pin + label */}
                      <rect x={x - 60} y={y - 42} width={120} height={64} rx={18} fill="transparent" />
                      {isActive && <circle cx={x} cy={y} r={22} pointerEvents="none" className="fill-honey-400/20 animate-ping" style={{ transformOrigin: `${x}px ${y}px`, transformBox: "view-box" }} />}
                      <circle cx={x} cy={y} r={isActive ? 12 : 9} className={`transition-all duration-500 ${isActive ? "fill-honey-300" : "fill-honey-400/80"}`} />
                      <circle cx={x} cy={y} r={3.5} className="fill-forest-950" />
                      <text
                        x={x}
                        y={y - 20}
                        textAnchor="middle"
                        className={`font-display transition-all duration-500 ${isActive ? "fill-cream-50" : "fill-cream-100/85"}`}
                        style={{ fontSize: isActive ? 20 : 16 }}
                      >
                        {name}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-2 text-[10px] tracking-[0.2em] uppercase text-cream-200/60">
                <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-honey-400" /> Project</span>
                <span>Illustrative · not to scale</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Project card */}
          <div className="lg:col-span-5">
            {current && (
              <div key={current.id} className="animate-fade-up">
                <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden">
                  <img src={current.image} alt={current.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-card text-[10px] font-700 tracking-[0.2em] uppercase">
                    {current.category}
                  </span>
                  <span className="absolute bottom-4 right-5 numeral italic text-5xl text-cream-50/85 leading-none">{current.year}</span>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-cream-200/70 tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-honey-300" /> {current.location} · {current.area}
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl leading-[1.05]">{current.title}</h3>
                <p className="mt-4 text-sm text-cream-100/75 leading-relaxed line-clamp-4">{current.description}</p>
              </div>
            )}

            {/* list (also the mobile/touch fallback) */}
            <ul className="mt-8 border-t border-cream-50/10">
              {pins.map((p, i) => (
                <li key={p.id}>
                  <button
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`w-full flex items-center justify-between gap-4 py-3 border-b border-cream-50/10 text-left text-sm transition-colors duration-300 ${
                      i === active ? "text-honey-200" : "text-cream-100/75 hover:text-cream-50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${i === active ? "bg-honey-300" : "bg-cream-50/30"}`} />
                      {districtOf(p.location)}
                    </span>
                    <span className="text-xs text-cream-200/60 truncate">{p.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValleyMap;
