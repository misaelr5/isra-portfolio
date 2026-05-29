"use client";

import { useEffect, useState } from "react";

type PreloaderProps = {
  visible: boolean;
  label?: string;
};

export function Preloader({ visible, label = "Cargando experiencia" }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) {
      setProgress(0);
      return;
    }

    const duration = visible ? 2000 : 700;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const ratio = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(Math.round(eased * 100));
      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible]);

  return (
    <div className={`preloader ${visible ? "preloader--active" : ""}`} aria-hidden={!visible}>
      <div className="preloader-panel">
        <span className="brand-star preloader-star" aria-hidden="true" />
        <div className="brand-logo preloader-logo" role="img" aria-label="ISRA" />
        <p className="preloader-copy">{label}</p>
        <div className="preloader-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <span className="preloader-progress__bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="preloader-percent">{progress}%</p>
      </div>
    </div>
  );
}
