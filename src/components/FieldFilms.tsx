import { ArrowUpRight, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ShortCard from "./youtube/ShortCard";
import YouTubeMark from "./youtube/YouTubeMark";
import { useShortPlayer } from "./youtube/ShortPlayer";
import { YOUTUBE_CHANNEL_URL, type ChannelVideo, formatDuration, posterFor, videoById } from "../data/youtube";

interface FieldFilmsProps {
  ids: string[];
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  /** "strip": row of cards · "feature": one film with an editorial write-up */
  layout?: "strip" | "feature";
  ctaLabel?: string;
}

/** A small, context-specific selection of channel films (service pages, projects, knowledge). */
export function FieldFilms({ ids, eyebrow = "From the field", title, accent, description, layout = "strip", ctaLabel = "Watch the film" }: FieldFilmsProps) {
  const videos = ids.map(videoById).filter(Boolean) as ChannelVideo[];
  const { open, player } = useShortPlayer(videos);
  if (!videos.length) return null;

  if (layout === "feature") {
    const v = videos[0];
    return (
      <section className="py-20 md:py-28 bg-pine-gradient text-cream-50 overflow-hidden">
        <div className="container-wide">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal variant="scale" className="md:col-span-5 lg:col-span-4">
              <button
                onClick={() => open(0)}
                className="group relative block w-full max-w-sm mx-auto aspect-[9/16] rounded-[1.75rem] overflow-hidden border border-honey-400/25 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.8)]"
                aria-label={`Play video: ${v.title}`}
              >
                <img src={posterFor(v.id)} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                <span className="absolute inset-0 m-auto w-20 h-20 rounded-full border border-cream-50/50 bg-forest-950/30 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-honey-400 group-hover:text-forest-950 group-hover:border-honey-400">
                  <Play className="w-7 h-7 ml-1" fill="currentColor" />
                </span>
                <span className="absolute bottom-4 right-4 px-2 py-0.5 rounded-full bg-forest-950/70 text-[11px] tabular-nums">{formatDuration(v.duration)}</span>
              </button>
            </ScrollReveal>
            <div className="md:col-span-7 lg:col-span-8">
              <ScrollReveal variant="fade">
                <span className="eyebrow !text-honey-300">{eyebrow}</span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="display-lg mt-6 text-balance">
                  {title} {accent && <span className="serif-italic text-gradient-gold">{accent}</span>}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="mt-6 text-cream-100/75 text-lg leading-relaxed max-w-2xl font-display">{description ?? v.caption}</p>
                {v.speaker && (
                  <div className="mt-8 flex items-center gap-4">
                    <span className="w-12 h-px bg-honey-400" />
                    <div>
                      <p className="font-600">{v.speaker}</p>
                      {v.role && <p className="text-xs tracking-[0.18em] uppercase text-cream-200/55 mt-0.5">{v.role}</p>}
                    </div>
                  </div>
                )}
                <div className="mt-10 flex flex-wrap gap-3">
                  <button onClick={() => open(0)} className="btn-lux btn-gold">
                    <Play className="w-4 h-4" fill="currentColor" /> {ctaLabel}
                  </button>
                  <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-lux btn-ghost-light">
                    <YouTubeMark className="w-4 h-4" /> More from the channel
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        {player}
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-forest-950 text-cream-50 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <ScrollReveal variant="fade">
              <span className="eyebrow !text-honey-300">{eyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="display-md mt-5 text-balance">
                {title} {accent && <span className="serif-italic text-gradient-gold">{accent}</span>}
              </h2>
            </ScrollReveal>
            {description && (
              <ScrollReveal delay={140}>
                <p className="mt-4 text-cream-200/60 leading-relaxed">{description}</p>
              </ScrollReveal>
            )}
          </div>
          <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-700 text-honey-200 self-start md:self-end">
            <YouTubeMark className="w-4 h-4" /> Full channel <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="-mx-5 px-5 scroll-pl-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-2">
          {videos.map((v, i) => (
            <ScrollReveal key={v.id} delay={i * 80} className="snap-start shrink-0 w-[58vw] sm:w-56 md:w-auto">
              <ShortCard video={v} onPlay={() => open(i)} showSpeaker showCaption />
            </ScrollReveal>
          ))}
        </div>
      </div>
      {player}
    </section>
  );
}

export default FieldFilms;
