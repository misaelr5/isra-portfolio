"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type SplitHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SplitHeading({ text, as: Tag = "h2", className = "" }: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`text-reveal-word inline-block ${visible ? "is-revealed" : ""}`}
          style={{ "--word-delay": `${index * 55}ms` } as CSSProperties}
          aria-hidden="true"
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
