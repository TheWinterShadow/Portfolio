'use client';

import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight, Shield, Code, Server, CheckCircle } from 'lucide-react';

// Lazy load AboutSection to improve initial load
const AboutSection = lazy(() => import('@/components/AboutSection'));

export default function Home() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <Hero />
      
      {/* Problem-Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-8 text-center">
              The Challenge Most Businesses Face
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  When you&apos;re scaling, you need:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Secure applications that won&apos;t leak customer data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Reliable infrastructure that won&apos;t crash at 3am
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Clean, maintainable code that won&apos;t become technical debt
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-[var(--theme-text-secondary)] italic">
                  But hiring a full security team, DevOps engineer, AND senior developer? That&apos;s $300K+/year.
                </p>
              </div>
              
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-primary)] mb-4">
                  Here&apos;s Where I Come In
                </h3>
                <p className="text-[var(--theme-text-secondary)] mb-4">
                  I&apos;m a full-stack technical specialist who handles:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Security engineering & vulnerability assessments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Backend development & API integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Infrastructure automation & cloud deployment
                    </span>
                  </li>
                </ul>
                <p className="text-[var(--theme-text)] font-semibold">
                  One expert. Multiple capabilities. Delivered on time and budget.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-8 text-center">
              What I Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/services"
                className="group bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 hover:border-[var(--theme-primary)] transition-all hover:shadow-lg"
              >
                <div className="p-3 bg-[var(--theme-primary)]/20 rounded-lg w-fit mb-4">
                  <Shield size={32} className="text-[var(--theme-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3 group-hover:text-[var(--theme-primary)] transition-colors">
                  Security Engineering
                </h3>
                <p className="text-[var(--theme-text-secondary)] mb-4">
                  Lock down your application before incidents become disasters
                </p>
                <div className="flex items-center gap-2 text-[var(--theme-primary)] font-medium">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/services"
                className="group bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 hover:border-[var(--theme-primary)] transition-all hover:shadow-lg"
              >
                <div className="p-3 bg-[var(--theme-primary)]/20 rounded-lg w-fit mb-4">
                  <Code size={32} className="text-[var(--theme-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3 group-hover:text-[var(--theme-primary)] transition-colors">
                  Backend Development
                </h3>
                <p className="text-[var(--theme-text-secondary)] mb-4">
                  Build reliable, scalable APIs and data systems
                </p>
                <div className="flex items-center gap-2 text-[var(--theme-primary)] font-medium">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/services"
                className="group bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 hover:border-[var(--theme-primary)] transition-all hover:shadow-lg"
              >
                <div className="p-3 bg-[var(--theme-primary)]/20 rounded-lg w-fit mb-4">
                  <Server size={32} className="text-[var(--theme-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3 group-hover:text-[var(--theme-primary)] transition-colors">
                  Infrastructure & DevOps
                </h3>
                <p className="text-[var(--theme-text-secondary)] mb-4">
                  Automate deployments and eliminate downtime
                </p>
                <div className="flex items-center gap-2 text-[var(--theme-primary)] font-medium">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-8 text-center">
              Trusted By Startups and Businesses
            </h2>
            <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[var(--theme-text-secondary)] italic mb-4 text-lg">
                    &quot;Delivered a complete security audit and fixed 12 critical vulnerabilities in 3 weeks. Our investors were impressed.&quot;
                  </p>
                  <p className="text-[var(--theme-text)] font-semibold">
                    — Startup Founder, SaaS Company
                  </p>
                </div>
                <div>
                  <p className="text-[var(--theme-text-secondary)] italic mb-4 text-lg">
                    &quot;Built an API handling 50K+ daily requests with zero downtime. Exactly what we needed to scale.&quot;
                  </p>
                  <p className="text-[var(--theme-text)] font-semibold">
                    — Technical Director, Agency
                  </p>
                </div>
              </div>
              <div className="border-t border-[var(--theme-border)] pt-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  Recent Project Results
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Built secure API handling 50K+ daily requests for SaaS startup
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Automated deployment pipeline reducing release time by 75%
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--theme-text-secondary)]">
                      Conducted security audit preventing $200K+ in potential breach costs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-4">
              Ready to Build Something Secure and Scalable?
            </h2>
            <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
              Whether you need a security review, custom development, or infrastructure work—let&apos;s talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
                >
                  Schedule a Free 20-Minute Consultation
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors"
                >
                  View Service Packages
                </motion.button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--theme-text-secondary)]">
              No pressure. No sales pitch. Just an honest conversation about what you need.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
