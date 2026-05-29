import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, FolderGit2 } from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";
import type { Project } from "../types/portfolio";
import { fadeInUp, staggerContainer } from "../lib/motion";

export function Work({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  const projects = portfolioContent.projects as Project[];

  return (
    <section
      id="projects"
      className="section-surface section-surface-a w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Work
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-rose-700">
              <Sparkles size={12} />
              Selected Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Selected products built with focus, precision, and impact.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
            Production initiatives, automated AI agents, and cross-platform apps designed and engineered from concept to deploy.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const primaryLink = project.links.find((link) => !link.disabled);

            return (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                className="group relative rounded-3xl border border-neutral-200 bg-white p-6 transition flex flex-col justify-between hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition">
                        <FolderGit2 size={18} />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-[var(--primary-dark)] transition">
                        {project.title}
                      </h3>
                    </div>
                    {project.status ? (
                      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase text-neutral-500">
                        {project.status}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="mt-4 text-[10px] font-semibold tracking-wider uppercase text-neutral-400">
                    Tech Blueprint
                  </p>
                  <p className="mt-1 text-xs text-neutral-700 font-mono">
                    {project.tech}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-5">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-black"
                  >
                    System Spec Sheet
                  </button>

                  {primaryLink ? (
                    <a
                      href={primaryLink.href}
                      target={primaryLink.external ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-600 transition hover:bg-neutral-50 hover:text-neutral-900"
                    >
                      {primaryLink.label === "Visit" || primaryLink.label === "Demo" ? "Launch App" : primaryLink.label}
                      <ArrowUpRight size={13} />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
