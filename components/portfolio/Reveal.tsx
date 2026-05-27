"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeIn, fadeLeft, fadeUp, scaleIn } from "@/components/portfolio/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "scale" | "left" | "fade";
};

const variants = {
  up: fadeUp,
  scale: scaleIn,
  left: fadeLeft,
  fade: fadeIn
} as const;

export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const current = variants[variant] ?? fadeUp;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ delay: delay / 1000 }}
      variants={current}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
