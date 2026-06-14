import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioContent";

const heroArt = new URL("../assets/Hero.svg", import.meta.url).href;

const typingTitles = [
  "Product Engineer",
  "Full-Stack Architect",
  "AI Integration Specialist",
];

export function Hero() {
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const fullText = typingTitles[subtitleIndex];
    let timeoutId: number;

    if (!isDeletingSubtitle && typedSubtitle === fullText) {
      timeoutId = window.setTimeout(() => setIsDeletingSubtitle(true), 2000);
    } else if (isDeletingSubtitle && typedSubtitle.length === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingSubtitle(false);
        setSubtitleIndex((i) => (i + 1) % typingTitles.length);
      }, 400);
    } else {
      timeoutId = window.setTimeout(() => {
        const nextLength = isDeletingSubtitle
          ? typedSubtitle.length - 1
          : typedSubtitle.length + 1;
        setTypedSubtitle(fullText.slice(0, nextLength));
      }, isDeletingSubtitle ? 30 : 60);
    }

    return () => window.clearTimeout(timeoutId);
  }, [typedSubtitle, isDeletingSubtitle, subtitleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[var(--background)] px-[var(--section-inline)] pr-[calc(var(--section-inline)+var(--rail-safe-space))]"
    >
      <div className="w-full max-w-[1120px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
        {/* Copy */}
        <motion.div
          className="flex-1 max-w-[760px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[var(--primary)] mb-4">
            {portfolioContent.heroTag}
          </p>

          <h1 className="text-[clamp(2.5rem,7vw,4.8rem)] font-extrabold leading-[1.06] tracking-tight text-[var(--secondary)] text-balance m-0">
            {portfolioContent.name}
          </h1>

          <p
            className="mt-4 text-[clamp(1.15rem,3vw,1.6rem)] font-semibold text-[var(--secondary)]"
            aria-label={typingTitles.join(", ")}
          >
            <span className="text-[var(--primary)]">{typedSubtitle}</span>
            <span className="text-[var(--primary)] ml-[0.08em] animate-[typingCursorBlink_0.9s_steps(1)_infinite]" aria-hidden="true">
              |
            </span>
          </p>

          <p className="mt-4 text-[var(--text-secondary)] text-[clamp(1rem,1.8vw,1.2rem)] max-w-[58ch] leading-[1.7]">
            {portfolioContent.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[var(--primary)] text-white font-semibold rounded-2xl px-5 py-3 text-sm transition hover:bg-[var(--primary-dark)] hover:-translate-y-px cursor-pointer border-0"
            >
              Contact Me
            </button>
            <a
              href="https://drive.google.com/file/d/1PdpUSUawQq0_hxJOGDyjMJiiLjV4c5K4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--secondary)] font-semibold rounded-2xl px-5 py-3 text-sm border border-[var(--muted)] transition hover:bg-[var(--background)] hover:-translate-y-px no-underline"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="flex-1 flex justify-end items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          aria-hidden="true"
        >
          <div className="relative w-full flex items-center justify-end">
            <div className="absolute inset-0 bg-radial from-[var(--primary)]/10 to-transparent pointer-events-none blur-xl" />
            <img
              src={heroArt}
              alt="Product Engineering Concept Illustration"
              className="block w-full max-w-[760px] h-auto ml-auto drop-shadow-[0_18px_32px_rgba(37,52,63,0.16)] transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
