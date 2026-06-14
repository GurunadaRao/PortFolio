import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioContent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export function Experience() {
  const { timeline } = portfolioContent;

  return (
    <section id="experience" className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 pr-[calc(1.5rem+5.2rem)]">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-[var(--primary-dark)] mb-4"
        >
          // experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[var(--secondary)] leading-[1.08] mb-14 m-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Milestones shaped by ownership,<br className="hidden md:block" /> scale, and delivery.
        </motion.h2>

        {/* Timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative pl-6 border-l-2 border-[var(--muted)]/50 space-y-10"
        >
          {timeline.map((exp) => (
            <motion.article
              key={`${exp.title}-${exp.organization}`}
              variants={fadeUp}
              className="relative group"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[1.85rem] top-5 w-4 h-4 rounded-full border-2 border-white bg-[var(--muted)] ring-4 ring-[var(--background)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:ring-[var(--primary)]/20" />

              {/* Card */}
              <div className="bg-[#f8fafb] border border-[var(--muted)]/60 rounded-2xl p-6 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:border-[var(--primary)]/30">

                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--secondary)] mt-1 mb-0.5 m-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-[var(--primary-dark)] m-0">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] font-medium px-2.5 py-1 rounded-md bg-[var(--primary)]/8 border border-[var(--primary)]/20 text-[var(--primary-dark)]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mb-4 list-none p-0 m-0">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--muted)]/40">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col px-4 py-2 rounded-xl border border-[var(--muted)]/50 bg-white"
                      >
                        <span className="text-sm font-bold text-[var(--secondary)] leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {m.value}
                        </span>
                        <span className="text-[0.62rem] font-semibold uppercase tracking-wider text-[var(--text-secondary)] mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
