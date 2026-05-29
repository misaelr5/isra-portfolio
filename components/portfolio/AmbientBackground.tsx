"use client";

import { useEffect, useRef } from "react";

/** Fondo ambiental global con parallax sutil y animacion lenta. */
export function AmbientBackground() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = bgRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let cx = 0.5;
    let cy = 0.5;

    const update = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      element.style.setProperty("--ambient-mx", `${x.toFixed(2)}px`);
      element.style.setProperty("--ambient-my", `${y.toFixed(2)}px`);

      const repel = (anchorX: number, anchorY: number, power: number) => {
        const dx = anchorX - cx;
        const dy = anchorY - cy;
        const len = Math.max(Math.hypot(dx, dy), 0.0001);
        return {
          x: (dx / len) * power,
          y: (dy / len) * power
        };
      };

      const orbA = repel(0.12, 0.26, 38);
      const orbB = repel(0.88, 0.82, 34);
      const orbC = repel(0.52, 0.64, 28);

      element.style.setProperty("--orb-a-rx", `${orbA.x.toFixed(2)}px`);
      element.style.setProperty("--orb-a-ry", `${orbA.y.toFixed(2)}px`);
      element.style.setProperty("--orb-b-rx", `${orbB.x.toFixed(2)}px`);
      element.style.setProperty("--orb-b-ry", `${orbB.y.toFixed(2)}px`);
      element.style.setProperty("--orb-c-rx", `${orbC.x.toFixed(2)}px`);
      element.style.setProperty("--orb-c-ry", `${orbC.y.toFixed(2)}px`);
      raf = requestAnimationFrame(update);
    };

    const onMove = (event: MouseEvent) => {
      cx = event.clientX / window.innerWidth;
      cy = event.clientY / window.innerHeight;
      const nx = cx - 0.5;
      const ny = cy - 0.5;
      tx = nx * 20;
      ty = ny * 16;
    };

    raf = requestAnimationFrame(update);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="ambient-bg" aria-hidden="true" ref={bgRef}>
      <div className="ambient-bg__gradient" />
      <div className="ambient-bg__grid" />
      <div className="ambient-bg__orb ambient-bg__orb--a" />
      <div className="ambient-bg__orb ambient-bg__orb--b" />
      <div className="ambient-bg__orb ambient-bg__orb--c" />
    </div>
  );
}
