"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Layers, MessageSquare } from "lucide-react";
import { InsightItem } from "@/data/insights";

interface RecentPostsSidebarProps {
  recentPosts: InsightItem[];
  categories: { name: string; count: number }[];
  currentSlug?: string;
}

export function RecentPostsSidebar({
  recentPosts,
  categories,
  currentSlug,
}: RecentPostsSidebarProps) {
  // Filter out current post if provided, taking top 3 or 4 posts
  const postsToShow = recentPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 4);

  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {/* 1. RECENT POSTS WIDGET (Exact match to user's reference image) */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          padding: "1.75rem 1.5rem",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 20px -2px rgba(16, 29, 53, 0.05)",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "#101D35",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Recent Posts
          </h3>
          <div
            style={{
              width: "38px",
              height: "3px",
              backgroundColor: "var(--color-brand-accent)",
              borderRadius: "2px",
              marginTop: "0.5rem",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.15rem" }}>
          {postsToShow.map((post, idx) => {
            const isLast = idx === postsToShow.length - 1;
            return (
              <article
                key={post.id || post.slug}
                style={{
                  paddingBottom: isLast ? 0 : "1.15rem",
                  borderBottom: isLast ? "none" : "1px solid #F1F5F9",
                }}
              >
                <Link
                  href={`/insights/${post.slug}`}
                  className="recent-post-link"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  {/* Square Thumbnail matching reference */}
                  <div
                    className="recent-post-thumb"
                    style={{
                      width: "74px",
                      height: "74px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                      flexShrink: 0,
                      backgroundColor: "#F1F5F9",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Image
                      src={post.image || "/images/blog/blog-1.jpg"}
                      alt={post.title}
                      fill
                      sizes="74px"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>

                  {/* Metadata and Title */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.3rem",
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    {/* Date with red calendar icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        color: "#DC2626",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                      }}
                    >
                      <Calendar size={13} strokeWidth={2.2} />
                      <span style={{ color: "#64748B", fontWeight: 500 }}>
                        {post.publishedDate}
                      </span>
                    </div>

                    {/* Bold Navy Title with Red Hover */}
                    <h4
                      className="recent-post-title"
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: "#101D35",
                        margin: 0,
                        transition: "color 0.2s ease",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h4>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>

      {/* 2. CATEGORIES WIDGET */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          padding: "1.75rem 1.5rem",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 20px -2px rgba(16, 29, 53, 0.05)",
        }}
      >
        <div style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Layers size={18} color="var(--color-brand-accent)" />
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#101D35",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Categories
            </h3>
          </div>
          <div
            style={{
              width: "38px",
              height: "3px",
              backgroundColor: "var(--color-brand-accent)",
              borderRadius: "2px",
              marginTop: "0.5rem",
            }}
          />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/insights?category=${encodeURIComponent(cat.name)}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                backgroundColor: "#F8FAFC",
                color: "#334155",
                border: "1px solid #E2E8F0",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              className="hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)] hover:bg-white"
            >
              <span>{cat.name}</span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#94A3B8",
                  backgroundColor: "#FFFFFF",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                }}
              >
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. CONSULTATION / CTA CARD */}
      {/* <div
        style={{
          position: "relative",
          backgroundColor: "#0B1528",
          borderRadius: "14px",
          padding: "2rem 1.5rem",
          color: "#FFFFFF",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "120px",
            height: "120px",
            background: "radial-gradient(circle, rgba(237,25,24,0.3) 0%, rgba(11,21,40,0) 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-brand-accent)",
              marginBottom: "0.75rem",
            }}
          >
            <MessageSquare size={14} />
            <span>Advisory Practice</span>
          </div>

          <h4
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "0.6rem",
              lineHeight: 1.3,
            }}
          >
            Planning Your Next Software Architecture?
          </h4>

          <p
            style={{
              fontSize: "0.875rem",
              color: "#94A3B8",
              lineHeight: 1.5,
              marginBottom: "1.25rem",
            }}
          >
            Schedule a high-impact architectural review with Roacs principal engineers.
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "var(--color-brand-accent)",
              color: "#FFFFFF",
              fontSize: "0.875rem",
              fontWeight: 700,
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background-color 0.2s ease, transform 0.2s ease",
            }}
            className="hover:bg-[var(--color-brand-accent-hover)] hover:-translate-y-0.5"
          >
            <span>Talk to an Architect</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div> */}
    </aside>
  );
}
