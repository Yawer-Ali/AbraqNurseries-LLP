import { Play } from "lucide-react";
import { type ChannelVideo, formatDuration, posterFor } from "../../data/youtube";

interface ShortCardProps {
  video: ChannelVideo;
  onPlay: () => void;
  /** Show speaker/place line under the title (testimonials) */
  showSpeaker?: boolean;
  /** Show the caption beneath the card */
  showCaption?: boolean;
  tone?: "dark" | "light";
  className?: string;
  index?: number;
}

/** Vertical (9:16) poster card for a channel Short. Loads nothing from YouTube until played. */
export function ShortCard({ video, onPlay, showSpeaker, showCaption, tone = "dark", className = "", index }: ShortCardProps) {
  const dark = tone === "dark";
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play video: ${video.title}`}
      className={`group block w-full text-left ${className}`}
    >
      <div className="relative aspect-[9/16] rounded-[1.25rem] overflow-hidden bg-forest-900 ring-1 ring-inset ring-cream-50/10">
        <img
          src={posterFor(video.id)}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-forest-950/30" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          {typeof index === "number" ? (
            <span className="numeral italic text-sm text-cream-50/85">{String(index + 1).padStart(2, "0")}</span>
          ) : (
            <span />
          )}
          <span className="px-2 py-0.5 rounded-full bg-forest-950/70 backdrop-blur-sm text-cream-50 text-[10px] font-600 tabular-nums">
            {formatDuration(video.duration)}
          </span>
        </div>

        <span className="absolute inset-0 m-auto w-14 h-14 rounded-full border border-cream-50/50 bg-forest-950/30 backdrop-blur-sm flex items-center justify-center text-cream-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-honey-400 group-hover:border-honey-400 group-hover:text-forest-950">
          <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
        </span>

        <div className="absolute left-4 right-4 bottom-4">
          <span className="block text-[9px] font-700 tracking-[0.22em] uppercase text-honey-300">{video.category}</span>
          <h3 className="mt-1.5 font-display text-xl leading-tight text-cream-50">{video.title}</h3>
          {showSpeaker && video.speaker && (
            <p className="mt-1.5 text-[11px] text-cream-100/70">
              {video.speaker}
              {video.place ? ` · ${video.place}` : ""}
            </p>
          )}
        </div>
      </div>
      {showCaption && (
        <p className={`mt-4 text-sm leading-relaxed line-clamp-3 ${dark ? "text-cream-200/60" : "text-charcoal-700/70"}`}>
          {video.caption}
        </p>
      )}
    </button>
  );
}

export default ShortCard;
