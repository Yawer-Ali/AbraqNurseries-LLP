import { Play, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ShortCard from "./youtube/ShortCard";
import YouTubeMark from "./youtube/YouTubeMark";
import { useShortPlayer } from "./youtube/ShortPlayer";
import { YOUTUBE_CHANNEL_URL, formatDuration, posterFor, videosIn } from "../data/youtube";
import { KhatambandPattern } from "./motifs/KashmirMotifs";

const voices = videosIn("Grower Voices");

/** Filmed testimonials from growers, sourced from the company YouTube channel. */
export function GrowerVoices() {
  const { open, player } = useShortPlayer(voices);
  const [lead, ...rest] = voices;

  return (
    <section className="py-24 md:py-36 bg-cream-100 paper-grain relative overflow-hidden">
      <KhatambandPattern className="text-honey-600/[0.10] [mask-image:radial-gradient(ellipse_at_90%_0%,black,transparent_55%)]" />
      <div className="container-wide relative">
        <SectionHeading
          index="04"
          variant="watermark"
          watermark="Voices"
          eyebrow="Grower Voices"
          title="In their own words,"
          accent="from their own orchards"
          description="Growers across the valley on the saplings, the plantation and the season-long support — filmed where it matters, between the rows."
          aside={
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-lux btn-ghost-dark">
              <YouTubeMark className="w-4 h-4" /> More on YouTube <ArrowUpRight className="w-4 h-4" />
            </a>
          }
        />

        {/* Featured testimonial */}
        {lead && (
          <ScrollReveal>
            <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 md:pb-20 mb-16 md:mb-20 border-b border-cream-300">
              <button
                onClick={() => open(0)}
                className="group relative md:col-span-5 lg:col-span-4 aspect-[9/16] max-h-[640px] w-full max-w-sm mx-auto rounded-[1.75rem] overflow-hidden shadow-luxe"
                aria-label={`Play video: ${lead.title}`}
              >
                <img src={posterFor(lead.id)} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                <span className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-cream-50/90 text-forest-900 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-honey-400">
                  <span className="absolute inset-0 rounded-full animate-glow-pulse" />
                  <Play className="w-7 h-7 ml-1" fill="currentColor" />
                </span>
                <span className="absolute bottom-4 right-4 px-2 py-0.5 rounded-full bg-forest-950/70 text-cream-50 text-[11px] tabular-nums">
                  {formatDuration(lead.duration)}
                </span>
              </button>

              <div className="md:col-span-7 lg:col-span-8">
                <span className="font-display text-[7rem] md:text-[9rem] leading-[0.6] text-honey-500/40 select-none" aria-hidden="true">“</span>
                <h3 className="font-display text-4xl md:text-6xl text-forest-900 leading-[1.02] -mt-4">
                  {lead.title.replace(/[“”]/g, "")}
                </h3>
                <p className="mt-6 text-lg md:text-xl text-charcoal-700/75 leading-relaxed max-w-2xl font-display">
                  {lead.caption}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="w-12 h-px bg-honey-500" />
                  <div>
                    <p className="font-600 text-forest-900">{lead.speaker}</p>
                    <p className="text-xs tracking-[0.18em] uppercase text-charcoal-700/70 mt-0.5">
                      {lead.role}
                      {lead.place ? ` · ${lead.place}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* The rest */}
        <div className="-mx-5 px-5 scroll-pl-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
          {rest.map((v, i) => (
            <ScrollReveal key={v.id} delay={i * 80} className="snap-start shrink-0 w-[58vw] sm:w-60 md:w-auto">
              <ShortCard video={v} onPlay={() => open(i + 1)} showSpeaker showCaption tone="light" />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {player}
    </section>
  );
}

export default GrowerVoices;
