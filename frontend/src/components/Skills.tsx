const ROW1 = ["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vue.js","Tailwind CSS","Bootstrap","SCSS"];
const ROW2 = ["Node.js","Express.js","PHP","MySQL","MongoDB","Git","VS Code","REST API","Linux","Docker"];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // Triple the items so the loop never shows a gap on any screen width
  const items3 = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden relative"
      style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
               maskImage:        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
      <div className={`flex gap-3 w-max py-1 ${reverse ? "animate-marquee-r" : "animate-marquee"}`}>
        {items3.map((item, i) => (
          <span key={i} className="chip whitespace-nowrap text-[11px] sm:text-xs">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-8 sm:mb-10 reveal">
        <span className="chip mb-3 inline-flex">Tech Stack</span>
        <h2 className="font-head font-bold text-3xl sm:text-4xl" style={{ color: "var(--text)" }}>
          Tools &amp; <span className="text-grad">Technologies</span>
        </h2>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <Row items={ROW1} />
        <Row items={ROW2} reverse />
      </div>
    </section>
  );
}
