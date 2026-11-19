"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom Software Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in your name, corporate email, and project message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please provide a valid corporate email address.");
      return;
    }

    // Direct mailto generation so user can deliver with their client or verify inquiry
    const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.company || formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company}\n` +
      `Service: ${formData.service}\n\n` +
      `Project Scope:\n${formData.message}`
    );

    // Open native client or set submitted state
    window.location.href = `mailto:info@roacs.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section
        style={{
          backgroundColor: "var(--color-primary-navy)",
          color: "#FFFFFF",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Container>
          <div style={{ maxWidth: "780px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-brand-accent)",
                marginBottom: "1rem",
                display: "inline-block",
              }}
            >
              Start a Project
            </span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Let&apos;s engineer your next digital solution.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              Reach out to our engineering and consulting team in Coimbatore to discuss software architecture, MVP roadmaps, or ongoing system scaling.
            </p>
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
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--color-primary-navy)",
                  marginBottom: "1.5rem",
                }}
              >
                Corporate Offices & Direct Channels
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                {/* Location */}
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
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.25rem" }}>
                      Development Center (India)
                    </h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.5, margin: 0 }}>
                      82, KRM Residency, Sarcarsamakulam, Kovilpalayam, Coimbatore, Tamil Nadu - 641107, India
                    </p>
                  </div>
                </div>

                {/* Email */}
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
                      Direct Email
                    </h4>
                    <a
                      href="mailto:info@roacs.com"
                      style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-brand-accent)" }}
                    >
                      info@roacs.com
                    </a>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "0.25rem", margin: 0 }}>
                      Monitored by our technical architecture desk
                    </p>
                  </div>
                </div>

                {/* Phone */}
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
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.25rem" }}>
                      Telephone Desk
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                      <div>
                        <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>India: </span>
                        <a href="tel:+919363282216" style={{ fontWeight: 600, color: "var(--color-primary-navy)" }}>
                          (+91) 93632 82216 / (+91) 98765 43210
                        </a>
                      </div>
                      <div>
                        <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>United States: </span>
                        <a href="tel:+13203162929" style={{ fontWeight: 600, color: "var(--color-primary-navy)" }}>
                          +1 320-316-2929
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div
                  style={{
                    padding: "1.75rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
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
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.15rem" }}>
                      Working Hours
                    </h4>
                    <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
                      Mon – Sat: 10:00 AM – 4:00 PM IST
                    </span>
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
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Request Technical Consultation
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  Complete the project brief below to connect directly with a Roacs systems architect.
                </p>

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
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Kristin Watson"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "var(--radius-xs)",
                            border: "1px solid var(--border-light)",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "var(--radius-xs)",
                            border: "1px solid var(--border-light)",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 / +1 ..."
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "var(--radius-xs)",
                            border: "1px solid var(--border-light)",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. BEC Global"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "var(--radius-xs)",
                            border: "1px solid var(--border-light)",
                            fontSize: "0.95rem",
                            outline: "none",
                            fontFamily: "inherit",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                        Primary Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "var(--radius-xs)",
                          border: "1px solid var(--border-light)",
                          fontSize: "0.95rem",
                          backgroundColor: "#FFFFFF",
                          outline: "none",
                          fontFamily: "inherit",
                        }}
                      >
                        <option>Custom Software Development</option>
                        <option>Web Application Development</option>
                        <option>Mobile Application Development</option>
                        <option>AI & Intelligent Automation</option>
                        <option>Cloud & DevOps Solutions</option>
                        <option>UI/UX Design Excellence</option>
                        <option>Strategic IT Consultancy</option>
                        <option>Roacs Material Management</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                        Project Scope & Timeline Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements, target platform, current bottlenecks, and desired launch horizon."
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "var(--radius-xs)",
                          border: "1px solid var(--border-light)",
                          fontSize: "0.95rem",
                          outline: "none",
                          fontFamily: "inherit",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<Send size={16} />}
                      style={{ justifyContent: "center", marginTop: "0.5rem" }}
                    >
                      Submit Consultation Request
                    </Button>
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
