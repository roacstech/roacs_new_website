import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { constructMetadata } from "@/lib/metadata";
import { 
  Target, 
  Eye, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Cpu, 
  Award,
  Globe
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
          background: "linear-gradient(180deg, #020B1E 0%, #051538 50%, #082154 100%)",
          color: "#FFFFFF",
          paddingTop: "5.5rem",
          paddingBottom: "5.5rem",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
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
            zIndex: 0,
          }}
          className="ambient-pulse"
        />

        <Container wide>
          <div style={{ position: "relative", zIndex: 1, maxWidth: "860px" }}>
    

            <span
              style={{
                display: "block",
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
                marginBottom: "3rem",
                maxWidth: "760px",
              }}
            >
              We are a forward-thinking software engineering and IT consulting company dedicated to delivering 
              innovative digital platforms, cloud infrastructure, and enterprise automation that empower businesses globally.
            </p>
          </div>

          {/* Frosted Glass Metrics Ribbon Matching Reference UI */}
          <div className="about-hero-stats-grid">
            <div className="about-glass-stat-card">
              <span className="about-glass-stat-number">3+</span>
              <span className="about-glass-stat-label">Years Working Experience</span>
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "4.5rem",
              alignItems: "center",
            }}
          >
            {/* Visual Showcase: Overlapping Photos & Floating Badge */}
            <div style={{ position: "relative" }}>
              {/* Main Photo */}
              <div
                style={{
                  position: "relative",
                  width: "85%",
                  height: "440px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(16, 29, 53, 0.2)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Roacs Corporation Technical Leadership"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Secondary Overlapping Photo */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "0px",
                  width: "55%",
                  height: "260px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "4px solid #FFFFFF",
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.25)",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/about/about-2.jpg"
                  alt="Roacs Engineering Collaboration"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
              </div>

              {/* Floating Experience Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "-15px",
                  zIndex: 3,
                  backgroundColor: "rgba(2, 11, 30, 0.94)",
                  color: "#FFFFFF",
                  padding: "1rem 1.4rem",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.35)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                }}
                className="hero-float-badge-1"
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(237, 25, 24, 0.15)",
                    border: "1px solid rgba(237, 25, 24, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-brand-accent)",
                    flexShrink: 0,
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, lineHeight: 1 }}>3+ Years</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-muted-blue)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Working Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
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
                  marginBottom: "1.5rem",
                }}
              >
                Engineering Digital Products That Deliver Sustainable Impact
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  marginBottom: "2rem",
                }}
              >
                We are a forward-thinking software company dedicated to delivering innovative digital solutions that drive business success. 
                Our team combines creativity, technology, and strategy to build products that are efficient, scalable, and user-friendly. 
                We believe in turning complex challenges into simple, powerful solutions that help businesses grow in the digital era.
              </p>

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
          SECTION 2: "What Makes Us Different" (Why Choose Us) - Animated Cards
          ========================================================================= */}
      <section
        style={{
          backgroundColor: "#020B1E",
          color: "#FFFFFF",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "300px",
            background: "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <Container wide>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 4rem", position: "relative", zIndex: 1 }}>
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
              Why Choose Us
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.75vw, 2.85rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "#FFFFFF",
                marginBottom: "1rem",
              }}
            >
              What Makes Us Different
            </h2>
            <p style={{ color: "var(--color-muted-blue)", fontSize: "1.05rem", lineHeight: 1.65 }}>
              We architect software that removes friction, accelerates operational velocity, and gives you a durable technological edge.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Card 1: Commercial Service */}
            <div
              className="about-dark-card-hover"
              style={{
                padding: "2.5rem 2rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(237, 25, 24, 0.12)",
                  border: "1px solid rgba(237, 25, 24, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1.75rem",
                }}
              >
                <Briefcase size={26} />
              </div>

              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-brand-accent)",
                  marginBottom: "0.5rem",
                }}
              >
                Enterprise Delivery
              </span>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                Commercial Service
              </h3>

              <p style={{ color: "var(--color-muted-blue)", fontSize: "0.95rem", lineHeight: 1.65, flexGrow: 1 }}>
                We deliver high-quality software solutions tailored to meet business needs across various industries. 
                Our focus is on creating value-driven services that optimize productivity and unlock tangible ROI.
              </p>

              <div
                style={{
                  marginTop: "1.75rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.825rem",
                  color: "#FFFFFF",
                }}
              >
                <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                <span>Industry-Tailored Architectures</span>
              </div>
            </div>

            {/* Card 2: Empowering Growth */}
            <div
              className="about-dark-card-hover"
              style={{
                padding: "2.5rem 2rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(37, 99, 235, 0.12)",
                  border: "1px solid rgba(37, 99, 235, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-tech-blue)",
                  marginBottom: "1.75rem",
                }}
              >
                <TrendingUp size={26} />
              </div>

              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-tech-blue)",
                  marginBottom: "0.5rem",
                }}
              >
                Scalable Engineering
              </span>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                Empowering Growth
              </h3>

              <p style={{ color: "var(--color-muted-blue)", fontSize: "0.95rem", lineHeight: 1.65, flexGrow: 1 }}>
                We empower businesses by delivering innovative technology solutions that are scalable, reliable, and easy to use. 
                Our focus is on creating systems that not only solve current challenges but support continuous, long-term expansion.
              </p>

              <div
                style={{
                  marginTop: "1.75rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.825rem",
                  color: "#FFFFFF",
                }}
              >
                <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                <span>Resilient Scalability Guaranteed</span>
              </div>
            </div>

            {/* Card 3: Safety & Reliability */}
            <div
              className="about-dark-card-hover"
              style={{
                padding: "2.5rem 2rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10B981",
                  marginBottom: "1.75rem",
                }}
              >
                <ShieldCheck size={26} />
              </div>

              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#10B981",
                  marginBottom: "0.5rem",
                }}
              >
                Security First
              </span>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                Safety & Reliability
              </h3>

              <p style={{ color: "var(--color-muted-blue)", fontSize: "0.95rem", lineHeight: 1.65, flexGrow: 1 }}>
                We ensure strong security, high performance, and consistent reliability to keep your systems running smoothly. 
                Our rigorous deployment standards guarantee production uptime and protect critical organizational data.
              </p>

              <div
                style={{
                  marginTop: "1.75rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.825rem",
                  color: "#FFFFFF",
                }}
              >
                <CheckCircle2 size={16} color="#10B981" />
                <span>Zero-Trust Enterprise Standards</span>
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
          SECTION 5: "Our Core Values" - Premium Interactive Alternating Showcase
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: "#FFFFFF", padding: "6.5rem 0" }}>
        <Container wide>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 4.5rem" }}>
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
              Our Core Values
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--color-primary-navy)",
                marginBottom: "1rem",
              }}
            >
              What Makes Us Different and Drives Our Success
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1.05rem", lineHeight: 1.65 }}>
              The foundational principles that guide every architectural decision, line of code, and client interaction.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {/* Value 01: Innovation */}
            <div
              className="about-val-card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--color-bg-subtle)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "rgba(237, 25, 24, 0.4)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  01
                </span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                  Innovation
                </h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
                  We embrace innovation as the core of our growth and success. Our team constantly explores emerging technologies 
                  and modern development practices to build scalable, future-ready solutions that keep our clients ahead of their competition.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Modern Tech Stacks
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Cloud-Native Architecture
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Automated CI/CD
                  </span>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  height: "320px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <Image
                  src="/images/about/innovation.jpg"
                  alt="Innovation at Roacs Corporation"
                  fill
                  className="val-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Value 02: Integrity (Reversed on desktop) */}
            <div
              className="about-val-card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--color-bg-subtle)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "320px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  order: 2,
                }}
              >
                <Image
                  src="/images/about/integrity.jpg"
                  alt="Integrity at Roacs Corporation"
                  fill
                  className="val-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div style={{ order: 1 }}>
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "rgba(37, 99, 235, 0.4)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  02
                </span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                  Integrity
                </h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
                  Integrity is the foundation of everything we do. We believe in building long-term relationships through honesty, 
                  transparency, and accountability with ethical practices. Our clients receive direct, transparent updates at every milestone.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Transparent Milestones
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Ethical Engineering
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Full Code Ownership
                  </span>
                </div>
              </div>
            </div>

            {/* Value 03: Customer Focus */}
            <div
              className="about-val-card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--color-bg-subtle)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "rgba(237, 25, 24, 0.4)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  03
                </span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                  Customer Focus
                </h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
                  Our clients are at the center of our approach. We take time to understand their unique needs, challenges, and goals 
                  before crafting solutions that truly make a difference. We align our engineering metrics directly with your business goals.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Dedicated Engineering Leads
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Continuous Feedback Sprints
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Post-Launch Support
                  </span>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  height: "320px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <Image
                  src="/images/about/customer-focus.jpg"
                  alt="Customer Focus at Roacs Corporation"
                  fill
                  className="val-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Value 04: Quality (Reversed on desktop) */}
            <div
              className="about-val-card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--color-bg-subtle)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "320px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  order: 2,
                }}
              >
                <Image
                  src="/images/about/quality.jpg"
                  alt="Quality at Roacs Corporation"
                  fill
                  className="val-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div style={{ order: 1 }}>
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "rgba(16, 185, 129, 0.4)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  04
                </span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                  Quality
                </h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
                  We are committed to delivering high-quality software that meets the highest standards of performance, security, 
                  and reliability. Every application undergoes peer architecture reviews, automated test coverage, and strict performance audits.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Rigorous Code Audits
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Automated QA Testing
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-light)" }}>
                    Zero-Downtime Releases
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: "Enterprise Standards & Story"
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: "#020B1E", color: "#FFFFFF", padding: "6rem 0" }}>
        <Container wide>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
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
                Our Commitment
              </span>

              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Delivering Sustainable Enterprise Value Through Modern Engineering
              </h2>

              <p style={{ color: "var(--color-muted-blue)", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
                At Roacs Corporation, we design and develop powerful SaaS platforms, web applications, and enterprise solutions that 
                help businesses streamline operations, eliminate technical debt, and scale efficiently in an evolving digital landscape.
              </p>

              <p style={{ color: "var(--color-muted-blue)", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: "2rem" }}>
                Our team brings together proven engineering practices with an agile execution mindset. We partner with forward-thinking 
                enterprises and high-growth startups across India, the United States, and international markets.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button href="/contact" variant="primary" icon={<ArrowRight size={16} />}>
                  Schedule a Consultation
                </Button>
                <Button href="/services" variant="secondary">
                  View Our Services
                </Button>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Info Block 1: Our Story */}
              <div
                className="about-dark-card-hover"
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.75rem" }}>
                  <Sparkles size={22} color="var(--color-brand-accent)" />
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF" }}>Our Story</h4>
                </div>
                <p style={{ color: "var(--color-muted-blue)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Founded with a vision to make complex technology accessible and scalable, Roacs has grown into an international engineering 
                  partner delivering robust solutions that empower organizations to lead in their respective markets.
                </p>
              </div>

              {/* Info Block 2: Sustainability */}
              <div
                className="about-dark-card-hover"
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.75rem" }}>
                  <Globe size={22} color="var(--color-tech-blue)" />
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF" }}>Sustainability &amp; Governance</h4>
                </div>
                <p style={{ color: "var(--color-muted-blue)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Our development approach is built on three pillars: People first, Engineering confidence, and Ethical digital governance. 
                  We build systems designed to operate reliably for decades, minimizing waste and maximizing efficiency.
                </p>
              </div>

              {/* Info Block 3: Engineering Culture */}
              <div
                className="about-dark-card-hover"
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.75rem" }}>
                  <Users size={22} color="#10B981" />
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF" }}>Engineering Culture</h4>
                </div>
                <p style={{ color: "var(--color-muted-blue)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  We cultivate a high-talent engineering culture where continuous learning, peer code reviews, and innovative problem-solving 
                  empower our specialists to build the next generation of scalable enterprise software.
                </p>
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
