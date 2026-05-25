import { useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "../components/SectionHeader";

const categories = ["All", "Swimming", "Academic", "Technology"];

const achievements = [
  {
    category: "Swimming",
    icon: "🥇",
    title: "ISSO National Games — 1st Place",
    org: "International Schools Sports Organisation",
    date: "Sept 2025",
    detail: "Clinched gold at the ISSO National Games 2025-26 held in Pune. Competed in U14 category, representing school on a national stage.",
    level: "National",
    levelColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    category: "Swimming",
    icon: "🏅",
    title: "National Aquatic Championships — Participant",
    org: "Swimming Federation of India",
    date: "Aug 2024",
    detail: "Competed at the 40th Sub Junior – 50th Junior National Aquatic Championships in Bhubaneswar, representing Delhi.",
    level: "National",
    levelColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    category: "Swimming",
    icon: "🌏",
    title: "Asian Open Schools Invitational — Bangkok",
    org: "AOSI Aquatics Championships",
    date: "Feb 2024",
    detail: "Represented Indian Aquatics at the Asian Open Schools Invitational Swimming Championships 2024 in Bangkok, Thailand.",
    level: "International",
    levelColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    category: "Swimming",
    icon: "🥈",
    title: "Delhi State Championships — 2nd Place",
    org: "Delhi Swimming Association",
    date: "Jul 2025",
    detail: "Secured 2nd position in the 400m Individual Medley at the 59th Delhi State Sub Jr. & Jr. Aquatic Championships with a timing of 06:04.06.",
    level: "State",
    levelColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    category: "Swimming",
    icon: "🏆",
    title: "JITO Excellence Award 2025",
    org: "JITO North Zone",
    date: "Jun 2025",
    detail: "Recognised for outstanding performance in the 40th Sub Junior & 50th Junior National Aquatic Championship 2024.",
    level: "Recognition",
    levelColor: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    category: "Academic",
    icon: "🎓",
    title: "Ei ASSET — Distinguished Performance",
    org: "Educational Initiatives",
    date: "2024-25",
    detail: "Certificate of Distinguished Performance for the ASSET test. Class 8, Step By Step School — recognising exceptional academic ability.",
    level: "National",
    levelColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    category: "Academic",
    icon: "⭐",
    title: "Ei ASSET Talent Search — Top 15%",
    org: "Educational Initiatives",
    date: "2023-24",
    detail: "Certificate of Academic Excellence — placed in the top 15% of students nationally in the Ei ASSET 2023-24 and qualified for Talent Search 2024-25.",
    level: "National",
    levelColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    category: "Academic",
    icon: "🔬",
    title: "National Science Olympiad — Rank 2",
    org: "Step By Step School",
    date: "Ongoing",
    detail: "Achieved 2nd rank in school in the National Science Olympiad — demonstrating strong scientific reasoning and competitive academic mindset.",
    level: "School",
    levelColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
  {
    category: "Technology",
    icon: "💻",
    title: "Inter-School Binary Fest — 2nd Place",
    org: "Step By Step School Helios Tech Club",
    date: "May 2024",
    detail: "Awarded 2nd position in the Computer Aided Design event at Binary Fest 4.0 — a technical inter-school competition.",
    level: "Inter-school",
    levelColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
];

export default function Achievements() {
  const [active, setActive] = useState("All");
  const [ref, inView] = useInView();

  const filtered = active === "All" ? achievements : achievements.filter((a) => a.category === active);

  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader
          label="Achievements"
          title="Earned, not given."
          subtitle="Every medal, certificate, and recognition reflects hours of training, studying, and building."
        />

        {/* Filter pills */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[var(--accent)] text-[#070B14] font-semibold"
                  : "border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievement grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(({ icon, title, org, date, detail, level, levelColor }, i) => (
            <div
              key={title}
              className="group rounded-2xl p-6 border border-black/8 dark:border-white/8 bg-white dark:bg-white/[0.02] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/[0.02] transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.5s ease ${i * 70}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{icon}</div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${levelColor}`}>
                    {level}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">{date}</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-snug"
                style={{ fontFamily: "Syne, sans-serif" }}>
                {title}
              </h3>
              <p className="text-[11px] text-[var(--accent)] font-medium mb-3">{org}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Summary strip */}
        <div className={`mt-16 rounded-3xl p-8 border border-[var(--accent)]/15 bg-gradient-to-r from-[var(--accent)]/5 to-purple-500/5 transition-all duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "3", label: "International Competitions" },
              { num: "5+", label: "National Events" },
              { num: "2", label: "ASSET Recognitions" },
              { num: "2025", label: "National Gold" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent)" }}>
                  {num}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
