"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { StickyScroll, StickyScrollItem } from "@/components/ui/sticky-scroll-reveal";

interface ServiceDetail {
  number: string;
  title: string;
  category: string;
  overview: string;
  points: string[];
  link: string;
  image: string;
}

const servicesList: ServiceDetail[] = [
  {
    number: "01",
    title: "UI/UX Design Excellence",
    category: "Product Design & Systems",
    overview:
      "We design clean, modern, and user-friendly digital products that your customers love to use. From intuitive web interfaces to scalable mobile experiences, we make complex apps simple and effortless.",
    points: [
      "Clean & Modern Web and Mobile App Design",
      "User-Friendly Dashboards & Admin Portals",
      "Modern Figma Component Libraries & Scalable UI Kits",
      "Seamless Experience Across Phones, Tablets & Desktops",
    ],
    link: "/services/ui-ux-design",
    image: "/images/services/ui-ux-design.jpg",
  },
  {
    number: "02",
    title: "Cloud & DevOps Solutions",
    category: "Cloud Infrastructure",
    overview:
      "Resilient multi-cloud architecture, containerized microservices, and 99.98% uptime operational governance across AWS and Google Cloud.",
    points: [
      "Docker & Kubernetes Container Orchestration",
      "Declarative Infrastructure as Code (Terraform / OpenTofu)",
      "Automated Zero-Downtime Blue/Green CI/CD Pipelines",
      "24/7 Observability, Distributed Tracing & Alerting",
    ],
    link: "/services/cloud-devops",
    image: "/images/services/cloud-devops.jpg",
  },
  {
    number: "03",
    title: "AI & Intelligent Automation",
    category: "GenAI & Machine Learning",
    overview:
      "Pragmatic enterprise AI engineering that automates complex workflows, document processing, and predictive decisions with measurable ROI.",
    points: [
      "Enterprise Retrieval-Augmented Generation (RAG) & Vector DBs",
      "Domain-Specific LLM Fine-Tuning & Prompt Pipelines",
      "Real-Time Computer Vision & Optical Character Recognition",
      "Automated Customer Triage & Predictive Demand Analytics",
    ],
    link: "/services/ai-solutions",
    image: "/images/services/ai-solutions.jpg",
  },
  {
    number: "04",
    title: "Mobile Application Development",
    category: "iOS & Android Ecosystems",
    overview:
      "Fluid 60fps native and cross-platform mobile apps engineered with React Native and Flutter for unified performance across all screen sizes.",
    points: [
      "Unified Cross-Platform Codebase Architecture",
      "Offline-First SQLite / WatermelonDB Data Synchronization",
      "Hardware Sensor, Bluetooth & Biometric Security Integration",
      "Full App Store & Google Play Deployment Compliance",
    ],
    link: "/services/mobile-development",
    image: "/images/services/mobile-development.webp",
  },
  {
    number: "05",
    title: "Web Application Development",
    category: "Modern Web Engineering",
    overview:
      "High-concurrency web platforms and SaaS portals engineered with Next.js 15, React 19, and TypeScript for rapid execution and zero lag.",
    points: [
      "Server Components & Streaming SSR for Sub-Second Loads",
      "Real-Time WebSockets for Live Collaborative Dashboards",
      "Progressive Web App (PWA) Offline Caching & Push Alerts",
      "Enterprise Multi-Tenant SaaS Architecture",
    ],
    link: "/services/web-development",
    image: "/images/services/web-app-development.jpg",
  },
  {
    number: "06",
    title: "IT Consultancy",
    category: "Advisory & Strategy",
    overview:
      "Actionable technology roadmaps, legacy modernization, and architectural due diligence to eliminate technical debt and accelerate roadmap velocity.",
    points: [
      "Enterprise Architecture Due Diligence & Tech Stack Audits",
      "Fractional CTO & Strategic Technical Leadership",
      "Legacy Code Modernization & Monolith-to-Microservices Migration",
      "Engineering Team Enablement & CI/CD Process Mentorship",
    ],
    link: "/services/it-consultancy",
    image: "/images/services/it-strategy-consultancy.jpg",
  },
  {
    number: "07",
    title: "Cybersecurity",
    category: "Enterprise Threat Defense",
    overview:
      "Comprehensive zero-trust security postures, automated static code analysis (SAST), and end-to-end cryptographic encryption for data protection.",
    points: [
      "Zero-Trust Architecture & Principle of Least Privilege",
      "Automated SonarQube Static Analysis & Dependency Audits",
      "Enterprise OAuth 2.0, OpenID Connect & Multi-Tenant SSO",
      "SOC 2, ISO 27001 & GDPR Regulatory Compliance Readiness",
    ],
    link: "/contact",
    image: "/images/services/cybersecurity.jpg",
  },
  {
    number: "08",
    title: "API & Microservices Architecture",
    category: "Distributed Systems",
    overview:
      "Decoupled, high-throughput microservices and API gateways built with Node.js, Go, and Python FastAPI for low-latency event-driven communication.",
    points: [
      "Event-Driven Architecture & Message Queues (Kafka / RabbitMQ)",
      "Declarative GraphQL & Sub-Millisecond gRPC Protocols",
      "Automated OpenAPI / Swagger Documentation & Versioning",
      "Distributed Caching with Redis & Resilient Rate Limiting",
    ],
    link: "/contact",
    image: "/images/services/api-microservices.jpg",
  },
  {
    number: "09",
    title: "Travel & Healthcare Platforms",
    category: "Industry Vertical Solutions",
    overview:
      "Mission-critical industry solutions built to handle complex vertical logic, HIPAA/regulatory requirements, and heavy global concurrency.",
    points: [
      "AccuPose Health: AI-Powered Computer Vision Posture Coaching",
      "Yazi Travels: Global Flight & Dynamic Hotel Booking Engine",
      "HIPAA-Compliant Encrypted Telehealth Data Storage",
      "Real-Time Itinerary Generation & Multi-Currency Processing",
    ],
    link: "/projects",
    image: "/images/services/travel-healthcare.jpg",
  },
  {
    number: "10",
    title: "Roacs Material Management",
    category: "Proprietary Enterprise Software",
    overview:
      "Our flagship intelligent warehouse and supply chain automation software providing real-time stock control, automated reordering, and RFID telemetry.",
    points: [
      "Real-Time Multi-Warehouse Stock Telemetry & Low-Stock Alerts",
      "Automated Barcode, QR & RFID Scan Verification",
      "Predictive Reordering Algorithms & Supplier Lead-Time Tracking",
      "Custom Enterprise ERP / Accounting Data Connectors",
    ],
    link: "/material-management",
    image: "/images/services/material-management.jpg",
  },
];

