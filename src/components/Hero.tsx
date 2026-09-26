import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import { useParallax } from "../hooks/useParallax";
import { ChinarLeaf } from "./motifs/KashmirMotifs";
import { currentStage } from "../data/season";
import { AbraqMark } from "./brand/AbraqLogo";

const heroImage = "/images/hero/kashmir-orchard-aerial-1.webp";
const secondaryImage = "/images/harvest/dsc07844.webp";

export function Hero() {
  const { ref, offset } = useParallax<HTMLElement>(0.4);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-forest-950 text-cream-50">
      {/* Background plate */}
      <div className="absolute inset-0 will-change-transform" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        <img
          src={heroImage}
          alt="High-density apple orchard rows in bloom across the Kashmir valley"
          className="w-full h-full object-cover animate-ken-burns"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-950/35 to-transparent" />
      <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(ellipse_at_75%_20%,rgba(233,214,168,0.55),transparent_55%)]" />

      <FloatingParticles count={22} />

      {/* Coordinates */}
      <div
        className="hidden md:flex absolute top-32 right-8 lg:right-12 items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-cream-50/55 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="w-10 h-px bg-cream-50/30" />
        34.0837° N · 74.7973° E
      </div>

      <div className="relative container-wide w-full pt-32 pb-8 md:pb-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ background: "var(--season)" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "var(--season)" }} />
              </span>
              <span className="text-honey-200 text-[11px] font-700 tracking-[0.32em] uppercase">
                Srinagar, Kashmir · Est. with purpose
              </span>
            </div>

            <h1 className="display-xl mt-6 !text-[clamp(3rem,7.2vw,7rem)]">
              <span className="line-mask">
                <span style={{ animationDelay: "0.6s" }}>Growing Kashmir's</span>
              </span>
              <span className="line-mask">
                <span className="serif-italic text-gradient-gold pr-3" style={{ animationDelay: "0.78s" }}>
                  future orchards
                </span>
              </span>
            </h1>

            <div className="mt-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start animate-fade-up" style={{ animationDelay: "1s" }}>
              <span className="hidden md:block w-20 h-px bg-honey-400 mt-3.5" />
              <p className="text-cream-100/80 text-base md:text-lg max-w-xl leading-relaxed text-pretty">
                Nursery plants, saplings, and scientific plantation support from
                Abraq Nurseries LLP — developing productive orchards across Jammu & Kashmir.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "1.15s" }}>
              <Link to="/varieties" className="btn-lux btn-gold">
                Explore Varieties
                <ArrowDown className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-lux btn-ghost-light">
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <a
              href="#season"
              className="group mt-7 inline-flex items-center gap-3 rounded-full border border-cream-50/15 bg-forest-950/30 backdrop-blur-sm pl-2 pr-4 py-1.5 text-xs text-cream-100/85 hover:border-cream-50/40 transition-colors animate-fade-up"
              style={{ animationDelay: "1.3s" }}
            >
              <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--season) 25%, transparent)" }}>
                <ChinarLeaf className="w-3.5 h-3.5" />
              </span>
              <span>
                In the orchard now: <span className="font-600 text-cream-50">{currentStage().name}</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Arch-framed harvest still + rotating seal */}
          <div className="hidden lg:block lg:col-span-4 justify-self-end">
            <div className="relative animate-scale-in" style={{ animationDelay: "1.1s" }}>
              <div className="arch w-60 xl:w-64 aspect-[3/4] overflow-hidden border border-honey-300/40 p-2 bg-forest-950/30 backdrop-blur-sm">
                <div className="arch w-full h-full overflow-hidden img-zoom">
                  <img src={secondaryImage} alt="Apple tree laden with ripe fruit in Kashmir" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -left-14 bottom-10 w-28 h-28 rounded-full bg-forest-950/70 backdrop-blur-md border border-honey-400/30 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow" aria-hidden="true">
                  <defs>
                    <path id="seal-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <text fill="#e9d6a8" fontSize="8.2" letterSpacing="3.1" fontFamily="Manrope" fontWeight="700">
                    <textPath href="#seal-circle">CERTIFIED NURSERY · KASHMIR · </textPath>
                  </text>
                </svg>
                <AbraqMark variant="reverse" className="w-12 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats ledger */}
        <div
          className="mt-12 md:mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-cream-50/15 animate-fade-up"
          style={{ animationDelay: "1.35s" }}
        >
          <HeroStat number="50K+" label="Saplings distributed" />
          <HeroStat number="200+" label="Orchards developed" />
          <HeroStat number="25+" label="Fruit varieties" />
          <HeroStat number="12" label="Districts served" />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1.8s" }}>
        <span className="text-cream-200/60 text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <span className="relative w-px h-10 overflow-hidden bg-cream-50/15">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-honey-300 animate-[scrollCue_2s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}

function HeroStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="group pt-5 pb-1 pr-4 md:px-8 md:first:pl-0 md:[&:not(:first-child)]:border-l border-cream-50/15">
      <div className="numeral text-cream-50 text-4xl md:text-[2.75rem] font-500 transition-colors duration-500 group-hover:text-honey-200">
        {number}
      </div>
      <div className="text-cream-200/65 text-[11px] tracking-[0.2em] uppercase mt-2">{label}</div>
    </div>
  );
}

export default Hero;
