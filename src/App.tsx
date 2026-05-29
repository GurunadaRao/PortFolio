import { useEffect, useState } from "react";
import type { Project } from "./types/portfolio";

import { SideRail } from "./components/layout/SideRail";
import { Footer } from "./components/layout/Footer";
import { Dialog } from "./components/ui/Dialog";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Capabilities } from "./sections/Capabilities";
import { Journey } from "./sections/Journey";
import { Work } from "./sections/Work";
import { Testimonials } from "./sections/Testimonials";
import { ContactSection } from "./sections/ContactSection";
import { links } from "./data/constants";

export default function App() {
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]>("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            if (isNavSection(sectionId)) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.2 },
    );

    links.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Scroll fallback keeps nav highlight in sync when observer timings vary.
    window.addEventListener("scroll", updateActiveFromViewport, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveFromViewport);
    updateActiveFromViewport();

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onEscape);
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
        <Capabilities />
        <Journey />
        <Work onSelectProject={setSelectedProject} />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />

      <Dialog
        open={Boolean(selectedProject)}
        title={selectedProject?.title ?? "Project Details"}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject ? (
          <div className="space-y-4 font-sans text-neutral-800">
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 block mb-1">
                System Blueprint
              </span>
              <p className="dialog-tech w-full font-mono text-xs text-neutral-700 bg-neutral-50 border border-neutral-100 p-2.5 rounded-lg">
                {selectedProject.tech}
              </p>
            </div>
            
            <div className="space-y-2 mt-4">
              <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 block">
                Deliverable Details
              </span>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="dialog-links mt-6 pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
              {selectedProject.links.map((link) => (
                <a
                  key={`${selectedProject.title}-${link.label}`}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold rounded-lg bg-neutral-900 px-4 py-2.5 text-white transition hover:bg-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </Dialog>
    </div>
  );
}
