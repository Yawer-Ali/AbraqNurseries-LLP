
import React, { useState } from "react";
import { 
  Play, 
  Film, 
  Layers, 
  Trees, 
  Droplets, 
  ShieldCheck, 
  Award,
  Video,
  ChevronLeft,
  ChevronRight,
  Tv
} from "lucide-react";

interface ProcessVideo {
  id: string;
  category: "Nursery" | "Trellis & Orchard" | "Irrigation & Soil" | "Climate Defense" | "Harvest & Grading";
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  location: string;
  youtubeId: string;
  directVideoUrl: string; // Local & Open CDN MP4 File
  posterUrl: string;
  badge: string;
  icon: React.ElementType;
  chapters: { time: string; title: string }[];
  specs: { label: string; value: string }[];
}

export const ProcessVideoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playerMode, setPlayerMode] = useState<"direct" | "embed">("direct");
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const processVideos: ProcessVideo[] = [
    {
      id: "nursery-process",
      category: "Nursery",
      title: "1. Certified Mother Stool Beds & Knip-Boom Nursery Propagation",
      shortDesc: "From European nuclear stool beds to 2-year feathered saplings ready for winter planting.",
      fullDesc: "Step-by-step documentation of certified propagation: mother stool layering, precision omega-cut bench grafting, callus tunnel fusion, lateral feather branch formation, and mycorrhizal root bath packing.",
      duration: "04:15",
      location: "Abraq Stool Nursery, Kashmir",
      youtubeId: "1zJ0Qj1VfK8",
      directVideoUrl: "/videos/nursery-propagation-live.mp4",
      posterUrl: "/images/nursery/dsc03616.webp",
      badge: "Stage 1: Certified Nursery",
      icon: Trees,
      chapters: [
        { time: "00:00", title: "M9 Mother Stool Layering & Root Beds" },
        { time: "01:15", title: "Omega Mechanized Bench Grafting" },
        { time: "02:20", title: "Feathered Spindle Canopy Pruning" },
        { time: "03:30", title: "Mycorrhizal Hydrogel Root Packing" }
      ],
      specs: [
        { label: "Propagation Cycle", value: "24 Months (Knip Boom)" },
        { label: "Graft Success Rate", value: "99.2% Mechanized" },
        { label: "Survival Guarantee", value: "98%+ Field Success" },
        { label: "Govt Accreditation", value: "SKUAST-K Certified" }
      ]
    },
    {
      id: "trellis-process",
      category: "Trellis & Orchard",
      title: "2. Turnkey High-Density Trellis Architecture & Erection",
      shortDesc: "Laser grading, pre-stressed concrete columns & 4-tier wire rigging engineered for snow.",
      fullDesc: "Complete field installation of a 4-kanal turnkey high-density orchard: GPS contour mapping, hydraulic post-driving of galvanized GI / concrete poles, anchor cable tensioning, and tree row spacing.",
      duration: "05:30",
      location: "Shopian & Pulwama Sectors",
      youtubeId: "V1dDbg-0kY0",
      directVideoUrl: "/videos/kashmir-orchard-drone-hero.mp4",
      posterUrl: "/images/hero/kashmir-orchard-aerial-1.webp",
      badge: "Stage 2: Trellis Erection",
      icon: Layers,
      chapters: [
        { time: "00:00", title: "GPS Alignment & Row Marking" },
        { time: "01:30", title: "Post Driving & Dead-Man Anchoring" },
        { time: "03:00", title: "High-Tensile Wire Gripple Tensioning" },
        { time: "04:15", title: "Knip Tree Trellis Attachment" }
      ],
      specs: [
        { label: "Snow Load Rating", value: "Up to 3.5 Feet Snow" },
        { label: "Wire Type", value: "High-Tensile 2.5mm Zn-Al" },
        { label: "Installation Time", value: "3–5 Days per 5 Kanals" },
        { label: "Warranty", value: "15-Year Structural Frame" }
      ]
    },
    {
      id: "drip-soil-process",
      category: "Irrigation & Soil",
      title: "3. Automated Micro-Drip Fertigation & Soil Chemistry",
      shortDesc: "14-parameter soil chemistry, rootzone probes & automated Venturi nutrient injection.",
      fullDesc: "Follow soil testing through our atomic absorption spectrometer in Chadoora, followed by precision installation of pressure-compensating drip emitters delivering root-targeted NPK and calcium.",
      duration: "03:45",
      location: "Chadoora Lab & Baramulla Orchards",
      youtubeId: "dQZ0bZ6I6t4",
      directVideoUrl: "/videos/trellis-setup-live.mp4",
      posterUrl: "/images/trellis/dsc08911.webp",
      badge: "Stage 3: Drip & Soil Lab",
      icon: Droplets,
      chapters: [
        { time: "00:00", title: "14-Parameter Soil & Karewa Analysis" },
        { time: "01:05", title: "Digital Soil Health Card & NPK Chart" },
        { time: "02:15", title: "Inline Pressure-Compensated Drip Assembly" },
        { time: "03:00", title: "Automated Venturi Fertigation Injection" }
      ],
      specs: [
        { label: "Lab Parameters", value: "14 Chemical & Minerals" },
        { label: "Emitter Flow", value: "2.2 L/hr Pressure-Compensated" },
        { label: "Water Efficiency", value: "95% Delivered to Roots" },
        { label: "Nutrient Uptake", value: "+40% Faster Absorption" }
      ]
    },
    {
      id: "hail-netting-process",
      category: "Climate Defense",
      title: "4. Anti-Hail Retractable Canopy & Hail Impact Resilience",
      shortDesc: "10-year UV-stabilized canopy deployment protecting 100% of seasonal harvest.",
      fullDesc: "Breakdown of the anti-hail protective netting system: ridge-wire spanning, elastic storm-recovery bungees, central zipper locking, and winter dormancy retraction into protective sleeves.",
      duration: "03:20",
      location: "Anantnag & Kulgam Belts",
      youtubeId: "aB7C_kI4vE8",
      directVideoUrl: "/videos/trellis-setup-live.mp4",
      posterUrl: "/images/trellis/dsc08851.webp",
      badge: "Stage 4: Anti-Hail Defense",
      icon: ShieldCheck,
      chapters: [
        { time: "00:00", title: "Ridge Cable & Net Anchor Installation" },
        { time: "01:10", title: "Overhead Canopy Spanning & Fastening" },
        { time: "02:00", title: "Hail Impact & Wind Resilience Test" },
        { time: "02:50", title: "Winter Quick-Retract Demonstration" }
      ],
      specs: [
        { label: "Material", value: "High-Density Polyethylene (HDPE)" },
        { label: "UV Warranty", value: "10-Year Anti-Degradation" },
        { label: "Wind Rating", value: "Up to 90 km/h Gusts" },
        { label: "Light Diffusion", value: "12% Optimal Shading" }
      ]
    },
    {
      id: "harvest-grading-process",
      category: "Harvest & Grading",
      title: "5. Bumper Harvest, Optical Grading & Mandi Consignment",
      shortDesc: "Calibrated 75-80mm crimson sorting commanding 2.5x prices in Delhi & Mumbai.",
      fullDesc: "Witness the final harvest payoff: scientific brix sugar testing, pneumatic picking shears, optical color/size grading, gentle foam tray packing, and CA cold storage staging for peak off-season realization.",
      duration: "04:40",
      location: "Azadpur Mandi Export Line",
      youtubeId: "pQdM9iX5-wY",
      directVideoUrl: "/videos/harvest-packout-live.mp4",
      posterUrl: "/images/harvest/dsc07836.webp",
      badge: "Stage 5: Harvest & Packout",
      icon: Award,
      chapters: [
        { time: "00:00", title: "Maturity & Starch-Iodine Sugar Testing" },
        { time: "01:20", title: "Stem-Intact Hand Harvesting Technique" },
        { time: "02:40", title: "Calibrated Optical Size & Crimson Grading" },
        { time: "03:50", title: "Cold Chain Transport & CA Longevity" }
      ],
      specs: [
        { label: "Grade-A Packout", value: "90% - 95% Export Quality" },
        { label: "Fruit Diameter", value: "75mm - 80mm Calibrated" },
        { label: "Mandi Realization", value: "2.5x Price Multiplier" },
        { label: "CA Storage Life", value: "8 – 10 Months Firmness" }
      ]
    }
  ];

  const currentVideo = processVideos[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % processVideos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + processVideos.length) % processVideos.length);
  };

  return (
    <section id="process-videos" className="ds-section py-24 bg-background text-white relative overflow-hidden border-t border-border select-none">
      {/* Radiant Atmosphere */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[700px] h-[700px] bg-accent rounded-full blur-[170px] -z-10 animate-float" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-teal-500/15 rounded-full blur-[160px] -z-10 animate-float-reverse" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-emerald-700/60 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
            <Film className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "10s" }} />
            <span>Local Video Cinema Vault</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Watch Agricultural Processes in Motion
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-medium">
            Explore authentic step-by-step videos showing our certified knip-boom nursery propagation, trellis installation, automated drip fertigation, and Grade-A harvest.
          </p>

          {/* Player Mode Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-alpine-900 border border-border mt-6">
            <button
              onClick={() => setPlayerMode("direct")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                playerMode === "direct"
                  ? "bg-primary text-zinc-950 shadow-md scale-105"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Local Video Player</span>
            </button>

            <button
              onClick={() => setPlayerMode("embed")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                playerMode === "embed"
                  ? "bg-primary text-zinc-950 shadow-md scale-105"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>4K Online Documentary Stream</span>
            </button>
          </div>
        </div>

        {/* Main Cinema Player Viewport */}
        <div className="rounded-3xl border-2 border-emerald-500/50 bg-alpine-900/95 backdrop-blur-2xl overflow-hidden shadow-2xl mb-10 relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Video Player Screen */}
            <div className="lg:col-span-8 relative bg-black flex items-center justify-center min-h-[380px] sm:min-h-[500px]">
              {playerMode === "direct" ? (
                /* Local MP4 HTML5 Video Player - 100% Guaranteed to Play */
                <video
                  key={currentVideo.directVideoUrl}
                  src={currentVideo.directVideoUrl}
                  poster={currentVideo.posterUrl}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover max-h-[500px]"
                />
              ) : (
                /* 4K Online Stream */
                <iframe
                  key={currentVideo.youtubeId}
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${currentVideo.youtubeId}&controls=1&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full min-h-[380px] sm:min-h-[500px] border-0"
                />
              )}

              {/* Sound Toggle */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 z-30 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white hover:bg-primary transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {isMuted ? "Sound: Muted" : "Sound: Unmuted"}
              </button>

              {/* Slider Previous & Next Arrows */}
              <button
                onClick={handlePrev}
                aria-label="Previous Video"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-black/80 hover:bg-primary border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer z-30 shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Video"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-black/80 hover:bg-primary border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer z-30 shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Right Detailed Video Scope & Chapter Telemetry */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-border bg-alpine-900/90">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    {currentVideo.category} Operations
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary/90 border border-emerald-700/60 text-[10px] font-bold">
                    Stage 0{currentIndex + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                  {currentVideo.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {currentVideo.fullDesc}
                </p>

                {/* Timeline Chapters */}
                <div className="p-4 rounded-2xl bg-background/80 border border-border space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    Process Chapters
                  </span>
                  {currentVideo.chapters.map((chap, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-border/60 last:border-0">
                      <span className="text-zinc-300 font-medium">{chap.title}</span>
                      <span className="font-mono text-[10px] font-bold text-primary bg-emerald-950 px-2 py-0.5 rounded-md">
                        {chap.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                {currentVideo.specs.map((sp, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-background/60 border border-border">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase">{sp.label}</p>
                    <p className="text-xs font-bold text-white mt-0.5 truncate">{sp.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip Slider Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {processVideos.map((video, idx) => {
            const isSelected = currentIndex === idx;
            const VideoIcon = video.icon;
            return (
              <div
                key={video.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative rounded-2xl overflow-hidden p-3 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-alpine-900 border-2 border-emerald-500 shadow-xl shadow-alpine-950/40 scale-[1.03]"
                    : "bg-alpine-900/60 border border-border hover:border-primary/40 hover:bg-alpine-900"
                }`}
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-2.5 bg-black">
                  <img
                    src={video.posterUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-black/70 text-white text-[9px] font-bold">
                    {video.duration}
                  </div>

                  {isSelected && (
                    <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-primary text-zinc-950 flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center gap-1 text-[10px] text-primary font-extrabold mb-0.5">
                    <VideoIcon className="w-3 h-3" />
                    <span>Stage 0{idx + 1}</span>
                  </div>
                  <h4 className="font-display text-xs font-bold text-white line-clamp-2 leading-snug">
                    {video.title.replace(/^\d+\.\s*/, "")}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessVideoGallery;
