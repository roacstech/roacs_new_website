import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { insightsData } from "@/data/insights";
import { constructMetadata } from "@/lib/metadata";
import { Folder, ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Insights & Articles | Roacs Corporation",
  description: "Read technical articles and architecture perspectives from Roacs Corporation on modern web frameworks, cloud DevOps, and enterprise AI orchestration.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Scoped CSS for hover interactions */}
      <style>{`
        .insight-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .insight-img-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          border-radius: 14px;
          overflow: hidden;
          background-color: #F1F5F9;
          margin-bottom: 1.25rem;
        }
        .insight-img {
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .insight-card:hover .insight-img {
          transform: scale(1.04);
        }
        /* Glossy shine reflection sweeping from left-bottom to right-top */
        .insight-img-wrapper::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.15) 42%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0.15) 58%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: translate(-100%, 100%);
          pointer-events: none;
          z-index: 3;
          opacity: 0;
        }
        .insight-card:hover .insight-img-wrapper::after,
        .insight-img-wrapper:hover::after {
          animation: shineSweep 0.85s cubic-bezier(0.2, 0.8, 0.25, 1) forwards;
        }
        @keyframes shineSweep {
          0% {
            transform: translate(-100%, 100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate(100%, -100%);
            opacity: 0;
          }
        }
        .insight-title-link {
          color: var(--color-primary-navy, #101D35);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .insight-title-link:hover {
          color: var(--color-brand-accent, #EB1E2D);
        }
        .insight-tag-pill {
          font-size: 0.75rem;
          font-weight: 600;
          color: #5B2A4A;
          background-color: rgba(91, 42, 74, 0.08);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          display: inline-block;
          transition: background-color 0.2s ease;
        }
        .insight-tag-pill:hover {
          background-color: rgba(91, 42, 74, 0.15);
        }
        .insight-read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-primary-navy, #101D35);
          background-color: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.12);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .insight-read-more-btn .read-more-arrow {
          transition: transform 0.25s ease;
        }
        .insight-read-more-btn:hover {
          background-color: var(--color-brand-accent, #EB1E2D);
          border-color: var(--color-brand-accent, #EB1E2D);
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(235, 30, 45, 0.25);
        }
        .insight-read-more-btn:hover span {
          color: #FFFFFF;
        }
        .insight-read-more-btn:hover .read-more-arrow {
          color: #FFFFFF;
          transform: translateX(3px);
        }
      `}</style>

      {/* Hero section matching reference with centered Latest pill, title, subtitle & visual whiteboard banner */}
      <section
        style={{
          backgroundColor: "#F8FAFC",
          color: "var(--color-primary-navy, #101D35)",
          paddingTop: "5.5rem",
          paddingBottom: "5.5rem",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background visual banner with whiteboard doodles & hanging lamps */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/insights/insights-hero-whiteboard.jpg"
            alt="Engineering Concepts & Ideas Whiteboard"
            fill
            priority
            quality={95}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: 0.95,
            }}
          />
          {/* Subtle translucent central veil so text is crisp and readable while showing sketches & lamps */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 45%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 0.25) 100%)",
            }}
          />
          {/* Gentle edge blending into page layout */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, transparent 20%, transparent 75%, rgba(255, 255, 255, 0.95) 100%)",
            }}
          />
        </div>

        <Container style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <span
                style={{
                  backgroundColor: "var(--color-primary-navy, #101D35)",
                  color: "#FFFFFF",
                  padding: "0.35rem 1.35rem",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "inline-block",
                  boxShadow: "0 4px 14px rgba(16, 29, 53, 0.18)",
                  letterSpacing: "0.02em",
                }}
              >
                Latest
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                fontWeight: 800,
                color: "var(--color-primary-navy, #101D35)",
                marginBottom: "1rem",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Technical viewpoints on building software that scales.
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: "700px",
                margin: "0 auto",
                fontWeight: 500,
              }}
            >
              Insights into distributed architecture, database migrations, developer velocity, and pragmatic enterprise AI.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Cards Grid Section (Filter bar intentionally excluded per user instruction) */}
      <section style={{ paddingTop: "4.5rem", paddingBottom: "5.5rem" }}>
        <Container wide>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "3rem 2.25rem",
            }}
          >
            {insightsData.map((item) => {
              const tags = item.tags && item.tags.length > 0
                ? item.tags
                : [item.category.toLowerCase().replace(/[^a-z0-9]/g, "")];

              return (
                <article
                  key={item.id}
                  className="insight-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    {/* Rounded Card Image matching reference (14px radius) */}
                    <div className="insight-img-wrapper">
                      <Link href={`/insights/${item.slug}`}>
                        <Image
                          src={item.image || "/images/blog/blog-1.jpg"}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="insight-img"
                        />
                      </Link>
                    </div>

                    {/* Blog Title */}
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        marginBottom: "0.75rem",
                      }}
                    >
                      <Link href={`/insights/${item.slug}`} className="insight-title-link">
                        {item.title}
                      </Link>
                    </h3>

                    {/* Blog Excerpt */}
                    <p
                      style={{
                        fontSize: "0.925rem",
                        lineHeight: 1.6,
                        color: "#6B7280",
                        marginBottom: "1.25rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.excerpt}
                    </p>

                    {/* Tag Pills matching reference */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {tags.map((tag) => (
                        <span key={tag} className="insight-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More button */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <Link href={`/insights/${item.slug}`} className="insight-read-more-btn">
                        <span>READ MORE</span>
                        <span style={{ opacity: 0.35, fontWeight: 400 }}>|</span>
                        <ArrowRight size={13} className="read-more-arrow" />
                      </Link>
                    </div>
                  </div>

                  {/* Card Footer matching reference: Date on Left, Folder + Category on Right */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#111827",
                      }}
                    >
                      {item.publishedDate}
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#5B2A4A",
                      }}
                    >
                      <Folder size={15} style={{ strokeWidth: 2 }} />
                      <span>{item.category}</span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
