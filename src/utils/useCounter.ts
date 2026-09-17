import { useState, useEffect } from "react";

export const useCounter = (endVal: number, duration = 1500, startOnTrigger = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnTrigger) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * endVal));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endVal);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [endVal, duration, startOnTrigger]);

  return count;
};
