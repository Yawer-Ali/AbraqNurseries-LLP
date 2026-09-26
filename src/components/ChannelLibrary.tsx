import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ShortCard from "./youtube/ShortCard";
import YouTubeMark from "./youtube/YouTubeMark";
import { useShortPlayer } from "./youtube/ShortPlayer";
import { YOUTUBE_CHANNEL_URL, channelVideos, videoCategories, type VideoCategory } from "../data/youtube";

type Filter = "All" | VideoCategory;

/** Every video from the company channel, filterable by stage/topic. */
export function ChannelLibrary() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = useMemo(
    () => (filter === "All" ? channelVideos : channelVideos.filter((v) => v.category === filter)),
    [filter],
  );
  const { open, player } = useShortPlayer(list);
  const totalMinutes = Math.round(channelVideos.reduce((s, v) => s + v.duration, 0) / 60);

  return (
    <section id="process-videos" className="py-24 md:py-36 bg-pine-gradient text-cream-50 relative overflow-hidden">
      <div className="container-wide relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <span className="eyebrow !text-honey-300">The Abraq Film Library</span>
            <h2 className="display-lg mt-6 text-balance">
              Watch the orchard <span className="serif-italic text-gradient-gold">come to life</span>
            </h2>
            <p className="mt-6 text-cream-200/65 text-base md:text-lg leading-relaxed max-w-2xl">
              Layout, plantation, bloom, harvest — and the growers and specialists behind them. Every film from our channel, in one place.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end flex flex-col items-start lg:items-end gap-5">
            <div className="flex gap-8">
              <div>
                <div className="numeral text-5xl text-honey-200 leading-none">{channelVideos.length}</div>
                <div className="mt-2 text-[10px] tracking-[0.25em] uppercase text-cream-200/55">Films</div>
              </div>
              <div>
                <div className="numeral text-5xl text-honey-200 leading-none">{totalMinutes}</div>
                <div className="mt-2 text-[10px] tracking-[0.25em] uppercase text-cream-200/55">Minutes</div>
              </div>
            </div>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-lux btn-gold">
              <YouTubeMark className="w-4 h-4" /> Subscribe on YouTube <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap mb-10 md:mb-14" role="tablist" aria-label="Filter films">
          {(["All", ...videoCategories] as Filter[]).map((cat) => {
            const count = cat === "All" ? channelVideos.length : channelVideos.filter((v) => v.category === cat).length;
            const active = filter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(cat)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-700 tracking-[0.12em] uppercase border transition-all duration-500 ${
                  active ? "bg-honey-400 border-honey-400 text-forest-950" : "border-cream-50/20 text-cream-100/70 hover:border-cream-50/60 hover:text-cream-50"
                }`}
              >
                {cat}
                <span className={`numeral normal-case text-sm ${active ? "text-forest-950/85" : "text-cream-50/60"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div key={filter} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-5 reveal-stagger">
          {list.map((v, i) => (
            <ShortCard key={v.id} video={v} index={i} onPlay={() => open(i)} showSpeaker showCaption />
          ))}
        </div>
      </div>

      {player}
    </section>
  );
}

export default ChannelLibrary;
