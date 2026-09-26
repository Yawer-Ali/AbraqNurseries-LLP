import type { ReactNode } from "react";
import { useParallax } from "../hooks/useParallax";
import { ChinarLeaf } from "./motifs/KashmirMotifs";

interface PageHeroProps {
  image: string;
  /** CSS object-position — the photo's focal point (e.g. "30% 20%") */
  imagePosition?: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  description?: ReactNode;
  /** Small label on the right edge, e.g. "Srinagar · J&K" */
  meta?: string;
  /** Rendered above the eyebrow (e.g. a back link) */
  before?: ReactNode;
  /** Rendered under the description (e.g. CTAs / chips) */
  children?: ReactNode;
  size?: "md" | "lg";
}

/**
 * Full-bleed editorial page opener shared by every inner page.
 * Slow Ken Burns image with scroll parallax, pine-ink grade, and a
 * masked line-by-line headline reveal.
 */
export function PageHero({
  image,
  imagePosition = "center",
  alt,
  eyebrow,
  title,
  accent,
  description,
  meta = "Srinagar · Jammu & Kashmir",
  before,
  children,
  size = "md",
}: PageHeroProps) {
  const { ref, offset } = useParallax<HTMLElement>(0.35);

  return (
    <section
      ref={ref}
      className={`relative flex items-end overflow-hidden bg-forest-950 text-cream-50 ${
        size === "lg" ? "min-h-[88svh]" : "min-h-[72svh] md:min-h-[78svh]"
      }`}
    >
      <div className="absolute inset-0 will-change-transform" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        <img src={image} alt={alt} className="w-full h-full object-cover animate-ken-burns" style={{ objectPosition: imagePosition }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-forest-950/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest-950/70 to-transparent" />

      {/* Vertical meta rail */}
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-5 animate-fade-in" style={{ animationDelay: "0.9s" }}>
        <span className="w-px h-16 bg-cream-50/30" />
        <ChinarLeaf className="w-5 h-5 text-honey-300/80" />
        <span className="text-[10px] tracking-[0.35em] uppercase text-cream-50/70 [writing-mode:vertical-rl] rotate-180">
          {meta}
        </span>
        <span className="w-px h-16 bg-cream-50/30" />
      </div>

      <div className="relative container-wide w-full pt-40 pb-16 md:pb-24">
        {before && <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>{before}</div>}
        <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <span className="eyebrow !text-honey-300">{eyebrow}</span>
        </div>
        <h1 className="display-xl mt-6 max-w-5xl">
          <span className="line-mask">
            <span style={{ animationDelay: "0.45s" }}>{title}</span>
          </span>
          {accent && (
            <span className="line-mask">
              <span className="serif-italic text-gradient-gold pr-2" style={{ animationDelay: "0.6s" }}>
                {accent}
              </span>
            </span>
          )}
        </h1>
        {(description || children) && (
          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7 lg:col-span-6 animate-fade-up" style={{ animationDelay: "0.85s" }}>
              <span className="block w-16 h-px bg-honey-400 mb-6 origin-left animate-[drawLine_1.2s_var(--ease-out-expo)_1s_both]" />
              {description && (
                <p className="text-cream-100/80 text-base md:text-lg leading-relaxed max-w-xl text-pretty">{description}</p>
              )}
              {children && <div className="mt-8">{children}</div>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHero;
