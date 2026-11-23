"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import { 
  ChevronDown, 
  Code2, 
  Globe, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Palette, 
  TrendingUp, 
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
              left: "-160px",
              width: "600px",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 20px 40px -10px rgba(10, 20, 35, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              padding: "1rem",
              zIndex: 100,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.4rem 0.75rem",
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
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.6rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    transition: "all 0.15s ease",
                    textDecoration: "none",
                  }}
                  className="dropdown-item"
                >
                  <Icon size={18} style={{ color: "var(--color-brand-accent)", flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-primary-navy)",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </span>
                </Link>
              );
            })}
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
              left: "-40px",
              width: "250px",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 20px 40px -10px rgba(10, 20, 35, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              padding: "0.75rem",
              zIndex: 100,
              animation: "fadeIn 0.2s ease forwards",
            }}
          >
            <Link
              href="/material-management"
              onClick={closeAll}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.6rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                transition: "all 0.15s ease",
                textDecoration: "none",
              }}
              className="dropdown-item"
            >
              <Boxes size={18} style={{ color: "var(--color-brand-accent)", flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-primary-navy)",
                  lineHeight: 1.3,
                }}
              >
                Material Management
              </span>
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
        href="/insights"
        className={`nav-link ${pathname?.startsWith("/insights") ? "active" : ""}`}
      >
        Blogs
      </Link>
    </nav>
  );
}
