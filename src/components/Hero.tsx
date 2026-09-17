import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Sun, MapPin } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import { useParallax } from "../hooks/useParallax";

const heroImage = "https://images.pexels.com/photos/18453079/pexels-photo-18453079.jpeg?auto=compress&cs=tinysrgb&w=1920";
const secondaryImage = "https://images.pexels.com/photos/18607500/pexels-photo-18607500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export function Hero() {
  const { ref: bgRef, offset } = useParallax<HTMLDivElement>(0.15);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div ref={bgRef} className="absolute inset-0" style={{ transform: `translateY(${offset}px) scale(1.1)` }}>
        <img
          src={heroImage}
          alt="Mist-covered hills of Srinagar, Kashmir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-charcoal-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 to-transparent" />
      </div>

      <FloatingParticles count={25} />

      <div className="relative container-wide pt-32 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-up">
            <Sun className="w-4 h-4 text-honey-300 animate-glow-pulse rounded-full" />
            <span className="text-honey-200 text-sm font-500 tracking-wide uppercase">
              Srinagar, Kashmir · Est. with purpose
            </span>
          </div>

          <h1 className="text-cream-50 text-5xl md:text-7xl font-600 leading-[1.05] text-balance animate-fade-up font-display" style={{ animationDelay: "0.1s" }}>
            Growing Kashmir's<br />
            <span className="italic font-400 text-gradient-gold">future orchards</span>
          </h1>

          <p className="mt-6 text-cream-100/90 text-lg md:text-xl max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Nursery plants, saplings, and scientific plantation support from
            Abraq Nurseries LLP — developing productive orchards across Jammu & Kashmir.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/varieties"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-cream-50 text-forest-800 rounded-full font-600 text-base hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl"
            >
              Explore Varieties
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-cream-100/40 text-cream-50 rounded-full font-500 text-base hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-cream-100/60"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-8 md:gap-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <HeroStat number="50K+" label="Saplings distributed" />
          <div className="w-px h-12 bg-cream-100/20" />
          <HeroStat number="200+" label="Orchards developed" />
          <div className="w-px h-12 bg-cream-100/20" />
          <HeroStat number="25+" label="Fruit varieties" />
          <div className="w-px h-12 bg-cream-100/20" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-honey-300" />
            <span className="text-cream-200/80 text-sm">12 districts served</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 bottom-24 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-cream-50/20 animate-scale-in animate-float-slow" style={{ animationDelay: "0.6s" }}>
        <img
          src={secondaryImage}
          alt="Apple tree laden with ripe fruit in Kashmir"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-cream-200/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream-200/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function HeroStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="group">
      <div className="text-cream-50 text-3xl md:text-4xl font-600 font-display transition-transform duration-300 group-hover:scale-110 origin-left">{number}</div>
      <div className="text-cream-200/80 text-sm mt-1">{label}</div>
    </div>
  );
}

export default Hero;
