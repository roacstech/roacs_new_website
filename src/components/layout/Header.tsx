"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Navigation } from "@/components/layout/Navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/common/Button";
import { Menu, ArrowRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 100000,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.05)" : "0 1px 3px rgba(0, 0, 0, 0.02)",
          transition: "padding 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease",
          padding: scrolled ? "0.65rem 0" : "0.85rem 0",
          transform: "translate3d(0, 0, 0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "padding, background-color, box-shadow",
        }}
      >
        <Container wide>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
              aria-label="Roacs Corporation Home"
            >
              <div
                style={{
                  position: "relative",
                  width: "150px",
                  height: "45px",
                }}
              >
                <Image
                  src="/logos/roacs-logo.png"
                  alt="Roacs Corporation"
                  fill
                  sizes="150px"
                  priority
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="desktop-nav-wrapper">
              <Navigation />
            </div>

            {/* Right Action CTA & Mobile Trigger */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="desktop-cta-wrapper">
                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight size={14} />}
                >
                  Contact Us
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                className="mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                style={{
                  color: "#101D35",
                  padding: "0.5rem",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid rgba(16, 29, 53, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(16, 29, 53, 0.04)",
                }}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Preserve document flow height so page content never slips under the fixed header */}
      <div
        style={{
          height: "68px",
          width: "100%",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />

      {/* Responsive Visibility Styles */}
      

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
