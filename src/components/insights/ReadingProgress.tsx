"use client";

import { motion, useScroll } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: "var(--color-brand-accent)",
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex: 9999,
      }}
    />
  );
}
