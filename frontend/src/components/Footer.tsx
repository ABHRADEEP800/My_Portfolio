const NAV = ["Home","About","Projects","Contact"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex-1 flex sm:justify-start justify-center">
          <span className="font-head text-2xl font-extrabold text-grad">AB.</span>
        </div>
        <nav className="flex gap-6">
          {NAV.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--text-2)" }}>{l}</a>
          ))}
        </nav>
        <div className="flex-1 flex sm:justify-end justify-center">
          <p className="text-xs" style={{ color: "var(--text-2)" }}>
            © {new Date().getFullYear()} Abhradeep Biswas
          </p>
        </div>
      </div>
    </footer>
  );
}
