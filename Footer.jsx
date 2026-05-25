export default function Footer() {
  return (
    <footer className="border-t border-black/6 dark:border-white/6 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900 dark:text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            Kiaan Jain
          </span>
          <span style={{ color: "var(--accent)" }}>·</span>
          <span className="text-xs text-gray-400">Student · Athlete · Builder</span>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Kiaan Jain. Designed with purpose.
        </p>

        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>
      </div>
    </footer>
  );
}
