export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--accent)", fontFamily: "DM Sans, sans-serif" }}
        >
          {label}
        </span>
        <span className="flex-1 h-px bg-gradient-to-r from-[var(--accent)]/30 to-transparent max-w-[80px]" />
      </div>
      <h2
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
