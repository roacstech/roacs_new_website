"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import { 
  ChevronDown, 
  ArrowRight, 
  Code2, 
  Globe, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Palette, 
  TrendingUp, 
  Package,
  Boxes
} from "lucide-react";

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
  const [productsOpen, setProductsOpen] = useState(false);

  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const productsTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const handleProductsEnter = () => {
    if (productsTimeout.current) clearTimeout(productsTimeout.current);
    setProductsOpen(true);
  };
  const handleProductsLeave = () => {
    productsTimeout.current = setTimeout(() => setProductsOpen(false), 150);
  };

  const closeAll = () => {
    setServicesOpen(false);
    setProductsOpen(false);
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.75rem",
      }}
      aria-label="Main Navigation"
    >
      <Link
        href="/"
        className={`nav-link ${pathname === "/" ? "active" : ""}`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`nav-link ${pathname === "/about" ? "active" : ""}`}
      >
        About
      </Link>

      {/* Services Dropdown */}
      <div
        onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}
        style={{ position: "relative" }}
      >
        <Link
          href="/services"
          className={`nav-link ${pathname?.startsWith("/services") ? "active" : ""}`}
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
                  onClick={closeAll}
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
                  Proprietary Software: Roacs Material Management
                </span>
              </div>
              <Link
                href="/material-management"
                onClick={closeAll}
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--color-brand-accent)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <span>View Product</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Products Dropdown (from index.html: Products -> Material Management) */}
      <div
        onMouseEnter={handleProductsEnter}
        onMouseLeave={handleProductsLeave}
        style={{ position: "relative" }}
      >
        <Link
          href="/material-management"
          className={`nav-link ${pathname?.startsWith("/material-management") ? "active" : ""}`}
          aria-expanded={productsOpen}
          aria-haspopup="true"
        >
          <span>Products</span>
          <ChevronDown
            size={14}
            style={{
              transition: "transform 0.2s ease",
              transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </Link>

        {productsOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "-80px",
              width: "360px",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 20px 40px -10px rgba(10, 20, 35, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              padding: "1.25rem",
              zIndex: 100,
              animation: "fadeIn 0.2s ease forwards",
            }}
          >
            <Link
              href="/material-management"
              onClick={closeAll}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.85rem",
                padding: "0.85rem",
                borderRadius: "var(--radius-sm)",
                transition: "background-color 0.15s ease",
                textDecoration: "none",
              }}
              className="dropdown-item"
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(237, 25, 24, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-brand-accent)",
                  flexShrink: 0,
                }}
              >
                <Boxes size={22} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "0.2rem",
                  }}
                >
                  Material Management
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.4,
                  }}
                >
                  Efficiently managing the flow of goods, warehouse stock, and procurement.
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>

      <Link
        href="/projects"
        className={`nav-link ${pathname?.startsWith("/projects") ? "active" : ""}`}
      >
        Projects
      </Link>

      <Link
        href="/faq"
        className={`nav-link ${pathname === "/faq" ? "active" : ""}`}
      >
        FAQ
      </Link>

      <Link
        href="/insights"
        className={`nav-link ${pathname?.startsWith("/insights") ? "active" : ""}`}
      >
        Blogs
      </Link>
    </nav>
  );
}
