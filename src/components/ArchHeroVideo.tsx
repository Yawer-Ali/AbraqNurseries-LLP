
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2,
  Play,
  Volume2,
  VolumeX,
  Award,
  Mountain,
  Radio,
  Globe
} from "lucide-react";
import { InteractiveMatrixGrid } from "./InteractiveMatrixGrid";
import { HimalayanSunlightCanvas } from "./HimalayanSunlightCanvas";
import { LiveClimateTicker } from "./LiveClimateTicker";

interface ArchHeroVideoProps {
  onOpenBooking: () => void;
}

export const ArchHeroVideo: React.FC<ArchHeroVideoProps> = ({ onOpenBooking }) => {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [selectedElevation, setSelectedElevation] = useState<string>("Shopian");

  const valleyZones = [
    { name: "Shopian", elevation: "2,050m", soil: "Loamy Karewa", chill: "950 hrs", yieldBonus: "+40%", temp: "16.8°C" },
    { name: "Pulwama", elevation: "1,630m", soil: "Alluvial Clay", chill: "860 hrs", yieldBonus: "+35%", temp: "18.2°C" },
    { name: "Baramulla", elevation: "1,595m", soil: "Sandy Silt", chill: "820 hrs", yieldBonus: "+32%", temp: "17.9°C" },
    { name: "Srinagar", elevation: "1,585m", soil: "Basin Loam", chill: "800 hrs", yieldBonus: "+30%", temp: "19.1°C" }
  ];

  const currentZone = valleyZones.find((z) => z.name === selectedElevation) || valleyZones[0];

  return (
    <section className="relative min-h-[96vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Interactive Glowing Particle Canvas */}
      <InteractiveMatrixGrid />
      <HimalayanSunlightCanvas />

      {/* Cyber Cosmic Background Ambient Radial Halos */}
      <div className="pointer-events-none absolute -top-40 left-1/4 -translate-x-1/2 w-[900px] h-[650px] bg-accent dark:bg-emerald-400/15 rounded-full blur-[180px] -z-10 animate-pulse-soft" />
      <div className="pointer-events-none absolute top-1/3 right-4 w-[650px] h-[650px] bg-violet-600/10 dark:bg-violet-500/15 rounded-full blur-[170px] -z-10 animate-float" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-[160px] -z-10 animate-float-reverse" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Spatial Coordinates & Status Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-xl border border-border text-xs font-mono font-bold text-muted-foreground shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-foreground font-bold">PROJECT ABRAQ</span>
            <span className="text-muted-foreground/50">|</span>
            <span className="text-primary font-extrabold flex items-center gap-1">
              <Globe className="w-3 h-3" /> 34.0837° N, 74.7973° E
            </span>
            <span className="text-muted-foreground/50 hidden sm:inline">|</span>
            <span className="hidden sm:inline font-semibold">Kashmir Agro-Biotech Command</span>
          </div>

          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] font-mono font-bold">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>Telemetry: Live Sensor Mesh Connected</span>
          </div>
        </div>

        {/* Main Bento Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Headlines, Trust & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Main Headline with Aurora Flowing Gradient */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.04]">
              Precision Himalayan <br className="hidden sm:inline" />
              <span className="animate-aurora-text">Apple Architecture</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl">
              Pioneering high-density apple biotechnology in Jammu & Kashmir. Certified Italian M9-T337 rootstocks, snow-load trellis engineering, automated drip fertigation, and complete MIDH subsidy guidance.
            </p>

            {/* Interactive Valley Terroir Radar Terminal */}
            <div className="p-4 sm:p-5 rounded-3xl bg-card/80 dark:bg-card/70 backdrop-blur-2xl border border-border shadow-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Mountain className="w-4 h-4" /> Kashmir Elevation & Soil Terminal
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Altitude: <strong className="text-foreground">{currentZone.elevation}</strong>
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {valleyZones.map((zone) => (
                  <button
                    key={zone.name}
                    onClick={() => setSelectedElevation(zone.name)}
                    className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer text-left ${
                      selectedElevation === zone.name
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-102 font-bold ring-2 ring-primary/40"
                        : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <p className="font-bold leading-none">{zone.name}</p>
                    <p className="text-[10px] opacity-80 mt-1 font-mono">{zone.elevation}</p>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground border-t border-border font-mono">
                <span>Soil: <strong className="text-foreground font-sans">{currentZone.soil}</strong></span>
                <span>Chill Hours: <strong className="text-primary font-bold">{currentZone.chill}</strong></span>
                <span>Mandi Yield: <strong className="text-primary font-bold">{currentZone.yieldBonus}</strong></span>
                <span>Temp: <strong className="text-foreground">{currentZone.temp}</strong></span>
              </div>
            </div>

            {/* Futuristic Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/services/book-orchard"
                className="relative group overflow-hidden px-8 py-4 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5 ds-shimmer"
              >
                <Sprout className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Launch Orchard Configurator</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-2xl border-2 border-border bg-card hover:bg-muted text-foreground text-sm font-extrabold transition-all duration-200 hover:border-primary shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Schedule Field Survey</span>
              </button>
            </div>

            {/* 3 Key Metric Highlights Under CTA */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              <div className="p-3.5 rounded-2xl bg-card border border-border shadow-xs">
                <span className="font-display text-xl sm:text-2xl font-bold text-primary block leading-tight">
                  330+
                </span>
                <p className="text-[11px] font-bold text-muted-foreground">Trees per Kanal</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-card border border-border shadow-xs">
                <span className="font-display text-xl sm:text-2xl font-bold text-amber-500 block leading-tight">
                  Year 2
                </span>
                <p className="text-[11px] font-bold text-muted-foreground">First Commercial Crop</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-card border border-border shadow-xs">
                <span className="font-display text-xl sm:text-2xl font-bold text-cyan-400 block leading-tight">
                  Up to 80%
                </span>
                <p className="text-[11px] font-bold text-muted-foreground">Govt Subsidy Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Cinematic Glass Video Showcase (5 cols) */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient Backlight Rim */}
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-primary/30 via-violet-500/20 to-cyan-500/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Video Container Box with Rotating Border Beam */}
            <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden border-2 border-primary/30 dark:border-primary/20 bg-background shadow-2xl shadow-primary/20 aspect-4/3 sm:aspect-16/11">
              <video
                autoPlay
                muted={isVideoMuted}
                loop
                playsInline
                poster="/images/hero/kashmir-orchard-aerial-2.webp"
                className="w-full h-full object-cover scale-102 group-hover:scale-100 transition-transform duration-1000"
              >
                <source src="/videos/kashmir-orchard-drone-hero.mp4" type="video/mp4" />
              </video>

              {/* Gradient Shade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

              {/* Top Video Header Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span>Kashmir High-Density Cinema</span>
                </div>

                {/* Sound Button */}
                <button
                  onClick={() => setIsVideoMuted(!isVideoMuted)}
                  className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 transition-all cursor-pointer flex items-center gap-1.5"
                  title={isVideoMuted ? "Unmute Sound" : "Mute Sound"}
                >
                  {isVideoMuted ? (
                    <VolumeX className="w-4 h-4 text-white/80" />
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-primary" />
                      <div className="flex items-end gap-0.5 h-2.5">
                        <span className="w-0.5 bg-primary h-2 animate-pulse" />
                        <span className="w-0.5 bg-primary h-2.5 animate-pulse" />
                      </div>
                    </>
                  )}
                </button>
              </div>

              {/* Floating 3D Telemetry Badges Embedded in Video */}
              <div className="absolute top-16 right-4 z-20 animate-float hidden sm:block">
                <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-xl border border-primary/40 text-primary text-[10px] font-bold flex items-center gap-1.5 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span>100% Certified Italian M9</span>
                </div>
              </div>

              {/* Bottom Video HUD Card */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3 text-white text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 shrink-0 text-primary-foreground">
                    <Play className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                      Drone Flyover · {selectedElevation} Sector
                    </h4>
                    <p className="text-[11px] text-white/80">
                      Trellis Architecture · Drip Fertigation · M9 Spindle
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-primary/15 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>GPS Spaced</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Climate Ticker */}
        <LiveClimateTicker />
      </div>
    </section>
  );
};

export default ArchHeroVideo;
