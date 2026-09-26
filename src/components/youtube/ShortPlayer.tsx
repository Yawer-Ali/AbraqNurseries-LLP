import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";
import {
  type ChannelVideo,
  embedUrlFor,
  formatDuration,
  posterFor,
  watchUrlFor,
} from "../../data/youtube";
import YouTubeMark from "./YouTubeMark";

/** Manages which video (if any) of a list is open in the player. */
export function useShortPlayer(videos: ChannelVideo[]) {
  const [index, setIndex] = useState<number | null>(null);
  const open = useCallback((i: number) => setIndex(i), []);
  const player = (
    <ShortPlayer videos={videos} index={index} onChange={setIndex} />
  );
  return { open, player };
}

interface ShortPlayerProps {
  videos: ChannelVideo[];
  index: number | null;
  onChange: (i: number | null) => void;
}

export function ShortPlayer({ videos, index, onChange }: ShortPlayerProps) {
  const [loaded, setLoaded] = useState(false);
  const video = index !== null ? videos[index] : null;
  const count = videos.length;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      setLoaded(false);
      onChange((index + delta + count) % count);
    },
    [index, count, onChange],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, go, onChange]);

  useEffect(() => setLoaded(false), [video?.id]);

  if (!video || index === null) return null;

  // Portal to <body> so no transformed/animated ancestor can capture position:fixed
  return createPortal(
    <div
      className="fixed inset-0 z-[80] bg-forest-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={() => onChange(null)}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      {/* Soft ambient glow from the current poster */}
      <img
        key={`amb-${video.id}`}
        src={posterFor(video.id)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-25 blur-3xl scale-110 animate-fade-in"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-950/60 to-forest-950/85" aria-hidden="true" />

      <button
        onClick={() => onChange(null)}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 rounded-full border border-cream-50/25 text-cream-50 flex items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500"
        aria-label="Close video"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative w-full max-w-5xl max-h-full overflow-y-auto no-scrollbar grid md:grid-cols-[auto_1fr] gap-6 md:gap-14 items-center pt-14 md:pt-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 9:16 stage */}
        <div className="relative mx-auto h-[58svh] md:h-[82svh] aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-black border border-honey-400/25 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)]">
          <img
            src={posterFor(video.id)}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100"}`}
          />
          {!loaded && (
            <span className="absolute inset-0 m-auto w-12 h-12 rounded-full border-2 border-cream-50/20 border-t-honey-300 animate-spin" aria-hidden="true" />
          )}
          <iframe
            key={video.id}
            src={embedUrlFor(video.id)}
            title={video.title}
            onLoad={() => setLoaded(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Details */}
        <div className="text-center md:text-left text-cream-50 pb-4 md:pb-0">
          <div className="flex items-center justify-center md:justify-start gap-4 text-[11px] tracking-[0.25em] uppercase">
            <span className="numeral normal-case tracking-normal italic text-lg text-honey-300">
              {String(index + 1).padStart(2, "0")}
              <span className="text-cream-50/60"> / {String(count).padStart(2, "0")}</span>
            </span>
            <span className="w-8 h-px bg-honey-400/50" />
            <span className="text-honey-300 font-700">{video.category}</span>
          </div>

          <h3 key={`t-${video.id}`} className="mt-5 font-display text-3xl md:text-5xl leading-[1.05] animate-fade-up">
            {video.title}
          </h3>

          {video.speaker && (
            <p className="mt-4 text-sm text-cream-100/80">
              <span className="font-600 text-cream-50">{video.speaker}</span>
              {video.role ? ` — ${video.role}` : ""}
              {video.place ? `, ${video.place}` : ""}
            </p>
          )}

          <p key={`c-${video.id}`} className="mt-5 text-sm md:text-base text-cream-200/70 leading-relaxed max-w-md mx-auto md:mx-0 animate-fade-in">
            {video.caption}
          </p>

          <p className="mt-5 text-xs text-cream-200/60 tabular-nums">
            {formatDuration(video.duration)} · Abraq Nurseries LLP on YouTube
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-full border border-cream-50/25 flex items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full border border-cream-50/25 flex items-center justify-center hover:bg-cream-50 hover:text-forest-950 transition-all duration-500"
              aria-label="Next video"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href={watchUrlFor(video.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lux btn-ghost-light !py-3"
            >
              <YouTubeMark className="w-4 h-4" /> Watch on YouTube <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ShortPlayer;
