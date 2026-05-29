import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, GraduationCap, Briefcase } from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";
import { fadeInUp, staggerContainer } from "../lib/motion";

export function Journey() {
  const experiences = portfolioContent.timeline;
  const academics = portfolioContent.academics;

  return (
    <section
      id="experience"
      className="section-surface section-surface-a w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Journey
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-lime-200 bg-lime-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-lime-700">
              <Sparkles size={12} />
              Delivery Timeline
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Milestones shaped by ownership, scale, and delivery.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            A progressive record of leadership, professional shipping, and academic fundamentals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Professional Journey (Timeline style) */}
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <Briefcase size={18} className="text-neutral-500" />
              <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                Professional Experience
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-8 relative pl-6 border-l border-neutral-200"
            >
              {experiences.map((exp) => (
                <motion.article
                  key={`${exp.title}-${exp.organization}`}
                  variants={fadeInUp}
                  className="group relative bg-white border border-neutral-200 rounded-3xl p-6 transition hover:shadow-sm"
                >
                  {/* Glowing Timeline Dot */}
                  <span className="absolute -left-[31px] top-6 h-4.5 w-4.5 rounded-full border-2 border-white bg-neutral-900 ring-4 ring-neutral-100 transition group-hover:bg-[var(--primary)] group-hover:ring-[var(--primary)]/20" />

                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                      {exp.date}
                    </span>
                    <span className="rounded-full border border-neutral-100 bg-neutral-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] uppercase text-neutral-600">
                      {exp.tags?.[0] ?? "Impact"}
                    </span>
                  </div>

                  <h4 className="mt-2 text-xl font-semibold text-neutral-900">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-neutral-600 font-medium mt-0.5">
                    {exp.organization}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-neutral-600 leading-relaxed border-b border-neutral-100 pb-4">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-neutral-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.metrics?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2.5 pt-2">
                      {exp.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-neutral-100 bg-neutral-50 px-3.5 py-2 shadow-sm flex flex-col justify-center"
                        >
                          <p className="text-sm font-bold text-neutral-900 leading-none">
                            {metric.value}
                          </p>
                          <p className="text-[9px] tracking-wider uppercase text-neutral-500 mt-1 font-semibold leading-none">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Academic Journey */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <GraduationCap size={18} className="text-neutral-500" />
              <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                Academic Background
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {academics.map((academic) => (
                <motion.article
                  key={academic.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:shadow-sm"
                >
                  <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                    {academic.date}
                  </span>
                  
                  <h4 className="mt-2 text-lg font-semibold text-neutral-900">
                    {academic.title}
                  </h4>
                  
                  <p className="text-sm text-neutral-600 mt-0.5">
                    {academic.institution}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <p className="inline-flex rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
                      {academic.score} {academic.scoreLabel}
                    </p>
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] uppercase text-emerald-700">
                      Completed
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
