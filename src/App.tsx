import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Eagerly loaded — critical for first paint
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import NotFound      from "./components/NotFound";

// Lazy loaded — split into separate JS chunks; loaded on demand
const Skills   = lazy(() => import("./components/Skills"));
const About    = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact  = lazy(() => import("./components/Contact"));
const Footer   = lazy(() => import("./components/Footer"));

interface RS { theme: { pageTheme: string } }

// ── ReadyGate: fires onReady the moment all lazy siblings have mounted ──────
// React only renders this component after the enclosing <Suspense> boundary
// resolves — i.e., after ALL lazy components in that boundary have loaded.
function ReadyGate({ onReady }: { onReady: () => void }) {
  // useRef so we only fire once even if parent re-renders
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    onReady();
  }, [onReady]);
  return null;
}

// ── Scroll-reveal observer ───────────────────────────────────────────────────
// lazyReady flips to true once all lazy siblings have mounted (via ReadyGate).
// That triggers a second pass so elements that weren't in the DOM during the
// initial check (slow first-load / incognito) get revealed correctly.
function useReveal(lazyReady: boolean) {
  const ioRef = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    ioRef.current = io;

    function check() {
      document.querySelectorAll<Element>(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("visible");
        } else {
          io.observe(el);
        }
      });
    }

    check();
    // Fallback for fast loads where lazy chunks mount within 700 ms
    const t = setTimeout(check, 700);
    return () => { io.disconnect(); ioRef.current = null; clearTimeout(t); };
  }, []);

  // Second pass once ALL lazy components are confirmed mounted
  useEffect(() => {
    if (!lazyReady) return;
    const io = ioRef.current;
    document.querySelectorAll<Element>(".reveal").forEach((el) => {
      if (el.classList.contains("visible")) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("visible");
      } else if (io) {
        io.observe(el);
      }
    });
  }, [lazyReady]);
}

// ── Portfolio page ───────────────────────────────────────────────────────────
function Portfolio({ onReady }: { onReady: () => void }) {
  const [lazyReady, setLazyReady] = useState(false);
  useReveal(lazyReady);

  // Stable reference so ReadyGate useEffect never re-fires on re-renders
  const stableOnReady = useCallback(() => { // eslint-disable-line
    setLazyReady(true);
    onReady();
  }, []); // eslint-disable-line

  return (
    <div
      className="overflow-x-hidden"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Navbar />
      <main>
        <Hero />
        {/*
         * ALL lazy sections + ReadyGate share ONE Suspense boundary.
         * React suspends the entire boundary until every lazy sibling resolves.
         * ReadyGate renders last → its useEffect fires exactly once when done.
         */}
        <Suspense fallback={null}>
          <Skills />
          <About />
          <Projects />
          <Contact />
          <ReadyGate onReady={stableOnReady} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

// ── Root app ─────────────────────────────────────────────────────────────────
export default function App() {
  const theme = useSelector((s: RS) => s.theme.pageTheme);

  // showLoading: controls whether the overlay exists in the DOM
  const [showLoading, setShowLoading] = useState(true);
  // appReady: true once ALL lazy portfolio components have mounted
  const [appReady, setAppReady] = useState(false);

  // Sync theme class on <html>
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [theme]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        theme={theme === "dark" ? "dark" : "light"}
      />

      {/* Loading overlay — stays until appReady AND min-display time pass */}
      <LoadingScreen
        show={showLoading}
        ready={appReady}
        onDone={() => setShowLoading(false)}
      />

      <Routes>
        {/* onReady wired into Portfolio → ReadyGate → fires setAppReady */}
        <Route path="/"  element={<Portfolio onReady={() => setAppReady(true)} />} />
        <Route path="*"  element={<NotFound />} />
      </Routes>
    </>
  );
}
