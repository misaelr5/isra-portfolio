"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          
          // Apply entrance animations to child elements
          const children = node.querySelectorAll<HTMLElement>("article, aside, form, .bg-card, .bg-card-alt, .rounded-2xl, .card, button[type='submit']");
          children.forEach((child, index) => {
            // Apply different entrance animations based on element type
            if (child.tagName === "BUTTON" || child.matches("button")) {
              child.classList.add("entrance-button");
            } else if (child.classList.contains("glass-panel")) {
              child.classList.add("entrance-fade-scale");
            } else {
              child.classList.add("entrance-fade-slide");
            }
            // Add stagger delay
            child.style.setProperty("--entrance-delay", `${Math.min(index * 80, 400)}ms`);
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}
