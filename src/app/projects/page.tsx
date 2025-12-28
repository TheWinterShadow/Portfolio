'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import CaseStudyCard from '@/components/CaseStudyCard';
import Link from 'next/link';

// Prioritize featured projects and those with strong case study data
const featuredProjectIds = ['lock-and-key', 'owl-watch', 'horizonsec', 'the-deployment-forge'];
const featuredProjects = featuredProjectIds
  .map(id => projects.find(p => p.id === id))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Project Case Studies
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-3xl mx-auto">
            Real projects with real results. See how I&apos;ve helped businesses build secure systems,
            automate infrastructure, and scale their technical capabilities.
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project) => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
            More Projects Available
          </h2>
          <p className="text-[var(--theme-text-secondary)] mb-6">
            I&apos;ve worked on additional projects across security, data engineering, and infrastructure.
            Many are under NDA, but I&apos;m happy to discuss relevant experience during our consultation.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors"
            >
              Discuss Your Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

