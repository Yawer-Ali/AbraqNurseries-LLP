import { useEffect, useRef } from "react";

/**
 * Companion cursor for fine pointers: a hairline ring that trails the pointer,
 * swells over links/buttons, and shows "Play" over films. The native cursor
 * stays visible (the ring is decoration only). Off for touch & reduced motion.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!ring || !label) return;

    let x = -100, y = -100, tx = -100, ty = -100, frame = 0;
    let state: "idle" | "link" | "play" | "hidden" = "idle";

    const apply = (next: typeof state) => {
      if (next === state) return;
      state = next;
      ring.dataset.state = next;
      label.textContent = next === "play" ? "Play" : "";
    };

    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      ring.style.opacity = "1";
      const t = e.target as Element | null;
      if (!t || !t.closest) return;
      if (t.closest("input, textarea, select, iframe, [contenteditable]")) apply("hidden");
      else if (t.closest('[aria-label^="Play video"], [data-cursor="play"]')) apply("play");
      else if (t.closest("a, button, [role='button'], [role='tab'], label")) apply("link");
      else apply("idle");
    };
    const onLeave = () => (ring.style.opacity = "0");
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    frame = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div ref={ringRef} className="cursor-ring" data-state="idle" aria-hidden="true">
      <span ref={labelRef} className="cursor-ring-label" />
    </div>
  );
}

export default CustomCursor;
