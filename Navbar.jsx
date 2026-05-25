import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Active section tracker
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-[#070B14]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
          <span className="text-gray-900 dark:text-white">Kiaan</span>
          <span className="text-accent" style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-all duration-200 hover:text-[var(--accent)] relative group ${
                active === href
                  ? "text-[var(--accent)]"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[var(--accent)] transition-all duration-300 ${
                  active === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 hover:border-[var(--accent)] transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-[var(--accent)]"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0A0F1E] border-b border-black/5 dark:border-white/5 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] transition-colors py-1"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
