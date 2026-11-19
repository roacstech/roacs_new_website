"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import { ChevronDown, ArrowRight, Code2, Globe, Smartphone, Cpu, Cloud, Palette, TrendingUp, Package } from "lucide-react";

const serviceIcons: Record<string, React.ElementType> = {
  "custom-software-development": Code2,
  "web-development": Globe,
  "mobile-development": Smartphone,
  "ai-solutions": Cpu,
  "cloud-devops": Cloud,
  "ui-ux-design": Palette,
  "it-consultancy": TrendingUp,
};

export function Navigation() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
      aria-label="Main Navigation"
    >
      <Link
        href="/"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: pathname === "/" ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.9)",
          transition: "color var(--transition-fast)",
        }}
      >
        Home
      </Link>

      <Link
        href="/about"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: pathname === "/about" ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.9)",
          transition: "color var(--transition-fast)",
        }}
      >
        About
      </Link>

      {/* Services Dropdown */}
      <div
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative" }}
      >
        <Link
          href="/services"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: pathname?.startsWith("/services") ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.9)",
            transition: "color var(--transition-fast)",
            padding: "0.5rem 0",
          }}
          aria-expanded={servicesOpen}
          aria-haspopup="true"
        >
          <span>Services</span>
          <ChevronDown
            size={14}
            style={{
              transition: "transform 0.2s ease",
              transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </Link>

        {servicesOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "-180px",
              width: "680px",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 20px 40px -10px rgba(10, 20, 35, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              padding: "1.5rem",
              zIndex: 100,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              animation: "fadeIn 0.2s ease forwards",
            }}
          >
            {servicesData.map((s) => {
              const Icon = serviceIcons[s.slug] || Code2;
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.75rem",
                    borderRadius: "var(--radius-sm)",
                    transition: "background-color 0.15s ease",
                    textDecoration: "none",
                  }}
                  className="dropdown-item"
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(16, 29, 53, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-brand-accent)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--color-primary-navy)",
                        lineHeight: 1.2,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.3,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {s.shortDescription}
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Proprietary Product Spotlight in Dropdown */}
            <div
              style={{
                gridColumn: "span 2",
                borderTop: "1px solid var(--border-light)",
                paddingTop: "0.75rem",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Package size={16} color="var(--color-brand-accent)" />
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)" }}>
                  Featured Product: Roacs Material Management
                </span>
              </div>
              <Link
                href="/services"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--color-brand-accent)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <span>View All Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link
        href="/industries"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: pathname === "/industries" ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.9)",
          transition: "color var(--transition-fast)",
        }}
      >
        Industries
      </Link>

      <Link
        href="/projects"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: pathname?.startsWith("/projects") ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.9)",
          transition: "color var(--transition-fast)",
        }}
      >
        Projects
      </Link>

      <Link
        href="/insights"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: pathname?.startsWith("/insights") ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.9)",
          transition: "color var(--transition-fast)",
        }}
      >
        Insights
      </Link>

      <Link
        href="/contact"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: pathname === "/contact" ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.9)",
          transition: "color var(--transition-fast)",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}
