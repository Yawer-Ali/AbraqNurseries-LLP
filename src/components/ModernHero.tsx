
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  PhoneCall, 
  Volume2, 
  VolumeX,
  Play,
  Trees
} from "lucide-react";

interface ModernHeroProps {
  onOpenBooking: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onOpenBooking }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/80 rounded-full blur-[140px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/80 border border-emerald-500/20 text-primary text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Certified European M9 Rootstocks & Turnkey Orchards</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08]">
              High-Density Apple Orchards for <span className="gradient-text-emerald">Kashmir's Future</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
              Abraq Nurseries LLP engineers turnkey high-density apple orchards across Srinagar, Shopian, Pulwama, and Baramulla. Certified M9 knip-boom trees, snow-resistant trellis frames, automated drip fertigation, and complete MIDH subsidy guidance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/services/book-orchard"
                className="px-8 py-4 rounded-xl bg-primary hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Trees className="w-4 h-4" />
                <span>Launch Orchard Configurator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Book Free Site Survey</span>
              </button>
            </div>

            {/* 3 Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">330+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Trees per Kanal</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-primary">Year 2</p>
                <p className="text-xs text-muted-foreground mt-0.5">First Commercial Harvest</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">Up to 80%</p>
                <p className="text-xs text-muted-foreground mt-0.5">MIDH Govt Subsidy</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Media Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-2xl relative aspect-4/3 sm:aspect-16/11 group">
              <video
                autoPlay
                muted={isMuted}
                loop
                playsInline
                poster="/images/hero/kashmir-orchard-aerial-2.webp"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/videos/kashmir-orchard-drone-hero.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Top Badge & Sound Toggle */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                  Shopian Sector 4K Flyover
                </span>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors cursor-pointer border border-white/20"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-primary" />}
                </button>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex items-center justify-between">
                <div>
                  <p className="font-display text-base font-bold">European M9-T337 Installation</p>
                  <p className="text-xs text-white/80">Galvanized Trellis · Micro-Drip Fertigation</p>
                </div>

                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-md">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernHero;
