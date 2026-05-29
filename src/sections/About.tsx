import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, WandSparkles } from "lucide-react";

import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Dialog } from "../components/ui/Dialog";
import { portfolioContent } from "../data/portfolioContent";
import { fadeInUp } from "../lib/motion";

const promptExamples = [
  "What is your approach to system architecture?",
  "Summarize your experience building applied AI workflows.",
  "Describe your product engineering philosophy.",
];

function buildGenAiResponse(prompt: string) {
  const value = prompt.trim().toLowerCase();

  if (!value) {
    return "Ask me about building or scaling software, and I'll deliver a crisp, production-grade product perspective.";
  }

  if (value.includes("architecture") || value.includes("system")) {
    return "System Architecture: I modularize frontends with dry component boundaries, establish API contracts, deploy stateless microservices, and decouple long-running workflows with worker patterns (e.g. n8n, Redis pipelines).";
  }

  if (value.includes("ai") || value.includes("genai") || value.includes("workflow")) {
    return "Applied AI & GenAI: I treat LLMs as discrete software modules. I pair them with structured schemas, verify precision with RAG (Retrieval-Augmented Generation), and handle complex steps using stateful agentic loops in LangGraph.";
  }

  if (value.includes("product") || value.includes("philosophy")) {
    return "Product Philosophy: I bridge engineering and design. Good products result from shipping fast, collecting real feedback, making responsive tactile UIs, and choice-fully managing technical debt.";
  }

  return "Response: That's a great engineering challenge. I'd begin by mapping user pathways, establishing database constraints, standing up a secure backend, and refining the front-end rendering cycle with polished UX.";
}

function ReactMark() {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="about-logo about-logo-react"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <g fill="none" stroke="currentColor" strokeWidth="3.6" opacity="0.9">
        <ellipse cx="60" cy="60" rx="28" ry="10.5" />
        <ellipse
          cx="60"
          cy="60"
          rx="28"
          ry="10.5"
          transform="rotate(60 60 60)"
        />
        <ellipse
          cx="60"
          cy="60"
          rx="28"
          ry="10.5"
          transform="rotate(120 60 60)"
        />
      </g>
      <circle cx="60" cy="60" r="5.5" fill="currentColor" />
    </motion.svg>
  );
}

function DartMark() {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className="about-logo about-logo-dart"
    >
      <defs>
        <linearGradient id="dartGradient" x1="14" y1="14" x2="82" y2="82">
          <stop offset="0%" stopColor="#56c1ff" />
          <stop offset="100%" stopColor="#2d73ff" />
        </linearGradient>
      </defs>
      <path
        d="M20 18h34l22 22v34H42L20 52V18Z"
        fill="url(#dartGradient)"
        opacity="0.95"
      />
      <path d="M54 18L20 52h22l34-34H54Z" fill="#d9f3ff" opacity="0.55" />
      <path d="M42 52h34v22H42V52Z" fill="#0c3c96" opacity="0.28" />
    </svg>
  );
}

function TransformTile({
  label,
  title,
  className,
}: {
  label: string;
  title: string;
  className: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className={`about-transform-tile cursor-default ${className}`}
    >
      <span>{label}</span>
      <strong>{title}</strong>
    </motion.div>
  );
}

