import type { ReactNode } from "react";
import { useParallax } from "../hooks/useParallax";
import ScrollReveal from "./ScrollReveal";
import { ChinarLeaf } from "./motifs/KashmirMotifs";

interface PhotoBreakProps {
  image: string;
  alt: string;
  eyebrow?: string;
  children: ReactNode;
}

/** A quiet full-bleed photograph with a single line — a pause between dense sections. */
export function PhotoBreak({ image, alt, eyebrow, children }: PhotoBreakProps) {
  const { ref, offset } = useParallax<HTMLElement>(0.16, "through");
  return (
    <section ref={ref} className="relative h-[70svh] md:h-[82svh] overflow-hidden bg-forest-950 text-cream-50">
      <div className="absolute inset-x-0 -top-[15%] h-[130%] will-change-transform" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-forest-950/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(11,26,19,0.75)_85%)]" />
      <div className="relative h-full container-wide flex flex-col items-center justify-center text-center">
        <ScrollReveal variant="fade">
          <div className="flex items-center gap-4 text-honey-300">
            <span className="h-px w-10 bg-current opacity-60" />
            <ChinarLeaf className="w-6 h-6" />
            <span className="h-px w-10 bg-current opacity-60" />
          </div>
          {eyebrow && <p className="mt-5 text-[11px] font-700 tracking-[0.3em] uppercase text-honey-200">{eyebrow}</p>}
        </ScrollReveal>
        <ScrollReveal variant="blur" delay={120}>
          <p className="display-lg mt-6 max-w-4xl text-balance">{children}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default PhotoBreak;
