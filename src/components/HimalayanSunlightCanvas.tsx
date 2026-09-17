
import React, { useEffect, useRef } from "react";

export const HimalayanSunlightCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle pool: Glowing pollen, mist droplets, golden sunbeams
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      fadeSpeed: number;
      pulseAngle: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = 45;

    const colors = [
      "rgba(34, 197, 94,",   // Emerald green
      "rgba(74, 222, 128,",  // Light emerald
      "rgba(251, 191, 36,",  // Golden amber
      "rgba(45, 212, 191,",  // Teal
      "rgba(255, 255, 255,"  // Mountain mist white
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        alpha: Math.random() * 0.6 + 0.1,
        maxAlpha: Math.random() * 0.7 + 0.3,
        fadeSpeed: Math.random() * 0.008 + 0.003,
        pulseAngle: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient soft sunbeam shafts from top-right corner
      const sunGradient = ctx.createRadialGradient(
        width * 0.85, 0, 10,
        width * 0.85, 0, width * 0.75
      );
      sunGradient.addColorStop(0, "rgba(251, 191, 36, 0.08)");
      sunGradient.addColorStop(0.5, "rgba(34, 197, 94, 0.03)");
      sunGradient.addColorStop(1, "transparent");

      ctx.fillStyle = sunGradient;
      ctx.fillRect(0, 0, width, height);

      // Render and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx + Math.sin(time + p.pulseAngle) * 0.3;
        p.y += p.vy;
        p.pulseAngle += p.pulseSpeed;

        p.alpha = (Math.sin(p.pulseAngle) * 0.5 + 0.5) * p.maxAlpha;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color.replace("rgba", "rgb").replace(/,\s*$/, ")");
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 w-full h-full opacity-80"
    />
  );
};

export default HimalayanSunlightCanvas;
