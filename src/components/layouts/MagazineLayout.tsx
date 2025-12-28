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
 * Magazine/Editorial Layout
 * Multi-column magazine style with large images, pull quotes, editorial design
 */
export default function MagazineLayout() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      {/* Magazine Cover */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-8xl md:text-9xl font-bold leading-none mb-8"
              >
                <span className="text-[var(--theme-text)]">ELIJAH</span>
                <br />
                <span className="text-[var(--theme-primary)]">WINTER</span>
              </motion.div>
              <div className="border-l-4 border-[var(--theme-primary)] pl-6 mb-8">
                <p className="text-2xl text-[var(--theme-text-secondary)] italic">
                  &quot;Building secure systems, automating workflows, and bridging the gap between development and security.&quot;
                </p>
              </div>
            </div>
            <div className="flex items-end">
              <div className="w-full h-64 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="md:col-span-8">
              <h2 className="text-6xl font-bold text-[var(--theme-text)] mb-12 border-b-4 border-[var(--theme-primary)] pb-4">
                FEATURED PROJECTS
              </h2>
              <div className="space-y-12">
                {projects.slice(0, 3).map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div className="h-64 bg-gradient-to-br from-[var(--theme-primary)]/20 to-[var(--theme-secondary)]/20 rounded-lg" />
                    <div>
                      <span className="text-sm text-[var(--theme-primary)] font-bold uppercase tracking-wide">
                        {project.domain}
                      </span>
                      <h3 className="text-3xl font-bold text-[var(--theme-text)] my-3">
                        {project.title}
                      </h3>
                      <p className="text-[var(--theme-text-secondary)] mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[var(--theme-primary)] font-semibold hover:underline"
                      >
                        Read More →
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-[var(--theme-surface)] p-6 rounded-lg border border-[var(--theme-border)]">
                <h3 className="text-xl font-bold text-[var(--theme-text)] mb-4">ABOUT</h3>
                <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                  Security Engineer | Developer | IT Specialist
                </p>
              </div>
              <SkillsSection />
            </div>
          </div>
        </div>
      </section>

      <FreelanceSection />
      <ContactSection />
      <ThemeToggle />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}

