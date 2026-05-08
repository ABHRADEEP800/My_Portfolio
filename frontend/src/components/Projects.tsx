import SectionHeader from "./SectionHeader";

const PROJECTS = [
  {
    title:   "Personal Portfolio",
    desc:    "A modern, fully-responsive personal portfolio built with React, TypeScript and Tailwind. Features dark/light theme, animated sections, and reCAPTCHA-protected contact.",
    img:     "/images/work-1.png",
    tags:    ["React","TypeScript","Tailwind","Express"],
    live:    "#",
    github:  "https://github.com/ABHRADEEP800/My_Portfolio",
  },
  {
    title:   "Grapple Ecommerce",
    desc:    "A full-featured e-commerce platform with product listings, cart, checkout and order management. Built with PHP and MySQL, deployed at grapple.abhradeep.com.",
    img:     "/images/work-2.png",
    tags:    ["PHP","MySQL","Bootstrap","JavaScript"],
    live:    "https://grapple.abhradeep.com",
    github:  "https://github.com/ABHRADEEP800/PHP-E_Commerce_Project",
  },
  {
    title:   "Astron Dashboard",
    desc:    "A clean analytics dashboard UI with charts, data tables and responsive layouts. Demonstrates complex data visualisation with a minimal design language.",
    img:     "/images/work-3.png",
    tags:    ["HTML","CSS","JavaScript","Chart.js"],
    live:    "https://astron.abhradeep.com",
    github:  "https://github.com/ABHRADEEP800/Visualization-Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="My Work" title="Featured" highlight="Projects"
          subtitle="A selection of projects I've built — from concept to deployment." />

        <div className="flex flex-col gap-12">
          {PROJECTS.map((p, i) => (
            <article key={p.title}
              className={`card overflow-hidden grid md:grid-cols-2 gap-0 reveal`}
              style={{ animationDelay: `${i * 0.1}s` }}>

              {/* Image — alternates side */}
              <div className={`relative overflow-hidden aspect-video md:aspect-auto md:min-h-[260px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, var(--surface))" }} />
              </div>

              {/* Text */}
              <div className={`p-8 flex flex-col justify-center gap-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => <span key={t} className="chip text-xs">{t}</span>)}
                </div>
                <h3 className="font-head font-bold text-2xl sm:text-3xl" style={{ color: "var(--text)" }}>
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                  {p.desc}
                </p>
                <div className="flex gap-3 pt-1">
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="btn-primary text-sm inline-flex items-center gap-1.5">
                    Live Demo
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="btn-outline text-sm inline-flex items-center gap-1.5">
                    GitHub
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
