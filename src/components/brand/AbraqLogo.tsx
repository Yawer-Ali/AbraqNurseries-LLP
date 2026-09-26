/**
 * Abraq Nurseries brand mark & wordmark, redrawn as crisp vectors from the
 * company logo: an orange stroke beside a green triangular "A" whose inner cut
 * forms a "G". Brand colours: green #06471B, orange #F18D13.
 *
 * Variants:
 *  color   — full colour for light backgrounds
 *  reverse — orange + ivory for dark backgrounds (green would disappear on pine)
 */
export const BRAND = { green: "#06471B", orange: "#F18D13" };

type Variant = "color" | "reverse";

export function AbraqMark({ variant = "color", className = "w-10 h-10", title }: { variant?: Variant; className?: string; title?: string }) {
  const green = variant === "reverse" ? "#F5F1E8" : BRAND.green;
  return (
    <svg
      viewBox="10 92 745 586"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <polygon fill={BRAND.orange} points="320,100 415,100 118,670 20,670" />
      <polygon fill={green} points="455,152 548,328 452,328 408,238" />
      <polygon fill={green} points="350,326 450,326 318,590 600,590 548,495 455,495 455,415 600,415 745,670 165,670" />
    </svg>
  );
}

/** The orange "i" drawn as a young sapling, as in the logo */
function SaplingI({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 20 60" className="inline-block h-[0.98em] w-[0.34em] -mb-[0.02em] align-baseline" aria-hidden="true">
      <path d="M10 60 V22" stroke={color} strokeWidth="6.4" strokeLinecap="round" />
      <path d="M10 20 C 10 12, 5 9, 2 3 M10 20 C 10 12, 15 9, 18 3" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function AbraqWordmark({
  variant = "color",
  tagline = false,
  className = "",
  align = "left",
}: {
  variant?: Variant;
  tagline?: boolean;
  className?: string;
  align?: "left" | "center";
}) {
  const dark = variant === "reverse";
  return (
    <span className={`inline-flex flex-col leading-none ${align === "center" ? "items-center text-center" : ""} ${className}`}>
      <span className="whitespace-nowrap font-sans">
        <span className={`font-800 tracking-[0.16em] ${dark ? "text-cream-50" : "text-[#1f1f1f]"}`}>ABRAQ</span>{" "}
        <span className={`font-700 tracking-[-0.01em] ${dark ? "text-[#9fd3a5]" : "text-[#06471B]"}`} aria-label="nurseries">
          <span aria-hidden="true">
            nurser
            <SaplingI color={BRAND.orange} />
            es
          </span>
        </span>
      </span>
      {tagline && (
        <span className={`mt-[0.35em] font-script text-[1.05em] ${dark ? "text-cream-100/85" : "text-[#2a2a2a]"}`}>Orchards Expert</span>
      )}
    </span>
  );
}

/** Horizontal lockup: mark + wordmark (navbar, footer). */
export function AbraqLogo({ variant = "reverse", tagline = false, className = "" }: { variant?: Variant; tagline?: boolean; className?: string }) {
  return (
    <span className={`group inline-flex items-center gap-3 ${className}`}>
      <AbraqMark variant={variant} className="h-11 w-auto shrink-0 transition-transform duration-700 group-hover:scale-105" />
      <AbraqWordmark variant={variant} tagline={tagline} className="text-[16px] md:text-[17px]" />
    </span>
  );
}

export default AbraqLogo;
