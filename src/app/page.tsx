'use client';

import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Lazy load AboutSection to improve initial load
const AboutSection = lazy(() => import('@/components/AboutSection'));

export default function Home() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <Hero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AboutSection />
      </Suspense>
      
      {/* Quick Links to Other Pages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Link
              href="/projects"
              className="group bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 hover:border-[var(--theme-primary)] transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
                View Projects
              </h3>
              <p className="text-[var(--theme-text-secondary)] mb-4">
                Explore my technical projects, from security tools to data engineering pipelines.
              </p>
              <div className="flex items-center gap-2 text-[var(--theme-primary)] font-medium">
                <span>Browse Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="group bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 hover:border-[var(--theme-primary)] transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
                Get In Touch
              </h3>
              <p className="text-[var(--theme-text-secondary)] mb-4">
                Connect with me via email, LinkedIn, or check out my resume.
              </p>
              <div className="flex items-center gap-2 text-[var(--theme-primary)] font-medium">
                <span>Contact Me</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
