'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { useState } from 'react';
import { Project } from '@/types/project';

/**
 * Grid-Based Layout
 * Masonry grid layout with dynamic positioning
 * Pinterest-style card arrangement
 */
export default function GridLayout() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      {/* Hero in Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-[var(--theme-text)]">Elijah</span>
              <br />
              <span className="text-[var(--theme-primary)]">Winter</span>
            </h1>
            <p className="text-xl text-[var(--theme-text-secondary)]">
              Security Engineer | Developer | IT Specialist
            </p>
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--theme-text)] mb-8">Projects</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <SkillsSection />
        </div>
      </section>

      {/* Freelance Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <FreelanceSection />
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </section>

      <ThemeToggle />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}

