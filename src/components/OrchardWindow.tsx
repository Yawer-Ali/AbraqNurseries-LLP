import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ChinarLeaf } from "./motifs/KashmirMotifs";

// Cut from the 4K drone original: a true 1080p landscape band for wide screens,
// and the full vertical frame for phones — so neither is ever upscaled.
const SOURCES = {
  landscape: { video: "/videos/web/orchard-window-1080p.mp4", poster: "/images/orchard-window-1080p.webp" },
  portrait: { video: "/videos/web/orchard-window-portrait.mp4", poster: "/images/orchard-window-portrait.webp" },
};

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Scroll-driven "orchard window": an arch-shaped window (the brand's arch motif)
 * that opens from a narrow portal into full-bleed drone footage of a blossoming
 * high-density orchard. Values are written straight to the DOM each frame, so
 * scrolling never re-renders React. Reduced-motion users get the opened state.
 */
export function OrchardWindow() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [source] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-aspect-ratio: 4/5)").matches ? SOURCES.landscape : SOURCES.portrait,
  );
  const [reduced] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  // Play only while on screen
  useEffect(() => {
    const v = videoRef.current;
    const s = sectionRef.current;
    if (!v || !s) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(s);
    return () => io.disconnect();
  }, []);

  // Scroll-linked opening
  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const travel = rect.height - vh;
      const p = clamp(-rect.top / (travel || 1));
      const e = ease(clamp(p / 0.78));

      // Start: a tall arch in the centre. End: full viewport, square corners.
      const w0 = vw < 768 ? vw * 0.7 : Math.max(300, vw * 0.3);
      const h0 = Math.min(vh * 0.66, w0 * 1.45);
      const w = w0 + (vw - w0) * e;
      const h = h0 + (vh - h0) * e;
      const x = (vw - w) / 2;
      const top = (vh - h) / 2 + (1 - e) * vh * (vw < 768 ? 0.03 : 0.1);
      const bottom = vh - top - h;
      const archR = (w0 / 2) * (1 - e);
      const baseR = 24 * (1 - e);

      stage.style.setProperty("--clip", `inset(${top}px ${x}px ${Math.max(0, bottom)}px ${x}px round ${archR}px ${archR}px ${baseR}px ${baseR}px)`);
      stage.style.setProperty("--p", p.toFixed(4));
      stage.style.setProperty("--e", e.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      aria-label="An Abraq orchard in spring bloom"
      className={`relative bg-cream-50 ${reduced ? "" : "h-[240svh] md:h-[280svh]"}`}
    >
      <div
        ref={stageRef}
        className={`${reduced ? "relative h-[90svh]" : "sticky top-0 h-[100svh]"} overflow-hidden`}
        style={{ ["--clip" as string]: "inset(0 round 0)", ["--p" as string]: reduced ? 1 : 0, ["--e" as string]: reduced ? 1 : 0 }}
      >
        {/* Opening words — part as the window opens */}
        <div className="absolute inset-x-0 top-[15svh] md:top-[14svh] z-10 container-wide pointer-events-none">
          <div
            className="flex flex-col items-center text-center"
            style={{ opacity: "calc(1 - var(--e) * 1.8)", transform: "translateY(calc(var(--e) * -60px))" }}
          >
            <div className="flex items-center gap-3 text-honey-700">
              <span className="h-px w-8 bg-current opacity-60" />
              <ChinarLeaf className="w-5 h-5" />
              <span className="h-px w-8 bg-current opacity-60" />
            </div>
            <p className="mt-4 eyebrow before:hidden">Step inside an Abraq orchard</p>
          </div>
        </div>
        <div className="hidden md:flex absolute inset-0 z-10 items-center justify-between container-wide pointer-events-none">
          <span
            className="font-display text-5xl lg:text-7xl text-forest-900 leading-none"
            style={{ opacity: "calc(1 - var(--e) * 2)", transform: "translateX(calc(var(--e) * -140px))" }}
          >
            Row by
          </span>
          <span
            className="serif-italic text-5xl lg:text-7xl text-honey-600 leading-none"
            style={{ opacity: "calc(1 - var(--e) * 2)", transform: "translateX(calc(var(--e) * 140px))" }}
          >
            row
          </span>
        </div>

        {/* The window */}
        <div className="absolute inset-0 [clip-path:var(--clip)] will-change-[clip-path] bg-forest-950">
          <video
            ref={videoRef}
            src={source.video}
            poster={source.poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scale(calc(1.18 - var(--e) * 0.18))" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-forest-950/10"
            style={{ opacity: "calc(0.35 + var(--e) * 0.65)" }}
          />

          {/* Revealed caption */}
          <div
            className="absolute inset-x-0 bottom-0 container-wide pb-28 md:pb-16 text-cream-50"
            style={{ opacity: "clamp(0, calc((var(--p) - 0.55) * 3.2), 1)", transform: "translateY(calc((1 - clamp(0, calc((var(--p) - 0.55) * 3.2), 1)) * 30px))" }}
          >
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <span className="eyebrow !text-honey-300">Spring bloom · Kashmir valley</span>
                <h2 className="display-lg mt-5 text-balance">
                  Thousands of trees, <span className="serif-italic text-gradient-gold">planted with intent</span>
                </h2>
                <p className="mt-5 max-w-xl text-cream-100/80 leading-relaxed">
                  Aerial footage of a high-density orchard in blossom — straight rows, trellis poles and
                  feathered trees set for early, even cropping.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end flex flex-wrap gap-3">
                <Link to="/gallery" className="btn-lux btn-gold">
                  Watch our films <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        {!reduced && (
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
            style={{ opacity: "calc(1 - var(--e) * 3)" }}
          >
            <span className="text-[10px] tracking-[0.35em] uppercase text-charcoal-700/70">Scroll</span>
            <span className="relative w-px h-8 overflow-hidden bg-forest-900/15">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-honey-600 animate-[scrollCue_2s_ease-in-out_infinite]" />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default OrchardWindow;
