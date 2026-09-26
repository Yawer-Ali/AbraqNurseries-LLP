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
      className="relative aspect-[4/3] sm:aspect-[16/9] rounded-[1.75rem] overflow-hidden cursor-ew-resize select-none shadow-luxe group touch-pan-y"
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

      <span className="absolute top-5 left-5 px-4 py-2 bg-forest-950/75 backdrop-blur-md text-cream-50 rounded-full text-[10px] font-700 tracking-[0.2em] uppercase border border-cream-50/15">
        {beforeLabel}
      </span>
      <span className="absolute top-5 right-5 px-4 py-2 bg-honey-400/90 backdrop-blur-md text-forest-950 rounded-full text-[10px] font-700 tracking-[0.2em] uppercase">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 w-px bg-cream-50 shadow-[0_0_24px_rgba(233,214,168,0.9)] pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-cream-50/90 backdrop-blur-md border border-honey-400 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <MoveHorizontal className="w-5 h-5 text-forest-900" />
        </div>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;
