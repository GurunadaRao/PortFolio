import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioContent";
import { Button } from "../components/ui/Button";

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
      timeoutId = window.setTimeout(() => {
        setIsDeletingSubtitle(true);
      }, 2000); // Wait longer on complete text
    } else if (isDeletingSubtitle && typedSubtitle.length === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingSubtitle(false);
        setSubtitleIndex((currentIndex) => (currentIndex + 1) % typingTitles.length);
      }, 400); // Transition buffer
    } else {
      timeoutId = window.setTimeout(
        () => {
          const nextLength = isDeletingSubtitle ? typedSubtitle.length - 1 : typedSubtitle.length + 1;
          setTypedSubtitle(fullText.slice(0, nextLength));
        },
        isDeletingSubtitle ? 30 : 60 // Rapid typing speed
      );
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [typedSubtitle, isDeletingSubtitle, subtitleIndex]);

  return (
    <section id="hero" className="screen-section reveal-block">
      <div className="content-shell hero-grid w-full">
        <motion.div 
          className="hero-copy"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{portfolioContent.heroTag}</p>
          <h1 className="hero-name">{portfolioContent.name}</h1>
          <p className="hero-subtitle" aria-label={typingTitles.join(", ")}>
            <span className="text-[var(--primary)]">{typedSubtitle}</span>
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
          </p>
          <p className="hero-summary">{portfolioContent.summary}</p>
          
          <div className="hero-actions">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          aria-hidden="true"
        >
          <div className="relative w-full flex items-center justify-end">
            {/* Ambient system nodes glowing */}
            <div className="absolute inset-0 bg-radial-gradient from-[var(--primary)]/10 to-transparent pointer-events-none filter blur-xl" />
            <img 
              src={heroArt} 
              alt="Product Engineering Concept Illustration" 
              className="hero-illustration transition-all hover:scale-[1.02] duration-700" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
