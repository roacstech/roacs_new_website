"use client";

import React, { useState, useEffect } from "react";
import { RoacsLoadingAnimation } from "./RoacsLoadingAnimation";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Lock body scrolling while loading so footer cannot peek or scroll into view
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Initial display duration
    const fadeTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = originalOverflow || "";
    }, 1800);

    // Smoothly remove from DOM after fade completes
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = originalOverflow || "";
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999, // Below Header (zIndex 100000) so only navbar shows
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "72px",
        overflow: "hidden",
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? "all" : "none",
        transition:
          "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: loading ? "scale(1)" : "scale(1.02)",
      }}
      aria-hidden={!loading}
    >
      {/* Subtle light red ambient vignette glow */}
      <div
        style={{
          position: "absolute",
          width: "550px",
          height: "380px",
          background:
            "radial-gradient(ellipse at center, rgba(229, 26, 26, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Authentic Roacs Logo 4-Stage Loading Animation */}
        <RoacsLoadingAnimation size="lg" />
      </div>
    </div>
  );
}
