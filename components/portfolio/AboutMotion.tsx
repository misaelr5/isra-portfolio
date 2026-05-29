"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type Variants } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

type MotionDirection = "up" | "left" | "right" | "scale";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: MotionDirection;
  index?: number;
  intensity?: number;
  hoverMode?: "lift" | "hingeRight" | "slideRight" | "none";
};

const easeOut = [0.16, 1, 0.3, 1] as const;

const directionalVariants: Record<MotionDirection, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28, scale: 0.96, rotateX: 7 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.58, ease: easeOut, delay: delay / 1000 }
    }),
    exit: { opacity: 0, y: -14, scale: 0.98, transition: { duration: 0.26, ease: easeOut } }
  },
  left: {
    hidden: { opacity: 0, x: -36, scale: 0.97, rotateY: -6 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: easeOut, delay: delay / 1000 }
    }),
    exit: { opacity: 0, x: -18, scale: 0.98, transition: { duration: 0.26, ease: easeOut } }
  },
  right: {
    hidden: { opacity: 0, x: 36, scale: 0.97, rotateY: 6 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: easeOut, delay: delay / 1000 }
    }),
    exit: { opacity: 0, x: 18, scale: 0.98, transition: { duration: 0.26, ease: easeOut } }
  },
  scale: {
    hidden: { opacity: 0, y: 18, scale: 0.92, rotateX: 8 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.56, ease: easeOut, delay: delay / 1000 }
    }),
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.24, ease: easeOut } }
  }
};

function staggerVariants(delay = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay / 1000,
        staggerChildren: 0.08
      }
    }
  };
}

export function AboutMotionGroup({ children, className = "", delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={staggerVariants(delay)}
      viewport={{ once: false, amount: 0.18, margin: "-8% 0px" }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function AboutMotionItem({ children, className = "", delay = 0, direction = "up", index = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  const variants = directionalVariants[direction];
  const itemDelay = delay + index * 55;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      custom={itemDelay}
      initial="hidden"
      variants={variants}
      viewport={{ once: false, amount: 0.22, margin: "-10% 0px" }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function AboutMotionPanel({
  children,
  className = "",
  delay = 0,
  direction = "up",
  intensity = 7
}: MotionProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 130, damping: 24, mass: 0.45 });
  const springY = useSpring(pointerY, { stiffness: 130, damping: 24, mass: 0.45 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity * 0.7, -intensity * 0.7]);
  const x = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const y = useTransform(springY, [-0.5, 0.5], [-4, 4]);
  const variants = directionalVariants[direction];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className={className}
      custom={delay}
      initial="hidden"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d", x, y }}
      variants={variants}
      viewport={{ once: false, amount: 0.22, margin: "-10% 0px" }}
      whileHover={{
        scale: 0.99,
        transition: { duration: 0.32, ease: easeOut }
      }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function AboutMotionCard({ children, className = "", delay = 0, index = 0, intensity = 4, hoverMode = "lift" }: MotionProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.42 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.42 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const itemDelay = delay + index * 45;

  if (reduceMotion) {
    return <article className={className}>{children}</article>;
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.article
      className={className}
      custom={Math.min(itemDelay, 520)}
      initial="hidden"
      onPointerLeave={hoverMode === "none" ? undefined : handlePointerLeave}
      onPointerMove={hoverMode === "none" ? undefined : handlePointerMove}
      style={
        hoverMode === "none" || hoverMode === "slideRight"
          ? { transformStyle: "flat", transformOrigin: "center center" }
          : { rotateX, rotateY, transformStyle: "preserve-3d", transformOrigin: hoverMode === "hingeRight" ? "left center" : "center center" }
      }
      variants={directionalVariants.scale}
      viewport={{ once: false, amount: 0.18, margin: "-8% 0px" }}
      whileHover={
        hoverMode === "hingeRight"
          ? {
              x: 14,
              rotateY: -7,
              scale: 1.01,
              transition: { duration: 0.32, ease: easeOut }
            }
          : hoverMode === "slideRight"
            ? {
                x: 8,
                transition: { duration: 0.22, ease: easeOut }
              }
            : hoverMode === "none"
            ? undefined
            : {
                y: -8,
                scale: 1.025,
                transition: { duration: 0.34, ease: easeOut }
              }
      }
      whileInView="visible"
    >
      {children}
    </motion.article>
  );
}
