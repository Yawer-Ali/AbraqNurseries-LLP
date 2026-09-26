import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ShortCard from "./youtube/ShortCard";
import YouTubeMark from "./youtube/YouTubeMark";
import { useShortPlayer } from "./youtube/ShortPlayer";
import { YOUTUBE_CHANNEL_URL, type VideoCategory, videosIn } from "../data/youtube";

// The orchard's life, in the order it happens in the field
const stages: { category: VideoCategory; label: string; blurb: string }[] = [
  { category: "Layout & Infrastructure", label: "Layout", blurb: "Lines, poles and trellis before a single tree goes in." },
  { category: "Plantation", label: "Plantation", blurb: "Feathered saplings set along the drip line." },
  { category: "Bloom & Growth", label: "Bloom", blurb: "First sprouts, spring blossom and fruit set." },
  { category: "Harvest", label: "Harvest", blurb: "Laden rows, colour on the branch and picking day." },
];

const journey = stages.flatMap((s) => videosIn(s.category));

export function VideoSection() {
  const { open, player } = useShortPlayer(journey);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  let running = 0;

  return (
    <section className="py-24 md:py-36 bg-forest-950 text-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_10%,rgba(201,168,106,0.12),transparent)]" />
      <div className="container-wide relative">
        <SectionHeading
          index="08"
          variant="watermark"
          watermark="Season"
          tone="dark"
          eyebrow="Watch & Learn"
          title="Our process"
          accent="in motion"
          description="Real footage from our orchards across Kashmir — from marking the first line to picking the first crate. Follow the season, stage by stage."
          aside={
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-lux btn-ghost-light">
              <YouTubeMark className="w-4 h-4" /> Our YouTube channel <ArrowUpRight className="w-4 h-4" />
            </a>
          }
        />
      </div>

      {/* Film strip — bleeds to the right edge */}
      <ScrollReveal variant="fade">
        <div
          ref={trackRef}
          className="relative flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4 pl-5 sm:pl-8 lg:pl-[max(3rem,calc((100vw_-_1320px)/2_+_3rem))] pr-5 scroll-pl-5 sm:scroll-pl-8 lg:scroll-pl-[max(3rem,calc((100vw_-_1320px)/2_+_3rem))]"
          role="region"
          aria-label="Orchard journey videos"
        >
          {stages.map((stage, si) => {
            const vids = videosIn(stage.category);
            const start = running;
            running += vids.length;
            return (
              <div key={stage.category} className="flex gap-4 md:gap-5 shrink-0">
                {/* Stage marker */}
                <div className="snap-start shrink-0 w-44 md:w-56 flex flex-col justify-end pb-2 pr-2 border-l border-honey-400/25 pl-5">
                  <span className="numeral italic text-5xl md:text-6xl text-honey-300/80 leading-none">0{si + 1}</span>
                  <span className="mt-4 font-display text-3xl md:text-4xl">{stage.label}</span>
                  <p className="mt-3 text-sm text-cream-200/55 leading-relaxed">{stage.blurb}</p>
                  <span className="mt-5 text-[10px] tracking-[0.25em] uppercase text-honey-300/80">
                    {vids.length} {vids.length === 1 ? "film" : "films"}
                  </span>
                </div>
                {vids.map((v, vi) => (
                  <div key={v.id} className="snap-start shrink-0 w-[62vw] sm:w-60 md:w-64">
                    <ShortCard video={v} index={start + vi} onPlay={() => open(start + vi)} showCaption />
                  </div>
                ))}
              </div>
            );
          })}
          <div className="shrink-0 w-4" aria-hidden="true" />
        </div>
      </ScrollReveal>

      <div className="container-wide relative mt-8 flex items-center gap-6">
        <div className="flex-1 h-px bg-cream-50/10 relative overflow-hidden">
          <span className="absolute inset-y-0 left-0 bg-honey-400 transition-[width] duration-300" style={{ width: `${Math.max(8, progress * 100)}%` }} />
        </div>
        <div className="flex gap-2">
          <button onClick={() => scrollBy(-1)} className="w-12 h-12 rounded-full border border-cream-50/20 flex items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500" aria-label="Scroll back">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button onClick={() => scrollBy(1)} className="w-12 h-12 rounded-full border border-cream-50/20 flex items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500" aria-label="Scroll forward">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {player}
    </section>
  );
}

export default VideoSection;
