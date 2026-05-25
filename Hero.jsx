import { useEffect, useState } from "react";

const roles = ["Student-Athlete", "Engineer & Inventor", "National Swimmer", "Future Leader"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg" id="hero">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.06] dark:opacity-[0.08] blur-3xl"
        style={{ background: "var(--accent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.04] dark:opacity-[0.06] blur-3xl"
        style={{ background: "#7B2FFF" }} />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8 border-[var(--accent)]/30 text-[var(--accent)] bg-[var(--accent)]/5"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Open to College Opportunities · Class of 2029
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tight mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}>
              <span className="text-gray-900 dark:text-white">Kiaan</span>
              <br />
              <span className="text-gray-900 dark:text-white">Jain</span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            {/* Typewriter role */}
            <div className="h-10 flex items-center mb-6">
              <span className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400">
                {displayed}
                <span className="inline-block w-0.5 h-6 ml-0.5 align-middle bg-[var(--accent)] animate-pulse" />
              </span>
            </div>

            {/* Intro */}
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-md leading-relaxed mb-10">
              Balancing elite swimming with a passion for engineering and robotics.
              I build things, break records, and believe the best version of me is still ahead.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#achievements"
                className="px-6 py-3 rounded-full text-sm font-semibold text-[#070B14] transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: "var(--accent)" }}
              >
                See my journey
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-sm font-semibold border text-gray-700 dark:text-gray-200 border-black/15 dark:border-white/15 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                Get in touch →
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-black/8 dark:border-white/8">
              {[
                { num: "14", label: "Years old" },
                { num: "1st", label: "ISSO National" },
                { num: "5+", label: "Competitions" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    {num}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo + floating cards */}
          <div className="relative flex justify-center items-center">
            {/* Decorative ring */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-[var(--accent)]/20 float-anim" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[var(--accent)]/08" />

            {/* Photo */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border float-anim"
              style={{ animationDelay: "0.5s" }}>
              <img
                src="/kiaan-isso.jpg"
                alt="Kiaan Jain at ISSO National Games"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback avatar if image not found
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;background:linear-gradient(135deg,#0A1628,#0F2040);display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-size:5rem;font-weight:800;color:rgba(0,212,255,0.8)">KJ</div>`;
                }}
              />
            </div>

            {/* Floating achievement card */}
            <div className="absolute -left-4 top-8 glass dark:glass rounded-2xl px-4 py-3 shadow-lg max-w-[160px]"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="text-2xl mb-1">🥇</div>
              <p className="text-xs font-semibold text-gray-900 dark:text-white leading-tight">ISSO National Games 2025</p>
              <p className="text-[10px] text-[var(--accent)] mt-0.5">1st Place · Swimming</p>
            </div>

            {/* Floating tech card */}
            <div className="absolute -right-4 bottom-12 glass rounded-2xl px-4 py-3 shadow-lg max-w-[150px]"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", animationDelay: "1s" }}>
              <div className="text-2xl mb-1">🤖</div>
              <p className="text-xs font-semibold text-gray-900 dark:text-white leading-tight">Robotics & 3D Printing</p>
              <p className="text-[10px] text-[var(--accent)] mt-0.5">Engineer at heart</p>
            </div>

            {/* School badge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">🏫 Step By Step School, Noida</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[var(--accent)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
