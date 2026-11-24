import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { constructMetadata } from "@/lib/metadata";
import { CoreValuesShowcase } from "@/components/about/CoreValuesShowcase";
import { 
  Target, 
  Eye, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  CheckCircle2, 
  Cpu, 
  Star,
  Leaf
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Roacs Corporation",
  description: "Learn about Roacs Corporation. We are a dedicated team of tech professionals delivering top-tier software engineering, cloud services, and IT consulting.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "var(--color-text-primary)" }}>
      {/* =========================================================================
          HERO: Sub-page Hero with Ambient Aurora Gradient & Breadcrumbs
          ========================================================================= */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#020B1E",
          color: "#FFFFFF",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Background Office Image with Deep Navy Gradient Overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/about/about-hero-bg.jpg"
            alt="Roacs Engineering Headquarters & Technical Workspace"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(2, 11, 30, 0.88) 0%, rgba(3, 16, 44, 0.84) 50%, rgba(2, 9, 26, 0.94) 100%)",
            }}
          />
        </div>

        {/* Ambient Glow Orbs */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.25) 0%, rgba(237, 25, 24, 0.12) 45%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
          className="ambient-pulse"
        />

        <Container wide style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "880px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-brand-accent)",
                marginBottom: "0.85rem",
              }}
            >
              About Roacs Corporation
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 3.85rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Transforming Ideas into <br />
              <span style={{ 
                background: "linear-gradient(90deg, #FFFFFF 0%, #A9B7C9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Scalable Software Solutions
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.175rem",
                lineHeight: 1.65,
                color: "var(--color-muted-blue)",
                maxWidth: "760px",
                margin: "0 auto 3.5rem auto",
              }}
            >
              We are a forward-thinking software engineering and IT consulting company dedicated to delivering 
              innovative digital platforms, cloud infrastructure, and enterprise automation that empower businesses globally.
            </p>
          </div>

          {/* Frosted Glass Metrics Ribbon Matching Reference UI */}
          <div className="about-hero-stats-grid">
            <div className="about-glass-stat-card">
              <span className="about-glass-stat-number">50+</span>
              <span className="about-glass-stat-label">Enterprise Clients</span>
            </div>
            <div className="about-glass-stat-card">
              <span className="about-glass-stat-number">100+</span>
              <span className="about-glass-stat-label">Successful Deployments</span>
            </div>
            <div className="about-glass-stat-card">
              <span className="about-glass-stat-number">40+</span>
              <span className="about-glass-stat-label">Senior Tech Specialists</span>
            </div>
            <div className="about-glass-stat-card">
              <span className="about-glass-stat-number">99.9%</span>
              <span className="about-glass-stat-label">System Reliability</span>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 1: Detailed Narrative & Overlapping Image Showcase
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <Container wide>
          {/* Centered Section Header */}
          <div style={{ maxWidth: "860px", margin: "0 auto 4rem auto", textAlign: "center" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-brand-accent)",
                marginBottom: "0.75rem",
                display: "inline-block",
              }}
            >
              Who We Are
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--color-primary-navy)",
                marginBottom: "1.25rem",
              }}
            >
              Engineering Digital Products That Deliver Sustainable Impact
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                margin: "0 auto",
                maxWidth: "760px",
              }}
            >
              We are a forward-thinking software company dedicated to delivering innovative digital solutions that drive business success. 
              Our team combines creativity, technology, and strategy to build products that are efficient, scalable, and user-friendly. 
              We believe in turning complex challenges into simple, powerful solutions that help businesses grow in the digital era.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "4.5rem",
              alignItems: "center",
            }}
          >
            {/* Visual Showcase: Modern Software Engineering Team */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "440px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(16, 29, 53, 0.16)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <Image
                  src="/images/about/team-collaboration.jpg"
                  alt="Roacs Software Engineering Team & Technical Architecture"
                  fill
                  style={{ objectFit: "cover", objectPosition: "left center" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Content Column */}
            <div>
              {/* Two Interactive Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                {/* Feature 1 */}
                <div
                  className="about-card-hover"
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    padding: "1.35rem 1.5rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
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
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                      Smart Business Solutions
                    </h4>
                    <p style={{ fontSize: "0.925rem", lineHeight: 1.6, color: "var(--color-text-secondary)" }}>
                      We help businesses streamline their operations with customized software tailored to their needs. From automation tools 
                      to enterprise applications, our solutions are designed to improve productivity, reduce costs, and enhance overall performance.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  className="about-card-hover"
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    padding: "1.35rem 1.5rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-tech-blue)",
                      boxShadow: "var(--shadow-sm)",
                      flexShrink: 0,
                    }}
                  >
                    <Layers size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.4rem" }}>
                      Expert Technology Consulting
                    </h4>
                    <p style={{ fontSize: "0.925rem", lineHeight: 1.6, color: "var(--color-text-secondary)" }}>
                      Our experienced consultants guide you through every stage of your digital journey. Whether it&apos;s choosing the right 
                      tech stack, improving system architecture, or scaling your platform, we provide strategic insights to ensure long-term success.
                    </p>
                  </div>
                </div>
              </div>

              <Button href="/contact" variant="primary" icon={<ArrowRight size={16} />}>
                Start a Project With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: "What Makes Us Different" (Why Choose Us) - Premium Neon Glassmorphic Cards
          ========================================================================= */}
      <section
        style={{
          background: "linear-gradient(180deg, #020716 0%, #030D26 50%, #020819 100%)",
          color: "#FFFFFF",
          padding: "7rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top-Left Ambient Blue Wave */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            left: "-10%",
            width: "650px",
            height: "550px",
            background: "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.35) 0%, rgba(56, 189, 248, 0.15) 45%, transparent 70%)",
            filter: "blur(75px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Bottom-Right Ambient Indigo Glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: "700px",
            height: "600px",
            background: "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.35) 0%, rgba(14, 165, 233, 0.12) 45%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Container wide>
          {/* Centered Section Header */}
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4.5rem", position: "relative", zIndex: 1 }}>
            {/* Flanked Glowing Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.85rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  width: "42px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.6))",
                }}
              />
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.4rem 1.15rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(56, 189, 248, 0.5)",
                  boxShadow: "0 0 16px rgba(56, 189, 248, 0.25), inset 0 0 10px rgba(56, 189, 248, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Star size={13} color="#FBBF24" fill="#FBBF24" />
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#FFFFFF",
                  }}
                >
                  Why Choose Us
                </span>
              </div>
              <span
                style={{
                  width: "42px",
                  height: "1px",
                  background: "linear-gradient(90deg, rgba(56, 189, 248, 0.6), transparent)",
                }}
              />
            </div>

            {/* Headline with Multi-Color Gradient on 'Different' */}
            <h2
              style={{
                fontSize: "clamp(2.25rem, 4.25vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                marginBottom: "1rem",
                lineHeight: 1.18,
              }}
            >
              What Makes Us{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #38BDF8 0%, #60A5FA 42%, #FBBF24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Different
              </span>
            </h2>

            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.7, margin: "0 auto", maxWidth: "680px" }}>
              We utilize software that transforms intuition, accelerates operational velocity, and gives you a durable technological edge.
            </p>

            {/* Two-Tone Blue & Yellow Accent Capsule Divider */}
            <div
              style={{
                width: "48px",
                height: "3.5px",
                borderRadius: "9999px",
                background: "linear-gradient(90deg, #3B82F6 0%, #3B82F6 50%, #F59E0B 50%, #F59E0B 100%)",
                margin: "1.5rem auto 0 auto",
              }}
            />
          </div>

          {/* 3 Glowing Glassmorphism Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.25rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Card 1: Commercial Service (Crimson / Pink-Red Theme) */}
            <div
              className="difference-card difference-card-red"
              style={{
                padding: "2.75rem 2.25rem 2.25rem 2.25rem",
                borderRadius: "22px",
                background: "linear-gradient(145deg, rgba(225, 29, 72, 0.16) 0%, rgba(13, 20, 38, 0.8) 45%, rgba(6, 11, 25, 0.95) 100%)",
                border: "1px solid rgba(244, 63, 94, 0.45)",
                boxShadow: "0 0 25px -4px rgba(244, 63, 94, 0.22), 0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* App Icon Gradient Badge */}
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #FF3366 0%, #E11D48 60%, #BE123C 100%)",
                  boxShadow: "0 8px 22px rgba(225, 29, 72, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  marginBottom: "1.75rem",
                  flexShrink: 0,
                }}
              >
                <Briefcase size={26} color="#FFFFFF" />
              </div>

              {/* Category Eyebrow with Line */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#FB7185",
                  }}
                >
                  Enterprise-Level
                </span>
                <span style={{ width: "36px", height: "1.5px", background: "rgba(251, 113, 133, 0.45)" }} />
              </div>

              <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                Commercial Service
              </h3>

              <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7, flexGrow: 1, marginBottom: "2rem" }}>
                We deliver high-quality software solutions tailored to meet business needs across various industries. 
                Our focus is on creating value-driven services that optimize productivity and unlock tangible ROI.
              </p>

              {/* Glowing Outline Pill Button */}
              <div>
                <Link
                  href="/services"
                  className="difference-btn difference-btn-red"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.4rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(244, 63, 94, 0.55)",
                    backgroundColor: "rgba(244, 63, 94, 0.08)",
                    color: "#FDA4AF",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  <span>Industry Tailored Solutions</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Card 2: Empowering Growth (Cobalt / Cyan-Blue Theme) */}
            <div
              className="difference-card difference-card-blue"
              style={{
                padding: "2.75rem 2.25rem 2.25rem 2.25rem",
                borderRadius: "22px",
                background: "linear-gradient(145deg, rgba(37, 99, 235, 0.2) 0%, rgba(13, 22, 45, 0.8) 45%, rgba(6, 11, 25, 0.95) 100%)",
                border: "1px solid rgba(59, 130, 246, 0.55)",
                boxShadow: "0 0 30px -4px rgba(59, 130, 246, 0.28), 0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* App Icon Gradient Badge */}
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #38BDF8 0%, #2563EB 60%, #1D4ED8 100%)",
                  boxShadow: "0 8px 22px rgba(37, 99, 235, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  marginBottom: "1.75rem",
                  flexShrink: 0,
                }}
              >
                <TrendingUp size={26} color="#FFFFFF" />
              </div>

              {/* Category Eyebrow with Line */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#60A5FA",
                  }}
                >
                  Scalable Engineering
                </span>
                <span style={{ width: "36px", height: "1.5px", background: "rgba(96, 165, 250, 0.45)" }} />
              </div>

              <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                Empowering Growth
              </h3>

              <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7, flexGrow: 1, marginBottom: "2rem" }}>
                We empower businesses by delivering innovative technology solutions that are scalable, reliable, and easy to use. 
                Our focus is on creating systems that not only solve current challenges but support continuous, long-term expansion.
              </p>

              {/* Glowing Outline Pill Button */}
              <div>
                <Link
                  href="/services"
                  className="difference-btn difference-btn-blue"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.4rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(59, 130, 246, 0.6)",
                    backgroundColor: "rgba(37, 99, 235, 0.12)",
                    color: "#93C5FD",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  <span>Build for What&apos;s Next</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Card 3: Safe & Reliability (Emerald / Mint-Green Theme) */}
            <div
              className="difference-card difference-card-green"
              style={{
                padding: "2.75rem 2.25rem 2.25rem 2.25rem",
                borderRadius: "22px",
                background: "linear-gradient(145deg, rgba(16, 185, 129, 0.16) 0%, rgba(13, 25, 38, 0.8) 45%, rgba(6, 11, 25, 0.95) 100%)",
                border: "1px solid rgba(16, 185, 129, 0.45)",
                boxShadow: "0 0 25px -4px rgba(16, 185, 129, 0.22), 0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* App Icon Gradient Badge */}
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #34D399 0%, #10B981 60%, #059669 100%)",
                  boxShadow: "0 8px 22px rgba(16, 185, 129, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  marginBottom: "1.75rem",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={26} color="#FFFFFF" />
              </div>

              {/* Category Eyebrow with Line */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#34D399",
                  }}
                >
                  Security First
                </span>
                <span style={{ width: "36px", height: "1.5px", background: "rgba(52, 211, 153, 0.45)" }} />
              </div>

              <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                Safe & Reliability
              </h3>

              <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7, flexGrow: 1, marginBottom: "2rem" }}>
                We ensure strong security, high performance, and consistent reliability to keep your systems running smoothly. 
                Our rigorous deployment standards guarantee protection uptime and protect critical organizational data.
              </p>

              {/* Glowing Outline Pill Button */}
              <div>
                <Link
                  href="/services"
                  className="difference-btn difference-btn-green"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.4rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(16, 185, 129, 0.55)",
                    backgroundColor: "rgba(16, 185, 129, 0.08)",
                    color: "#6EE7B7",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  <span>Trust Our Platform</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: "Our Purpose" - Vision & Mission Bento Cards
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: "#F8FAFC", padding: "6rem 0" }}>
        <Container wide>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 4rem" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-brand-accent)",
                marginBottom: "0.75rem",
                display: "inline-block",
              }}
            >
              Our Purpose
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--color-primary-navy)",
                marginBottom: "1rem",
              }}
            >
              Driven by Vision, Powered by Mission
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1.05rem", lineHeight: 1.65 }}>
              The core principles that direct our product roadmap and our client engineering engagements.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* Mission Card */}
            <div
              className="about-card-hover"
              style={{
                padding: "3rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--border-light)",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, var(--color-brand-accent) 0%, transparent 100%)",
                }}
              />
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(237, 25, 24, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1.75rem",
                }}
              >
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                Our Mission
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.5rem" }}>
                Our mission is to empower businesses through innovative technology solutions that are scalable, reliable, and user-friendly. 
                We focus on delivering value-driven systems that enhance efficiency, improve user experience, and support long-term growth.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span>Streamlining business processes with custom automation</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span>Engineering modular systems designed for continuous scalability</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span>Delivering measurable return on technology investment</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div
              className="about-card-hover"
              style={{
                padding: "3rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--border-light)",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, var(--color-tech-blue) 0%, transparent 100%)",
                }}
              />
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(37, 99, 235, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-tech-blue)",
                  marginBottom: "1.75rem",
                }}
              >
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                Our Vision
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.5rem" }}>
                Our vision is to become a trusted global technology partner by delivering cutting-edge digital solutions. 
                We aim to continuously innovate and help businesses adapt, grow, and succeed in a rapidly evolving digital world.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Becoming the preferred partner for complex digital architectures</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Fostering a global standard for transparent code delivery</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Driving digital transformation across emerging and established markets</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: "Our Impact" - Animated Metric Counter Grid
          ========================================================================= */}
      <section
        style={{
          background: "linear-gradient(180deg, #020B1E 0%, #061A42 100%)",
          color: "#FFFFFF",
          padding: "5rem 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container wide>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-brand-accent)",
                marginBottom: "0.75rem",
                display: "inline-block",
              }}
            >
              Our Impact
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
              Driving Growth Through Precision &amp; Technology
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Stat 1 */}
            <div
              className="about-stat-card"
              style={{
                padding: "2.25rem 1.75rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "var(--color-brand-accent)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.03em",
                }}
              >
                100+
              </div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.35rem" }}>
                Successful Deployments
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted-blue)", lineHeight: 1.5 }}>
                Production-grade SaaS platforms, web apps &amp; cloud systems
              </p>
            </div>

            {/* Stat 2 */}
            <div
              className="about-stat-card"
              style={{
                padding: "2.25rem 1.75rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.03em",
                }}
              >
                40+
              </div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.35rem" }}>
                Senior Engineers
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted-blue)", lineHeight: 1.5 }}>
                Full-stack engineers, cloud architects &amp; security specialists
              </p>
            </div>

            {/* Stat 3 */}
            <div
              className="about-stat-card"
              style={{
                padding: "2.25rem 1.75rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "var(--color-tech-blue)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.03em",
                }}
              >
                30+
              </div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.35rem" }}>
                Proprietary Products
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted-blue)", lineHeight: 1.5 }}>
                Turnkey SaaS platforms, material modules &amp; dev accelerators
              </p>
            </div>

            {/* Stat 4 */}
            <div
              className="about-stat-card"
              style={{
                padding: "2.25rem 1.75rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.03em",
                }}
              >
                1.2k+
              </div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.35rem" }}>
                Satisfied Partners
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted-blue)", lineHeight: 1.5 }}>
                Organizations and enterprises powered by our systems
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: "Our Core Values" - MNC Sticky Stacking Cards Showcase
          ========================================================================= */}
      <CoreValuesShowcase />

      {/* =========================================================================
          SECTION 6: "Enterprise Standards & Story" - Commitment & Culture Showcase
          ========================================================================= */}
      <section
        style={{
          position: "relative",
          background: "radial-gradient(ellipse at 18% 22%, #EEF4FF 0%, #F8FAFD 45%, #FFFFFF 100%)",
          color: "#0F172A",
          paddingTop: "6.5rem",
          paddingBottom: "7.5rem",
          overflow: "hidden",
          borderTop: "1px solid rgba(226, 232, 240, 0.8)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
        }}
      >
        {/* Modern Geometric & Network Mesh Tech Background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/about/commitment-tech-bg.jpg"
            alt="Roacs Modern Engineering Background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.45) 100%)",
            }}
          />
        </div>

        <Container wide style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "4.5rem",
              alignItems: "center",
            }}
          >
            {/* Left Column: Vision & Action */}
            <div style={{ maxWidth: "580px" }}>
              {/* Eyebrow with Gradient Accent Line */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#475569",
                  }}
                >
                  Our Commitment
                </span>
                <span
                  style={{
                    width: "42px",
                    height: "3px",
                    borderRadius: "9999px",
                    background: "linear-gradient(90deg, #A855F7 0%, #38BDF8 100%)",
                    display: "inline-block",
                  }}
                />
              </div>

              <h2
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0F172A",
                  lineHeight: 1.18,
                  marginBottom: "1.75rem",
                }}
              >
                Delivering Sustainable <br />
                Enterprise Value Through <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #7C3AED 0%, #2563EB 60%, #0284C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Modern Engineering
                </span>
              </h2>

              <p style={{ color: "#475569", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
                At Roacs Corporation, we design and develop powerful SaaS platforms, web applications, and enterprise solutions that 
                help businesses streamline operations, eliminate technical debt, and scale efficiently in an evolving digital landscape.
              </p>

              <p style={{ color: "#475569", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: "2.5rem" }}>
                Our team brings together proven engineering practices with an agile execution mindset. We partner with forward-thinking 
                enterprises and high-growth startups across India, the United States, and international markets.
              </p>

              <div style={{ display: "flex", gap: "1.75rem", alignItems: "center", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="commitment-primary-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    background: "linear-gradient(90deg, #0062FF 0%, #6366F1 50%, #8B5CF6 100%)",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    padding: "0.9rem 2rem",
                    borderRadius: "9999px",
                    boxShadow: "0 10px 25px -4px rgba(99, 102, 241, 0.42)",
                    textDecoration: "none",
                  }}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/services"
                  className="commitment-secondary-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "#0F172A",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                  }}
                >
                  <span>View Our Services</span>
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid #CBD5E1",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0F172A",
                      transition: "all 0.25s ease",
                    }}
                    className="commitment-circle-arrow"
                  >
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Connected Timeline Story Nodes */}
            <div style={{ position: "relative", paddingLeft: "1rem" }}>
              {/* Curved Connection Path Behind Badges */}
              <svg
                style={{
                  position: "absolute",
                  top: "30px",
                  bottom: "30px",
                  left: "37px",
                  width: "60px",
                  height: "calc(100% - 60px)",
                  pointerEvents: "none",
                  zIndex: 0,
                  overflow: "visible",
                }}
                viewBox="0 0 60 400"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="commitment-curve-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#2DD4BF" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <path
                  d="M 22,10 C -12,100 -15,140 2,200 C 18,260 25,310 28,390"
                  fill="none"
                  stroke="url(#commitment-curve-grad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Accent dots on the curve */}
                <circle cx="-6" cy="110" r="3.5" fill="#C084FC" />
                <circle cx="16" cy="295" r="3.5" fill="#60A5FA" />
              </svg>

              <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem", position: "relative" }}>
                {/* Node 1: Our Story */}
                <div
                  className="commitment-node"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    position: "relative",
                    zIndex: 1,
                    marginLeft: "18px",
                  }}
                >
                  <div
                    className="commitment-badge commitment-badge-purple"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      boxShadow: "0 10px 24px -4px rgba(168, 85, 247, 0.22), 0 2px 6px rgba(0, 0, 0, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z" />
                    </svg>
                  </div>
                  <div style={{ paddingTop: "0.25rem", maxWidth: "420px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.45rem", letterSpacing: "-0.01em" }}>
                      Our Story
                    </h3>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: 1.62 }}>
                      Founded with a vision to make complex technology accessible and scalable, Roacs has grown into an international engineering 
                      partner delivering robust solutions that empower organizations to lead in their respective markets.
                    </p>
                  </div>
                </div>

                {/* Node 2: Sustainability & Governance */}
                <div
                  className="commitment-node"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    position: "relative",
                    zIndex: 1,
                    marginLeft: "0px",
                  }}
                >
                  <div
                    className="commitment-badge commitment-badge-teal"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(13, 148, 136, 0.3)",
                      boxShadow: "0 10px 24px -4px rgba(13, 148, 136, 0.22), 0 2px 6px rgba(0, 0, 0, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Leaf size={24} color="#0D9488" strokeWidth={2.2} />
                  </div>
                  <div style={{ paddingTop: "0.25rem", maxWidth: "420px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.45rem", letterSpacing: "-0.01em" }}>
                      Sustainability &amp; Governance
                    </h3>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: 1.62 }}>
                      Our development approach is built on three pillars: People first, Engineering confidence, and Ethical digital governance.
                    </p>
                  </div>
                </div>

                {/* Node 3: Engineering Culture */}
                <div
                  className="commitment-node"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    position: "relative",
                    zIndex: 1,
                    marginLeft: "24px",
                  }}
                >
                  <div
                    className="commitment-badge commitment-badge-blue"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(37, 99, 235, 0.3)",
                      boxShadow: "0 10px 24px -4px rgba(37, 99, 235, 0.22), 0 2px 6px rgba(0, 0, 0, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Users size={24} color="#2563EB" strokeWidth={2.2} />
                  </div>
                  <div style={{ paddingTop: "0.25rem", maxWidth: "420px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.45rem", letterSpacing: "-0.01em" }}>
                      Engineering Culture
                    </h3>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: 1.62 }}>
                      We cultivate a high-talent engineering culture where continuous learning, peer code reviews, and innovative problem-solving 
                      empower our specialists to build the next generation of scalable enterprise software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7: High-Impact Call to Action
          ========================================================================= */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <Container wide>
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-xl)",
              background: "linear-gradient(135deg, #020B1E 0%, #051A44 60%, #0B2C68 100%)",
              color: "#FFFFFF",
              padding: "4.5rem 3rem",
              overflow: "hidden",
              textAlign: "center",
              boxShadow: "0 25px 50px -15px rgba(2, 11, 30, 0.35)",
            }}
          >
            {/* Ambient Orb */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "300px",
                background: "radial-gradient(ellipse at center, rgba(237, 25, 24, 0.22) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 70%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1rem",
                  display: "inline-block",
                }}
              >
                Let&apos;s Build Together
              </span>

              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  marginBottom: "1.25rem",
                }}
              >
                Ready to Accelerate Your Digital Transformation?
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-muted-blue)",
                  lineHeight: 1.65,
                  marginBottom: "2.5rem",
                }}
              >
                Connect with our senior software architects to discuss your technical specifications, platform scalability, or IT roadmap.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", flexWrap: "wrap" }}>
                <Button href="/contact" variant="primary" icon={<ArrowRight size={16} />}>
                  Start a Conversation
                </Button>
                <Button href="/services" variant="secondary">
                  Explore All Services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
