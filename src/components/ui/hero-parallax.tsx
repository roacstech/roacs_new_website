"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export interface HeroParallaxItem {
  title: string;
  link?: string;
  thumbnail: string;
  category?: string;
}

export interface HeroParallaxProps {
  products: HeroParallaxItem[];
  headerBadge?: string;
  headerTitle?: React.ReactNode;
  headerSubtitle?: string;
}

export function HeroParallax({
  products,
  headerBadge = "Enterprise Capabilities",
  headerTitle = "Engineering services built for operational resilience and scale.",
  headerSubtitle = "Explore our core practices across custom software, modern web platforms, mobile ecosystems, cloud infrastructure, and intelligent automation.",
}: HeroParallaxProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const half = Math.ceil(products.length / 2);
  const firstRow = products.slice(0, half);
  const secondRow = products.slice(half);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // Phase 1 (scrollY 0 to 180px): From the very start, ONLY the text moves & fades out
  const headerOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const headerY = useTransform(scrollY, [0, 150], [0, -60]);

  // Dynamic Background:
  // - Starts as dark navy (#101D35) for the top screen (Image 1) with white text & faint cards
  // - Smoothly transitions to light color (#F1F5F9) as user scrolls down to the cards view (Image 2)
  const backgroundColor = useTransform(
    scrollY,
    [100, 320],
    ["#101D35", "#F1F5F9"]
  );

  // Background cards:
  // - Between 0 and 180px: Background is 100% NATIVELY FROZEN by CSS position: sticky!
  //   Zero JavaScript counter-translation = Zero latency = Zero jitter = Zero shaking!
  // - Beyond 180px (once text is cleared): background cards come alive, straighten to 0 deg, reach 100% opacity, and slide.
  const rotateX = useTransform(scrollY, [180, 500], [13, 0]);
  const rotateZ = useTransform(scrollY, [180, 500], [15, 0]);
  const opacity = useTransform(scrollY, [180, 460], [0.14, 1]);
  const translateY = useTransform(scrollY, [180, 500], [0, 0]);
  const translateX = useTransform(scrollY, [180, 1200], [0, 650]);
  const translateXReverse = useTransform(scrollY, [180, 1200], [0, -650]);

  if (isMobile) {
    return (
      <div
        className="hero-parallax-mobile-container"
        style={{
          backgroundColor: "#101D35",
          color: "#FFFFFF",
          paddingTop: "5.5rem",
          paddingBottom: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.25rem",
            marginBottom: "1.75rem",
          }}
        >
          {headerBadge && (
            <span className="hero-parallax-badge" style={{ marginBottom: "1rem" }}>
              {headerBadge}
            </span>
          )}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              marginBottom: "0.85rem",
            }}
          >
            {headerTitle}
          </h1>
          {headerSubtitle && (
            <p
              style={{
                fontSize: "clamp(0.925rem, 3.2vw, 1.05rem)",
                lineHeight: 1.6,
                color: "var(--color-muted-blue, #94A3B8)",
                maxWidth: "680px",
              }}
            >
              {headerSubtitle}
            </p>
          )}
        </div>

        {/* Clean Swipeable Carousel on Mobile */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            padding: "0.5rem 1.25rem 1.25rem 1.25rem",
            scrollbarWidth: "none",
          }}
          className="services-mobile-swipe-track"
        >
          {products.map((product) => (
            <div
              key={product.title}
              style={{
                width: "min(78vw, 290px)",
                height: "185px",
                flexShrink: 0,
                scrollSnapAlign: "start",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 300px, 340px"
                className="object-cover"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(16, 29, 53, 0.95) 0%, rgba(16, 29, 53, 0.3) 60%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0.85rem",
                  left: "1rem",
                  right: "1rem",
                }}
              >
                {product.category && (
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "var(--color-brand-accent, #ED1918)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {product.category}
                  </span>
                )}
                <h3
                  style={{
                    fontSize: "0.925rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                  }}
                >
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#64748B", fontWeight: 600, marginTop: "0.25rem" }}>
          ← Swipe horizontally to explore capabilities →
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor }}
      className="hero-parallax-wrapper relative"
    >
      <motion.div
        style={{ backgroundColor }}
        className="hero-parallax-sticky"
      >
        <Header
          badge={headerBadge}
          title={headerTitle}
          subtitle={headerSubtitle}
          opacity={headerOpacity}
          y={headerY}
        />
        <div className="hero-parallax-3d-scene">
          <motion.div
            style={{
              rotateX,
              rotateZ,
              translateY,
              opacity,
              z: 0,
            }}
            className="hero-parallax-rows"
          >
            <motion.div className="hero-parallax-row hero-parallax-row-reverse flex flex-row-reverse">
              {firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))}
            </motion.div>
            <motion.div className="hero-parallax-row hero-parallax-row-forward flex flex-row">
              {secondRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Header({
  badge,
  title,
  subtitle,
  opacity,
  y,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  opacity?: MotionValue<number>;
  y?: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ opacity, y }}
      className="hero-parallax-header pointer-events-none select-none"
    >
      {badge && <span className="hero-parallax-badge">{badge}</span>}
      <h1 className="hero-parallax-title">{title}</h1>
      {subtitle && <p className="hero-parallax-subtitle">{subtitle}</p>}
    </motion.div>
  );
}

export function ProductCard({
  product,
  translate,
}: {
  product: HeroParallaxItem;
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        x: translate,
        z: 0,
      }}
      key={product.title}
      className="hero-parallax-card group/product relative flex-shrink-0"
    >
      <div className="hero-parallax-card-inner">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 350px, 420px"
          className="hero-parallax-card-image object-cover"
        />
        <div className="hero-parallax-card-overlay" />
        <div className="hero-parallax-card-content">
          {product.category && (
            <span className="hero-parallax-card-category">
              {product.category}
            </span>
          )}
          <h2 className="hero-parallax-card-title">{product.title}</h2>
        </div>
      </div>
    </motion.div>
  );
}
