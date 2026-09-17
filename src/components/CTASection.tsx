import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Ready to grow your orchard?",
  subtitle = "From saplings to harvest — we're with you every step of the way. Get a free consultation today.",
  buttonText = "Get a Free Consultation",
  buttonLink = "/contact",
}: CTAProps) {
  return (
    <section className="py-20 md:py-28 bg-forest-800 relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient-shift opacity-100" style={{
        background: "linear-gradient(120deg, #1f3a22, #294d2c, #1f3a22, #336136)",
      }} />
      <FloatingParticles count={15} />
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle at 30% 50%, rgba(232,150,31,0.4) 0%, transparent 50%)",
      }} />
      <div className="container-wide relative text-center">
        <h2 className="text-3xl md:text-5xl font-600 text-cream-50 leading-tight text-balance font-display">
          {title}
        </h2>
        <p className="mt-4 text-cream-200/70 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="group mt-8 inline-flex items-center gap-2 px-8 py-4 bg-honey-400 text-charcoal-900 rounded-full font-600 text-base hover:bg-honey-300 transition-all duration-300 hover:scale-[1.02] shadow-xl animate-glow-pulse"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
