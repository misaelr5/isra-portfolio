"use client";

import { useEffect, useRef } from "react";

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  tone: "orange" | "navy";
};

const COLORS = {
  orange: "255, 90, 31",
  navy: "15, 23, 32"
};

export function AnimatedNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return;
    }

    const activeCanvas: HTMLCanvasElement = canvas;
    const ctx: CanvasRenderingContext2D = context;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let particles: Particle[] = [];
    const mouse = {
      x: -9999,
      y: -9999,
      active: false
    };

    function createParticles() {
      const density = Math.min(105, Math.max(46, Math.floor((width * height) / 18000)));

      particles = Array.from({ length: density }, (_, index) => {
        const baseX = Math.random() * width;
        const baseY = Math.random() * height;

        return {
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          vx: (Math.random() - 0.5) * 0.24,
          vy: (Math.random() - 0.5) * 0.24,
          radius: Math.random() * 1.7 + 1.1,
          phase: Math.random() * Math.PI * 2,
          tone: index % 5 === 0 ? "orange" : "navy"
        };
      });
    }

    function resize() {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      activeCanvas.width = Math.floor(width * pixelRatio);
      activeCanvas.height = Math.floor(height * pixelRatio);
      activeCanvas.style.width = `${width}px`;
      activeCanvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    }

    function drawNetwork(time: number) {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.52, height * 0.18, 0, width * 0.52, height * 0.18, Math.max(width, height));
      gradient.addColorStop(0, "rgba(255, 90, 31, 0.085)");
      gradient.addColorStop(0.42, "rgba(247, 244, 238, 0.34)");
      gradient.addColorStop(1, "rgba(218, 203, 184, 0.28)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const pointerRadius = Math.min(260, Math.max(170, width * 0.17));
      const connectionDistance = width < 768 ? 108 : 145;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const wave = Math.sin(time * 0.00055 + index * 0.32) * 8;
        const driftX = Math.cos(time * 0.00042 + particle.phase) * 18 + wave;
        const driftY = Math.sin(time * 0.00036 + particle.phase) * 20 - wave * 0.45;
        let targetX = particle.baseX + driftX;
        let targetY = particle.baseY + driftY;

        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < pointerRadius) {
            const force = (1 - distance / pointerRadius) * 72;
            targetX += (dx / Math.max(distance, 1)) * force;
            targetY += (dy / Math.max(distance, 1)) * force;
          }
        }

        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        if (particle.baseX < -40) particle.baseX = width + 40;
        if (particle.baseX > width + 40) particle.baseX = -40;
        if (particle.baseY < -40) particle.baseY = height + 40;
        if (particle.baseY > height + 40) particle.baseY = -40;

        particle.x += (targetX - particle.x) * 0.078;
        particle.y += (targetY - particle.y) * 0.078;
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const first = particles[i];
          const second = particles[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            const pulse = 0.65 + Math.sin(time * 0.0012 + i * 0.2 + j * 0.13) * 0.35;
            const alpha = (1 - distance / connectionDistance) * 0.14 * pulse;
            ctx.beginPath();
            ctx.moveTo(first.x, first.y);
            ctx.lineTo(second.x, second.y);
            ctx.strokeStyle = `rgba(15, 23, 32, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (mouse.active) {
        const cursorGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, pointerRadius);
        cursorGradient.addColorStop(0, "rgba(255, 90, 31, 0.13)");
        cursorGradient.addColorStop(0.45, "rgba(255, 90, 31, 0.045)");
        cursorGradient.addColorStop(1, "rgba(255, 90, 31, 0)");
        ctx.fillStyle = cursorGradient;
        ctx.fillRect(mouse.x - pointerRadius, mouse.y - pointerRadius, pointerRadius * 2, pointerRadius * 2);

        for (const particle of particles) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < pointerRadius * 0.72) {
            const alpha = (1 - distance / (pointerRadius * 0.72)) * 0.18;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.strokeStyle = `rgba(255, 90, 31, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const particle of particles) {
        const alpha = particle.tone === "orange" ? 0.34 : 0.22;
        const glow = particle.tone === "orange" ? 8 : 5;
        const color = COLORS[particle.tone];

        ctx.beginPath();
        ctx.shadowColor = `rgba(${color}, ${alpha})`;
        ctx.shadowBlur = glow;
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrame = window.requestAnimationFrame(drawNetwork);
    }

    function handlePointerMove(event: PointerEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function handlePointerLeave() {
      mouse.active = false;
    }

    resize();

    if (!reducedMotion.matches) {
      animationFrame = window.requestAnimationFrame(drawNetwork);
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
    } else {
      drawNetwork(0);
      window.cancelAnimationFrame(animationFrame);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-network-bg" aria-hidden="true" />;
}
