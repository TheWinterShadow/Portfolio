'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Hi, I&apos;m Elijah Winter
          </h1>
          <p className="text-xl text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
            I help businesses build secure, scalable systems—without the complexity and cost of hiring a full technical team.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Backstory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
          >
            <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-6">My Story</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-[var(--theme-text-secondary)] leading-relaxed text-lg">
                After years working in corporate security and infrastructure roles, I realized most growing businesses face the same problem: they need enterprise-level technical work, but can&apos;t justify hiring multiple specialists.
              </p>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                That&apos;s why I freelance. I bring security engineering, backend development, and infrastructure expertise to one engagement—so you get end-to-end delivery without coordinating multiple vendors.
              </p>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                My approach is simple: understand the business problem first, build the right technical solution second. No over-engineering. No unnecessary complexity.
              </p>
            </div>
          </motion.div>

          {/* How I Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
          >
            <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-6">How I Work</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center">
                  <span className="text-[var(--theme-primary)] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-2">
                    Discovery Call (Free)
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    We talk about your challenges, timeline, and budget. No pressure—just an honest conversation about fit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center">
                  <span className="text-[var(--theme-primary)] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-2">
                    Detailed Proposal
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    You get a clear scope, timeline, and fixed price (or hourly estimate). No surprises.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center">
                  <span className="text-[var(--theme-primary)] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-2">
                    Regular Updates
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    You&apos;ll know exactly where things stand. Weekly check-ins and async updates as we go.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center">
                  <span className="text-[var(--theme-primary)] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-2">
                    Delivery & Support
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    You get working code/infrastructure, documentation, and handoff. Plus support period for questions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Drives Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-8 md:p-10"
          >
            <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-6">What Drives Me</h2>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed text-lg mb-4">
              I&apos;m driven by two things: building systems that don&apos;t break, and working with people who care about their product.
            </p>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed">
              If you&apos;re cutting corners on security or treating users&apos; data carelessly, we&apos;re not a fit. But if you want to build something solid—I&apos;m your person.
            </p>
          </motion.div>

          {/* Beyond the Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
          >
            <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">Beyond the Code</h2>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed">
              When I&apos;m not debugging infrastructure, you&apos;ll find me exploring new technologies, contributing to open source, and staying current with security best practices. I believe good work comes from a balanced life and continuous learning.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Let&apos;s Talk About Your Project</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <a
              href="https://www.elijahwinter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              <span>Download My Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
