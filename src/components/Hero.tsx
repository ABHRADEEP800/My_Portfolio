import { Typewriter } from "react-simple-typewriter";

const SOCIAL = [
  { href: "https://github.com/ABHRADEEP800",      label: "GitHub",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
  { href: "https://linkedin.com/in/ABHRADEEP800", label: "LinkedIn",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { href: "https://twitter.com/ABHRADEEP800",     label: "Twitter",
    d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col overflow-hidden">

      {/* ── Backgrounds ─────────────────────────────────────────── */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)", filter: "blur(80px)" }} />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--violet) 8%, transparent), transparent 70%)", filter: "blur(80px)" }} />

      {/* ── Main content — flex-1 centres vertically ──────────── */}
      <div className="flex-1 flex items-center w-full pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">

            {/* ── Left: copy ── */}
            <div className="flex flex-col gap-5 reveal">

              {/* Available badge */}
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: "var(--green)" }} />
                <span className="text-sm font-mono font-medium" style={{ color: "var(--accent)" }}>
                  Available for work
                </span>
              </div>

              {/* Name */}
              <h1 className="font-head font-extrabold leading-[1.05]">
                <span className="block text-[2.6rem] sm:text-6xl lg:text-[4.5rem]" style={{ color: "var(--text)" }}>
                  Abhradeep
                </span>
                <span className="block text-[2.6rem] sm:text-6xl lg:text-[4.5rem] text-outline">
                  Biswas.
                </span>
              </h1>

              {/* Typewriter */}
              <p className="text-base sm:text-xl font-mono font-medium" style={{ color: "var(--accent)" }}>
                &gt;{" "}
                <Typewriter
                  words={["Full-Stack Developer", "UI/UX Enthusiast", "Open-Source Builder", "React Craftsman"]}
                  loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1800}
                />
              </p>

              {/* Bio */}
              <p className="max-w-md text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                I design and build modern web experiences — from pixel-perfect UIs to
                scalable back-end systems. Based in{" "}
                <span style={{ color: "var(--text)" }}>Kolkata, WB</span>.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base">
                  View Projects
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
                <a href="/Abhradeep_Biswas_cv.pdf" target="_blank" rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2 text-sm sm:text-base">
                  Download CV
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {SOCIAL.map(({ href, label, d }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text-2)" }}>
                      <path d={d}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: photo ── */}
            <div className="flex justify-center reveal" style={{ animationDelay: "0.12s" }}>
              <div className="relative">
                {/* Glow ring — only sm+ to keep mobile clean */}
                <div className="hidden sm:block absolute inset-0 rounded-full glow-ring scale-105" />

                {/* Conic ring + photo */}
                <div
                  className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[310px] lg:h-[310px] rounded-full"
                  style={{ background: "conic-gradient(var(--accent), var(--violet), var(--accent))", padding: "3px" }}>
                  <div className="w-full h-full rounded-full overflow-hidden"
                    style={{ border: "4px solid var(--bg)" }}>
                    <img src="/images/hero.png" alt="Abhradeep Biswas"
                      className="w-full h-full object-cover object-top" />
                  </div>
                </div>

                {/* Floating badges — only sm+ */}
                <div className="hidden sm:flex absolute -top-4 -right-6 glass rounded-2xl px-3 py-2 items-center gap-2 shadow-lg">
                  <span className="text-xl">💻</span>
                  <div>
                    <p className="text-xs font-semibold leading-none" style={{ color: "var(--text)" }}>MCA</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "var(--text-2)" }}>Graduate</p>
                  </div>
                </div>
                <div className="hidden sm:flex absolute -bottom-4 -left-6 glass rounded-2xl px-3 py-2 items-center gap-2 shadow-lg">
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="text-xs font-semibold leading-none" style={{ color: "var(--text)" }}>Open to</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "var(--accent)" }}>Opportunities</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator — pinned to bottom ─────────────────── */}
      <div className="pb-8 flex justify-center flex-shrink-0">
        <a href="#skills"
          className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <span className="text-[11px] font-mono tracking-wider" style={{ color: "var(--text-2)" }}>scroll</span>
          <div className="w-5 h-8 rounded-full flex items-start justify-center pt-[5px]"
            style={{ border: "1.5px solid var(--border)" }}>
            <div className="w-[3px] h-[6px] rounded-full animate-scroll-dot"
              style={{ background: "var(--accent)" }} />
          </div>
        </a>
      </div>

    </section>
  );
}
