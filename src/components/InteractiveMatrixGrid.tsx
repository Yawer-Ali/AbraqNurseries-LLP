
import React, { useState, useCallback } from "react";

export const InteractiveMatrixGrid: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<Record<number, string>>({});

  const colors = [
    "rgba(34, 197, 94, 0.45)", // emerald
    "rgba(16, 185, 129, 0.45)", // green
    "rgba(245, 158, 11, 0.4)", // amber
    "rgba(56, 189, 248, 0.4)", // sky
    "rgba(168, 85, 247, 0.35)" // purple
  ];

  const handleCellHover = useCallback((idx: number) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setActiveIndices((prev) => ({ ...prev, [idx]: randomColor }));

    // Fade out after 800ms
    setTimeout(() => {
      setActiveIndices((prev) => {
        const next = { ...prev };
        delete next[idx];
        return next;
      });
    }, 700);
  }, [colors]);

  const totalCells = 48; // 6 cols x 8 rows

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-auto select-none opacity-40 dark:opacity-60 -z-10">
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 h-full w-full gap-1 p-2">
        {Array.from({ length: totalCells }).map((_, idx) => (
          <div
            key={idx}
            onMouseEnter={() => handleCellHover(idx)}
            style={{
              backgroundColor: activeIndices[idx] || "transparent",
              transition: activeIndices[idx] ? "none" : "background-color 0.8s ease-out"
            }}
            className="rounded-lg border border-emerald-500/5 dark:border-emerald-500/10 hover:border-primary/25 cursor-crosshair"
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveMatrixGrid;
