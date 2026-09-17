import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[100] w-96 h-96 rounded-full opacity-20 blur-3xl transition-transform duration-100 ease-out hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(68,122,73,0.3) 0%, transparent 60%)",
        left: pos.x - 192,
        top: pos.y - 192,
      }}
    />
  );
}

export default CursorGlow;
