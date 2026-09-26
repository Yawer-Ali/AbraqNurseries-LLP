/**
 * Kashmir-rooted ornament system for the Abraq brand.
 *  - ChinarLeaf:        the valley's iconic five-lobed chinar (plane-tree) leaf
 *  - KhatambandPattern: the interlocking geometric lattice of Kashmiri walnut-wood ceilings
 *  - TrellisLines:      high-density orchard poles & catenary wires, drawn as line art
 *  - RidgeLines:        layered Pir Panjal ridgelines, stroke-only
 *  - KashmirDivider:    hairline · chinar · hairline section ornament
 * All are decorative (aria-hidden) and inherit colour via currentColor.
 */
import { useId } from "react";

export function ChinarLeaf({ className = "w-6 h-6", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
      <path
        d="M32 45 L24 43 L13 48 L16 39 L4 35 L13 30 L6 19 L17 22 L18 11 L26 18 L32 3 L38 18 L46 11 L47 22 L58 19 L51 30 L60 35 L48 39 L51 48 L40 43 Z"
        fill={filled ? "currentColor" : "none"}
        fillOpacity={filled ? 0.18 : undefined}
      />
      <path d="M32 45 V61 M32 45 V10 M32 36 L12 23 M32 36 L52 23 M32 41 L10 36 M32 41 L54 36" strokeWidth="1" opacity="0.75" />
    </svg>
  );
}

export function KhatambandPattern({ className = "", size = 44 }: { className?: string; size?: number }) {
  const id = useId().replace(/:/g, "");
  const s = size;
  const h = s / 2;
  const q = s * 0.15;
  return (
    <svg className={`pointer-events-none absolute inset-0 w-full h-full ${className}`} aria-hidden="true">
      <defs>
        <pattern id={`kb-${id}`} width={s} height={s} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.8">
            {/* eight-point star: two overlapping squares */}
            <path d={`M${h} ${q} L${s - q} ${h} L${h} ${s - q} L${q} ${h} Z`} />
            <path d={`M${q * 1.7} ${q * 1.7} H${s - q * 1.7} V${s - q * 1.7} H${q * 1.7} Z`} />
            {/* lattice ties to neighbouring tiles */}
            <path d={`M${h} 0 V${q} M${h} ${s - q} V${s} M0 ${h} H${q} M${s - q} ${h} H${s}`} />
            <circle cx={h} cy={h} r={s * 0.07} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#kb-${id})`} />
    </svg>
  );
}

export function TrellisLines({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`pointer-events-none absolute inset-x-0 w-full ${className}`} height="220" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id={`tr-${id}`} width="140" height="220" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M70 18 V220" strokeWidth="1.6" />
            <path d="M0 58 Q35 66 70 58 T140 58" />
            <path d="M0 108 Q35 116 70 108 T140 108" />
            <path d="M0 158 Q35 166 70 158 T140 158" />
            <path d="M70 18 L96 220" opacity="0.5" />
            <circle cx="70" cy="18" r="2" fill="currentColor" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#tr-${id})`} />
    </svg>
  );
}

export function RidgeLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 170" preserveAspectRatio="none" className={`pointer-events-none w-full ${className}`} aria-hidden="true" fill="none" stroke="currentColor">
      <path strokeWidth="1" opacity="0.45" d="M0 120 L90 96 L170 108 L260 70 L330 86 L420 48 L500 74 L590 58 L660 80 L760 34 L840 62 L930 50 L1010 76 L1110 40 L1190 66 L1280 52 L1360 78 L1440 64" />
      <path strokeWidth="1" opacity="0.7" d="M0 140 L110 118 L200 128 L290 100 L380 118 L470 92 L560 112 L650 98 L740 120 L840 86 L930 108 L1020 94 L1120 116 L1210 96 L1300 112 L1440 100" />
      <path strokeWidth="1.2" d="M0 160 L130 146 L240 154 L350 136 L460 150 L570 132 L690 148 L800 130 L910 146 L1030 134 L1150 150 L1270 138 L1440 150" />
    </svg>
  );
}

export function KashmirDivider({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const c = tone === "dark" ? "text-honey-300/70" : "text-honey-600/70";
  return (
    <div className={`flex items-center justify-center gap-4 ${c} ${className}`} aria-hidden="true">
      <span className="h-px w-16 md:w-28 bg-current opacity-60" />
      <span className="w-1 h-1 rounded-full bg-current" />
      <ChinarLeaf className="w-6 h-6" />
      <span className="w-1 h-1 rounded-full bg-current" />
      <span className="h-px w-16 md:w-28 bg-current opacity-60" />
    </div>
  );
}
