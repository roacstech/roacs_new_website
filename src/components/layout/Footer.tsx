import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { servicesData } from "@/data/services";
import { 
  ChevronDown,
  ArrowRight,
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #020A1E 0%, #031432 25%, #051F48 65%, #08295E 100%)",
        color: "#FFFFFF",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        paddingTop: "4.5rem",
        overflow: "hidden",
      }}
    >
      <Container wide>
        {/* Top Header Row: Roacs Logo on Left, Action Pill Button on Right (Matching Discord's Header Layout) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Link href="/" style={{ display: "inline-block" }}>
            <div style={{ position: "relative", width: "150px", height: "45px" }}>
              <Image
                src="/logos/roacs-logo.png"
                alt="Roacs Corporation"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
                priority
              />
            </div>
          </Link>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.45rem",
              borderRadius: "9999px",
              backgroundColor: "#FFFFFF",
              color: "#020A1E",
              fontSize: "0.875rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              transition: "transform var(--transition-fast), box-shadow var(--transition-fast)",
            }}
            className="discord-pill-cta"
          >
            <span>Contact Us</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Content Columns: Left Brand Info/Language/Social + 4 Navigation Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "3rem 2rem",
          }}
        >
          {/* Column 1: Enterprise Overview, Language Selector & Social Row */}
          <div style={{ maxWidth: "300px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "rgba(255, 255, 255, 0.72)",
                marginBottom: "1.75rem",
              }}
            >
              Roacs Corporation delivers high-performance enterprise software engineering, strategic IT consulting, cloud infrastructure, and intelligent automation.
            </p>

            {/* Language Selector Dropdown (Styled after Discord) */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#8EA0BA",
                  marginBottom: "0.5rem",
                }}
              >
                Language
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.5rem 0.95rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "default",
                }}
              >
                <span>English (US / Global)</span>
                <ChevronDown size={14} color="#8EA0BA" />
              </div>
            </div>

            {/* Social Icons Row (Styled after Discord) */}
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#8EA0BA",
                  marginBottom: "0.65rem",
                }}
              >
                Social
              </div>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="discord-social-icon"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="discord-social-icon"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="discord-social-icon"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="discord-social-icon"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="discord-social-icon"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#8EA0BA",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="discord-footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products & Solutions */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#8EA0BA",
                marginBottom: "1.25rem",
              }}
            >
              Products & Solutions
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              <li>
                <Link href="/material-management" className="discord-footer-link">
                  Material Management System
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="discord-footer-link">
                  Enterprise Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="discord-footer-link">
                  Intelligent AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="discord-footer-link">
                  Scalable SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software-development" className="discord-footer-link">
                  Custom Enterprise Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="discord-footer-link">
                  UI/UX Design Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#8EA0BA",
                marginBottom: "1.25rem",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              <li>
                <Link href="/about" className="discord-footer-link">
                  About Roacs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="discord-footer-link">
                  Featured Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="discord-footer-link">
                  Blogs & Tech Insights
                </Link>
              </li>
              <li>
                <Link href="/faq" className="discord-footer-link">
                  Frequently Asked Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="discord-footer-link">
                  Contact Our Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Details & Compliance */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#8EA0BA",
                marginBottom: "1.25rem",
              }}
            >
              Contact & Center
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <MapPin size={17} color="#ED1918" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                <div>
                  <strong style={{ color: "#FFFFFF", display: "block", fontSize: "0.825rem", marginBottom: "0.15rem" }}>
                    Development Center (India):
                  </strong>
                  <span style={{ fontSize: "0.825rem", lineHeight: 1.5 }}>
                    82, KRM Residency, Kovilpalayam, Coimbatore, Tamil Nadu - 641107
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                <Mail size={17} color="#ED1918" style={{ flexShrink: 0 }} />
                <a
                  href="mailto:info@roacs.com"
                  style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "0.85rem" }}
                  className="discord-footer-link"
                >
                  info@roacs.com
                </a>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <Phone size={17} color="#ED1918" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                <div style={{ fontSize: "0.825rem" }}>
                  <div>
                    <span style={{ color: "#8EA0BA" }}>INDIA: </span>
                    <a href="tel:+919876543210" style={{ color: "#FFFFFF" }}>+91 98765 43210</a>
                  </div>
                  <div>
                    <span style={{ color: "#8EA0BA" }}>USA: </span>
                    <a href="tel:+13203162929" style={{ color: "#FFFFFF" }}>+1 320-316-2929</a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  paddingTop: "0.65rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  gap: "0.75rem",
                  fontSize: "0.8rem",
                }}
              >
                <Link href="/about" className="discord-footer-link">Terms</Link>
                <span>·</span>
                <Link href="/about" className="discord-footer-link">Privacy</Link>
                <span>·</span>
                <Link href="/about" className="discord-footer-link">Compliance</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Grand Brand Wordmark: ROACS (Styled exactly after Discord's signature footer branding) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 0,
            marginTop: "5.5rem",
            marginBottom: "0",
            textAlign: "center",
          }}
        >
          <svg
            viewBox="0 0 1200 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "1400px",
              margin: "0 auto",
              display: "block",
            }}
          >
            <defs>
              <linearGradient id="roacsWordmarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2E4FD" />
                <stop offset="100%" stopColor="#D2D6FC" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="84%"
              textAnchor="middle"
              fill="url(#roacsWordmarkGradient)"
              fontFamily="var(--font-heading), 'Manrope', 'Inter', system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="236"
              letterSpacing="-0.04em"
            >
              ROACS
            </text>
            {/* Elegant 4-point star sparkle on the letter 'S' matching the brand mark */}
            <g transform="translate(1096, 68)">
              <path
                d="M 0,-14 Q 0,0 14,0 Q 0,0 0,14 Q 0,0 -14,0 Q 0,0 0,-14 Z"
                fill="#FFFFFF"
                opacity="0.92"
              />
              <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
            </g>
          </svg>
        </div>
      </Container>

      {/* Bottom Legal & Attribution Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "1.75rem",
          paddingBottom: "2.25rem",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
        }}
      >
        <Container wide>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.25rem",
              fontSize: "0.85rem",
              color: "#8EA0BA",
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
                gap: "1.75rem",
              }}
            >
              <Link href="/about" className="discord-footer-link" style={{ fontSize: "0.85rem" }}>
                About
              </Link>
              <Link href="/services" className="discord-footer-link" style={{ fontSize: "0.85rem" }}>
                Services
              </Link>
              <Link href="/material-management" className="discord-footer-link" style={{ fontSize: "0.85rem" }}>
                Products
              </Link>
              <Link href="/faq" className="discord-footer-link" style={{ fontSize: "0.85rem" }}>
                FAQ
              </Link>
              <Link href="/contact" className="discord-footer-link" style={{ fontSize: "0.85rem" }}>
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
