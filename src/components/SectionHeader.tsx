interface Props {
  eyebrow:   string;
  title:     string;
  highlight?: string;
  subtitle?: string;
  align?:    "left" | "center";
}

export default function SectionHeader({ eyebrow, title, highlight, subtitle, align = "center" }: Props) {
  const cls = align === "center" ? "text-center items-center" : "items-start";
  return (
    <div className={`flex flex-col mb-16 ${cls}`}>
      <span className="chip mb-5">{eyebrow}</span>
      <h2 className="font-head font-bold text-4xl sm:text-5xl tracking-tight" style={{ color: "var(--text)" }}>
        {title}
        {highlight && <span className="text-grad"> {highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-2)" }}>{subtitle}</p>
      )}
    </div>
  );
}
