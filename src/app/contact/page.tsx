"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Project Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:info@roacs.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header with Background Image and Centered "Contact Us" matching reference */}
      <section
        style={{
          position: "relative",
          color: "#FFFFFF",
          paddingTop: "6.5rem",
          paddingBottom: "6.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
          backgroundColor: "#101D35",
        }}
      >
        {/* Background visual banner */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/contact/contact-hero-banner.jpg"
            alt="Contact Us Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
          {/* Subtle overlay matching reference image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(20, 20, 45, 0.45) 0%, rgba(20, 20, 45, 0.25) 50%, rgba(20, 20, 45, 0.45) 100%)",
            }}
          />
        </div>

        <Container style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 14px rgba(0, 0, 0, 0.35)",
              }}
            >
              Contact Us
            </h1>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section section-light">
        <Container wide>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
            }}
            className="contact-grid"
          >
            {/* Left: Contact Information Cards */}
            <div>
             

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                {/* Our Locations */}
                <div
                  style={{
                    padding: "1.75rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-brand-accent)",
                      boxShadow: "var(--shadow-sm)",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.85rem" }}>
                      Our Locations
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                      <div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)" }}>USA:</div>
                        <div style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                          3417 3rd St N<br />Saint Cloud MN 56303.
                        </div>
                      </div>
                      <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.06)", paddingTop: "0.75rem" }}>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)" }}>Chile:</div>
                        <div style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                          860, Santiago,<br />Región Metropolitana de Santiago, Chile
                        </div>
                      </div>
                      <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.06)", paddingTop: "0.75rem" }}>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)" }}>Reunion:</div>
                        <div style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                          670, chemin Lagourgue,<br />97440 Saint-Andre, Réunion island.
                        </div>
                      </div>
                      <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.06)", paddingTop: "0.75rem" }}>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)" }}>India:</div>
                        <div style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                          82, KRM Residency, Sarcarsamakulam,<br />Kovilpalayam, Coimbatore, Tamil Nadu - 641107
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call Us */}
                <div
                  style={{
                    padding: "1.75rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-brand-accent)",
                      boxShadow: "var(--shadow-sm)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                      Call Us
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      <div>
                        <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-primary-navy)" }}>USA: </span>
                        <a
                          href="tel:+13203162929"
                          style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-primary-navy)", textDecoration: "none" }}
                        >
                          (+1) 320-316-2929
                        </a>
                      </div>
                      <div>
                        <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-primary-navy)" }}>IND: </span>
                        <a
                          href="tel:+919363282216"
                          style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-primary-navy)", textDecoration: "none" }}
                        >
                          (+91) 93632 82216
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Us */}
                <div
                  style={{
                    padding: "1.75rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-brand-accent)",
                      boxShadow: "var(--shadow-sm)",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.25rem" }}>
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@roacs.com"
                      style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-brand-accent)", textDecoration: "none" }}
                    >
                      info@roacs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Consultation Request Form */}
            <div>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.5rem",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* LET'S TALK Badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "14px",
                      borderRadius: "9999px",
                      border: "2px solid var(--color-brand-accent, #EB1E2D)",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "3px",
                        top: "2px",
                        width: "12px",
                        height: "6px",
                        borderRadius: "9999px",
                        backgroundColor: "var(--color-brand-accent, #EB1E2D)",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--color-brand-accent, #EB1E2D)",
                    }}
                  >
                    LET&apos;S TALK
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
                    fontWeight: 800,
                    color: "var(--color-primary-navy, #101D35)",
                    marginBottom: "2rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Start Your Project With Us
                </h2>

                {submitted ? (
                  <div
                    style={{
                      padding: "2rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(16, 185, 129, 0.08)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      textAlign: "center",
                    }}
                  >
                    <CheckCircle2 size={40} color="#10B981" style={{ margin: "0 auto 1rem" }} />
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                      Inquiry Prepared Successfully
                    </h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
                      Your email client has been opened with your inquiry parameters addressed to info@roacs.com. If your client did not launch automatically, feel free to email us directly.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline-navy"
                      size="sm"
                    >
                      Send Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {error && (
                      <div
                        style={{
                          padding: "0.85rem 1rem",
                          borderRadius: "var(--radius-xs)",
                          backgroundColor: "rgba(237, 25, 24, 0.08)",
                          border: "1px solid rgba(237, 25, 24, 0.25)",
                          color: "var(--color-brand-accent)",
                          fontSize: "0.875rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <AlertCircle size={16} />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Row 1: Your Name* & Your Email* */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                      <div>
                        <label style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                          Your Name*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name*"
                          style={{
                            width: "100%",
                            padding: "0.85rem 1.15rem",
                            borderRadius: "4px",
                            border: "1px solid #E2E8F0",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                            backgroundColor: "#FFFFFF",
                            color: "#111827",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                          Your Email*
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your Email*"
                          style={{
                            width: "100%",
                            padding: "0.85rem 1.15rem",
                            borderRadius: "4px",
                            border: "1px solid #E2E8F0",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                            backgroundColor: "#FFFFFF",
                            color: "#111827",
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 2: Your Phone* & Subject* */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                      <div>
                        <label style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                          Your Phone*
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your Phone*"
                          style={{
                            width: "100%",
                            padding: "0.85rem 1.15rem",
                            borderRadius: "4px",
                            border: "1px solid #E2E8F0",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                            backgroundColor: "#FFFFFF",
                            color: "#111827",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                          Subject*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Subject*"
                          style={{
                            width: "100%",
                            padding: "0.85rem 1.15rem",
                            borderRadius: "4px",
                            border: "1px solid #E2E8F0",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                            backgroundColor: "#FFFFFF",
                            color: "#111827",
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 3: Your Message* */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                        Your Message*
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        style={{
                          width: "100%",
                          padding: "0.85rem 1.15rem",
                          borderRadius: "4px",
                          border: "1px solid #E2E8F0",
                          fontSize: "0.95rem",
                          outline: "none",
                          fontFamily: "inherit",
                          backgroundColor: "#FFFFFF",
                          color: "#111827",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    {/* Submit Button matching reference */}
                    <div>
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "var(--color-brand-accent, #EB1E2D)",
                          color: "#FFFFFF",
                          border: "none",
                          padding: "0.85rem 1.75rem",
                          borderRadius: "3px",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          transition: "all 0.2s ease",
                          boxShadow: "0 4px 12px rgba(235, 30, 45, 0.25)",
                        }}
                      >
                        <span>SEND MESSAGE</span>
                        <span style={{ opacity: 0.5, fontWeight: 400 }}>|</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      
    </div>
  );
}
