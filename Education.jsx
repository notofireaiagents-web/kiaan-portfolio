import { useInView } from "../hooks/useInView";
import SectionHeader from "../components/SectionHeader";

const subjects = [
  { icon: "🔢", name: "Mathematics", level: 92 },
  { icon: "⚗️", name: "Sciences", level: 89 },
  { icon: "🖥️", name: "Computer Science", level: 95 },
  { icon: "🌍", name: "Humanities", level: 85 },
  { icon: "📖", name: "English Language", level: 88 },
];

const timeline = [
  {
    year: "2023–24",
    event: "Ei ASSET Talent Search",
    detail: "Top 15% of students nationally · Certificate of Academic Excellence",
    accent: true,
  },
  {
    year: "2024–25",
    event: "Ei ASSET Distinguished Performance",
    detail: "Class 8 · Certificate of Distinguished Performance",
    accent: true,
  },
  {
    year: "Ongoing",
    event: "National Science Olympiad",
    detail: "Rank 2 in school · Building competitive science skills",
    accent: false,
  },
  {
    year: "Ongoing",
    event: "IGCSE Curriculum",
    detail: "Step By Step School, Noida · Rigorous international standard",
    accent: false,
  },
];

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          <SectionHeader
            label="Education"
            title="Learning never stops."
            subtitle="I approach academics with the same intensity I bring to the pool — every day is a chance to get better."
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: School card */}
            <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {/* School highlight */}
              <div className="rounded-3xl overflow-hidden border border-black/8 dark:border-white/8 bg-white dark:bg-white/[0.03] p-8 mb-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-2">Current School</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                      Step By Step School
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Noida, Uttar Pradesh</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-[var(--accent)]/10">
                    🏫
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Grade", value: "9th" },
                    { label: "Curriculum", value: "IGCSE" },
                    { label: "Year of Birth", value: "2011" },
                    { label: "Aspiring", value: "Engineer" },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl p-3 bg-gray-50 dark:bg-white/[0.04]">
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  I balance a demanding IGCSE curriculum with elite athletic training — developing
                  analytical thinking, time management, and the discipline to excel across everything I take on.
                </p>
              </div>

              {/* Academic interests */}
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Academic Strengths</p>
                {subjects.map(({ icon, name, level }, i) => (
                  <div key={name} className="flex items-center gap-3">
                    <span className="text-base w-6">{icon}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 w-40">{name}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-gray-100 dark:bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: inView ? `${level}%` : "0%",
                          background: "var(--accent)",
                          transitionDelay: `${i * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Academic timeline */}
            <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">Academic Timeline</p>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] to-transparent opacity-30" />
                <div className="space-y-8 pl-12">
                  {timeline.map(({ year, event, detail, accent }, i) => (
                    <div
                      key={i}
                      className="relative"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {/* Dot */}
                      <div className={`absolute -left-9 top-1 w-2.5 h-2.5 rounded-full border-2 ${
                        accent
                          ? "border-[var(--accent)] bg-[var(--accent)]"
                          : "border-gray-300 dark:border-gray-600 bg-white dark:bg-[#070B14]"
                      }`} />

                      <span className="inline-block text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded mb-2">
                        {year}
                      </span>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                        {event}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 leading-snug">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goal card */}
              <div className="mt-10 rounded-2xl p-6 border border-[var(--accent)]/20 bg-[var(--accent)]/[0.03]">
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-3">College Aspiration</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Targeting top engineering programs where I can compete as a student-athlete, 
                  build real-world solutions, and grow alongside the best minds in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
