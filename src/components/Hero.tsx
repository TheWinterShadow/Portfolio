'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--theme-primary)] rounded-full blur-3xl animate-pulse will-change-auto" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--theme-secondary)] rounded-full blur-3xl animate-pulse will-change-auto" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Credential Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-full text-sm md:text-base text-[var(--theme-text-secondary)]">
            <span className="font-semibold text-[var(--theme-primary)]">7+ Years Protecting Enterprise Systems</span>
            <span>|</span>
            <span>Former Amazon & CIA</span>
            <span>|</span>
            <span>500+ Teams Served</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[var(--theme-text)]">
              Enterprise-Grade Security Engineering
            </span>
            <br />
            <span className="text-[var(--theme-primary)]">
              for Growing Companies
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-[var(--theme-text-secondary)] mb-6 max-w-4xl mx-auto"
        >
          I help startups and mid-market businesses build secure, compliant systems—without the enterprise overhead or 6-month timelines.
        </motion.div>

        {/* Supporting Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--theme-text-secondary)] mb-12 max-w-3xl mx-auto italic"
        >
          Former Amazon security leader bringing battle-tested frameworks from systems protecting millions of users to companies that need them most.
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg text-lg"
            >
              Schedule Free Consultation
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors text-lg"
            >
              View Services & Pricing
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
            <div className="text-4xl font-bold text-[var(--theme-primary)] mb-2">200+</div>
            <div className="text-[var(--theme-text-secondary)]">Security Incidents Resolved</div>
          </div>
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
            <div className="text-4xl font-bold text-[var(--theme-primary)] mb-2">70%</div>
            <div className="text-[var(--theme-text-secondary)]">Reduction in Manual Security Work</div>
          </div>
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
            <div className="text-4xl font-bold text-[var(--theme-primary)] mb-2">100K+</div>
            <div className="text-[var(--theme-text-secondary)]">Applications Secured</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
