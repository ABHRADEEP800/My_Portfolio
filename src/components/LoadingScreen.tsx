import { useEffect, useRef, useState } from "react";

interface Props {
  show:    boolean;
  ready:   boolean;   // true when ALL lazy components have mounted
  onDone:  () => void;
}

export default function LoadingScreen({ show, ready, onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [leaving,  setLeaving]  = useState(false);

  const rafRef     = useRef<number>(0);
  const showTimeMs = useRef<number>(0); // when the screen first appeared

  // ── Fake progress: 0 → 80 % over ~1.8 s while waiting ──────────
  useEffect(() => {
    if (!show) return;
    showTimeMs.current = performance.now();

    const FAKE_TARGET   = 80;
    const FAKE_DURATION = 1800;

    const tick = (now: number) => {
      const elapsed = now - showTimeMs.current;
      const p = Math.min((elapsed / FAKE_DURATION) * FAKE_TARGET, FAKE_TARGET);
      setProgress(Math.round(p));
      if (p < FAKE_TARGET) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [show]);

  // ── When all components are ready → finish bar then close ───────
  useEffect(() => {
    if (!ready || !show) return;

    // Stop the fake progress rAF
    cancelAnimationFrame(rafRef.current);

    // Snap bar to 100 %
    setProgress(100);

    // Ensure the screen shows for at least 600 ms total (good UX)
    const elapsed   = performance.now() - showTimeMs.current;
    const minDelay  = Math.max(0, 600 - elapsed);

    const t1 = setTimeout(() => setLeaving(true), minDelay + 180);  // begin fade
    const t2 = setTimeout(() => onDone(),          minDelay + 560);  // unmount

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [ready, show, onDone]);

  if (!show) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      style={{
        position:   "fixed",
        inset:      0,
        zIndex:     9999,
        background: "var(--bg)",
        display:    "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        gap: "1.75rem",
        opacity:        leaving ? 0 : 1,
        visibility:     leaving ? "hidden" : "visible",
        transition:     "opacity 0.38s ease, visibility 0.38s ease",
        pointerEvents:  leaving ? "none" : "all",
      }}
    >
      {/* Dot grid — matches Hero */}
      <div className="dot-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Spinning conic ring + AB. logo */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div
          className="animate-loader-ring"
          style={{
            width: "72px", height: "72px",
            borderRadius: "50%",
            background:
              "conic-gradient(var(--accent) 0deg, var(--violet) 160deg, transparent 200deg, transparent 360deg)",
          }}
        />
        <div
          style={{
            position: "absolute", inset: "4px",
            borderRadius: "50%",
            background: "var(--bg)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: "1.1rem",
              background: "linear-gradient(135deg, var(--accent), var(--violet))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              userSelect: "none",
            }}
          >
            AB.
          </span>
        </div>
      </div>

      {/* Status text */}
      <p
        style={{
          color: "var(--text-2)", fontSize: "0.72rem",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.12em", textTransform: "uppercase",
          position: "relative",
        }}
      >
        {ready ? "Almost there" : "Loading"}
        <LoadingDots paused={ready} />
      </p>

      {/* Dynamic progress bar */}
      <div
        style={{
          width: "180px", height: "2px",
          background: "var(--border)", borderRadius: "99px", overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            borderRadius: "99px",
            background: "linear-gradient(90deg, var(--accent), var(--violet))",
            // Smooth snap to 100; linear during fake crawl
            transition: progress >= 100
              ? "width 0.28s ease"
              : "width 0.06s linear",
          }}
        />
      </div>
    </div>
  );
}

/* Animated "..." that pauses when ready */
function LoadingDots({ paused }: { paused: boolean }) {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setDots(d => (d.length >= 3 ? "." : d + ".")),
      380
    );
    return () => clearInterval(t);
  }, [paused]);
  return <span style={{ display: "inline-block", minWidth: "1.6ch" }}>{dots}</span>;
}
