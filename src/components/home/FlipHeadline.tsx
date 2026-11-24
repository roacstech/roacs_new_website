"use client";

import React, { useState, useEffect } from "react";

const PHRASES = [
  "Business Growth",
  "Digital Innovation",
  "Smart Automation",
  "Digital Transformation",
  "Business Success",
];

const DISPLAY_DURATION = 2000; // 2 seconds display
const TRANSITION_DURATION = 700; // 700ms smooth 3D flip

export function FlipHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion accessibility
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // 3D Flip Timing Loop (2s display + 700ms transition)
  useEffect(() => {
    if (reducedMotion) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
      }, DISPLAY_DURATION + TRANSITION_DURATION);
      return () => clearInterval(interval);
    }

    let flipTimer: NodeJS.Timeout;

    const interval = setInterval(() => {
      const targetNext = (currentIndex + 1) % PHRASES.length;
      setNextIndex(targetNext);
      setIsFlipping(true);

      flipTimer = setTimeout(() => {
        setCurrentIndex(targetNext);
        setIsFlipping(false);
      }, TRANSITION_DURATION);
    }, DISPLAY_DURATION + TRANSITION_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(flipTimer);
    };
  }, [currentIndex, reducedMotion]);

  return (
    <span className="flip-headline-wrapper">
      {/* Ghost in-flow placeholder: guarantees line-height and width NEVER collapse or drop */}
      <span aria-hidden="true" className="flip-ghost">
        {PHRASES[isFlipping ? nextIndex : currentIndex]}
      </span>

      {/* Outgoing or Resting Phrase */}
      <span
        key={`curr-${currentIndex}`}
        className={`flip-phrase-item ${isFlipping ? "flip-phrase-out" : "flip-phrase-active"}`}
      >
        <span className="flip-gradient-text">{PHRASES[currentIndex]}</span>
      </span>

      {/* Incoming Phrase during 3D flip */}
      {isFlipping && (
        <span
          key={`next-${nextIndex}`}
          className="flip-phrase-item flip-phrase-in"
        >
          <span className="flip-gradient-text">{PHRASES[nextIndex]}</span>
        </span>
      )}
    </span>
  );
}
