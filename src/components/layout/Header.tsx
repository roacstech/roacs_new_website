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
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: scrolled ? "rgba(16, 29, 53, 0.94)" : "var(--color-primary-navy)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.08)",
          transition: "all var(--transition-normal)",
          padding: scrolled ? "0.85rem 0" : "1.2rem 0",
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
                  Start a Project
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                className="mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                style={{
                  color: "#FFFFFF",
                  padding: "0.5rem",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Responsive Visibility Styles */}
      

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
