import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import ScrollReveal from "./ScrollReveal";
import { useParallax } from "../hooks/useParallax";
import { RidgeLines } from "./motifs/KashmirMotifs";

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
  const { ref, offset } = useParallax<HTMLElement>(0.18, "through");

  // Set the final word(s) in italic gold for an editorial cadence
  const words = title.split(" ");
  const tail = words.length > 2 ? words.slice(-2).join(" ") : "";
  const head = tail ? words.slice(0, -2).join(" ") : title;

  return (
    <section ref={ref} className="relative bg-forest-950 text-cream-50 overflow-hidden">
      <div className="absolute inset-0 -top-[20%] h-[140%] will-change-transform" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        <img
          src="/images/trellis/dsc08851.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-forest-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,26,19,0.85)_75%)]" />
      <FloatingParticles count={14} />
      <RidgeLines className="absolute bottom-0 left-0 h-24 md:h-36 text-honey-300/40" />

      <div className="relative container-wide py-28 md:py-44 text-center">
        <ScrollReveal variant="fade">
          <span className="eyebrow !text-honey-300">Begin your orchard</span>
        </ScrollReveal>
        <ScrollReveal delay={100} variant="blur">
          <h2 className="display-xl mt-8 max-w-5xl mx-auto text-balance">
            {head}{" "}
            {tail && <span className="serif-italic text-gradient-gold">{tail}</span>}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={220}>
          <p className="mt-8 text-cream-100/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={320}>
          <Link to={buttonLink} className="mt-12 btn-lux btn-gold !px-9 !py-5">
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CTASection;
