"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectCardRevealProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCardReveal({
  children,
  index,
  className = "",
  style,
}: ProjectCardRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [columns, setColumns] = useState(3);

  // Responsive column detection for accurate row-based stagger animation
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 680) {
        setColumns(1); // Mobile: 1 column
      } else if (width < 1024) {
        setColumns(2); // Tablet: 2 columns
      } else {
        setColumns(3); // Desktop: 3 columns
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns, { passive: true });
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Accessibility: instant display if user prefers reduced motion
  if (shouldReduceMotion) {
    return (
      <div
        className={className}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  // Calculate row-based stagger delay:
  // Desktop (3 cols): 0ms (0s), 120ms (0.12s), 240ms (0.24s)
  // Tablet (2 cols): 0ms (0s), 120ms (0.12s)
  // Mobile (1 col): 0ms (0s)
  const columnIndex = index % columns;
  const staggerDelay = columns === 1 ? 0 : columnIndex * 0.12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.8, // 800ms
        delay: staggerDelay,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier(0.22, 1, 0.36, 1)
      }}
      className={className}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        willChange: "transform, opacity",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
