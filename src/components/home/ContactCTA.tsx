"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ArrowRight, ArrowLeft, Mail, Phone, X, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactCTA() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, business email, and project scope.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid corporate email address.");
      return;
    }

    const mailtoSubject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n\n` +
      `Project Scope & Requirements:\n${formData.message}`
    );

    window.location.href = `mailto:info@roacs.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
  };

  const handleResetAndFlipBack = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setErrorMessage("");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 800);
  };

  return (
    <section
      style={{
        backgroundColor: "#050B14",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        position: "relative",
        overflow: "hidden",
      }}
      id="contact-cta"
    >
      <Container wide>
        <Reveal delay={0.1}>
          {/* 3D Flip Card Container with Perspective */}
          <div
            style={{
              perspective: "1600px",
              width: "100%",
            }}
          >
            {/* 3D Rotating Flipper */}
            <div
              style={{
                position: "relative",
                width: "100%",
                minHeight: isFlipped ? "560px" : "auto",
                transition: "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* ========================================================
                  FRONT FACE: "Let's build what's next." Showcase Card
                  ======================================================== */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "28px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: "#070E1B",
                  overflow: "hidden",
                  boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  padding: "clamp(3rem, 6vw, 4.75rem) clamp(1.5rem, 4vw, 3.5rem) clamp(2.5rem, 5vw, 3.75rem)",
                  textAlign: "center",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  pointerEvents: isFlipped ? "none" : "auto",
                }}
              >
                {/* Technical Blueprint Grid Pattern (Pure CSS, No Image) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "72px 72px",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* Ambient Radial Glows (Crimson Left / Blue Right) */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "28%",
                    transform: "translate(-50%, -50%)",
                    width: "min(600px, 90vw)",
                    height: "min(600px, 90vw)",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(237, 25, 24, 0.2) 0%, rgba(237, 25, 24, 0.06) 45%, transparent 70%)",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "15%",
                    transform: "translate(50%, -50%)",
                    width: "min(650px, 90vw)",
                    height: "min(650px, 90vw)",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(30, 64, 175, 0.24) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 72%)",
                    filter: "blur(70px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* Vignette Edge Shadow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(5, 11, 20, 0.75) 100%)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* Content Container */}
                <div style={{ position: "relative", zIndex: 1, maxWidth: "780px", margin: "0 auto" }}>
                  {/* Main Heading */}
                  <h2
                    style={{
                      fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.15,
                      marginBottom: "1.35rem",
                      textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Let&apos;s build what&apos;s next.
                  </h2>

                  {/* Subtitle Description */}
                  <p
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.125rem)",
                      lineHeight: 1.65,
                      color: "#94A3B8",
                      maxWidth: "680px",
                      margin: "0 auto 2.75rem auto",
                      fontWeight: 400,
                    }}
                  >
                    Whether you are architecting a new enterprise SaaS platform, modernizing mission-critical legacy software, or scaling cloud infrastructure, our engineering teams are ready to collaborate.
                  </p>

                  {/* CTA Action Buttons */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1.25rem",
                      marginBottom: "3.25rem",
                    }}
                  >
                    {/* Trigger Flip to Back Contact Form */}
                    <button
                      type="button"
                      onClick={() => setIsFlipped(true)}
                      onMouseEnter={() => setIsPrimaryHovered(true)}
                      onMouseLeave={() => setIsPrimaryHovered(false)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        padding: "0.95rem 2.2rem",
                        borderRadius: "10px",
                        backgroundColor: "var(--color-brand-accent)",
                        color: "#FFFFFF",
                        fontSize: "1rem",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        boxShadow: isPrimaryHovered
                          ? "0 0 45px rgba(237, 25, 24, 0.8), 0 6px 20px rgba(237, 25, 24, 0.5)"
                          : "0 0 30px rgba(237, 25, 24, 0.5), 0 4px 14px rgba(237, 25, 24, 0.35)",
                        transform: isPrimaryHovered ? "translateY(-2px)" : "translateY(0)",
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight size={18} />
                    </button>

                    <Link
                      href="/services"
                      onMouseEnter={() => setIsSecondaryHovered(true)}
                      onMouseLeave={() => setIsSecondaryHovered(false)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.95rem 2.2rem",
                        borderRadius: "10px",
                        backgroundColor: isSecondaryHovered ? "rgba(255, 255, 255, 0.12)" : "rgba(10, 18, 33, 0.6)",
                        border: "1px solid",
                        borderColor: isSecondaryHovered ? "#FFFFFF" : "rgba(255, 255, 255, 0.28)",
                        color: "#FFFFFF",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transform: isSecondaryHovered ? "translateY(-2px)" : "translateY(0)",
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <span>Review Service Capabilities</span>
                    </Link>
                  </div>

                  {/* Bottom Divider Line */}
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15) 30%, rgba(255, 255, 255, 0.15) 70%, transparent)",
                      marginBottom: "2rem",
                    }}
                  />

                  {/* Direct Channels Pill Boxes */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.65rem 1.35rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(15, 23, 42, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        backdropFilter: "blur(6px)",
                        fontSize: "0.88rem",
                      }}
                    >
                      <Mail size={16} color="var(--color-brand-accent)" />
                      <span style={{ color: "#94A3B8" }}>Direct inquiries:</span>
                      <a
                        href="mailto:info@roacs.com"
                        style={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        info@roacs.com
                      </a>
                    </div>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.65rem 1.35rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(15, 23, 42, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        backdropFilter: "blur(6px)",
                        fontSize: "0.88rem",
                      }}
                    >
                      <Phone size={16} color="var(--color-brand-accent)" />
                      <span style={{ color: "#94A3B8" }}>Call our advisory desk:</span>
                      <a
                        href="tel:+919363282216"
                        style={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        +91 93632 82216
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================
                  BACK FACE: Interactive Contact Form (3D Flip Backside)
                  ======================================================== */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "28px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backgroundColor: "#070E1B",
                  overflow: "hidden",
                  boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  padding: "clamp(2rem, 4vw, 3.25rem) clamp(1.5rem, 4vw, 3.5rem)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  pointerEvents: isFlipped ? "auto" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Technical Blueprint Grid Pattern on Back Face */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "72px 72px",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* Glowing Ambient Radial Glow on Back */}
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "min(650px, 95vw)",
                    height: "min(650px, 95vw)",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(237, 25, 24, 0.16) 0%, rgba(30, 64, 175, 0.18) 50%, transparent 72%)",
                    filter: "blur(65px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* Form Content Wrapper */}
                <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", width: "100%", margin: "0 auto" }}>
                  {/* Top Bar with Header & Flip Back Button */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "1.75rem",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      paddingBottom: "1.1rem",
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--color-brand-accent)",
                            boxShadow: "0 0 10px var(--color-brand-accent)",
                          }}
                        />
                        <h3
                          style={{
                            fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            margin: 0,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          Start a Conversation
                        </h3>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "#94A3B8", margin: 0 }}>
                        Tell us about your project requirements and our engineering team will get in touch within 24 hours.
                      </p>
                    </div>

                    {/* Close / Return Button */}
                    <button
                      type="button"
                      onClick={() => setIsFlipped(false)}
                      title="Return to card overview"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        padding: "0.5rem 0.85rem",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#FFFFFF",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                        marginLeft: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(237, 25, 24, 0.2)";
                        e.currentTarget.style.borderColor = "var(--color-brand-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                      }}
                    >
                      <X size={15} />
                      <span>Close</span>
                    </button>
                  </div>

                  {/* Feedback: Success State */}
                  {isSubmitted ? (
                    <div
                      style={{
                        padding: "2.5rem 1.5rem",
                        textAlign: "center",
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        borderRadius: "16px",
                      }}
                    >
                      <CheckCircle2 size={44} color="#10B981" style={{ margin: "0 auto 1rem auto" }} />
                      <h4 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                        Inquiry Initiated Successfully!
                      </h4>
                      <p style={{ color: "#94A3B8", fontSize: "0.95rem", maxWidth: "480px", margin: "0 auto 1.5rem auto" }}>
                        Thank you for reaching out. We have opened your email client to verify and send your message. You can also reach us directly at <strong style={{ color: "#FFFFFF" }}>info@roacs.com</strong>.
                      </p>
                      <button
                        type="button"
                        onClick={handleResetAndFlipBack}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.75rem 1.75rem",
                          borderRadius: "8px",
                          backgroundColor: "var(--color-brand-accent)",
                          color: "#FFFFFF",
                          fontSize: "0.92rem",
                          fontWeight: 700,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <ArrowLeft size={16} />
                        <span>Return to Overview</span>
                      </button>
                    </div>
                  ) : (
                    /* The Actual Form */
                    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
                      {errorMessage && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.75rem 1rem",
                            borderRadius: "8px",
                            backgroundColor: "rgba(239, 68, 68, 0.15)",
                            border: "1px solid rgba(239, 68, 68, 0.35)",
                            color: "#FCA5A5",
                            fontSize: "0.85rem",
                            marginBottom: "1.25rem",
                          }}
                        >
                          <AlertCircle size={16} style={{ flexShrink: 0 }} />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {/* Name Input */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#CBD5E1",
                              marginBottom: "0.35rem",
                            }}
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              borderRadius: "8px",
                              backgroundColor: "rgba(15, 23, 42, 0.8)",
                              border: "1px solid rgba(255, 255, 255, 0.18)",
                              color: "#FFFFFF",
                              fontSize: "0.9rem",
                              outline: "none",
                              boxSizing: "border-box",
                              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = "var(--color-brand-accent)";
                              e.currentTarget.style.boxShadow = "0 0 12px rgba(237, 25, 24, 0.3)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#CBD5E1",
                              marginBottom: "0.35rem",
                            }}
                          >
                            Corporate Email *
                          </label>
                          <input
                            type="email"
                            placeholder="corporate@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              borderRadius: "8px",
                              backgroundColor: "rgba(15, 23, 42, 0.8)",
                              border: "1px solid rgba(255, 255, 255, 0.18)",
                              color: "#FFFFFF",
                              fontSize: "0.9rem",
                              outline: "none",
                              boxSizing: "border-box",
                              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = "var(--color-brand-accent)";
                              e.currentTarget.style.boxShadow = "0 0 12px rgba(237, 25, 24, 0.3)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          />
                        </div>

                        {/* Phone Input */}
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#CBD5E1",
                              marginBottom: "0.35rem",
                            }}
                          >
                            Phone (Optional)
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 93632 ... / +1 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              borderRadius: "8px",
                              backgroundColor: "rgba(15, 23, 42, 0.8)",
                              border: "1px solid rgba(255, 255, 255, 0.18)",
                              color: "#FFFFFF",
                              fontSize: "0.9rem",
                              outline: "none",
                              boxSizing: "border-box",
                              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = "var(--color-brand-accent)";
                              e.currentTarget.style.boxShadow = "0 0 12px rgba(237, 25, 24, 0.3)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          />
                        </div>
                      </div>

                      {/* Project Scope Message */}
                      <div style={{ marginBottom: "1.35rem" }}>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "#CBD5E1",
                            marginBottom: "0.35rem",
                          }}
                        >
                          Project Scope & Requirements *
                        </label>
                        <textarea
                          placeholder="Tell us about your project goals, required tech stack, or roadmap timeline..."
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            borderRadius: "8px",
                            backgroundColor: "rgba(15, 23, 42, 0.8)",
                            border: "1px solid rgba(255, 255, 255, 0.18)",
                            color: "#FFFFFF",
                            fontSize: "0.9rem",
                            outline: "none",
                            resize: "vertical",
                            boxSizing: "border-box",
                            fontFamily: "inherit",
                            lineHeight: 1.5,
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "var(--color-brand-accent)";
                            e.currentTarget.style.boxShadow = "0 0 12px rgba(237, 25, 24, 0.3)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {/* Action Bar */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "1rem",
                        }}
                      >
                        <span style={{ fontSize: "0.78rem", color: "#64748B" }}>
                          🔒 Confidential. NDA available upon request.
                        </span>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <button
                            type="button"
                            onClick={() => setIsFlipped(false)}
                            style={{
                              padding: "0.75rem 1.25rem",
                              borderRadius: "8px",
                              backgroundColor: "transparent",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                              color: "#CBD5E1",
                              fontSize: "0.88rem",
                              fontWeight: 600,
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                          >
                            Cancel
                          </button>

                          <button
                            type="submit"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              padding: "0.8rem 1.85rem",
                              borderRadius: "8px",
                              backgroundColor: "var(--color-brand-accent)",
                              color: "#FFFFFF",
                              fontSize: "0.95rem",
                              fontWeight: 700,
                              border: "none",
                              cursor: "pointer",
                              boxShadow: "0 0 30px rgba(237, 25, 24, 0.5), 0 4px 14px rgba(237, 25, 24, 0.35)",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <span>Send Message</span>
                            <Send size={16} />
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
