"use client";

import React, { useState, useEffect } from "react";
import { RoacsLoadingAnimation } from "./RoacsLoadingAnimation";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial display duration
    const fadeTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    // Smoothly remove from DOM after fade completes
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999, // Below Header (zIndex 100000) so navbar remains completely visible
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "72px", // Accounts for navbar height so logo is centered in content area
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
