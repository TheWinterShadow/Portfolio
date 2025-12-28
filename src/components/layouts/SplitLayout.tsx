'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Split-Screen Layout
 * Two-column focused design
 * Content on left, visuals/info on right
 */
export default function SplitLayout() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      {/* Hero Split */}
      <section className="min-h-screen flex">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[var(--theme-surface)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-lg"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-[var(--theme-text)]">Elijah</span>
              <br />
              <span className="text-[var(--theme-primary)]">Winter</span>
            </h1>
            <p className="text-xl text-[var(--theme-text-secondary)] mb-6">
              Security Engineer | Developer | IT Specialist
            </p>
            <p className="text-[var(--theme-text-secondary)]">
              Building secure systems, automating workflows, and bridging the gap between development and security.
            </p>
          </motion.div>
        </div>
        <div className="hidden md:flex w-1/2 items-center justify-center p-8 bg-[var(--theme-bg)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-64 h-64 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Projects Split */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 bg-[var(--theme-bg)]">
          <ProjectsSection />
        </div>
        <div className="w-full md:w-1/2 p-8 bg-[var(--theme-surface)]">
          <SkillsSection />
        </div>
      </section>

      {/* Freelance Split */}
      <section className="flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-1/2 p-8 bg-[var(--theme-bg)]">
          <FreelanceSection />
        </div>
        <div className="w-full md:w-1/2 p-8 bg-[var(--theme-surface)]">
          <ContactSection />
        </div>
      </section>

      <ThemeToggle />
    </main>
  );
}