const uiUxImageOptions = [
  {
    name: "1. Figma Design Studio",
    desc: "Ultrawide curved monitor with enterprise Figma design system & red ambient glow",
    src: "/images/services/ui-ux-options/option-1-figma-workspace.jpg",
  },
  {
    name: "2. Multi-Device Ecosystem",
    desc: "Synchronized laptop, tablet & smartphone with dark-mode SaaS UI & red backlight",
    src: "/images/services/ui-ux-options/option-2-multidevice-mockup.jpg",
  },
  {
    name: "3. 3D Isometric Layers",
    desc: "Floating translucent glassmorphic UI architecture & glowing interactive cards",
    src: "/images/services/ui-ux-options/option-3-isometric-layers.jpg",
  },
];

export function ServicesStickyScroll() {
  const [activeUiUxImage, setActiveUiUxImage] = React.useState(0);

  const stickyContent: StickyScrollItem[] = React.useMemo(() => {
    return servicesList.map((svc) => {
      const imgSrc =
        svc.number === "01"
          ? (uiUxImageOptions[activeUiUxImage]?.src || svc.image)
          : svc.image;

      return {
        number: svc.number,
        cleanTitle: svc.title,
        title: `${svc.number}. ${svc.title}`,
        category: svc.category,
        description: svc.overview,
        points: svc.points,
        link: svc.link,
        content: (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              backgroundColor: "#0B1424",
            }}
          >
            {/* Real High-Resolution Image */}
            <Image
              src={imgSrc}
              alt={svc.title}
              fill
              sizes="480px"
              style={{
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />

            {/* Subtle Bottom Vignette Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(11, 20, 36, 0.92) 0%, rgba(11, 20, 36, 0.35) 45%, rgba(11, 20, 36, 0.1) 100%)",
              }}
            />

            {/* Bottom Title Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "1.1rem",
                left: "1.25rem",
                right: "1.25rem",
                zIndex: 3,
              }}
            >
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                {svc.title}
              </h4>
            </div>
          </div>
        ),
      };
    });
  }, [activeUiUxImage]);

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "3.5rem",
        paddingBottom: "6rem",
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <Container>
        {/* Centered Section Heading */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto 1.75rem auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.35rem, 2.1vw, 1.75rem)",
              fontWeight: 700,
              color: "var(--color-primary-navy, #101D35)",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}
          >
            Comprehensive IT Services & Digital Engineering
          </h2>
        </div>

        {/* Aceternity Sticky Scroll Reveal with Normal Page Scroll */}
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <StickyScroll
            content={stickyContent}
            dark={false}
            designStyle="tall-industrial"
          />
        </div>
      </Container>
    </section>
  );
}
