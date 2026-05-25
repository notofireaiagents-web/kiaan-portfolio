import { useInView } from "../hooks/useInView";
import SectionHeader from "../components/SectionHeader";

const traits = [
  { icon: "🏊", label: "Elite Swimmer", desc: "Training at national level since childhood" },
  { icon: "🔬", label: "Science Enthusiast", desc: "2nd rank in National Science Olympiad at school" },
  { icon: "🤖", label: "Robotics Builder", desc: "Building tech robots & real-world solutions" },
  { icon: "🖨️", label: "3D Printing", desc: "Designing and printing custom prototypes" },
  { icon: "💡", label: "Inventor", desc: "Creating practical solutions to real problems" },
  { icon: "🎓", label: "IGCSE Student", desc: "Rigorous curriculum, analytical mindset" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section-padding noise-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <SectionHeader
              label="About me"
              title={<>Who I<br />really am.</>}
            />

            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm Kiaan — a 14-year-old from Noida who genuinely believes you don't have to
                choose between being an athlete and an engineer. I do both, every single day.
              </p>
              <p>
                My mornings start in the pool. My evenings end at a desk with a soldering iron or
                CAD software. I study IGCSE at Step By Step School and bring the same discipline
                from swimming to everything I do — in the classroom, in competitions, and in the
                workshop.
              </p>
              <p>
                Engineering and robotics fascinate me because they let you take an idea from your
                head and make it real. I want to keep doing that — at scale — for the rest of my life.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 pl-5 border-l-2 border-[var(--accent)]">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 italic leading-snug"
                style={{ fontFamily: "DM Sans, sans-serif" }}>
                "The best version of me is still ahead."
              </p>
            </div>

            {/* Interests marquee strip */}
            <div className="mt-8 overflow-hidden rounded-xl">
              <div className="flex gap-3 marquee-inner w-max">
                {[
                  "Swimming 🌊", "Robotics 🤖", "3D Printing 🖨️", "Engineering ⚙️",
                  "Science 🔬", "Inventing 💡", "Coding 💻", "Music 🎵",
                  "Swimming 🌊", "Robotics 🤖", "3D Printing 🖨️", "Engineering ⚙️",
                  "Science 🔬", "Inventing 💡", "Coding 💻", "Music 🎵",
                ].map((item, i) => (
                  <span key={i}
                    className="whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Trait cards */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="grid grid-cols-2 gap-4">
              {traits.map(({ icon, label, desc }, i) => (
                <div
                  key={label}
                  data-hover
                  className="group rounded-2xl p-5 border border-black/8 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.03] transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1"
                    style={{ fontFamily: "Syne, sans-serif" }}>
                    {label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
