
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Volume2,
  VolumeX,
  ShieldCheck,
  Calculator,
  MapPin,
  Sparkles,
  Compass,
  ThermometerSnowflake,
} from "lucide-react";

interface StudioHeroProps {
  onOpenBooking: () => void;
}

export const StudioHero: React.FC<StudioHeroProps> = ({ onOpenBooking }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [treesCount, setTreesCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let start = 0;
    const end = 330;
    const duration = 1200;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setTreesCount(end);
        clearInterval(timer);
      } else {
        setTreesCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.35] -z-10" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/8 rounded-full blur-[140px] -z-10 animate-pulse-soft" />

      <div className="ds-container">
        <div
          className={`flex flex-wrap items-center justify-between gap-3 mb-10 p-4 rounded-2xl ds-card-glass transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold">
            <div className="ds-badge">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Govt MIDH Certified Partner</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground px-3 py-1.5 rounded-lg bg-background/60 border border-border/60">
              <ThermometerSnowflake className="w-3.5 h-3.5 text-blue-500" />
              <span>Chilling Requirement: <strong className="text-foreground">840h Met</strong></span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-muted-foreground px-3 py-1.5 rounded-lg bg-background/60 border border-border/60">
              <Compass className="w-3.5 h-3.5 text-copper-500" />
              <span>Elevation: <strong className="text-foreground">1,850m MSL</strong></span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span>2026/2027 Season Allocations: <strong className="text-primary">Live & Open</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div
            className={`lg:col-span-7 space-y-7 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="space-y-4">
              <div className="ds-badge">
                <Sparkles className="w-3.5 h-3.5 text-copper-500" />
                <span>Haute Horticultural Engineering</span>
              </div>
              <h1 className="ds-heading-xl">
                Architecting Kashmir&apos;s <br />
                <span className="font-serif italic font-normal text-primary">Next-Generation</span> <br />
                High-Density Orchards.
              </h1>
            </div>

            <p className="ds-body max-w-2xl">
              Abraq Nurseries LLP bridges imported European clonal rootstocks (<strong className="text-foreground">M9-T337, MM106</strong>) with Kashmir&apos;s valley terroir. We construct turnkey heavy snow-load trellises, solar-automated drip fertigation, and in-house 14-test soil diagnostics across <strong className="text-foreground">Shopian, Pulwama, Baramulla, Anantnag, and Srinagar</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link to="/services/book-orchard" className="ds-btn-primary ds-shimmer py-3.5">
                <Calculator className="w-4 h-4" />
                <span>Calculate Orchard ROI & Subsidy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={onOpenBooking} className="ds-btn-outline py-3.5">
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Book Free Site Survey</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground font-medium">
              {[
                "98%+ Tree Survival Guarantee",
                "Engineered Snow-Load Trellis",
                "50%–80% MIDH Capital Subsidy",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-card dark:shadow-card-dark relative aspect-4/3 sm:aspect-16/11 group">
              <video
                autoPlay
                muted={isMuted}
                loop
                playsInline
                poster="/images/hero/kashmir-orchard-aerial-2.webp"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-premium"
              >
                <source src="/videos/kashmir-orchard-drone-hero.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />

              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all duration-300 border border-white/15 hover:scale-105"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-primary" />}
                </button>
              </div>

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Shopian High-Density Block
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-sm font-semibold">High-Density M9 Commercial Block</p>
                  <p className="text-xs text-white/75 mt-0.5">330 Trees/Kanal · Certified Italian Progeny</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider shrink-0">
                  4K Drone
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14 pt-12 border-t border-border transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {[
            { label: "Planting Architecture", value: `${treesCount}+`, sub: "Certified Trees per Kanal Density", highlight: false },
            { label: "Monetization Velocity", value: "Year 2", sub: "First Commercial Harvest Crop", highlight: true },
            { label: "Govt Financial Aid", value: "50%–80%", sub: "MIDH & UT Capital Subsidy", highlight: false },
            { label: "Scientific Diagnostics", value: "14 Tests", sub: "Chadoora Soil Chemistry Protocol", highlight: false },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-5 sm:p-6 rounded-2xl ds-card-interactive group ${stat.highlight ? "border-primary/20 bg-accent/30" : ""}`}
            >
              <span className="ds-stat-label block mb-1">{stat.label}</span>
              <span className={`ds-stat-value ${stat.highlight ? "text-primary" : "group-hover:text-primary transition-colors duration-300"}`}>
                {stat.value}
              </span>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioHero;
