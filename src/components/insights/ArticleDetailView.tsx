"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { InsightItem } from "@/data/insights";
import { ReadingProgress } from "./ReadingProgress";
import { RecentPostsSidebar } from "./RecentPostsSidebar";

interface ArticleDetailViewProps {
  item: InsightItem;
  recentPosts: InsightItem[];
  categories: { name: string; count: number }[];
}

export function ArticleDetailView({
  item,
  recentPosts,
  categories,
}: ArticleDetailViewProps) {
  // Topic-specific data with DIFFERENT, ultra-high-resolution, razor-sharp images
  const getArticleDetails = (slug: string) => {
    switch (slug) {
      case "why-your-business-needs-a-custom-web-application-in-2026":
        return {
          detailImage: "/images/services/web-app-development.jpg",
          imageCaption:
            "Modern custom web application architecture with tailored workflows, reactive components, and cloud-native scaling.",
          bullets: [
            "Tailored operational workflows that match proprietary business processes without compromise.",
            "Complete ownership over data governance, security parameters, and compliance frameworks.",
            "Elimination of compounding per-seat SaaS subscription penalties as headcounts expand.",
            "Seamless integration into internal enterprise databases, ERPs, and legacy systems.",
          ],
          sections: [
            {
              title: "The Shift from Generic SaaS to Bespoke Digital Infrastructure",
              paragraphs: [
                "In modern enterprise operations, off-the-shelf software inevitably introduces operational friction. Commercial SaaS platforms are deliberately built to accommodate the lowest common denominator of thousands of companies. When your business model or workflows differentiate you in the market, forcing those operations into rigid third-party molds creates bottlenecks, manual workarounds, and fragmented data silos.",
                "Custom web applications are designed from the ground up around your organization's exact business logic, user journeys, and compliance postures. Rather than adapting your operations to fit a vendor's product constraints, your digital infrastructure adapts dynamically to support your strategic goals.",
              ],
            },
            {
              title: "Why Monolithic SaaS Subscriptions Break at Enterprise Scale",
              paragraphs: [
                "Beyond workflow friction, standard subscription models present compounding economic challenges. As engineering, sales, and operations teams expand, per-seat licensing fees scale linearly regardless of actual feature usage. More critically, strategic feature requests remain beholden to an external vendor's roadmap.",
                "By engineering custom proprietary web applications, organizations capitalize on long-term cost predictability while retaining complete intellectual property. Modern cloud-native technologies allow teams to build and maintain high-throughput enterprise platforms with fractional infrastructure overhead.",
              ],
            },
            {
              title: "Architectural Foundations: Modern Frameworks & Edge Velocity",
              paragraphs: [
                "Developing custom software in 2026 does not mean reinventing foundational utilities. Leveraging modern frameworks such as Next.js, TypeScript, and serverless edge infrastructure provides instantaneous responsiveness and built-in fault tolerance.",
                "At Roacs, our custom engineering practice couples decoupled micro-frontends with robust backend microservices, enabling companies to launch secure, performant, and horizontally scalable digital platforms that evolve seamlessly alongside their market growth.",
              ],
            },
          ],
          takeawayTitle: "Key Takeaway for Technology Leaders",
          takeawayText:
            "Off-the-shelf software is built for everyone, meaning it is optimized for no one. A custom application transforms your digital interface from a recurring operational overhead into a defensible, revenue-generating competitive advantage.",
        };

      case "top-7-benefits-of-using-react-and-nodejs-for-scalable-apps":
        return {
          detailImage: "/images/services/api-microservices.jpg",
          imageCaption:
            "Distributed full-stack data orchestration between Node.js event-driven services and React client components.",
          bullets: [
            "Unified language stack across client and server reducing engineering cognitive overhead.",
            "Non-blocking asynchronous I/O capable of handling tens of thousands of concurrent connections.",
            "Component-driven UI architecture facilitating modular reuse and accelerated testing.",
            "Server-side rendering (SSR) and streaming for optimal Core Web Vitals and SEO performance.",
          ],
          sections: [
            {
              title: "1. A Unified Language Stack Across Client and Server",
              paragraphs: [
                "One of the most profound advantages of pairing React with Node.js is the complete unification of the codebase under JavaScript and TypeScript. Eliminating context-switching between disparate languages (such as Python backends and React frontends) accelerates feature development.",
                "Full-stack engineers can seamlessly share data models, validation schemas, and API contracts between client and server without manual serialization glue, drastically reducing integration defects.",
              ],
            },
            {
              title: "2. Non-Blocking Asynchronous I/O for High Concurrency",
              paragraphs: [
                "Node.js operates on an event-driven, single-threaded event loop utilizing non-blocking I/O calls. This architecture makes it uniquely suited for high-throughput modern applications where requests are predominantly bound by I/O rather than CPU computation.",
                "Whether handling real-time WebSockets, streaming analytics, or multi-tenant database queries, Node.js sustains high concurrency with a fraction of the memory footprint demanded by traditional multi-threaded servers.",
              ],
            },
            {
              title: "3. Component-Driven Modular UI Architecture & React 19",
              paragraphs: [
                "React's declarative component model promotes rigorous reusability and isolated unit testing. With modern React Server Components (RSC), heavy rendering computations and data formatting happen server-side, transmitting lightweight interactive snapshots directly to the client browser.",
                "This synergy enables lightning-fast initial page loads, optimal Largest Contentful Paint (LCP) scores, and a frictionless end-user experience across desktop and mobile devices alike.",
              ],
            },
          ],
          takeawayTitle: "Architectural Recommendation",
          takeawayText:
            "The React and Node.js synergy is the benchmark choice for engineering teams requiring rapid feature velocity, low runtime latency, and modular codebase maintainability across multi-year enterprise lifecycles.",
        };

      case "how-cloud-deployment-improves-business-performance":
        return {
          detailImage: "/images/services/cloud-devops.jpg",
          imageCaption:
            "Multi-region cloud infrastructure topology featuring automated container clusters, load balancing, and edge telemetry.",
          bullets: [
            "Dynamic elastic scaling matching compute expenditure directly to real-time traffic demand.",
            "Zero-downtime blue-green and canary deployment strategies eliminating maintenance outages.",
            "Global low-latency delivery via geographically distributed edge CDN points of presence.",
            "Automated failover, disaster recovery, and continuous data replication ensuring 99.99% uptime.",
          ],
          sections: [
            {
              title: "Elastic Auto-Scaling: Eliminating Capital Waste",
              paragraphs: [
                "Traditional on-premise server provisioning forces organizations to purchase expensive hardware sized for peak annual traffic that may only occur during a few hours each month. During off-peak periods, these capital assets sit idle, consuming power, cooling, and operational maintenance.",
                "Modern cloud architectures dynamically provision and de-provision containerized compute nodes based on real-time traffic spikes and request queues. This elasticity reduces idle infrastructure expenditure while guaranteeing headroom during unexpected demand surges.",
              ],
            },
            {
              title: "Zero-Downtime Deployment & High Availability",
              paragraphs: [
                "Achieving five-nines (99.999%) availability requires continuous delivery mechanisms that eliminate user disruption during software updates. Cloud container orchestration platforms like Kubernetes enable blue-green and canary releases.",
                "New application versions are deployed alongside active production containers, automatically receiving health-check verification and progressive traffic shifting. Should any anomaly emerge, traffic immediately reverts without dropping an active user session.",
              ],
            },
            {
              title: "Global Low-Latency Distribution via Edge Networks",
              paragraphs: [
                "Serving international enterprise users from a centralized data center introduces latency that directly degrades user conversion and engagement. Modern cloud platforms leverage worldwide content delivery networks (CDNs) and edge computing.",
                "Static assets, cached API payloads, and lightweight routing decisions are executed at points of presence within 30 milliseconds of any client globally, providing uniform responsiveness across all target markets.",
              ],
            },
          ],
          takeawayTitle: "Strategic Cloud Directive",
          takeawayText:
            "Migrating to the cloud is not a passive server hosting migration; it is an organizational transformation toward automated, self-healing platforms that scale instantaneously to corporate growth.",
        };

      case "best-practices-for-secure-web-application-development":
        return {
          detailImage: "/images/services/cybersecurity.jpg",
          imageCaption:
            "Zero-trust application security perimeter with cryptographic token rotation and automated threat mitigation.",
          bullets: [
            "Automated Static Application Security Testing (SAST) and software supply chain dependency analysis.",
            "Zero-trust authentication utilizing short-lived JWTs and HTTP-only SameSite cookies.",
            "Strict Content Security Policies (CSP) neutralizing Cross-Site Scripting (XSS) vectors.",
            "Comprehensive encryption in transit via TLS 1.3 and envelope encryption for data at rest.",
          ],
          sections: [
            {
              title: "1. Shift-Left Security: Automated Static & Supply Chain Scanning",
              paragraphs: [
                "Modern web applications are composed of hundreds of open-source dependencies. Adversaries increasingly target upstream package vulnerabilities to infiltrate enterprise networks. Adopting a 'shift-left' security mindset means embedding automated vulnerability checks directly into the pull request review process.",
                "Every code commit must pass automated static application security testing (SAST), secret-scanning scanners, and software bill of materials (SBOM) checks before it is permitted to merge into release branches.",
              ],
            },
            {
              title: "2. Zero-Trust Identity & Hardened Token Lifecycles",
              paragraphs: [
                "Never store persistent authentication tokens or sensitive customer metadata in browser local storage or session storage, which are readily vulnerable to cross-site scripting exploits. Secure enterprise web architectures issue short-lived JSON Web Tokens (JWTs) paired with cryptographically secure, HTTP-only, SameSite cookies.",
                "Coupling this with automated token rotation and IP/device fingerprint anomaly detection guarantees that even intercepted tokens cannot be weaponized beyond their narrow temporal window.",
              ],
            },
            {
              title: "3. Defense-in-Depth: Strict CSP & Input Sanitization",
              paragraphs: [
                "All input from client requests must be treated as untrusted. Implementing parameterized queries with strict ORM validation layers eliminates SQL and NoSQL injection vulnerabilities at the data tier.",
                "Simultaneously, enforcing strict Content Security Policies (CSP) via HTTP response headers prevents the browser from executing unauthorized external scripts, neutralizing potential reflected and stored XSS vectors.",
              ],
            },
          ],
          takeawayTitle: "Core Security Philosophy",
          takeawayText:
            "Security is not a final compliance audit scheduled days before launch. It is an ongoing architectural practice embedded within every commit, container build, and cloud route.",
        };

      case "devops-and-cicd-speeding-up-your-software-delivery":
        return {
          detailImage: "/images/about/innovation.jpg",
          imageCaption:
            "Cross-functional agile engineering teams collaborating on continuous integration and automated deployment pipelines.",
          bullets: [
            "Trunk-based development workflows preventing merge conflicts and long-lived branch drift.",
            "Parallelized automated test execution compressing feedback loops from hours to minutes.",
            "Declarative Infrastructure as Code (IaC) ensuring total staging-to-production parity.",
            "Real-time distributed tracing and observability monitoring release health automatically.",
          ],
          sections: [
            {
              title: "Trunk-Based Development Over Feature Branch Isolation",
              paragraphs: [
                "Merge hell remains the single greatest impediment to software delivery velocity. When developer branches diverge from main for weeks, reconciling conflicting changes creates release anxiety and regression bugs.",
                "High-velocity teams utilize trunk-based development: engineers integrate small, incremental code commits into the shared main branch multiple times daily behind dynamic feature toggles. This ensures the codebase remains continuously shippable.",
              ],
            },
            {
              title: "Deterministic Testing Pipelines with Parallel Execution",
              paragraphs: [
                "A continuous integration pipeline that takes 45 minutes to execute discourages frequent code integration. By containerizing testing suites and executing unit, integration, and security scans concurrently across multiple runners, feedback loops are compressed to under four minutes.",
                "Fast, deterministic pipelines provide developers with immediate validation, allowing defects to be resolved while the context is fresh.",
              ],
            },
            {
              title: "Declarative Infrastructure as Code (IaC)",
              paragraphs: [
                "Manual server configurations and 'snowflake' hosting environments lead to catastrophic production failures where code behaves differently in staging than in live environments.",
                "Managing all cloud networking, compute clusters, and secrets through declarative Infrastructure as Code (such as Terraform) guarantees 100% environment parity. New staging clusters can be spun up, validated, and destroyed on demand.",
              ],
            },
          ],
          takeawayTitle: "DevOps Excellence Takeaway",
          takeawayText:
            "High-performing engineering teams do not deploy faster by taking shortcuts—they deploy faster because automated CI/CD pipelines eliminate human error and instill total release confidence.",
        };

      default: // common-mistakes-businesses-make-in-it-projects
        return {
          detailImage: "/images/about/customer-focus.jpg",
          imageCaption:
            "Strategic IT governance table aligning architectural blueprints, project milestones, and business requirements.",
          bullets: [
            "Vague technical specifications leading to uncontrolled scope creep and costly rewrites.",
            "Underestimating technical debt in favor of rushing unvalidated minimum viable products.",
            "Over-engineering complex microservices prior to establishing clear product-market requirements.",
            "Treating quality assurance and security as post-development afterthought phases.",
          ],
          sections: [
            {
              title: "1. Vague Technical Specifications and Scope Drift",
              paragraphs: [
                "The most pervasive cause of IT project failure is not technical incompetence, but ambiguous specifications. When business requirements are not rigorously translated into architectural boundary contracts, teams end up building divergent interpretations of the product.",
                "Establishing interactive Figma prototypes, detailed user journey maps, and comprehensive API schema specifications prior to heavy coding prevents costly mid-project architectural redesigns.",
              ],
            },
            {
              title: "2. Underestimating Technical Debt in Favor of Rushed Deadlines",
              paragraphs: [
                "Sacrificing architectural discipline to meet artificial calendar milestones creates compounding technical debt. Teams that omit automated tests, skip data modeling reviews, and bypass modular separation frequently spend up to 70% of future engineering cycles fixing regression defects.",
                "Investing in clean architectural guardrails early pays exponential dividends in long-term maintenance velocity and platform stability.",
              ],
            },
            {
              title: "3. Neglecting Real-User Observability and Early Telemetry",
              paragraphs: [
                "Building complex systems in an isolated vacuum for six months before releasing to real end users is the highest-risk strategy in digital product development. Software must be validated in production-like environments with genuine telemetry.",
                "By shipping small, functional vertical slices early, engineering leaders gather real-world behavioral metrics, identify usability flaws, and adapt roadmaps based on concrete evidence.",
              ],
            },
          ],
          takeawayTitle: "Advisory Conclusion",
          takeawayText:
            "Successful software delivery is a discipline of clarity, incremental validation, and disciplined architectural choices. Aligning technical architecture with business milestones ensures maximum ROI.",
        };
    }
  };

  const details = getArticleDetails(item.slug);

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Top Reading Progress Bar */}
      <ReadingProgress />

      {/* Hero Header Banner */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#0B1528",
          color: "#FFFFFF",
          paddingTop: "5rem",
          paddingBottom: "5.5rem",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Background Image */}
        <Image
          src={item.heroImage || "/images/insights/article-hero-bg.jpg"}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center right",
            zIndex: 0,
          }}
        />

        {/* Dual Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(11, 21, 40, 0.95) 0%, rgba(11, 21, 40, 0.85) 50%, rgba(11, 21, 40, 0.45) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(11, 21, 40, 0.3) 0%, rgba(11, 21, 40, 0.7) 100%)",
            zIndex: 1,
          }}
        />

        <Container style={{ position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "1.75rem" }}>
            <Link
              href="/insights"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#94A3B8",
                transition: "color 0.2s ease",
              }}
              className="hover:text-white"
            >
              <ArrowLeft size={16} />
              <span>Back to All Articles</span>
            </Link>
          </div>

          <div style={{ maxWidth: "880px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "1.1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-brand-accent)",
                  backgroundColor: "rgba(237, 25, 24, 0.12)",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(237, 25, 24, 0.3)",
                }}
              >
                {item.category}
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.4)" }}>&bull;</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.85rem",
                  color: "#CBD5E1",
                }}
              >
                <Clock size={14} />
                <span>{item.readTime}</span>
              </div>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.1rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.35rem",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              {item.title}
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
                color: "#CBD5E1",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <User size={16} color="var(--color-brand-accent)" />
                <span style={{ fontWeight: 600, color: "#FFFFFF" }}>{item.author}</span>
                <span style={{ color: "#94A3B8" }}>({item.authorRole})</span>
              </div>
              <span>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Calendar size={15} color="var(--color-brand-accent)" />
                <span>{item.publishedDate}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area: 2-Column Clean Editorial Layout */}
      <section className="insight-detail-page">
        <Container>
          <div className="insight-detail-grid">
            {/* LEFT COLUMN: Clean, Elegant Article Content */}
            <main className="insight-detail-main-column">
              {/* Editorial Lead Paragraph */}
              <p
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.8,
                  fontWeight: 500,
                  color: "#1E293B",
                  marginBottom: "2.25rem",
                }}
              >
                {item.excerpt}
              </p>

              {/* Dedicated High-Resolution In-Article Showcase Image */}
              <div style={{ marginBottom: "2.5rem" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 10px 30px -10px rgba(16, 29, 53, 0.08)",
                    backgroundColor: "#F1F5F9",
                  }}
                >
                  <Image
                    src={details.detailImage}
                    alt={item.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748B",
                    fontStyle: "italic",
                    marginTop: "0.75rem",
                    marginBottom: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {details.imageCaption}
                </p>
              </div>

              {/* Core Strategic Pillars / Bullets */}
              <div
                style={{
                  backgroundColor: "#F8FAFC",
                  borderRadius: "12px",
                  padding: "1.75rem 2rem",
                  marginBottom: "2.5rem",
                  border: "1px solid #E2E8F0",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#101D35",
                    marginBottom: "1rem",
                  }}
                >
                  Executive Summary & Strategic Priorities:
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {details.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        fontSize: "0.95rem",
                        color: "#334155",
                        lineHeight: 1.6,
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        color="var(--color-brand-accent)"
                        style={{ flexShrink: 0, marginTop: "0.2rem" }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 1 */}
              <h2
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  color: "#101D35",
                  marginTop: "2.75rem",
                  marginBottom: "1.15rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {details.sections[0].title}
              </h2>
              {details.sections[0].paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.85,
                    color: "#475569",
                    marginBottom: "1.5rem",
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Section 2 */}
              <h2
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  color: "#101D35",
                  marginTop: "2.75rem",
                  marginBottom: "1.15rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {details.sections[1].title}
              </h2>
              {details.sections[1].paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.85,
                    color: "#475569",
                    marginBottom: "1.5rem",
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Key Architectural Takeaway / Pull Quote */}
              <div
                style={{
                  backgroundColor: "#F8FAFC",
                  borderLeft: "4px solid var(--color-brand-accent)",
                  borderRadius: "0 10px 10px 0",
                  padding: "1.75rem 2rem",
                  margin: "2.75rem 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--color-brand-accent)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Sparkles size={16} />
                  <span>{details.takeawayTitle}</span>
                </div>
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "#1E293B",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  &ldquo;{details.takeawayText}&rdquo;
                </p>
              </div>

              {/* Section 3 */}
              <h2
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  color: "#101D35",
                  marginTop: "2.75rem",
                  marginBottom: "1.15rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {details.sections[2].title}
              </h2>
              {details.sections[2].paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.85,
                    color: "#475569",
                    marginBottom: "1.5rem",
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Tags Section */}
              {item.tags && item.tags.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "0.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid #E2E8F0",
                    marginBottom: "2.5rem",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#64748B", marginRight: "0.5rem" }}>
                    Topics:
                  </span>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        backgroundColor: "#F1F5F9",
                        color: "#475569",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "20px",
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Bio Card */}
              <div
                style={{
                  backgroundColor: "#F8FAFC",
                  borderRadius: "12px",
                  padding: "1.75rem",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  marginBottom: "2.5rem",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-primary-navy)",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    flexShrink: 0,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  R
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#101D35", margin: 0 }}>
                    Published by {item.author}
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-brand-accent)", fontWeight: 600, margin: "0.15rem 0" }}>
                    {item.authorRole}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                    Specializing in custom software architecture, distributed systems, enterprise full-stack engineering, and cloud platforms.
                  </p>
                </div>
              </div>

              {/* Bottom Architectural Review Banner (Exact Match to User Reference 1st Image) */}
              <div
                style={{
                  position: "relative",
                  backgroundColor: "#101922",
                  backgroundImage: "url('/images/insights/architectural-review-card-bg-hd.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "right center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "16px",
                  padding: "3rem 2.75rem",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 12px 40px -10px rgba(0, 0, 0, 0.35)",
                  overflow: "hidden",
                  marginTop: "4rem",
                  marginBottom: "3rem",
                }}
                className="p-6 md:p-10"
              >
                <div style={{ position: "relative", zIndex: 2, maxWidth: "520px" }}>
                  {/* Top Eyebrow Tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        height: "2px",
                        backgroundColor: "var(--color-brand-accent)",
                        borderRadius: "1px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "#94A3B8",
                      }}
                    >
                      Architectural Review
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h3
                    style={{
                      fontSize: "clamp(1.65rem, 3.2vw, 2.25rem)",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.25,
                      margin: "0 0 0.85rem 0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Need an Architectural Review{" "}
                    <br className="hidden sm:inline" />
                    for Your{" "}
                    <span style={{ color: "var(--color-brand-accent)" }}>
                      Software?
                    </span>
                  </h3>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#94A3B8",
                      lineHeight: 1.6,
                      marginBottom: "1.85rem",
                      maxWidth: "460px",
                    }}
                  >
                    Elevate your code&apos;s scalability, performance, and maintainability with expert architectural insights.
                  </p>

                  {/* Action Row: Button */}
                  <div>
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.85rem 1.85rem",
                        backgroundColor: "var(--color-brand-accent)",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        borderRadius: "9999px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        boxShadow: "0 6px 20px rgba(237, 25, 24, 0.4)",
                      }}
                      className="hover:bg-[var(--color-brand-accent-hover)] hover:-translate-y-0.5"
                    >
                      <span>Consult With Our Architects</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </main>

            {/* RIGHT COLUMN: Sticky Sidebar with Recent Posts Matching Reference */}
            <div className="insight-detail-sidebar-column">
              <RecentPostsSidebar
                recentPosts={recentPosts}
                categories={categories}
                currentSlug={item.slug}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
