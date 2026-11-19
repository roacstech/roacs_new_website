"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import { X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(11, 20, 36, 0.7)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          height: "100%",
          backgroundColor: "var(--color-primary-navy)",
          borderLeft: "1px solid var(--border-dark)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1.75rem 1.5rem",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
              borderBottom: "1px solid var(--border-dark)",
              paddingBottom: "1.25rem",
            }}
          >
            <div style={{ position: "relative", width: "135px", height: "40px" }}>
              <Image
                src="/logos/roacs-logo.png"
                alt="Roacs Corporation"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
            <button
              onClick={onClose}
              style={{
                color: "#FFFFFF",
                padding: "0.5rem",
                borderRadius: "var(--radius-xs)",
                border: "1px solid var(--border-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Link
              href="/"
              onClick={onClose}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname === "/" ? "var(--color-brand-accent)" : "#FFFFFF",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border-dark-subtle)",
              }}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname === "/about" ? "var(--color-brand-accent)" : "#FFFFFF",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border-dark-subtle)",
              }}
            >
              About
            </Link>

            {/* Services with expandable drawer */}
            <div>
              <div
                onClick={() => setServicesExpanded(!servicesExpanded)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: pathname?.startsWith("/services") ? "var(--color-brand-accent)" : "#FFFFFF",
                  padding: "0.75rem 0",
                  cursor: "pointer",
                  borderBottom: "1px solid var(--border-dark-subtle)",
                }}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: servicesExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </div>

              {servicesExpanded && (
                <div
                  style={{
                    paddingLeft: "1rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      onClick={onClose}
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text-on-dark-muted)",
                        padding: "0.35rem 0",
                      }}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={onClose}
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--color-brand-accent)",
                      paddingTop: "0.4rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <span>All Services Overview</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              onClick={onClose}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname === "/industries" ? "var(--color-brand-accent)" : "#FFFFFF",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border-dark-subtle)",
              }}
            >
              Industries
            </Link>

            <Link
              href="/projects"
              onClick={onClose}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname?.startsWith("/projects") ? "var(--color-brand-accent)" : "#FFFFFF",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border-dark-subtle)",
              }}
            >
              Projects
            </Link>

            <Link
              href="/insights"
              onClick={onClose}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname?.startsWith("/insights") ? "var(--color-brand-accent)" : "#FFFFFF",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border-dark-subtle)",
              }}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname === "/contact" ? "var(--color-brand-accent)" : "#FFFFFF",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border-dark-subtle)",
              }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom CTA & Info */}
        <div
          style={{
            borderTop: "1px solid var(--border-dark)",
            paddingTop: "1.5rem",
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              fontSize: "0.85rem",
              color: "var(--color-text-on-dark-muted)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={14} color="var(--color-brand-accent)" />
              <a href="mailto:info@roacs.com">info@roacs.com</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={14} color="var(--color-brand-accent)" />
              <a href="tel:+919363282216">+91 93632 82216</a>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
