"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type Variants } from "framer-motion";
import type { CSSProperties, PointerEvent, ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  index?: number;
  style?: CSSProperties;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.82,
      ease: easeOut
    }
  }
};

const directionalVariants: Record<NonNullable<MotionProps["direction"]>, Variants> = {
  up: itemVariants,
  left: {
    hidden: { opacity: 0, x: -36, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.72, ease: easeOut }
    }
  },
  right: {
    hidden: { opacity: 0, x: 36, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.72, ease: easeOut }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.58, ease: easeOut }
    }
  }
};

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.94
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: easeOut
    }
  }
};

export function HomeMotionGroup({ children, className = "", delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return <div className={className} style={{ "--home-motion-delay": `${delay}ms` } as CSSProperties}>{children}</div>;
}

export function HomeMotionItem({ children, className = "", delay = 0, style }: MotionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      animate="visible"
      className={className}
      initial="hidden"
      style={style}
      variants={itemVariants}
      transition={{ delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

export function HomeMotionPanel({ children, className = "", delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.45 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.45 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);

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
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        scale: 1,
        transition: {
          opacity: { duration: 0.55, ease: easeOut, delay: delay / 1000 },
          scale: { duration: 0.95, ease: easeOut, delay: delay / 1000 },
          y: { duration: 5.8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: delay / 1000 }
        }
      }}
      className={className}
      initial="hidden"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
      variants={panelVariants}
      whileHover={{
        scale: 0.985,
        transition: { duration: 0.45, ease: easeOut }
      }}
    >
      {children}
    </motion.div>
  );
}

export function HomeMotionArticle({ children, className = "", direction = "up", index = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  const variants = directionalVariants[direction];

  if (reduceMotion) {
    return <article className={className}>{children}</article>;
  }

  return (
    <motion.article
      className={className}
      initial="hidden"
      variants={variants}
      viewport={{ once: true, margin: "-12% 0px" }}
      whileHover={{
        rotateX: 2,
        rotateY: -3,
        y: -8,
        transition: { duration: 0.34, ease: "easeOut" }
      }}
      whileInView="visible"
      style={{ transformStyle: "preserve-3d" }}
      transition={{ delay: Math.min(index * 0.08, 0.42) }}
    >
      {children}
    </motion.article>
  );
}

export function HomeMotionReveal({ children, className = "", delay = 0, direction = "up" }: MotionProps) {
  const reduceMotion = useReducedMotion();
  const variants = directionalVariants[direction];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ delay: delay / 1000 }}
      variants={variants}
      viewport={{ once: true, margin: "-12% 0px" }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
