"use client";

import { useEffect, useState } from "react";

type CountUpStatProps = {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
};

export function CountUpStat({ target, label, prefix = "", suffix = "", durationMs = 1100 }: CountUpStatProps) {
  const [value, setValue] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setValue(0);
    const steps = Math.max(target, 1);
    const tickMs = Math.max(18, Math.floor(durationMs / steps));
    let current = 0;

    const interval = window.setInterval(() => {
      current += 1;
      setValue(Math.min(current, target));
      setPulse((prev) => !prev);

      if (current >= target) {
        window.clearInterval(interval);
      }
    }, tickMs);

    return () => window.clearInterval(interval);
  }, [durationMs, target]);

  return (
    <div className="text-center">
      <p className={`text-4xl font-black tracking-tight tabular-nums text-orange transition-transform duration-100 ${pulse ? "scale-[1.03]" : "scale-100"}`}>
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
    </div>
  );
}
