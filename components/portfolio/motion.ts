"use client";

import type { Variants } from "framer-motion";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: motionEase }
  }
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: motionEase }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: motionEase }
  }
};

export const floatingImage: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: motionEase }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.08
    }
  }
};

export const cardHover = {
  whileHover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.45, ease: motionEase }
  }
} as const;

export const buttonHover = {
  whileHover: {
    y: -2,
    scale: 1.01,
    transition: { duration: 0.25, ease: motionEase }
  },
  whileTap: { scale: 0.98 }
} as const;

export const subtleGlow = {
  hidden: { opacity: 0.28, scale: 0.94 },
  visible: {
    opacity: 0.55,
    scale: 1,
    transition: { duration: 1.1, ease: motionEase }
  }
} as const;

export const navScroll = {
  top: {
    y: 0,
    backgroundColor: "rgba(243, 237, 228, 0.78)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 14px 38px rgba(15, 23, 32, 0.07)",
    borderColor: "rgba(15, 23, 32, 0.08)"
  },
  scrolled: {
    y: 8,
    backgroundColor: "rgba(243, 237, 228, 0.86)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 18px 50px rgba(15, 23, 32, 0.14)",
    borderColor: "rgba(255, 255, 255, 0.42)"
  }
} as const;

export const letterLift: Variants = {
  hidden: { opacity: 0, y: -8, rotateZ: -8, scale: 0.74 },
  visible: {
    opacity: 1,
    y: [16, -7, 0],
    rotateZ: [5, -1.5, 0],
    scale: [0.74, 1.12, 1],
    transition: { duration: 0.46, ease: motionEase }
  }
};

export const wordBlocks: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08
    }
  }
};

export const wordBlockItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: motionEase }
  }
};

export const subtitleBlockVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: motionEase }
  }
};
