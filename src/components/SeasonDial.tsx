import { useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ShortCard from "./youtube/ShortCard";
import { useShortPlayer } from "./youtube/ShortPlayer";
import { type ChannelVideo, videoById } from "../data/youtube";
import { KhatambandPattern, RidgeLines } from "./motifs/KashmirMotifs";
import { Link } from "react-router-dom";
import { type Stage, stages, stageOfMonth } from "../data/season";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const centreMonth = (s: Stage) => {
  // circular mean of months (handles Dec–Feb wrap)
  const a = s.months.map((m) => (m / 12) * Math.PI * 2);
  const x = a.reduce((t, v) => t + Math.cos(v), 0);
  const y = a.reduce((t, v) => t + Math.sin(v), 0);
  return ((Math.atan2(y, x) / (Math.PI * 2)) * 12 + 12) % 12;
};

// SVG geometry
const C = 200;
const R_ARC = 150;
const R_LABEL = 182;
const polar = (deg: number, r: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)];
};
const arcPath = (fromDeg: number, toDeg: number, r: number) => {
  const [x1, y1] = polar(fromDeg, r);
  const [x2, y2] = polar(toDeg, r);
  const large = toDeg - fromDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
};

export function SeasonDial() {
  const nowMonth = new Date().getMonth();
  const nowStage = stageOfMonth(nowMonth);
  const [active, setActive] = useState(nowStage);
  const rotRef = useRef(-centreMonth(stages[nowStage]) * 30);
  const [rot, setRot] = useState(rotRef.current);

  const films = useMemo(() => stages.map((s) => videoById(s.film)).filter(Boolean) as ChannelVideo[], []);
  const { open, player } = useShortPlayer(films);

  const select = (i: number) => {
    setActive(i);
    // rotate the shortest way so the chosen stage sits at the top
    const target = -centreMonth(stages[i]) * 30;
    let delta = (target - rotRef.current) % 360;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    rotRef.current += delta;
    setRot(rotRef.current);
  };

  const s = stages[active];
  const film = videoById(s.film);
  const filmIndex = films.findIndex((f) => f.id === s.film);

  return (
    <section id="season" className="dark relative py-24 md:py-36 bg-pine-gradient text-cream-50 overflow-hidden">
      <KhatambandPattern className="text-honey-300/[0.06] [mask-image:radial-gradient(ellipse_at_20%_40%,black,transparent_60%)]" size={48} />
      <RidgeLines className="absolute bottom-0 left-0 h-24 md:h-32 text-honey-300/25" />

      <div className="container-wide relative">
        <SectionHeading
          variant="columns"
          index="06"
          tone="dark"
          eyebrow="The orchard year"
          title="A season for"
          accent="every task"
          description="The Kashmir orchard calendar at a glance — what happens in the field each month, and what our team is doing alongside you. Timings shift with altitude and weather."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Dial */}
          <ScrollReveal variant="scale" className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[520px] aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible" role="group" aria-label="Orchard calendar dial">
                {/* fixed guides */}
                <circle cx={C} cy={C} r={R_ARC + 22} fill="none" stroke="currentColor" className="text-cream-50/10" />
                <circle cx={C} cy={C} r={R_ARC - 22} fill="none" stroke="currentColor" className="text-cream-50/10" strokeDasharray="2 6" />

                <g style={{ transform: `rotate(${rot}deg)`, transformOrigin: `${C}px ${C}px`, transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)" }}>
                  {/* month ticks & labels */}
                  {MONTHS.map((m, i) => {
                    const [tx1, ty1] = polar(i * 30, R_ARC + 14);
                    const [tx2, ty2] = polar(i * 30, R_ARC + 22);
                    const [lx, ly] = polar(i * 30, R_LABEL);
                    const isNow = i === nowMonth;
                    return (
                      <g key={m}>
                        <line x1={tx1} y1={ty1} x2={tx2} y2={ty2} stroke="currentColor" className={isNow ? "text-honey-300" : "text-cream-50/30"} strokeWidth={isNow ? 2 : 1} />
                        <text
                          x={lx}
                          y={ly}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className={`font-sans ${isNow ? "fill-honey-200" : "fill-cream-100/60"}`}
                          style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", transform: `rotate(${-rot}deg)`, transformBox: "fill-box", transformOrigin: "center", transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)" }}
                        >
                          {m.toUpperCase()}
                        </text>
                      </g>
                    );
                  })}

                  {/* stage arcs */}
                  {stages.map((st, i) => {
                    const start = st.months[0] * 30 - 15 + 2.2;
                    const len = st.months.length * 30 - 4.4;
                    const d = arcPath(start, start + len, R_ARC);
                    const isActive = i === active;
                    return (
                      <g key={st.name}>
                        <path d={d} fill="none" stroke={isActive ? st.color : "currentColor"} strokeLinecap="round" strokeWidth={isActive ? 16 : 10} className="transition-all duration-700 text-cream-50/15" />
                        {/* wide invisible hit area */}
                        <path
                          d={d}
                          fill="none"
                          stroke="transparent"
                          strokeWidth={40}
                          className="cursor-pointer"
                          onClick={() => select(i)}
                          aria-hidden="true"
                        />
                      </g>
                    );
                  })}

                  {/* today marker */}
                  {(() => {
                    const [x, y] = polar(nowMonth * 30, R_ARC - 34);
                    return (
                      <g>
                        <circle cx={x} cy={y} r={9} className="fill-honey-300/20 animate-pulse" />
                        <circle cx={x} cy={y} r={4} className="fill-honey-300" />
                      </g>
                    );
                  })()}
                </g>

              </svg>

              {/* centre */}
              <div className="absolute inset-[27%] rounded-full flex flex-col items-center justify-center text-center">
                <span key={`n-${active}`} className="numeral italic text-5xl md:text-6xl text-honey-300 leading-none animate-fade-in">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span key={`t-${active}`} className="mt-3 font-display text-xl md:text-2xl leading-tight animate-fade-up">{s.name}</span>
                <span className="mt-2 text-[10px] font-700 tracking-[0.25em] uppercase text-cream-200/70">
                  {s.months.map((m) => MONTHS[m]).join(" · ")}
                </span>
                {active === nowStage && (
                  <span className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-honey-400/15 text-honey-200 text-[10px] font-700 tracking-[0.18em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-honey-300" /> Now
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Stage detail */}
          <div className="lg:col-span-6">
            <div role="tablist" aria-label="Orchard stages" className="flex flex-wrap gap-2 mb-10">
              {stages.map((st, i) => (
                <button
                  key={st.name}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => select(i)}
                  className={`px-3.5 py-2 rounded-full text-[11px] font-700 tracking-[0.1em] uppercase border transition-all duration-500 ${
                    i === active ? "bg-honey-400 border-honey-400 text-forest-950" : "border-cream-50/20 text-cream-100/75 hover:border-cream-50/60 hover:text-cream-50"
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>

            <div key={active} className="grid sm:grid-cols-[1fr_auto] gap-8 items-start animate-fade-up">
              <div>
                <h3 className="font-display text-4xl md:text-5xl leading-[1.02]">{s.name}</h3>
                <p className="mt-5 text-cream-100/80 leading-relaxed">{s.summary}</p>
                <ul className="mt-7 border-t border-cream-50/10">
                  {s.tasks.map((t) => (
                    <li key={t} className="flex items-center gap-3 py-3.5 border-b border-cream-50/10 text-sm text-cream-100/85">
                      <span className="w-6 h-6 rounded-full border border-honey-400/40 text-honey-300 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" strokeWidth={2.5} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <Link to="/services/book-orchard" className="mt-8 inline-flex link-underline text-sm font-700 text-honey-200">
                  Plan this season with us <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              {film && (
                <div className="w-48 sm:w-44 lg:w-48">
                  <span className="block mb-3 text-[10px] font-700 tracking-[0.25em] uppercase text-honey-300">On the channel</span>
                  <ShortCard video={film} onPlay={() => open(filmIndex)} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {player}
    </section>
  );
}

export default SeasonDial;
