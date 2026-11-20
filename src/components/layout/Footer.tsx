import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { servicesData } from "@/data/services";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock 
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#020B1E",
        color: "#FFFFFF",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        overflow: "hidden",
      }}
    >
      {/* Upper Content Section: Brand, Services, Navigation, Verified Contact */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "5rem",
          paddingBottom: "1.5rem",
        }}
      >
        <Container wide>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "3rem",
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
                }}
              >
                Roacs Corporation delivers high-performance enterprise software engineering, strategic IT consulting, cloud infrastructure, and intelligent automation for forward-thinking organizations worldwide.
              </p>
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
                Our Core Services
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

            {/* Col 3: Quick Links */}
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
                Quick Links
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li>
                  <Link href="/about" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                    About Roacs
                  </Link>
                </li>
                <li>
                  <Link href="/material-management" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                    Our Products (Material Management)
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                    Featured Projects & Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                    Frequently Asked Questions (FAQ)
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                    Blogs & Tech Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link" style={{ fontSize: "0.9rem", color: "var(--color-text-on-dark-muted)" }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Verified Contact Details */}
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
                Contact Us
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
                      <span style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)" }}>INDIA: </span>
                      <a href="tel:+919876543210" style={{ color: "#FFFFFF" }}>+91 98765 43210</a>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)" }}>USA: </span>
                      <a href="tel:+13203162929" style={{ color: "#FFFFFF" }}>+1 320-316-2929</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <Clock size={18} color="var(--color-brand-accent)" style={{ flexShrink: 0 }} />
                  <span>Mon – Sat: 10:00 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Signature Brand Wordmark Display: Grand ROACS Graphic in Full Vibrant Clarity */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(180px, 24vw, 360px)",
          overflow: "hidden",
          marginTop: "1rem",
        }}
      >
        <Image
          src="/images/footer-roacs-banner.jpg"
          alt="ROACS Corporation"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center bottom",
          }}
          priority
        />

        {/* Soft top blend so the artwork flows seamlessly out of the navy content tier above */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "70px",
            background: "linear-gradient(to bottom, #020B1E 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Soft bottom blend to transition smoothly into the copyright bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40px",
            background: "linear-gradient(to top, rgba(2, 11, 30, 0.95) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Bottom Tier: Copyright, Legal & Navigation */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#020B1E",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          paddingTop: "2rem",
          paddingBottom: "2.5rem",
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
              fontSize: "0.875rem",
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
                gap: "1.75rem",
              }}
            >
              <Link href="/about" className="footer-link" style={{ color: "var(--color-muted-blue)" }}>
                About
              </Link>
              <Link href="/services" className="footer-link" style={{ color: "var(--color-muted-blue)" }}>
                Services
              </Link>
              <Link href="/material-management" className="footer-link" style={{ color: "var(--color-muted-blue)" }}>
                Products
              </Link>
              <Link href="/faq" className="footer-link" style={{ color: "var(--color-muted-blue)" }}>
                FAQ
              </Link>
              <Link href="/contact" className="footer-link" style={{ color: "var(--color-muted-blue)" }}>
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
