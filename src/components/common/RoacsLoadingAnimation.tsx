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
        /* Stage 1: Sharp specular glint on 'r' */
        @keyframes rGlint {
          0%, 100% {
            opacity: 0;
            transform: scale(0.3) rotate(0deg);
          }
          10% {
            opacity: 1;
            transform: scale(1.1) rotate(45deg);
          }
          20% {
            opacity: 0.8;
            transform: scale(1.3) rotate(90deg);
          }
          32% {
            opacity: 0;
            transform: scale(0.4) rotate(135deg);
          }
        }

        /* Stages 1-3: Light Wave Sweep across 'roacs' text */
        @keyframes textLightSweep {
          0% {
            transform: translateX(-110%);
            opacity: 0;
          }
          6% {
            opacity: 0.75;
          }
          18% {
            opacity: 1;
          }
          65% {
            opacity: 0.95;
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

        /* Stage 2: Yellow Chevron Nudge & Glow */
        @keyframes stage2YellowNudge {
          0%, 18% {
            opacity: 0.95;
            transform: translate(0, 0);
            filter: drop-shadow(0 1px 2px rgba(245, 158, 11, 0.2));
          }
          26% {
            opacity: 1;
            transform: translate(3.5px, -3.5px) scale(1.02);
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.85)) drop-shadow(0 0 3px #F59E0B) brightness(1.12);
          }
          44% {
            opacity: 1;
            transform: translate(3.5px, -3.5px) scale(1.02);
            filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.75)) drop-shadow(0 0 2px #F59E0B) brightness(1.1);
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
            filter: drop-shadow(0 0 14px rgba(34, 197, 94, 0.85)) drop-shadow(0 0 4px #10B981) brightness(1.18);
          }
          74% {
            opacity: 1;
            transform: translate(4px, -4px) scale(1.02);
            filter: drop-shadow(0 0 12px rgba(46, 196, 182, 0.75)) drop-shadow(0 0 3px #10B981) brightness(1.12);
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
            filter: drop-shadow(0 2px 8px rgba(229, 26, 26, 0.12));
          }
          20% {
            filter: drop-shadow(0 4px 14px rgba(229, 26, 26, 0.22));
          }
          50% {
            filter: drop-shadow(0 3px 10px rgba(229, 26, 26, 0.16));
          }
        }
      `}</style>

      {/* Layer 1: Base authentic red wordmark (Ultra-HD 8K vector-quality asset) */}
      <img
        src="/logos/anim_text_8k.png"
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

      {/* Layer 2: Masked Light Sweep Wave constrained to exact 'roacs' letter contours */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          WebkitMaskImage: "url(/logos/anim_text_8k.png)",
          maskImage: "url(/logos/anim_text_8k.png)",
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
              "linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.95) 45%, rgba(255, 220, 220, 0.8) 55%, transparent 75%)",
            animation: "textLightSweep 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Layer 3: Stage 1 Crisp Specular Glint on letter 'r' (precise diamond star, no blurry red halo) */}
      <div
        style={{
          position: "absolute",
          left: "8.5%",
          top: "46%",
          width: "16px",
          height: "16px",
          pointerEvents: "none",
          animation: "rGlint 2.6s cubic-bezier(0.2, 0.8, 0.4, 1) infinite",
        }}
      >
        {/* Core brilliant white flare */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #FFFFFF 0%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 140, 140, 0.6) 60%, transparent 80%)",
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(229, 26, 26, 0.5)",
          }}
        />
        {/* Horizontal flare cross */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-50%",
            right: "-50%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #FFFFFF, transparent)",
            transform: "translateY(-50%)",
          }}
        />
        {/* Vertical flare cross */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "-50%",
            bottom: "-50%",
            width: "2px",
            background: "linear-gradient(180deg, transparent, #FFFFFF, transparent)",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Layer 4: Yellow Chevron (Ultra-HD 8K asset, Stage 2 Nudge & Illumination) */}
      <img
        src="/logos/anim_yellow_8k.png"
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

      {/* Layer 5: Green Chevron (Ultra-HD 8K asset, Stage 3 Nudge & Emerald Illumination) */}
      <img
        src="/logos/anim_green_8k.png"
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
