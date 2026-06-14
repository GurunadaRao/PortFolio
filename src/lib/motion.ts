import { Variants } from "framer-motion";

// Premium spring animation configurations
export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const softSpringTransition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 1,
};

// Centralized Variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
  exit: { opacity: 0, y: -20 },
};

export const fadeInLift: Variants = {
  initial: { opacity: 0, y: 15 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const scaleUp: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }
};
