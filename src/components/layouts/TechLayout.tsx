'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Layers } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Tech Innovator Layout
 * Creative, asymmetrical layout with overlapping sections
 * Dynamic positioning, parallax effects, floating elements
 */
export default function TechLayout() {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-[var(--theme-primary)]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-40 left-10 w-96 h-96 bg-[var(--theme-secondary)]/10 rounded-full blur-3xl"
        />
      </div>

      <Navigation />
      
      {/* Hero with Overlapping Design */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--theme-primary)]/20 rounded-lg rotate-12 blur-xl" />
            <div className="relative bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-2xl p-8 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-[var(--theme-text)]">Elijah</span>
                <br />
                <span className="text-[var(--theme-primary)]">Winter</span>
              </h1>
              <p className="text-xl text-[var(--theme-text-secondary)]">
                Security Engineer | Developer | IT Specialist
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--theme-secondary)]/20 rounded-lg -rotate-12 blur-xl" />
            <div className="relative bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="text-[var(--theme-primary)]" size={32} />
                <Zap className="text-[var(--theme-secondary)]" size={32} />
                <Layers className="text-[var(--theme-accent)]" size={32} />
              </div>
              <p className="text-[var(--theme-text-secondary)] text-lg">
                Building secure systems, automating workflows, and bridging the gap between development and security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Asymmetrical Projects Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl font-bold text-[var(--theme-text)] mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)]" />
          </motion.div>
          <ProjectsSection />
        </div>
      </section>

      {/* Overlapping Skills Section */}
      <section className="relative z-10 py-20 px-4 -mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-right"
          >
            <h2 className="text-5xl font-bold text-[var(--theme-text)] mb-4">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--theme-secondary)] to-[var(--theme-primary)] ml-auto" />
          </motion.div>
          <div className="relative -mt-32 pt-32">
            <SkillsSection />
          </div>
        </div>
      </section>

      {/* Floating Freelance Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <FreelanceSection />
        </motion.div>
      </section>

      {/* Contact with Creative Layout */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </section>

      <ThemeToggle />
    </main>
  );
}

