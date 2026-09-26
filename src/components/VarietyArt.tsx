import type { ReactElement } from "react";
import { KhatambandPattern } from "./motifs/KashmirMotifs";

/**
 * Botanical line-art card used for varieties that have no real photograph yet.
 * Deliberately illustrative (not a stand-in photo) so nothing on the site
 * pretends to be something it isn't.
 */
const drawings: Record<string, ReactElement> = {
  Cherry: (
    <g>
      <path d="M100 30 C 96 60, 78 92, 66 128 M100 30 C 108 66, 126 96, 138 126" />
      <path d="M100 30 C 120 22, 146 26, 160 42 C 140 48, 118 44, 100 30 Z" />
      <circle cx="62" cy="146" r="22" />
      <circle cx="140" cy="144" r="22" />
      <path d="M54 138 q6 -6 14 -4 M132 136 q6 -6 14 -4" />
    </g>
  ),
  Pear: (
    <g>
      <path d="M100 38 V 56" />
      <path d="M100 44 C 116 30, 138 32, 146 44 C 128 50, 112 50, 100 44 Z" />
      <path d="M100 56 C 84 56, 80 78, 82 94 C 84 110, 58 124, 58 150 C 58 176, 80 190, 100 190 C 120 190, 142 176, 142 150 C 142 124, 116 110, 118 94 C 120 78, 116 56, 100 56 Z" />
      <path d="M86 150 q4 18 18 24" />
    </g>
  ),
  Plum: (
    <g>
      <path d="M100 40 V 64" />
      <path d="M100 48 C 82 32, 60 34, 52 46 C 70 54, 88 54, 100 48 Z" />
      <ellipse cx="100" cy="124" rx="50" ry="58" />
      <path d="M100 68 C 90 100, 92 150, 104 180" />
    </g>
  ),
  Apricot: (
    <g>
      <path d="M100 42 V 66" />
      <path d="M100 50 C 118 34, 142 36, 150 50 C 132 58, 114 58, 100 50 Z" />
      <circle cx="100" cy="128" r="58" />
      <path d="M100 70 C 84 100, 84 156, 100 186" />
      <path d="M130 104 q10 10 10 26" />
    </g>
  ),
  Pomegranate: (
    <g>
      <path d="M82 58 l6 -18 l12 12 l12 -12 l6 18" />
      <path d="M78 62 H 122" />
      <path d="M100 62 C 50 62, 40 110, 44 138 C 50 176, 82 192, 100 192 C 118 192, 150 176, 156 138 C 160 110, 150 62, 100 62 Z" />
      <circle cx="84" cy="128" r="5" /><circle cx="100" cy="120" r="5" /><circle cx="116" cy="128" r="5" />
      <circle cx="92" cy="144" r="5" /><circle cx="108" cy="144" r="5" /><circle cx="100" cy="160" r="5" />
    </g>
  ),
  Almond: (
    <g>
      <path d="M100 30 C 136 64, 146 122, 100 190 C 54 122, 64 64, 100 30 Z" />
      <path d="M100 44 C 90 90, 92 140, 100 178" />
      <path d="M100 30 C 120 18, 146 22, 156 36 C 136 42, 116 40, 100 30 Z" />
      <path d="M86 84 q-6 20 -2 40 M114 84 q6 20 2 40" />
    </g>
  ),
};

export function VarietyArt({ category, name, compact = false }: { category: string; name: string; compact?: boolean }) {
  const art = drawings[category] ?? drawings.Plum;
  return (
    <div className="absolute inset-0 bg-pine-gradient flex flex-col items-center justify-center text-honey-300 overflow-hidden">
      <KhatambandPattern className="text-honey-300/[0.07]" size={40} />
      <svg
        viewBox="0 0 200 220"
        className={`relative ${compact ? "w-1/2" : "w-[46%]"} max-h-[62%]`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {art}
      </svg>
      {!compact && (
        <span className="relative mt-4 font-display italic text-xl text-cream-50/85 px-4 text-center">{name}</span>
      )}
      <span className="absolute bottom-3 right-4 text-[9px] font-700 tracking-[0.25em] uppercase text-cream-200/45">
        Illustration
      </span>
    </div>
  );
}

export default VarietyArt;
