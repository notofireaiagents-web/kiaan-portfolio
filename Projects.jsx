import { useInView } from "../hooks/useInView";
import SectionHeader from "../components/SectionHeader";

const projects = [
  {
    emoji: "🤖",
    title: "Tech Robot Builds",
    tag: "Engineering",
    tagColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    desc: "Building functional robots using electronics and programming logic. Each build is a lesson in engineering, problem-solving, and iteration.",
    skills: ["Electronics", "Robotics", "Logic"],
    status: "Ongoing",
  },
  {
    emoji: "🖨️",
    title: "3D Printing Projects",
    tag: "Design & Make",
    tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    desc: "Designing and printing custom prototypes using CAD software. From concept to physical object — bringing ideas to life layer by layer.",
    skills: ["CAD", "Fusion 360", "Tinkercad"],
    status: "Ongoing",
  },
  {
    emoji: "💡",
    title: "Real-Life Inventions",
    tag: "Innovation",
    tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    desc: "Identifying everyday problems and engineering practical solutions. My goal is to build things that actually help people — not just look impressive.",
    skills: ["Ideation", "Prototyping", "Problem-solving"],
    status: "Ongoing",
  },
  {
    emoji: "💻",
    title: "CAD — Binary Fest 4.0",
    tag: "Competition",
    tagColor: "bg-green-500/10 text-green-600 dark:text-green-400",
    desc: "Created a Computer Aided Design entry for the inter-school Binary Fest competition, securing 2nd position in a field of technical competitors.",
    skills: ["CAD", "Design", "Competition"],
    status: "Completed · May 2024",
  },
];

const activities = [
  { icon: "🔬", label: "Helios Tech Club", desc: "Active member · tech competitions" },
  { icon: "🏊", label: "Thetis Aquatics", desc: "Elite swim training club" },
  { icon: "🎓", label: "Science Olympiad", desc: "Rank 2 at school level" },
  { icon: "🌏", label: "International Meets", desc: "Bangkok 2024 · competitive swim" },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="section-padding noise-bg">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader
          label="Projects & Activities"
          title="Building before being asked to."
          subtitle="I don't wait for school assignments. I build things because I genuinely want to see them exist."
        />

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projects.map(({ emoji, title, tag, tagColor, desc, skills, status }, i) => (
            <div
              key={title}
              className="group rounded-3xl p-7 border border-black/8 dark:border-white/8 bg-white dark:bg-white/[0.02] hover:border-[var(--accent)]/30 transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gray-50 dark:bg-white/[0.04]">
                  {emoji}
                </div>
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>
                  {status}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>
                  {tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{desc}</p>

              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Clubs & Activities */}
        <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">Clubs & Activities</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activities.map(({ icon, label, desc }) => (
              <div key={label}
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-black/8 dark:border-white/8 bg-white/60 dark:bg-white/[0.02] hover:border-[var(--accent)]/30 transition-all duration-200">
                <span className="text-2xl mb-3">{icon}</span>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                  {label}
                </p>
                <p className="text-[11px] text-gray-400 leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
