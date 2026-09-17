import { useRef, useState, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-cream-200 shadow-xl group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
    >
      <img src={afterImage} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${100 / (position / 100)}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      <span className="absolute top-4 left-4 px-3 py-1.5 bg-charcoal-900/70 backdrop-blur-sm text-cream-50 rounded-full text-xs font-600">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1.5 bg-forest-600/80 backdrop-blur-sm text-cream-50 rounded-full text-xs font-600">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 w-1 bg-cream-50 shadow-lg pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream-50 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <MoveHorizontal className="w-5 h-5 text-forest-700" />
        </div>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;
