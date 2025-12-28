/**
 * Hero Section Component for The Winter Shadow Portfolio
 * 
 * @fileoverview Main landing section featuring animated introduction, rotating taglines,
 * and call-to-action buttons. Includes smooth animations and responsive design.
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Shield, Server } from 'lucide-react';
import Link from 'next/link';

/**
 * Rotating taglines displayed in the hero section
 * These taglines highlight different aspects of the developer's expertise
 */
const taglines = [
  'Building secure systems',
  'Automating security workflows',
  'Bridging dev & security',
];

/**
 * Hero Component
 * 
 * The main landing section that serves as the first impression for visitors.
 * Features animated text, rotating taglines, call-to-action buttons, and
 * expertise icons with smooth transitions.
 * 
 * Key Features:
 * - Rotating taglines with 3-second intervals
 * - Smooth fade-in animations with staggered delays
 * - Responsive design for mobile and desktop
 * - Interactive buttons with hover and tap animations
 * - Background gradient animation for visual appeal
 * - Expertise icons representing core skills
 * 
 * @returns {JSX.Element} The rendered Hero section
 * 
 * @example
 * ```tsx
 * import Hero from '@/components/Hero';
 * 
 * export default function HomePage() {
 *   return (
 *     <main>
 *       <Hero />
 *     </main>
 *   );
 * }
 * ```
 */
export default function Hero() {
  /**
   * Current tagline index for rotation
   * Cycles through the taglines array every 3 seconds
   */
  const [currentTagline, setCurrentTagline] = useState(0);

  /**
   * Effect to handle automatic tagline rotation
   * Sets up an interval that cycles through taglines every 3 seconds
   * Cleans up interval on component unmount to prevent memory leaks
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--theme-primary)] rounded-full blur-3xl animate-pulse will-change-auto" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--theme-secondary)] rounded-full blur-3xl animate-pulse will-change-auto" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-[var(--theme-text)]">Elijah Winter</span>
            <br />
            <span className="text-[var(--theme-primary)]">/ The Winter Shadow</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-xl md:text-2xl text-[var(--theme-text-secondary)] mb-8"
        >
          Security Engineer | Developer | IT Specialist
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="h-12 mb-12"
        >
          <motion.div
            key={currentTagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg md:text-xl text-[var(--theme-accent)] font-medium"
          >
            {taglines[currentTagline]}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Icon Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-16 flex justify-center gap-8 text-[var(--theme-text-secondary)]"
        >
          <div className="flex flex-col items-center">
            <Shield size={32} className="mb-2" />
            <span className="text-sm">Security</span>
          </div>
          <div className="flex flex-col items-center">
            <Code size={32} className="mb-2" />
            <span className="text-sm">Development</span>
          </div>
          <div className="flex flex-col items-center">
            <Server size={32} className="mb-2" />
            <span className="text-sm">Infrastructure</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
