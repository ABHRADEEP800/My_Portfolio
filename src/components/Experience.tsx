import SectionHeader from "./SectionHeader";

interface Role {
  title: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  period: string;
  current?: boolean;
  location: string;
  desc: string;
  points: string[];
  tags: string[];
}

const ROLES: Role[] = [
  {
    title: "Founder & CEO",
    company: "Aptorit Technologies LLP",
    companyUrl: "https://aptorit.com",
    logo: "/aptorit.svg",
    period: "Jul 2026 — Present",
    current: true,
    location: "Kolkata, WB",
    desc: "Leading Aptorit Technologies LLP — a software company building modern web, product and cloud solutions for clients worldwide.",
    points: [
      "Founded and scaled the company from the ground up — owning vision, product and engineering.",
      "Leading a team delivering React, Node.js and PHP solutions end-to-end, from discovery to deployment.",
      "Owning client relationships, delivery strategy and long-term technology roadmap.",
    ],
    tags: ["Leadership", "Product Strategy", "React", "Node.js", "Cloud"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="Career" title="My" highlight="Experience"
          subtitle="The journey so far — building and leading teams that ship." />

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {ROLES.map((r, i) => (
            <article key={r.title} className="card p-7 sm:p-8 reveal"
              style={{ animationDelay: `${i * 0.1}s` }}>

              {/* Header */}
              <div className="flex items-start gap-4">
                {r.logo && (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                    <img src={r.logo} alt={r.company} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-head font-bold text-xl sm:text-2xl" style={{ color: "var(--text)" }}>
                      {r.title}
                    </h3>
                    {r.current && (
                      <span className="chip text-[10px] px-2 py-0.5" style={{ color: "var(--green)" }}>
                        Current
                      </span>
                    )}
                  </div>

                  {r.companyUrl ? (
                    <a href={r.companyUrl} target="_blank" rel="noreferrer"
                      className="text-sm font-semibold hover:underline" style={{ color: "var(--accent)" }}>
                      {r.company}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{r.company}</p>
                  )}

                  <p className="text-xs font-mono mt-1" style={{ color: "var(--text-2)" }}>
                    {r.period} · {r.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                {r.desc}
              </p>

              {/* Bullets */}
              <ul className="mt-4 flex flex-col gap-2.5">
                {r.points.map(p => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    {p}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {r.tags.map(t => <span key={t} className="chip text-xs">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
