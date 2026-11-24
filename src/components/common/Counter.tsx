"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

export interface CounterProps {
  /** The target string or number, e.g. "100+", "40+", "30+", "1.2k+", "99.9%" */
  value?: string | number;
  /** Explicit target number (overrides value if provided) */
  to?: number;
  /** Start value (defaults to 0) */
  from?: number;
  /** Animation duration in seconds (defaults to 1.8) */
  duration?: number;
  /** Stagger delay in seconds (defaults to 0) */
  delay?: number;
  /** Explicit decimal places (auto-detected if omitted) */
  decimals?: number;
  /** Prefix string (e.g. "$") */
  prefix?: string;
  /** Suffix string (e.g. "+", "k+", "%") */
  suffix?: string;
  /** Additional CSS class */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

export function Counter({
  value,
  to,
  from = 0,
  duration = 1.8,
  delay = 0,
  decimals: customDecimals,
  prefix: customPrefix,
  suffix: customSuffix,
  className = "",
  style,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Parse target number, prefix, suffix, and decimal count from `value` or explicit props
  const parsed = useMemo(() => {
    let targetNum = to ?? 0;
    let pre = customPrefix ?? "";
    let suf = customSuffix ?? "";
    let dec = customDecimals ?? 0;

    if (value !== undefined) {
      if (typeof value === "number") {
        targetNum = value;
      } else {
        const match = value.trim().match(/^([^\d]*)([\d,.]+)(.*)$/);
        if (match) {
          pre = customPrefix !== undefined ? customPrefix : match[1];
          const rawNum = match[2].replace(/,/g, "");
          targetNum = parseFloat(rawNum) || 0;
          suf = customSuffix !== undefined ? customSuffix : match[3];

          if (customDecimals === undefined) {
            const decimalMatch = match[2].match(/\.(\d+)/);
            dec = decimalMatch ? decimalMatch[1].length : 0;
          }
        }
      }
    }

    return {
      targetNum,
      prefix: pre,
      suffix: suf,
      decimals: dec,
    };
  }, [value, to, customPrefix, customSuffix, customDecimals]);

  const [displayNumber, setDisplayNumber] = useState<string>(() =>
    from.toFixed(parsed.decimals)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const timer = setTimeout(() => setIsInView(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let rafId: number;

    const durationMs = Math.max(duration, 0.2) * 1000;
    const delayMs = Math.max(delay, 0) * 1000;
    const { targetNum, decimals } = parsed;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;

      if (elapsed < delayMs) {
        rafId = requestAnimationFrame(step);
        return;
      }

      const animElapsed = elapsed - delayMs;
      const progress = Math.min(animElapsed / durationMs, 1);

      // Ease-out cubic curve: fast start, smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = from + (targetNum - from) * easeOut;

      setDisplayNumber(current.toFixed(decimals));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplayNumber(targetNum.toFixed(decimals));
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, from, parsed, duration, delay]);

  return (
    <span
      ref={ref}
      className={`counter-animated ${className}`}
      style={{
        display: "inline-block",
        fontVariantNumeric: "tabular-nums",
        ...style,
      }}
    >
      {parsed.prefix}
      {displayNumber}
      {parsed.suffix}
    </span>
  );
}

export default Counter;
