"use client";

import React from "react";

interface RoacsLoadingAnimationProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function RoacsLoadingAnimation({
  size = "lg",
  className = "",
}: RoacsLoadingAnimationProps) {
  const getDimensions = () => {
    switch (size) {
      case "sm":
        return { width: 180, height: 54 };
      case "md":
        return { width: 260, height: 78 };
      case "xl":
        return { width: 440, height: 132 };
      default: // lg
        return { width: 340, height: 102 };
    }
  };

  const { width, height } = getDimensions();

  return (
    <div
      className={`roacs-loader-container ${className}`}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        display: "inline-block",
        userSelect: "none",
      }}
    >
      <style>{`
        /* Stage 1: Soft radiant pulse on letter 'r' (seamless, zero lines) */
        @keyframes rPulse {
          0%, 100% {
            opacity: 0;
            transform: scale(0.6) translate(-50%, -50%);
          }
          12% {
            opacity: 0.9;
            transform: scale(1.05) translate(-50%, -50%);
          }
          24% {
            opacity: 0.4;
            transform: scale(1.2) translate(-50%, -50%);
          }
          34% {
            opacity: 0;
            transform: scale(1.3) translate(-50%, -50%);
          }
        }

        /* Stages 1-3: Smooth metallic sheen sweep across 'roacs' */
        @keyframes textLightSweep {
          0% {
            transform: translateX(-110%);
            opacity: 0;
          }
          6% {
            opacity: 0.7;
          }
          18% {
            opacity: 0.95;
          }
          65% {
            opacity: 0.9;
          }
          78% {
            transform: translateX(115%);
            opacity: 0;
          }
          100% {
            transform: translateX(115%);
            opacity: 0;
          }
        }

        /* Stage 2: Yellow Chevron Nudge & Warm Glow */
        @keyframes stage2YellowNudge {
          0%, 18% {
            opacity: 0.95;
            transform: translate(0, 0);
            filter: drop-shadow(0 1px 2px rgba(245, 158, 11, 0.2));
          }
          26% {
            opacity: 1;
            transform: translate(3.5px, -3.5px) scale(1.02);
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.8)) drop-shadow(0 0 3px #F59E0B) brightness(1.1);
          }
          44% {
            opacity: 1;
            transform: translate(3.5px, -3.5px) scale(1.02);
            filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.7)) drop-shadow(0 0 2px #F59E0B) brightness(1.08);
          }
          54%, 100% {
            opacity: 0.95;
            transform: translate(0, 0);
            filter: drop-shadow(0 1px 2px rgba(245, 158, 11, 0.2));
          }
        }

        /* Stage 3: Green Chevron Nudge & Emerald Glow */
        @keyframes stage3GreenNudge {
          0%, 46% {
            opacity: 0.95;
            transform: translate(0, 0);
            filter: drop-shadow(0 1px 2px rgba(34, 197, 94, 0.2));
          }
          54% {
            opacity: 1;
            transform: translate(4px, -4px) scale(1.02);
            filter: drop-shadow(0 0 14px rgba(34, 197, 94, 0.85)) drop-shadow(0 0 3px #10B981) brightness(1.15);
          }
          74% {
            opacity: 1;
            transform: translate(4px, -4px) scale(1.02);
            filter: drop-shadow(0 0 12px rgba(46, 196, 182, 0.75)) drop-shadow(0 0 2px #10B981) brightness(1.1);
          }
          84%, 100% {
            opacity: 0.95;
            transform: translate(0, 0);
            filter: drop-shadow(0 1px 2px rgba(34, 197, 94, 0.2));
          }
        }

        /* Stage 3 Particles: Sparkle dust off green chevron tips */
        @keyframes particleTrail1 {
          0%, 50% {
            opacity: 0;
            transform: translate(0, 0) scale(0.2);
          }
          58% {
            opacity: 1;
            transform: translate(6px, -7px) scale(1.2);
          }
          72% {
            opacity: 0.8;
            transform: translate(14px, -15px) scale(0.8);
          }
          82%, 100% {
            opacity: 0;
            transform: translate(22px, -22px) scale(0.1);
          }
        }

        @keyframes particleTrail2 {
          0%, 54% {
            opacity: 0;
            transform: translate(0, 0) scale(0.2);
          }
          62% {
            opacity: 0.95;
            transform: translate(4px, -9px) scale(1);
          }
          75% {
            opacity: 0.7;
            transform: translate(9px, -18px) scale(0.6);
          }
          85%, 100% {
            opacity: 0;
            transform: translate(15px, -26px) scale(0);
          }
        }

        /* Stage 4: Settle trail & base breathing loop */
        @keyframes baseRedPulse {
          0%, 100% {
            filter: drop-shadow(0 2px 6px rgba(229, 26, 26, 0.1));
          }
          20% {
            filter: drop-shadow(0 4px 12px rgba(229, 26, 26, 0.18));
          }
          50% {
            filter: drop-shadow(0 3px 8px rgba(229, 26, 26, 0.14));
          }
        }
      `}</style>

      {/* Layer 1: Base authentic solid red wordmark (smooth pure red, zero white lines) */}
      <img
        src="/logos/anim_text_pure.png"
        alt="roacs"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          animation: "baseRedPulse 2.6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Layer 2: Masked metallic light sweep across the red wordmark */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          WebkitMaskImage: "url(/logos/anim_text_pure.png)",
          maskImage: "url(/logos/anim_text_pure.png)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(110deg, transparent 35%, rgba(255, 255, 255, 0.35) 47%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.35) 53%, transparent 65%)",
            animation: "textLightSweep 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            mixBlendMode: "lighten",
          }}
        />
      </div>

      {/* Layer 3: Stage 1 Warm glow bloom on 'r' (seamless radial glow, NO white lines) */}
      <div
        style={{
          position: "absolute",
          left: "9%",
          top: "54%",
          width: `${height * 0.45}px`,
          height: `${height * 0.45}px`,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 120, 120, 0.8) 0%, rgba(229, 26, 26, 0.4) 45%, transparent 75%)",
          transformOrigin: "center center",
          animation: "rPulse 2.6s cubic-bezier(0.2, 0.8, 0.4, 1) infinite",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* Layer 4: Yellow Chevron (Stage 2 Nudge & Illumination) */}
      <img
        src="/logos/anim_yellow_pure.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          animation: "stage2YellowNudge 2.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          pointerEvents: "none",
          willChange: "transform, filter, opacity",
        }}
      />

      {/* Layer 5: Green Chevron (Stage 3 Nudge & Emerald Illumination) */}
      <img
        src="/logos/anim_green_pure.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          animation: "stage3GreenNudge 2.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          pointerEvents: "none",
          willChange: "transform, filter, opacity",
        }}
      />

      {/* Layer 6: Stage 3 Particle Sparkle 1 */}
      <div
        style={{
          position: "absolute",
          right: "6%",
          top: "10%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#10B981",
          boxShadow: "0 0 6px rgba(16, 185, 129, 0.9), 0 0 2px #047857",
          animation: "particleTrail1 2.6s ease-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Layer 7: Stage 3 Particle Sparkle 2 */}
      <div
        style={{
          position: "absolute",
          right: "4.5%",
          top: "16%",
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          backgroundColor: "#10B981",
          boxShadow: "0 0 5px rgba(46, 196, 182, 0.9)",
          animation: "particleTrail2 2.6s ease-out infinite",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
