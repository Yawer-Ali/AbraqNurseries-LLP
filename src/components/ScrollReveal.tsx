import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "up" | "fade" | "scale" | "left" | "right" | "mask" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /** Fraction of the element that must be visible before revealing */
  threshold?: number;
}

export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function ScrollReveal({ children, className = "", delay = 0, variant = "up", threshold = 0.08 }: ScrollRevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>(threshold);

  // IntersectionObserver honours the target's own clip-path, so a fully
  // masked element would never intersect — observe a wrapper and mask inside.
  if (variant === "mask") {
    return (
      <div ref={ref} className={className}>
        <div
          className={`reveal reveal-mask h-full ${visible ? "is-visible" : ""}`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
