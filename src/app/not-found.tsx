import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-primary-navy)",
        color: "#FFFFFF",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 0",
      }}
    >
      <Container>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(4.5rem, 10vw, 7rem)",
              fontWeight: 800,
              color: "var(--color-brand-accent)",
              lineHeight: 1,
              fontFamily: "monospace",
              marginBottom: "1rem",
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            System Endpoint Not Found
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-muted-blue)",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            The requested route does not exist or has been restructured under the modern Roacs engineering architecture. Please verify the URL or return to our homepage.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Button
              href="/"
              variant="primary"
              icon={<Home size={16} />}
              iconPosition="left"
            >
              Return Home
            </Button>

            <Button
              href="/services"
              variant="secondary"
              icon={<Compass size={16} />}
              iconPosition="left"
            >
              Browse Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
