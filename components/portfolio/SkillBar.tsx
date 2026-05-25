"use client";

import { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  name: string;
  percent: number;
};

export function SkillBar({ name, percent }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayPercent, setDisplayPercent] = useState(0);

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
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayPercent(Math.round(percent * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [percent, visible]);

  return (
    <article ref={ref} className="rounded-xl border border-line bg-card p-4">
      <div className="flex items-center justify-between gap-4 text-sm font-semibold text-navy">
        <span>{name}</span>
        <span>
          <span>{displayPercent}</span>%
        </span>
      </div>
      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-teal transition-all duration-700 ease-out"
          style={{ width: `${displayPercent}%` }}
        />
      </div>
    </article>
  );
}
