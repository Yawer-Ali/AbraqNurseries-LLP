import { useEffect, useRef } from "react";

/**
 * Soft champagne light that trails the pointer on desktop.
 * Position is written straight to the DOM (no React re-render per mousemove).
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = -400, y = -400, tx = -400, ty = -400, frame = 0;
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
    };
    const onLeave = () => (el.style.opacity = "0");

    frame = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[1] w-[500px] h-[500px] rounded-full opacity-0 transition-opacity duration-700 hidden md:block mix-blend-soft-light"
      style={{ background: "radial-gradient(circle, rgba(233,214,168,0.35) 0%, transparent 60%)" }}
    />
  );
}

export default CursorGlow;
