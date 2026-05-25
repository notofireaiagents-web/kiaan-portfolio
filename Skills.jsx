import { useInView } from "../hooks/useInView";
import SectionHeader from "../components/SectionHeader";

const skillGroups = [
  {
    category: "Technical",
    icon: "⚙️",
    color: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/20",
    skills: ["CAD / Computer Aided Design", "3D Printing & Prototyping", "Robotics Engineering", "Basic Electronics", "Coding & Logic"],
  },
  {
    category: "Academic",
    icon: "🧪",
    color: "from-purple-500/10 to-violet-500/10",
    border: "border-purple-500/20",
    skills: ["Analytical Thinking", "Scientific Method", "Problem Solving", "Mathematics", "Research Skills"],
  },
  {
    category: "Athletic",
    icon: "🏊",
    color: "from-blue-500/10 to-teal-500/10",
    border: "border-blue-500/20",
    skills: ["Competitive Swimming", "Elite Training", "Race Strategy", "Mental Toughness", "Team Collaboration"],
  },
  {
    category: "Creative",
    icon: "✨",
    color: "from-orange-500/10 to-amber-500/10",
    border: "border-orange-500/20",
    skills: ["Invention & Innovation", "Design Thinking", "3D Modelling", "Music", "Visual Design Basics"],
  },
];

const tools = [
  "Fusion 360", "Tinkercad", "3D Slicer", "Scratch", "Python basics",
  "Google Workspace", "Canva", "MS Office", "Arduino concepts",
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section-padding noise-bg">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader
          label="Skills"
          title="Built for both worlds."
          subtitle="From the pool to the workshop — every skill I've developed has made me sharper in every other area."
        />

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillGroups.map(({ category, icon, color, border, skills }, i) => (
            <div
              key={category}
              className={`rounded-2xl p-6 border bg-gradient-to-br ${color} ${border} transition-all duration-700 hover:-translate-y-1`}
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                {category}
              </h3>
              <ul className="space-y-2.5">
                {skills.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span className="mt-1 w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools & software */}
        <div className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5 text-center">
            Tools & Software
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full text-sm font-medium border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-white/[0.03] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Soft skills row */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { label: "Discipline", value: "5+ years elite training" },
            { label: "Leadership", value: "Team captain mentality" },
            { label: "Resilience", value: "Wins & losses both teach" },
            { label: "Time Mgmt", value: "Sport + school + projects" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center p-4 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-black/6 dark:border-white/6">
              <p className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-1">{label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
