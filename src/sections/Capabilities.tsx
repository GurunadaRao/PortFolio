import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Code2, BrainCircuit, Database, Users } from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";
import { fadeInUp, staggerContainer } from "../lib/motion";

type CategoryKey = "Engineering" | "AI & Automation" | "Databases & Cloud" | "Leadership & Strategy";

export function Capabilities() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("Engineering");

  const tabIcons: Record<CategoryKey, any> = {
    "Engineering": Code2,
    "AI & Automation": BrainCircuit,
    "Databases & Cloud": Database,
    "Leadership & Strategy": Users,
  };

  const getCapabilitiesContent = (tab: CategoryKey) => {
    switch (tab) {
      case "Engineering":
        return {
          title: "Production Software Engineering",
          summary: "Architecting decoupled, high-performance web systems and native-feel apps using modern, scalable tech stacks.",
          points: portfolioContent.expertise[0].points,
          badges: ["TypeScript", "JavaScript", "React.js", "Next.js", "Node.js", "Flutter", "Java", "C"],
        };
      case "AI & Automation":
        return {
          title: "Applied AI & Autonomous Systems",
          summary: "Implementing intelligent workflows, agentic routing matrices, and retrieval networks that connect complex architectures.",
          points: portfolioContent.expertise[1].points,
          badges: ["LangChain", "LangGraph", "n8n", "OpenAI API", "Pinecone", "Webhooks", "RAG", "GraphRAG"],
        };
      case "Databases & Cloud":
        return {
          title: "Cloud Infrastructures & Persistence",
          summary: "Designing robust database schemas, secure data storage layouts, and deploying isolated, reliable micro-containers.",
          points: portfolioContent.expertise[2].points,
          badges: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Firebase", "Docker", "SQL"],
        };
      case "Leadership & Strategy":
        return {
          title: "Product Execution & Mentorship",
          summary: "Translating ambiguous customer specifications into actionable roadmaps while guiding developer squads toward high velocity.",
          points: portfolioContent.expertise[3].points,
          badges: ["Git", "GitHub", "Sprint Planning", "Code Review", "Agile Execution", "Product Mockups", "Postman"],
        };
    }
  };

  const currentTab = getCapabilitiesContent(activeTab);
  const categories = Object.keys(tabIcons) as CategoryKey[];

  return (
    <section
      id="skills"
      className="section-surface section-surface-b w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Capabilities
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-sky-700">
              <Sparkles size={12} />
              Full Stack & AI
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Expertise meets implementation: A developer-centric capabilities deck.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
            A cohesive deck detailing how I bridge system engineering, database modeling, autonomous AI routing, and product execution.
          </p>
        </motion.div>

        {/* Dynamic Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-200 pb-4">
          {categories.map((tab) => {
            const Icon = tabIcons[tab];
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                  isActive
                    ? "text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full bg-neutral-900"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={14} />
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Core Description Card */}
            <article className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-neutral-600">
                  Focus Area
                </span>
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {currentTab.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {currentTab.summary}
                </p>
                
                <div className="border-t border-neutral-100 pt-6 mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    Core Architectural Standards
                  </h4>
                  <ul className="space-y-3">
                    {currentTab.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-4">
                <span className="text-[10px] tracking-wider uppercase text-neutral-400">
                  Active in production
                </span>
                <span className="text-xs font-semibold text-neutral-900 inline-flex items-center gap-1">
                  Proven Delivery
                  <ArrowRight size={14} />
                </span>
              </div>
            </article>

            {/* Stack Tags Bento Card */}
            <article className="lg:col-span-5 bg-neutral-50 rounded-3xl border border-neutral-200 p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-white border border-neutral-200 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-neutral-600">
                    Tech Stack & Tools
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    {currentTab.badges.length} Skills
                  </span>
                </div>
                
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Selected technologies, frameworks, and deployment interfaces mapped to this capabilities pillar:
                </p>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {currentTab.badges.map((badge) => (
                    <motion.span
                      key={badge}
                      variants={fadeInUp}
                      whileHover={{ y: -1 }}
                      className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition hover:border-neutral-350 cursor-default"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div className="mt-8 border-t border-neutral-200/60 pt-4 text-center lg:text-left">
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                  Decoupled, tested, and continuously deployed.
                </p>
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Capabilities;
