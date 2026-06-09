export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-display text-lg"
          style={{ color: "var(--accent)" }}
        >
          Natasha Drozdova
        </span>
        <p
          className="font-mono text-xs tracking-wider"
          style={{ color: "var(--text-muted)" }}
        >
          Sydney, NSW · Available for new opportunities
        </p>
        <p
          className="font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
