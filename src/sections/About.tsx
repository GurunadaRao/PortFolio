import { motion } from "framer-motion";
import { GraduationCap, Code2, GitCommit, Users } from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const statIcons = [GraduationCap, Code2, GitCommit, Users];

export function About() {
  const { name, stats, summary } = portfolioContent;

  const story = [
    `I'm Gurunada Rao — a 2nd-year B.Tech CSE student at VIT Bhimavaram who writes production-grade code, not just assignments.`,
    `Started with web basics, moved to full-stack systems, now engineering multi-agent AI pipelines that run in real environments with real constraints.`,
    `Currently leading web development at GDG On Campus VIT Bhimavaram and serving as Technical Lead at HOTA Creatives — shipping features, not side projects.`,
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-[#f8fafb]">
      <div className="max-w-[1120px] mx-auto px-6 pr-[calc(1.5rem+5.2rem)]">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-[var(--primary-dark)] mb-10"
        >
          // about
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — photo + bio */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Photo */}
            <div className="relative w-fit">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-[0_0_0_4px_rgba(255,155,81,0.22),0_16px_36px_rgba(255,155,81,0.18)]">
                <img
                  src="https://res.cloudinary.com/duvr3z2z0/image/upload/v1781435557/GURUNADARAO_zulbdo.jpg"
                  alt={name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Open-to-work badge */}
              <span className="absolute -bottom-2 -right-2 flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to internships
              </span>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--secondary)] m-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                Full-Stack & AI Engineer.<br />
                <span className="text-[var(--primary)]">Production-obsessed.</span>
              </h2>
              {story.map((line, i) => (
                <p key={i} className="text-[var(--text-secondary)] text-[1.02rem] leading-[1.75] m-0">
                  {line}
                </p>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {portfolioContent.socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-[var(--muted)] bg-white flex items-center justify-center text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:-translate-y-0.5 no-underline text-base"
                >
                  <i className={s.iconClass} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — stats grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[var(--muted)]/60 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-[2rem] font-bold leading-none tracking-tight text-[var(--secondary)] m-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stat.value}
                    </p>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)] mt-1 m-0">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quote card — spans full width */}
            <motion.blockquote
              variants={fadeUp}
              className="col-span-2 m-0 p-5 rounded-2xl bg-[var(--primary)]/6 border-l-4 border-[var(--primary)] italic text-[var(--secondary)] text-[0.95rem] leading-[1.7]"
            >
              <span className="text-[1.8rem] leading-none text-[var(--primary)] not-italic font-bold mr-1">"</span>
              {portfolioContent.quote}
              <footer className="mt-2 not-italic text-[0.75rem] font-semibold tracking-wide text-[var(--text-secondary)]">
                — {portfolioContent.quoteAuthor}
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
