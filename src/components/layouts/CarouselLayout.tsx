'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Carousel/Slideshow Layout
 * Slide-based navigation, one section per slide
 */
export default function CarouselLayout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 'hero', title: 'Home', component: 'hero' },
    { id: 'projects', title: 'Projects', component: 'projects' },
    { id: 'skills', title: 'Skills', component: 'skills' },
    { id: 'freelance', title: 'Freelance', component: 'freelance' },
    { id: 'contact', title: 'Contact', component: 'contact' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className="min-h-screen overflow-hidden relative" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      {/* Slide Container */}
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  <span className="text-[var(--theme-text)]">Elijah</span>
                  <br />
                  <span className="text-[var(--theme-primary)]">Winter</span>
                </h1>
                <p className="text-2xl text-[var(--theme-text-secondary)] mb-8">
                  Security Engineer | Developer | IT Specialist
                </p>
                <p className="text-lg text-[var(--theme-text-secondary)]">
                  Building secure systems, automating workflows, and bridging the gap between development and security.
                </p>
              </div>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 overflow-y-auto"
            >
              <div className="h-full py-20">
                <ProjectsSection />
              </div>
            </motion.div>
          )}

          {currentSlide === 2 && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 overflow-y-auto"
            >
              <div className="h-full py-20">
                <SkillsSection />
              </div>
            </motion.div>
          )}

          {currentSlide === 3 && (
            <motion.div
              key="freelance"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 overflow-y-auto"
            >
              <div className="h-full py-20">
                <FreelanceSection />
              </div>
            </motion.div>
          )}

          {currentSlide === 4 && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 overflow-y-auto"
            >
              <div className="h-full py-20">
                <ContactSection />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] hover:bg-[var(--theme-primary)]/10 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] hover:bg-[var(--theme-primary)]/10 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-[var(--theme-primary)] w-8'
                : 'bg-[var(--theme-text-secondary)] hover:bg-[var(--theme-primary)]/50'
            }`}
            aria-label={`Go to ${slide.title}`}
          />
        ))}
      </div>

      <ThemeToggle />
    </main>
  );
}

