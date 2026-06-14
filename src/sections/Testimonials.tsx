import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "../data/constants";
import { fadeInUp } from "../lib/motion";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Autoplay slider gently
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      className="section-surface section-surface-b w-full py-20 md:py-28"
    >
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="flex justify-center items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Testimonials
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-cyan-700">
              <Sparkles size={12} />
              Industry Trust
            </span>
          </div>
          
          <h2 className="text-4xl font-semibold tracking-tight text-stone-100 leading-[1.12]">
            Trusted by founders and team leads.
          </h2>
        </motion.div>

        {/* High-Fidelity Testimonial Slider Canvas */}
        <div className="relative bg-white rounded-[2rem] border border-neutral-200 p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col justify-between">
          <Quote className="absolute top-6 right-8 h-16 w-16 text-neutral-100 rotate-180 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.article
              key={activeIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-6"
            >
              <p className="text-base md:text-lg leading-relaxed text-neutral-700 font-medium italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-4 border-t border-neutral-100 pt-6">
                <img
                  className="h-14 w-14 rounded-full object-cover border-2 border-neutral-100"
                  src={current.image}
                  alt={current.name}
                />
                <div>
                  <h3 className="text-base font-bold text-neutral-900 leading-tight">
                    {current.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                    {current.role}
                  </p>
                </div>
                
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-emerald-700">
                  Partner Verified
                </span>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Slider Controllers */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="h-11 w-11 rounded-full border border-neutral-200 bg-white text-neutral-600 flex items-center justify-center shadow-sm transition hover:bg-neutral-50 hover:text-neutral-950 active:scale-95"
              aria-label="Previous quote"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="flex gap-1.5 px-3">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-neutral-950" : "w-2 bg-neutral-200"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="h-11 w-11 rounded-full border border-neutral-200 bg-white text-neutral-600 flex items-center justify-center shadow-sm transition hover:bg-neutral-50 hover:text-neutral-950 active:scale-95"
              aria-label="Next quote"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
