import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";
import { staggerContainer, fadeInUp } from "../lib/motion";

export function Journey() {
  const academics = portfolioContent.academics;

  return (
    <section
      id="education"
      className="section-surface section-surface-a w-full py-10 border-t border-neutral-200/60"
    >
      <div className="edu-shell">
        {/* Label */}
        <motion.div
          {...fadeInUp}
          className="edu-header"
        >
          <GraduationCap size={16} className="edu-icon" />
          <span className="edu-label">Education</span>
        </motion.div>

        {/* Horizontal cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="edu-cards"
        >
          {academics.map((academic) => (
            <motion.article
              key={academic.title}
              variants={fadeInUp}
              className="edu-card"
            >
              <span className="edu-date">{academic.date}</span>
              <h4 className="edu-title">{academic.title}</h4>
              <p className="edu-institution">{academic.institution}</p>
              <div className="edu-footer">
                <span className="edu-score">
                  {academic.score} <em>{academic.scoreLabel}</em>
                </span>
                <span className="edu-badge">Completed</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;
