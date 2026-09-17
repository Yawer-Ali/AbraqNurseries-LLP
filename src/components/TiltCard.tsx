import { useRef, useState, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

export function TiltCard({ children, className = "", maxTilt = 8, scale = 1.02 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const tiltX = (py - 0.5) * maxTilt * 2;
    const tiltY = (px - 0.5) * maxTilt * -2;
    setTransform(`perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`);
    setGlarePos({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.12) 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}

export default TiltCard;
