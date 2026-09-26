import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";
import { ChinarLeaf } from "./motifs/KashmirMotifs";

type Variant = "split" | "center" | "columns" | "watermark";
type AccentStyle = "italic" | "underline" | "plain";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  description?: ReactNode;
  /** @deprecated use variant="center" */
  align?: "left" | "center";
  variant?: Variant;
  accentStyle?: AccentStyle;
  /** Large outlined word set behind the heading (watermark variant) */
  watermark?: string;
  tone?: "light" | "dark";
  aside?: ReactNode;
  className?: string;
}

/**
 * Editorial section header with several compositions so consecutive sections
 * don't repeat the same shape:
 *  split     — headline left, aside (CTA) right            (default)
 *  center    — centred stack
 *  columns   — oversized chapter numeral + label in a narrow left column, headline right
 *  watermark — giant outlined word behind a left-aligned headline
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
  align,
  variant,
  accentStyle = "italic",
  watermark,
  tone = "light",
  aside,
  className = "",
}: SectionHeadingProps) {
  const v: Variant = variant ?? (align === "center" ? "center" : "split");
  const dark = tone === "dark";
  const centered = v === "center";

  const accentNode = accent ? <Accent style={accentStyle} dark={dark}>{accent}</Accent> : null;

  const headline = (
    <h2 className={`display-lg text-balance ${dark ? "text-cream-50" : "text-forest-900"}`}>
      {title}
      {accentNode && <> {accentNode}</>}
    </h2>
  );

  const lede = description ? (
    <p
      className={`text-base md:text-lg leading-relaxed text-pretty max-w-2xl ${centered ? "mx-auto" : ""} ${
        dark ? "text-cream-200/70" : "text-charcoal-700/75"
      }`}
    >
      {description}
    </p>
  ) : null;

  const label = (
    <span className={`eyebrow ${dark ? "!text-honey-300" : ""}`}>{eyebrow}</span>
  );

  const indexChip = index ? (
    <span className={`numeral text-sm italic ${dark ? "text-honey-300/80" : "text-honey-700"}`}>({index})</span>
  ) : null;

  /* ——— columns ——— */
  if (v === "columns") {
    return (
      <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20 ${className}`}>
        <ScrollReveal variant="fade" className="lg:col-span-3">
          <div className={`flex lg:flex-col items-baseline lg:items-start gap-5 lg:gap-6 lg:pt-3 lg:border-t ${dark ? "border-cream-50/15" : "border-cream-300"}`}>
            {index && (
              <span className={`numeral italic leading-none text-6xl md:text-7xl ${dark ? "text-honey-300/80" : "text-honey-700/80"}`}>{index}</span>
            )}
            <div className="flex flex-col gap-4">
              {label}
              <ChinarLeaf className={`hidden lg:block w-7 h-7 ${dark ? "text-honey-300/50" : "text-honey-600/50"}`} />
            </div>
          </div>
        </ScrollReveal>
        <div className="lg:col-span-9">
          <ScrollReveal delay={80}>{headline}</ScrollReveal>
          {(lede || aside) && (
            <ScrollReveal delay={160}>
              <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                {lede}
                {aside && <div className="shrink-0">{aside}</div>}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    );
  }

  /* ——— watermark ——— */
  if (v === "watermark") {
    return (
      <div className={`relative mb-14 md:mb-20 ${className}`}>
        {watermark && (
          <span
            aria-hidden="true"
            className={`hidden md:block pointer-events-none select-none absolute md:-top-16 right-0 font-display italic leading-none whitespace-nowrap md:text-[13rem] lg:text-[15rem] ${dark ? "text-outline-dark" : "text-outline-light"}`}
          >
            {watermark}
          </span>
        )}
        <div className="relative grid lg:grid-cols-12 gap-8 items-end">
          <div className={aside ? "lg:col-span-8" : "lg:col-span-10"}>
            <ScrollReveal variant="fade">
              <div className="flex items-center gap-4">{indexChip}{label}</div>
            </ScrollReveal>
            <ScrollReveal delay={80}><div className="mt-6">{headline}</div></ScrollReveal>
            {lede && <ScrollReveal delay={160}><div className="mt-6">{lede}</div></ScrollReveal>}
          </div>
          {aside && (
            <ScrollReveal delay={200} className="lg:col-span-4 lg:justify-self-end">{aside}</ScrollReveal>
          )}
        </div>
      </div>
    );
  }

  /* ——— split / center ——— */
  return (
    <div className={`${centered ? "text-center mx-auto max-w-3xl" : "grid lg:grid-cols-12 gap-8 items-end"} mb-14 md:mb-20 ${className}`}>
      <div className={centered ? "" : aside ? "lg:col-span-8" : "lg:col-span-9"}>
        <ScrollReveal variant="fade">
          <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
            {indexChip}
            {label}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={80}><div className="mt-6">{headline}</div></ScrollReveal>
        {lede && <ScrollReveal delay={160}><div className="mt-6">{lede}</div></ScrollReveal>}
      </div>
      {aside && !centered && (
        <ScrollReveal delay={200} className="lg:col-span-4 lg:justify-self-end">{aside}</ScrollReveal>
      )}
    </div>
  );
}

function Accent({ style, dark, children }: { style: AccentStyle; dark: boolean; children: ReactNode }) {
  if (style === "plain") {
    return <span className={dark ? "text-honey-200" : "text-honey-700"}>{children}</span>;
  }
  if (style === "underline") {
    // Background-drawn brush stroke so it wraps line-by-line on small screens
    return <span className={`brush-underline ${dark ? "brush-underline-dark" : ""}`}>{children}</span>;
  }
  return <span className={`serif-italic ${dark ? "text-gradient-gold" : "text-honey-600"}`}>{children}</span>;
}

export default SectionHeading;
