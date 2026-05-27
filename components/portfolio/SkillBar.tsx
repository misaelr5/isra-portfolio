"use client";

import { useEffect, useRef, useState } from "react";
import type { SkillLevel } from "./data";

type SkillBarProps = SkillLevel;

export function SkillBar({ name, level, progress }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const duration = 700;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const easedProgress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - easedProgress, 3);
      setDisplayProgress(Math.round(progress * eased));
      if (easedProgress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [progress, visible]);

  return (
    <article ref={ref} className="rounded-xl border border-line bg-card p-4">
      <div className="flex items-center justify-between gap-4 text-sm font-semibold text-navy">
        <span>{name}</span>
        <span className="rounded-full bg-orange/10 px-2.5 py-0.5 text-xs font-semibold text-orange">{level}</span>
      </div>
      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-teal transition-all duration-700 ease-out"
          style={{ width: `${displayProgress}%` }}
          role="progressbar"
          aria-valuenow={displayProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name}: ${level}`}
        />
      </div>
    </article>
  );
}
