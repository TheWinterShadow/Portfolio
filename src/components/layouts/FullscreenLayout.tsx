'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Fullscreen Video/Image Layout
 * Hero-driven with fullscreen backgrounds, cinematic experience
 */
export default function FullscreenLayout() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'projects', 'skills', 'freelance', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      {/* Fullscreen Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-[var(--theme-primary)]/30 via-[var(--theme-secondary)]/20 to-[var(--theme-accent)]/30"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-6">
            <span className="text-white drop-shadow-2xl">ELIJAH</span>
            <br />
            <span className="text-[var(--theme-primary)] drop-shadow-2xl">WINTER</span>
          </h1>
          <p className="text-3xl text-white drop-shadow-lg mb-8">
            Security Engineer | Developer | IT Specialist
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white text-xl"
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </section>

      {/* Fullscreen Sections */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--theme-surface)]/50 backdrop-blur-sm" />
        <div className="relative z-10 w-full">
          <ProjectsSection />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--theme-primary)]/20 to-[var(--theme-secondary)]/20" />
        <div className="relative z-10 w-full">
          <SkillsSection />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--theme-surface)]/50 backdrop-blur-sm" />
        <div className="relative z-10 w-full">
          <FreelanceSection />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--theme-secondary)]/20 to-[var(--theme-accent)]/20" />
        <div className="relative z-10 w-full">
          <ContactSection />
        </div>
      </section>

      {/* Section Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => {
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className={`w-2 h-8 rounded-full transition-all ${
              currentSection === index
                ? 'bg-[var(--theme-primary)] h-12'
                : 'bg-[var(--theme-text-secondary)] hover:bg-[var(--theme-primary)]/50'
            }`}
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>

      <ThemeToggle />
    </main>
  );
}

