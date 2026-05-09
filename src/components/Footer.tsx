export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

        <span className="font-head text-2xl font-extrabold text-grad tracking-tight">AB.</span>

        <div className="flex items-center gap-2 order-last sm:order-none">
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
