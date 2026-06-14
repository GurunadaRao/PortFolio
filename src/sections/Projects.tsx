import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

function TechPill({ tag }: { tag: string }) {
  return (
    <span
      className="text-[0.65rem] font-medium px-2.5 py-1 rounded-md bg-[var(--primary)]/8 border border-[var(--primary)]/20 text-[var(--primary-dark)] whitespace-nowrap"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {tag}
    </span>
  );
}

function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  const colors: Record<string, string> = {
    Live: "bg-emerald-50 border-emerald-200 text-emerald-700",
    GitHub: "bg-neutral-50 border-neutral-200 text-neutral-600",
    "Under Development": "bg-amber-50 border-amber-200 text-amber-700",
  };
  return (
    <span className={`text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colors[status] ?? colors["GitHub"]}`}>
      {status}
    </span>
  );
}

export function Projects() {
  const projects = portfolioContent.projects;
  const featured = projects.find((p) => p.featured);
  const grid = projects.filter((p) => !p.featured);

  const techList = (tech: string) => tech.split("·").map((t) => t.trim());

  return (
    <section id="projects" className="w-full py-20 md:py-28 bg-[#f8fafb]">
      <div className="max-w-[1120px] mx-auto px-6 pr-[calc(1.5rem+5.2rem)]">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-[var(--primary-dark)] mb-4"
        >
          // projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[var(--secondary)] leading-[1.08] mb-10 m-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Things I've built and shipped.
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-5"
        >
          {/* ── Featured Card ── */}
          {featured && (
            <motion.div
              variants={fadeUp}
              className="group relative bg-white border border-[var(--muted)]/60 rounded-2xl p-7 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--primary)]/30 overflow-hidden"
            >
              {/* Subtle ambient glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5 relative">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${featured.iconClass} text-[var(--primary)] text-lg`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xl font-bold text-[var(--secondary)] m-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {featured.title}
                      </h3>
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--primary)] text-white">
                        Lead Project
                      </span>
                    </div>
                    <span className="text-[0.68rem] text-[var(--text-secondary)] font-medium">{featured.year}</span>
                  </div>
                </div>
                <StatusBadge status={featured.status} />
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-[1.8] mb-5 relative max-w-3xl m-0">
                {featured.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-6 relative">
                {techList(featured.tech).map((tag) => <TechPill key={tag} tag={tag} />)}
              </div>

              {/* Links */}
              <div className="flex gap-3 relative">
                {featured.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 no-underline ${
                      link.label === "GitHub"
                        ? "bg-[var(--secondary)] text-white hover:bg-[var(--secondary)]/80"
                        : "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                    }`}
                  >
                    {link.label === "GitHub" ? <i className="fab fa-github text-[0.75rem]" /> : <ExternalLink size={13} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Grid Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {grid.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="group flex flex-col bg-white border border-[var(--muted)]/60 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--primary)]/30"
              >
                {/* Icon + title */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                      <i className={`${project.iconClass} text-[var(--primary)]`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--secondary)] m-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.title}
                      </h3>
                      <span className="text-[0.65rem] text-[var(--text-secondary)] font-medium">{project.year}</span>
                    </div>
                  </div>
                  <StatusBadge status={project.status} />
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-[1.75] mb-4 flex-1 m-0 line-clamp-4">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {techList(project.tech).map((tag) => <TechPill key={tag} tag={tag} />)}
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-auto">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 no-underline ${
                        link.label === "GitHub"
                          ? "bg-[var(--secondary)] text-white hover:bg-[var(--secondary)]/80"
                          : "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                      }`}
                    >
                      {link.label === "GitHub" ? <i className="fa-brands fa-github text-[12px] leading-none" /> : <ExternalLink size={12} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
