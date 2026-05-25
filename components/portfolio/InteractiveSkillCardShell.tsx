"use client";

import { useState, type ReactNode } from "react";

type InteractiveSkillCardShellProps = {
  children: ReactNode;
  floatDelay?: string;
  selectedContent: ReactNode;
  variant?: "light" | "dark" | "warm";
  wide?: boolean;
};

export function InteractiveSkillCardShell({ children, floatDelay = "0s", selectedContent, variant = "light", wide }: InteractiveSkillCardShellProps) {
  const [selected, setSelected] = useState(false);
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");
  const isDark = variant === "dark";
  const isWarm = variant === "warm";
  const cardClass = isDark
    ? selected
      ? "skill-card-float border-white/20 bg-[#252525] shadow-[0_24px_70px_rgba(0,0,0,0.34)] [animation-play-state:paused]"
      : "skill-card-float border-white/8 bg-[#1f1f1f] shadow-none hover:border-white/20 hover:bg-[#252525] hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)] hover:[animation-play-state:paused]"
    : isWarm
      ? selected
        ? "skill-card-float border-orange/55 bg-[#F3EDE4] shadow-[0_24px_70px_rgba(255,90,31,0.18)] [animation-play-state:paused]"
        : "skill-card-float border-line bg-white shadow-none hover:border-orange/45 hover:bg-[#F3EDE4] hover:shadow-[0_22px_55px_rgba(15,23,32,0.12)] hover:[animation-play-state:paused]"
    : selected
      ? "skill-card-float border-orange bg-white shadow-[0_24px_70px_rgba(255,90,31,0.22)] [animation-play-state:paused]"
      : "skill-card-float border-transparent bg-white shadow-none hover:border-orange/45 hover:bg-white hover:shadow-[0_22px_55px_rgba(255,90,31,0.12)] hover:[animation-play-state:paused]";

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setTransform(`perspective(900px) rotateX(${-y * 12}deg) rotateY(${x * 14}deg) scale(${selected ? 1.08 : 1.045})`);
  }

  function resetTransform() {
    setTransform(`perspective(900px) rotateX(0deg) rotateY(0deg) scale(${selected ? 1.05 : 1})`);
  }

  function toggleSelected() {
    setSelected((current) => !current);
  }

  return (
    <article
      className={`card group relative overflow-hidden rounded-xl border p-4 text-center outline-none transition duration-300 ${
        cardClass
      } ${isWarm ? "warm-skill-card" : ""} ${wide ? "sm:col-span-2" : ""}`}
      onClick={toggleSelected}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleSelected();
        }
      }}
      onPointerLeave={resetTransform}
      onPointerMove={handlePointerMove}
      role="button"
      style={{ animationDelay: floatDelay, transform }}
      tabIndex={0}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_42%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <span
        className={`pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent transition duration-300 ${
          selected ? "opacity-100" : "opacity-0 group-hover:opacity-80"
        }`}
      />
      <div className={selected ? "hidden" : "relative"}>{children}</div>
      <div className={selected ? "relative" : "hidden"}>{selectedContent}</div>
    </article>
  );
}
