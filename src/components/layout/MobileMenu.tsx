"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import { X, ChevronDown, Phone, Mail, ArrowRight, Boxes } from "lucide-react";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(11, 20, 36, 0.75)",
        backdropFilter: "blur(8px)",
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
              marginBottom: "1.75rem",
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
                cursor: "pointer",
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
              gap: "0.4rem",
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

            {/* Services Accordion */}
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

            {/* Products Accordion */}
            <div>
              <div
                onClick={() => setProductsExpanded(!productsExpanded)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: pathname?.startsWith("/material-management") ? "var(--color-brand-accent)" : "#FFFFFF",
                  padding: "0.75rem 0",
                  cursor: "pointer",
                  borderBottom: "1px solid var(--border-dark-subtle)",
                }}
              >
                <span>Products</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: productsExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </div>

              {productsExpanded && (
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
                  <Link
                    href="/material-management"
                    onClick={onClose}
                    style={{
                      fontSize: "0.9rem",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.4rem 0",
                    }}
                  >
                    <Boxes size={16} color="var(--color-brand-accent)" />
                    <span>Material Management</span>
                  </Link>
                </div>
              )}
            </div>

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
              href="/faq"
              onClick={onClose}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname === "/faq" ? "var(--color-brand-accent)" : "#FFFFFF",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border-dark-subtle)",
              }}
            >
              FAQ
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
              Blogs
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

        {/* Bottom Contact Details */}
        <div
          style={{
            borderTop: "1px solid var(--border-dark)",
            paddingTop: "1.5rem",
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--color-text-on-dark-muted)" }}>
            <Mail size={15} color="var(--color-brand-accent)" />
            <a href="mailto:info@roacs.com" style={{ color: "inherit" }}>info@roacs.com</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--color-text-on-dark-muted)" }}>
            <Phone size={15} color="var(--color-brand-accent)" />
            <span>USA: +1 320-316-2929</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--color-text-on-dark-muted)" }}>
            <Phone size={15} color="var(--color-brand-accent)" />
            <span>IND: +91 98765 43210</span>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            style={{
              marginTop: "0.5rem",
              backgroundColor: "var(--color-brand-accent)",
              color: "#FFFFFF",
              textAlign: "center",
              padding: "0.75rem",
              borderRadius: "var(--radius-sm)",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
