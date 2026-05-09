import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  // Update page title for 404
  useEffect(() => {
    const prev = document.title;
    document.title = "404 — Page Not Found | Abhradeep Biswas";
    return () => { document.title = prev; };
  }, []);

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "var(--bg)",
        color: "var(--text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {/* Dot grid */}
      <div className="dot-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 9%, transparent), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--violet) 7%, transparent), transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: "560px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        {/* Small eyebrow chip */}
        <span className="chip">Error 404</span>

        {/* Glitching "404" */}
        <div style={{ position: "relative" }}>
          {/* Shadow layers for depth */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(5.5rem, 22vw, 11rem)",
              lineHeight: 1,
              display: "block",
              WebkitTextStroke: "2px var(--accent)",
              color: "transparent",
              opacity: 0.15,
              transform: "translate(3px, 3px)",
              userSelect: "none",
            }}
          >
            404
          </span>
          <span
            className="animate-glitch"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(5.5rem, 22vw, 11rem)",
              lineHeight: 1,
              display: "block",
              background: "linear-gradient(135deg, var(--accent) 30%, var(--violet))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              userSelect: "none",
            }}
          >
            404
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            color: "var(--text)",
            margin: 0,
          }}
        >
          Page Not Found
        </h1>

        {/* Description */}
        <p
          style={{
            color: "var(--text-2)",
            fontSize: "1rem",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          This page wandered off into the void.
          <br />
          Let's get you back somewhere real.
        </p>

        {/* Divider */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "linear-gradient(90deg, var(--accent), var(--violet))",
            borderRadius: "99px",
          }}
        />

        {/* CTA */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            to="/"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <a
            href="/#contact"
            className="btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Me
          </a>
        </div>

        {/* Footer note */}
        <p
          style={{
            fontSize: "0.7rem",
            color: "var(--text-2)",
            opacity: 0.5,
            fontFamily: "'JetBrains Mono', monospace",
            marginTop: "0.5rem",
          }}
        >
          abhradeep.com / not-found
        </p>
      </div>
    </div>
  );
}
