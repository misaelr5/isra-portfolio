"use client";

import { motion, useReducedMotion } from "framer-motion";

type BadgeProps = {
  children: string;
};

export function Badge({ children }: BadgeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="section-label justify-center"
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="section-number"
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 14, -8, 14, -4, 10, 0], transformOrigin: "70% 70%" }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 2.1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
        }
      >
        ✦
      </motion.span>
      <span className="section-title">{children}</span>
    </motion.span>
  );
}
