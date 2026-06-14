import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Container,
  Cpu,
  Layout,
  Trophy,
} from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 size={18} />,
  Backend: <Server size={18} />,
  Databases: <Database size={18} />,
  DevOps: <Container size={18} />,
  "AI Engineering": <Cpu size={18} />,
  Frontend: <Layout size={18} />,
  "Problem Solving": <Trophy size={18} />,
};

export function Skills() {
  const { skillCategories } = portfolioContent;
  const categories = Object.entries(skillCategories);

  return (
    <section id="skills" className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 pr-[calc(1.5rem+5.2rem)]">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-[var(--primary-dark)] mb-4"
        >
          // skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[var(--secondary)] leading-[1.08] mb-12 m-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The full engineering stack.
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {categories.map(([category, skills]) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="group flex flex-col gap-4 p-6 rounded-2xl bg-[#f8fafb] border border-[var(--muted)]/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--primary)]/30"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                  {categoryIcons[category] ?? <Code2 size={18} />}
                </div>
                <h3
                  className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--secondary)] m-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[0.65rem] font-medium px-2.5 py-1 rounded-md bg-white border border-[var(--muted)]/80 text-[var(--text-secondary)] transition-colors duration-150 hover:border-[var(--primary)]/40 hover:text-[var(--primary-dark)]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
