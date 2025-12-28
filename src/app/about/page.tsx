'use client';

import { motion } from 'framer-motion';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            About
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-2xl">
            Learn more about my background and approach to building secure systems.
          </p>
        </motion.div>
      </div>
      <AboutSection />
    </div>
  );
}

