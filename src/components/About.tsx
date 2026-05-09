import SectionHeader from "./SectionHeader";

const TOOLS = [
  { name: "VS Code", img: "/images/vscode.png" },
  { name: "Git",     img: "/images/git.png"    },
];

const CARDS = [
  { label: "Location", value: "Kolkata, WB", icon: "📍" },
  { label: "Education", value: "MCA Graduate", icon: "🎓" },
  { label: "Email", value: "hello@abhradeep.com", icon: "✉️" },
  { label: "Status", value: "Open to Work", icon: "🟢" },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="About Me" title="Who I" highlight="Am" align="center"
          subtitle="Passionate developer who loves building things that live on the internet." />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">

          {/* Photo column */}
          <div className="flex flex-col items-center gap-8 reveal">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow"
                style={{ background: "conic-gradient(var(--accent), var(--violet), transparent, var(--accent))", padding: 2 }}>
                <div className="w-full h-full rounded-full" style={{ background: "var(--bg)" }} />
              </div>
              <div className="absolute inset-[10px] rounded-full overflow-hidden"
                style={{ border: "3px solid var(--surface-2)" }}>
                <img src="/images/user-image.png" alt="About Abhradeep"
                  className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Tools */}
            <div className="glass rounded-2xl p-5 w-full max-w-xs">
              <p className="text-xs font-mono font-medium mb-3" style={{ color: "var(--accent)" }}>TOOLS I USE DAILY</p>
              <div className="flex gap-4">
                {TOOLS.map(t => (
                  <div key={t.name} className="flex flex-col items-center gap-1.5">
                    <img src={t.img} alt={t.name} className="w-10 h-10 object-contain rounded-lg" />
                    <span className="text-xs" style={{ color: "var(--text-2)" }}>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-8 reveal" style={{ animationDelay: "0.1s" }}>
            <div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
                Hi! I'm <strong style={{ color: "var(--text)" }}>Abhradeep Biswas</strong>, a passionate web developer from Kolkata with an
                MCA degree and a love for clean, modern interfaces. I specialise in React and Node.js,
                turning ideas into fast, accessible, and visually appealing products.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
                When I'm not coding, I'm exploring new frameworks, contributing to open-source projects,
                or sketching UI ideas on paper. I'm always looking for interesting problems to solve.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CARDS.map(c => (
                <div key={c.label} className="card p-4 flex items-start gap-3">
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "var(--text-2)" }}>{c.label}</p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--text)" }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills row */}
            <div>
              <p className="text-xs font-mono font-medium mb-3" style={{ color: "var(--accent)" }}>CORE SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {["HTML","CSS","JavaScript","PHP","MySQL","Bootstrap","React","Node.js"].map(s => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
