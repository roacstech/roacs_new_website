"use client";

import React, { useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const CardSpotlight = ({
  children,
  radius = 160,
  className = "",
  style = {},
  ...props
}: CardSpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Use refs to track mouse position and hover state to eliminate lag and avoid React re-renders
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const isHoveredRef = useRef(false);
  const currentOpacityRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Palette: Roacs Brand Red, Tech Blue, Indigo, Violet, Cyan
  const colors = [
    [237, 25, 24],   // Roacs Brand Accent Red
    [37, 99, 235],   // Tech Blue
    [139, 92, 246],  // Violet
    [56, 189, 248],  // Cyan
    [225, 29, 72],   // Crimson
  ];

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseEnter = (e: ReactMouseEvent<HTMLDivElement>) => {
    isHoveredRef.current = true;
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const dotSize = 2;
    const gap = 5;
    const step = dotSize + gap;

    // Pre-calculate stable noise values for grid cells
    const maxCols = 150;
    const maxRows = 150;
    const gridNoise: number[][] = [];
    for (let i = 0; i < maxCols; i++) {
      gridNoise[i] = [];
      for (let j = 0; j < maxRows; j++) {
        gridNoise[i][j] = Math.random();
      }
    }

    let time = 0;

    const render = () => {
      // Smoothly transition master opacity (fast fade in on hover, smooth fade out on leave)
      const targetOpacity = isHoveredRef.current ? 1 : 0;
      currentOpacityRef.current += (targetOpacity - currentOpacityRef.current) * 0.18;

      ctx.clearRect(0, 0, width, height);

      if (currentOpacityRef.current > 0.01) {
        time += 0.04;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const masterOpacity = currentOpacityRef.current;

        // 1. Soft radial gradient glow perfectly synced with mouse (no black artifacts)
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, radius);
        glow.addColorStop(0, `rgba(237, 25, 24, ${0.16 * masterOpacity})`);
        glow.addColorStop(0.5, `rgba(37, 99, 235, ${0.08 * masterOpacity})`);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        // 2. Focused matrix dots inside the spotlight radius
        const cols = Math.ceil(width / step);
        const rows = Math.ceil(height / step);

        const startX = Math.max(0, Math.floor((mx - radius) / step));
        const endX = Math.min(cols - 1, Math.ceil((mx + radius) / step));
        const startY = Math.max(0, Math.floor((my - radius) / step));
        const endY = Math.min(rows - 1, Math.ceil((my + radius) / step));

        for (let xIdx = startX; xIdx <= endX; xIdx++) {
          const px = xIdx * step;
          for (let yIdx = startY; yIdx <= endY; yIdx++) {
            const py = yIdx * step;

            const dx = px - mx;
            const dy = py - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < radius) {
              const falloff = Math.pow(1 - dist / radius, 1.5);
              const noise = gridNoise[xIdx % maxCols]?.[yIdx % maxRows] ?? 0.5;
              const shimmer = 0.5 + 0.5 * Math.sin(time * 3 + noise * 8);
              const dotAlpha = falloff * (0.25 + 0.75 * shimmer) * masterOpacity;

              if (dotAlpha > 0.02) {
                const colorIdx = Math.floor((noise * 17 + (xIdx + yIdx)) % colors.length);
                const [r, g, b] = colors[colorIdx];
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dotAlpha.toFixed(3)})`;
                ctx.fillRect(px, py, dotSize, dotSize);
              }
            }
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
    };
  }, [radius]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#070E1B",
        borderRadius: "1.25rem",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 25px 50px -12px rgba(7, 14, 27, 0.6)",
        padding: "2.25rem 2rem",
        ...style,
      }}
      className={className}
      {...props}
    >
      {/* Interactive Matrix Canvas (Glow + Dots synchronized with 0ms latency) */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
        {children}
      </div>
    </div>
  );
};
