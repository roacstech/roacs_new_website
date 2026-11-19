import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { servicesData } from "@/data/services";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        backgroundColor: "var(--color-navy-dark)",
        color: "#FFFFFF",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <Container wide>
        {/* Top Tier: Brand, Address, Services, Navigation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Col 1: Brand & Overview */}
          <div style={{ maxWidth: "340px" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ position: "relative", width: "150px", height: "45px" }}>
                <Image
                  src="/logos/roacs-logo.png"
                  alt="Roacs Corporation"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
              </div>
            </Link>

            <p
              style={{
                fontSize: "0.925rem",
                lineHeight: 1.65,
                color: "var(--color-text-on-dark-muted)",
                marginBottom: "1.75rem",
              }}
            >
              Roacs Corporation delivers high-performance enterprise software engineering, strategic IT consulting, cloud infrastructure, and intelligent automation for forward-thinking organizations worldwide.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "0.5rem 0.85rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8rem",
                color: "var(--color-text-on-dark-muted)",
              }}
            >
              <ShieldCheck size={16} color="var(--color-brand-accent)" />
              <span>ISO & Enterprise Compliance Standards</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-on-dark-muted)",
                      transition: "color var(--transition-fast)",
                    }}
                    className="footer-link"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Proprietary Solution */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              Company & Work
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <li>
                <Link href="/about" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                  About Roacs
                </Link>
              </li>
              <li>
                <Link href="/industries" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                  Featured Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                  Contact & Consultations
                </Link>
              </li>
            </ul>

            {/* Proprietary Spotlight */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "1rem",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-brand-accent)", fontWeight: 700, marginBottom: "0.25rem" }}>
                Proprietary Solution
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.25rem" }}>
                Roacs Material Management
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--color-text-on-dark-muted)", lineHeight: 1.4 }}>
                Optimizing inventory pipelines, warehouse flows, and multi-location logistics.
              </p>
            </div>
          </div>

          {/* Col 4: Verified Contact & Corporate Details */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              Global Presence
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                fontSize: "0.9rem",
                color: "var(--color-text-on-dark-muted)",
              }}
            >
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <MapPin size={18} color="var(--color-brand-accent)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <strong style={{ color: "#FFFFFF", display: "block", marginBottom: "0.15rem" }}>Development Center (India):</strong>
                  <span>82, KRM Residency, Sarcarsamakulam, Kovilpalayam, Coimbatore, Tamil Nadu - 641107</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Mail size={18} color="var(--color-brand-accent)" style={{ flexShrink: 0 }} />
                <div>
                  <a href="mailto:info@roacs.com" style={{ color: "#FFFFFF", fontWeight: 500 }}>
                    info@roacs.com
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Phone size={18} color="var(--color-brand-accent)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)" }}>IND: </span>
                    <a href="tel:+919363282216" style={{ color: "#FFFFFF" }}>+91 93632 82216</a>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)" }}>USA: </span>
                    <a href="tel:+13203162929" style={{ color: "#FFFFFF" }}>+1 320-316-2929</a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Clock size={18} color="var(--color-brand-accent)" style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 10:00 AM – 4:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Legal, Disclaimer */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              fontSize: "0.85rem",
              color: "var(--color-muted-blue)",
            }}
          >
            <div>
              &copy; {currentYear} Roacs Corporation. All rights reserved.
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <Link href="/privacy" style={{ color: "var(--color-muted-blue)" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{ color: "var(--color-muted-blue)" }}>
                Terms of Service
              </Link>
              <Link href="/contact" style={{ color: "var(--color-muted-blue)" }}>
                Security & Compliance
              </Link>
              <a
                href="https://roacs.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  color: "var(--color-brand-accent)",
                }}
              >
                <span>roacs.com</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      
    </footer>
  );
}
