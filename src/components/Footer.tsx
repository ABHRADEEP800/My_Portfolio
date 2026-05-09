export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 relative flex items-center justify-between">

        <span className="font-head text-2xl font-extrabold text-grad tracking-tight">AB.</span>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="text-base font-medium" style={{ color: "var(--text-2)" }}>Built with</span>
          <span className="animate-bounce inline-block text-xl leading-none">❤️</span>
          <span className="text-base font-medium" style={{ color: "var(--text-2)" }}>by</span>
          <span className="text-base font-bold" style={{ color: "var(--accent)" }}>Abhradeep</span>
        </div>

        <p className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
          © {new Date().getFullYear()} Abhradeep Biswas
        </p>

      </div>
    </footer>
  );
}
