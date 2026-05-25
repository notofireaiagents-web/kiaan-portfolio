import { useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  const [ref, inView] = useInView();
  const [copied, setCopied] = useState(false);

  const email = "kiaan.jain2011@gmail.com"; // placeholder

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-16 bg-gradient-to-l from-[var(--accent)]/40 to-transparent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">Contact</span>
            <span className="h-px w-16 bg-gradient-to-r from-[var(--accent)]/40 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}>
            Let's connect.
          </h2>

          <p className="text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed mb-12">
            Whether you're a coach, recruiter, collaborator, or just someone who wants to say hi —
            I'd love to hear from you.
          </p>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {/* Email */}
            <button
              onClick={copy}
              data-hover
              className="group rounded-2xl p-6 border border-black/8 dark:border-white/8 bg-white dark:bg-white/[0.02] hover:border-[var(--accent)]/40 transition-all duration-200 text-left"
            >
              <div className="text-2xl mb-3">✉️</div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Email</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white break-all">{email}</p>
              <p className="text-xs text-[var(--accent)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? "Copied! ✓" : "Click to copy"}
              </p>
            </button>

            {/* School */}
            <div className="rounded-2xl p-6 border border-black/8 dark:border-white/8 bg-white dark:bg-white/[0.02] text-left">
              <div className="text-2xl mb-3">🏫</div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">School</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Step By Step School</p>
              <p className="text-xs text-gray-400 mt-1">Noida, Uttar Pradesh, India</p>
            </div>

            {/* LinkedIn placeholder */}
            <div className="rounded-2xl p-6 border border-black/8 dark:border-white/8 bg-white dark:bg-white/[0.02] text-left">
              <div className="text-2xl mb-3">🔗</div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">LinkedIn</p>
              <p className="text-sm font-medium text-gray-400 italic">Coming soon</p>
              <p className="text-xs text-gray-400 mt-1">Building my professional presence</p>
            </div>
          </div>

          {/* Big CTA */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-[#070B14] hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ background: "var(--accent)" }}
          >
            Send me a message
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <p className="mt-6 text-xs text-gray-400">
            For coaching or official enquiries, parents can reach out directly.
          </p>
        </div>
      </div>
    </section>
  );
}
