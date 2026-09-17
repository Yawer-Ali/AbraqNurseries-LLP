import { Play, X } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const videos = [
  {
    id: "v1",
    title: "Orchard Development: Drone Aerial Survey & High-Density Spindle",
    duration: "4:32",
    videoSrc: "/videos/kashmir-orchard-drone-hero.mp4",
    thumbnail: "/images/hero/kashmir-orchard-aerial-1.webp",
    description: "Aerial flyover of certified high-density apple orchards across Kashmir featuring Italian M9 spindle canopy architecture.",
  },
  {
    id: "v2",
    title: "Knip-Boom Nursery Propagation & Rootstock Layering",
    duration: "3:15",
    videoSrc: "/videos/nursery-propagation-live.mp4",
    thumbnail: "/images/nursery/dsc03616.webp",
    description: "Certified European clonal rootstock mother beds, precision omega bench-grafting, and feathered sapling development.",
  },
  {
    id: "v3",
    title: "Snow-Load Trellis Architecture & Micro-Drip Setup",
    duration: "5:48",
    videoSrc: "/videos/trellis-setup-live.mp4",
    thumbnail: "/images/trellis/dsc08864.webp",
    description: "Heavy snow-load concrete & galvanized steel trellis installation with automated rootzone fertigation lines.",
  },
  {
    id: "v4",
    title: "Commercial Harvest & Color Grading Packout",
    duration: "3:40",
    videoSrc: "/videos/harvest-packout-live.mp4",
    thumbnail: "/images/harvest/dsc07844.webp",
    description: "90%+ export-grade Mandi packout of Gala Schniga, King Roat, and Red Velox apple cultivars.",
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section className="py-24 md:py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(232,150,31,0.3) 0%, transparent 60%)",
      }} />
      <ScrollReveal>
        <div className="container-wide relative">
          <div className="max-w-2xl mb-12">
            <span className="text-honey-300 text-sm font-600 tracking-wide uppercase">Watch & Learn</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-600 text-cream-50 leading-tight font-display">
              Our process<br /><span className="italic font-400 text-gradient-gold">in motion</span>
            </h2>
            <p className="mt-4 text-cream-200/60 text-lg leading-relaxed">
              Watch real footage of how we develop high-density orchards, graft certified saplings, and install trellis frameworks across Kashmir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group text-left cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-cream-100/10 hover:border-honey-300/30 transition-colors duration-300">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-cream-50/90 backdrop-blur-sm text-forest-700 group-hover:bg-honey-400 group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-1 bg-charcoal-900/80 text-cream-50 rounded text-xs font-500">
                    {video.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-cream-50 font-600 font-display text-base group-hover:text-honey-200 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="mt-1.5 text-cream-200/50 text-xs leading-relaxed line-clamp-2">{video.description}</p>
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[70] bg-charcoal-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div className="max-w-4xl w-full bg-charcoal-900/95 p-4 sm:p-6 rounded-3xl border border-cream-100/15 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-honey-300 uppercase tracking-wider">Now Playing</span>
                <h3 className="text-cream-50 text-lg sm:text-xl font-600 font-display">{activeVideo.title}</h3>
              </div>
              <button onClick={() => setActiveVideo(null)} className="text-cream-200/60 hover:text-cream-50 transition-colors p-2 cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-cream-100/10">
              <video
                src={activeVideo.videoSrc}
                poster={activeVideo.thumbnail}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm text-cream-200/70 mt-3">{activeVideo.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;
