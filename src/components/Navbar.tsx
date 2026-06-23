import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/theme/themeSlice";

const NAV = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("home");
  const dispatch = useDispatch();
  const theme    = useSelector((s: { theme: { pageTheme: string } }) => s.theme.pageTheme);
  const isDark   = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => {
      const sections = NAV.map(l => document.getElementById(l.id)).filter(Boolean);
      const pos = window.scrollY + 120;
      sections.forEach(s => {
        if (s && pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight)
          setActive(s.id);
      });
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      style={scrolled ? {
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border)",
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-1">
          <a href="#home" className="font-head text-2xl font-extrabold text-grad select-none">AB.</a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setActive(id)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={active === id
                ? { background: "var(--accent)", color: "#ffffff", fontWeight: 600 }
                : { color: "var(--text-2)" }}>
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex-1 flex items-center justify-end gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => dispatch(setTheme(isDark ? "light" : "dark"))}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {isDark
              ? <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
              : <svg className="w-4 h-4" style={{ color: "var(--text-2)" }} fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            }
          </button>

          {/* Hire me */}
          <a href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{ background: "var(--accent)", color: "#ffffff" }}>
            Hire me
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open
              ? <svg className="w-4 h-4" style={{ color: "var(--text-2)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg className="w-4 h-4" style={{ color: "var(--text-2)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-3 mt-2 rounded-2xl overflow-hidden"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`}
              onClick={() => { setActive(id); setOpen(false); }}
              className="block px-5 py-3.5 text-sm border-b last:border-b-0 transition-colors"
              style={{
                color: active === id ? "var(--accent)" : "var(--text-2)",
                borderColor: "var(--border)",
                background:  active === id ? "var(--accent-bg)" : "transparent",
              }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