export function About() {
  const [genAiOpen, setGenAiOpen] = useState(false);
  const [prompt, setPrompt] = useState(promptExamples[0]);
  const genAiResponse = useMemo(() => buildGenAiResponse(prompt), [prompt]);
  const aboutIllustration = new URL(
    "../assets/Illustrations/about.svg",
    import.meta.url,
  ).href;

  const webDomain =
    portfolioContent.domains.find((domain) => domain.id === "fullstack") ??
    portfolioContent.domains[0];
  const flutterDomain =
    portfolioContent.domains.find((domain) => domain.id === "appdev") ??
    portfolioContent.domains[1];
  const genAiDomain =
    portfolioContent.domains.find((domain) => domain.id === "genai") ??
    portfolioContent.domains[3];

  return (
    <section
      id="about"
      className="section-surface section-surface-a w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div 
          {...fadeInUp} 
          className="about-heading-wrap mb-10"
        >
          <p className="about-kicker text-[var(--primary-dark)]">About Me</p>
          <h2 className="about-section-title">
            A bento narrative connecting vision with execution.
          </h2>
          <p className="about-section-copy">
            A split architectural storyboard of the platforms I engineer: modular web systems, high-fidelity mobile apps, and context-rich AI pipelines.
          </p>
        </motion.div>

        <div className="about-bento-grid">
          {/* Bento Card 1: Portrait and Intro */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="about-bento-card about-bento-card-intro about-bento-span-2"
          >
            <Card className="about-card-surface h-full">
              <div className="about-card-inner about-card-inner-intro">
                <div className="about-avatar-shell">
                  <span className="about-avatar-glow" aria-hidden="true" />
                  <div className="about-avatar-frame">
                    <img
                      src={aboutIllustration}
                      alt="Illustrated avatar"
                      className="about-avatar-image"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="about-pill">Role Profile</span>
                    <span className="about-pill about-pill-muted">
                      {portfolioContent.heroTag}
                    </span>
                  </div>

                  <div className="space-y-3 max-w-2xl">
                    <h3 className="about-card-title">
                      I&apos;m {portfolioContent.name}.
                    </h3>
                    <h4 className="text-lg font-semibold text-[var(--primary-dark)]">
                      {portfolioContent.subtitle}
                    </h4>
                    <p className="about-card-copy">
                      {portfolioContent.summary} I design digital experiences where motion, clean typography, and strict system architecture converge.
                    </p>
                    <p className="about-card-fact">
                      Core focus: Keeping production metrics high, load times minimal, and UI interfaces polished.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bento Card 2: Web Dev */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="about-bento-card"
          >
            <Card className="about-card-surface h-full">
              <div className="about-card-inner">
                <div className="about-card-header">
                  <div>
                    <span className="about-card-kicker text-[var(--primary-dark)]">Web Systems</span>
                    <h3 className="about-card-title-sm text-neutral-900 font-semibold">
                      React & Tailwind Flows
                    </h3>
                  </div>
                  <ReactMark />
                </div>

                <p className="about-card-copy about-card-copy-tight text-neutral-600">
                  Responsive single page designs, hardware-accelerated CSS transforms, and fluid micro-interactions.
                </p>

                <div className="about-transform-grid">
                  <TransformTile
                    label="motion"
                    title="translate"
                    className="about-transform-rotate"
                  />
                  <TransformTile
                    label="hover"
                    title="spring"
                    className="about-transform-scale"
                  />
                  <TransformTile
                    label="canvas"
                    title="hardware"
                    className="about-transform-skew"
                  />
                </div>

                <div className="about-tag-row">
                  {webDomain.tags.slice(0, 3).map((tag) => (
                    <span key={`web-${tag}`} className="about-mini-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bento Card 3: Mobile Dev */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="about-bento-card"
          >
            <Card className="about-card-surface h-full">
              <div className="about-card-inner">
                <div className="about-card-header">
                  <div>
                    <span className="about-card-kicker text-[var(--primary-dark)]">
                      Mobile Engineering
                    </span>
                    <h3 className="about-card-title-sm text-neutral-900 font-semibold">
                      Tactile Device Simulator
                    </h3>
                  </div>
                  <DartMark />
                </div>

                <p className="about-card-copy about-card-copy-tight text-neutral-600">
                  Cross-platform Flutter components styled to mirror native iOS and Android interactions.
                </p>

                <motion.div
                  className="about-phone-shell"
                  whileHover={{ rotate: 3, y: -2 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="about-phone border border-neutral-300 shadow-lg">
                    <div className="about-phone-notch" />
                    <div className="about-phone-screen">
                      <div className="about-phone-card">
                        <Sparkles size={14} className="text-[var(--primary)]" />
                        <span>Fluid transitions</span>
                      </div>
                      <div className="about-phone-card about-phone-card-accent">
                        <Smartphone size={14} className="text-white" />
                        <span>Device native feel</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="about-tag-row">
                  {flutterDomain.tags.slice(0, 3).map((tag) => (
                    <span key={`flutter-${tag}`} className="about-mini-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bento Card 4: GenAI Interactive Console */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="about-bento-card about-bento-card-genai about-bento-span-2"
          >
            <Card className="about-card-surface h-full">
              <div className="about-card-inner about-genai-card-inner">
                <div className="about-card-header about-card-header-wide">
                  <div>
                    <span className="about-card-kicker text-[var(--primary-dark)]">AI Architectures</span>
                    <h3 className="about-card-title-sm text-neutral-900 font-semibold">
                      Applied AI Sandbox Console
                    </h3>
                  </div>
                  <WandSparkles size={22} className="about-genai-icon text-[var(--primary)]" />
                </div>

                <div className="about-genai-grid-pattern" aria-hidden="true" />

                <div className="about-genai-preview bg-neutral-900/5 border border-neutral-950/10 rounded-2xl p-4 space-y-3 font-mono text-xs">
                  <div className="about-chat-bubble about-chat-bubble-prompt bg-neutral-900 text-white rounded-xl p-3 border border-neutral-800">
                    <span className="text-[10px] text-[var(--primary)] font-bold uppercase tracking-wider block mb-1">PROMPT</span>
                    <p>&quot;{prompt}&quot;</p>
                  </div>
                  <div className="about-chat-bubble about-chat-bubble-response bg-white text-neutral-800 rounded-xl p-3 border border-neutral-200 shadow-sm">
                    <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider block mb-1">CONSOLE RESPONSE</span>
                    <p>{genAiResponse}</p>
                  </div>
                </div>

                <div className="about-card-footer">
                  <div className="about-tag-row">
                    {genAiDomain.tags.slice(0, 4).map((tag) => (
                      <span key={`genai-${tag}`} className="about-mini-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant="secondary"
                    className="about-try-button inline-flex items-center gap-2"
                    onClick={() => setGenAiOpen(true)}
                  >
                    Query Engineer
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <Dialog
        open={genAiOpen}
        title="Query the Product Engineer"
        onClose={() => setGenAiOpen(false)}
      >
        <div className="about-dialog-shell space-y-4">
          <label className="about-dialog-label block text-sm font-semibold text-neutral-700" htmlFor="about-genai-input">
            Enter your product or systems question
          </label>
          <textarea
            id="about-genai-input"
            className="about-dialog-textarea w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-[var(--primary)]"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            rows={3}
          />

          <div className="about-dialog-quickfills flex flex-wrap gap-2 py-1">
            {promptExamples.map((example) => (
              <button
                key={example}
                type="button"
                className="about-dialog-chip text-xs rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-neutral-600 hover:bg-neutral-100 transition"
                onClick={() => setPrompt(example)}
              >
                {example}
              </button>
            ))}
          </div>

          <div className="about-dialog-response bg-neutral-900 text-neutral-100 rounded-xl p-4 font-mono text-xs border border-neutral-850">
            <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider block mb-1">STRUCTURED RESPONSE</span>
            <p className="leading-relaxed">{genAiResponse}</p>
          </div>

          <div className="flex justify-end pt-2">
            <Button type="button" onClick={() => setGenAiOpen(false)}>
              Close Sandbox
            </Button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}

export default About;
