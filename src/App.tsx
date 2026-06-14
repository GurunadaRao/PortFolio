import { useEffect, useState } from "react";

import { SideRail } from "./components/layout/SideRail";
import { Footer } from "./components/layout/Footer";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Testimonials } from "./sections/Testimonials";
import { ContactSection } from "./sections/ContactSection";
import { links } from "./data/constants";

export default function App() {
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]>("hero");

  useEffect(() => {
    const isNavSection = (id: string): id is (typeof links)[number] =>
      (links as readonly string[]).includes(id as any);

    const updateActiveFromViewport = () => {
      const viewportAnchor = window.innerHeight * 0.42;
      let bestMatch: (typeof links)[number] = "hero";
      let bestDistance = Number.POSITIVE_INFINITY;

      links.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isInViewport) return;
        const distance = Math.abs(rect.top - viewportAnchor);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestMatch = id;
        }
      });

      setActiveSection(bestMatch);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            const sectionId = entry.target.id;
            if (isNavSection(sectionId)) setActiveSection(sectionId);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.2 },
    );

    links.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", updateActiveFromViewport, { passive: true });
    window.addEventListener("resize", updateActiveFromViewport);
    updateActiveFromViewport();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveFromViewport);
      window.removeEventListener("resize", updateActiveFromViewport);
    };
  }, []);

  return (
    <div className="portfolio-app min-h-screen">
      <SideRail activeSection={activeSection} />

      <main className="w-full overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
