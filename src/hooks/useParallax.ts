import { useEffect, useRef, useState } from "react";

/**
 * mode "exit":    0 at rest, grows as the element scrolls up out of view (heroes)
 * mode "through": centred on 0 when the element sits mid-viewport (mid-page bands)
 */
export function useParallax<T extends HTMLElement>(speed = 0.3, mode: "exit" | "through" = "exit") {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        setOffset(
          mode === "exit"
            ? Math.max(0, -rect.top) * speed
            : (windowHeight / 2 - (rect.top + rect.height / 2)) * speed,
        );
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed, mode]);

  return { ref, offset };
}
