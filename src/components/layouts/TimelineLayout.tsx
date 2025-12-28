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
 * Timeline Story Layout
 * Narrative flow with timeline progression
 * Vertical timeline with connecting lines
 */
export default function TimelineLayout() {
  const timelineItems = [
    { id: 'hero', title: 'Introduction', component: 'hero' },
    { id: 'projects', title: 'Projects', component: 'projects' },
    { id: 'skills', title: 'Skills', component: 'skills' },
    { id: 'freelance', title: 'Freelance', component: 'freelance' },
    { id: 'contact', title: 'Contact', component: 'contact' },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--theme-border)] hidden md:block" />
        
        <div className="relative">
          {/* Hero Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative mb-32 md:mb-40"
          >
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 text-right">
                <div className="inline-block w-4 h-4 bg-[var(--theme-primary)] rounded-full border-4 border-[var(--theme-bg)] z-10 relative mb-4" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-[var(--theme-text)]">Elijah</span>
                  <br />
                  <span className="text-[var(--theme-primary)]">Winter</span>
                </h1>
                <p className="text-xl text-[var(--theme-text-secondary)]">
                  Security Engineer | Developer | IT Specialist
                </p>
              </div>
            </div>
          </motion.div>

          {/* Projects Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-32 md:mb-40"
          >
            <div className="md:flex md:items-center md:flex-row-reverse">
              <div className="md:w-1/2 md:pl-8 text-left">
                <div className="inline-block w-4 h-4 bg-[var(--theme-secondary)] rounded-full border-4 border-[var(--theme-bg)] z-10 relative mb-4" />
              </div>
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-6">Projects</h2>
                <ProjectsSection />
              </div>
            </div>
          </motion.div>

          {/* Skills Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-32 md:mb-40"
          >
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 text-right">
                <div className="inline-block w-4 h-4 bg-[var(--theme-accent)] rounded-full border-4 border-[var(--theme-bg)] z-10 relative mb-4" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-6">Skills</h2>
                <SkillsSection />
              </div>
            </div>
          </motion.div>

          {/* Freelance Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-32 md:mb-40"
          >
            <div className="md:flex md:items-center md:flex-row-reverse">
              <div className="md:w-1/2 md:pl-8 text-left">
                <div className="inline-block w-4 h-4 bg-[var(--theme-primary)] rounded-full border-4 border-[var(--theme-bg)] z-10 relative mb-4" />
              </div>
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-6">Freelance</h2>
                <FreelanceSection />
              </div>
            </div>
          </motion.div>

          {/* Contact Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 text-right">
                <div className="inline-block w-4 h-4 bg-[var(--theme-secondary)] rounded-full border-4 border-[var(--theme-bg)] z-10 relative mb-4" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-6">Contact</h2>
                <ContactSection />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ThemeToggle />
    </main>
  );
}

