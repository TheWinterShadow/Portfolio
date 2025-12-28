'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Code, Server, RefreshCw, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

const servicePackages = [
  {
    icon: Shield,
    title: 'Security Audit & Hardening',
    emoji: '🔒',
    whoFor: 'Startups preparing for due diligence, businesses handling sensitive data, or anyone who hasn\'t had a professional security review',
    includes: [
      'Comprehensive vulnerability assessment',
      'Penetration testing (application & infrastructure)',
      'Detailed remediation roadmap with priority ranking',
      'Security best practices documentation',
      '2 weeks of implementation support',
    ],
    deliverables: [
      'Executive summary for stakeholders',
      'Technical report with proof-of-concepts',
      'Remediation code (where applicable)',
    ],
    timeline: '2-3 weeks',
    investment: 'Starting at $4,500',
    cta: 'Request Security Audit',
    ctaLink: '/contact',
  },
  {
    icon: Code,
    title: 'Custom Backend Development',
    emoji: '⚙️',
    whoFor: 'Businesses needing APIs, data processing, integrations, or backend systems built from scratch or improved',
    includes: [
      'Requirements gathering & system design',
      'RESTful or GraphQL API development',
      'Database design & optimization',
      'Third-party integrations (Stripe, Twilio, etc.)',
      'Documentation & handoff',
      '30 days post-launch support',
    ],
    deliverables: [
      'Production-ready codebase',
      'API documentation',
      'Deployment guides',
    ],
    timeline: '4-8 weeks (project dependent)',
    investment: 'Starting at $8,000 for MVP',
    cta: 'Discuss Your Project',
    ctaLink: '/contact',
  },
  {
    icon: Server,
    title: 'Infrastructure Automation',
    emoji: '☁️',
    whoFor: 'Teams tired of manual deployments, experiencing downtime, or scaling beyond their current infrastructure',
    includes: [
      'CI/CD pipeline setup (GitHub Actions, GitLab, etc.)',
      'Cloud infrastructure as code (Terraform/CloudFormation)',
      'Monitoring & alerting setup',
      'Backup & disaster recovery planning',
      'Documentation & training',
    ],
    deliverables: [
      'Automated deployment pipeline',
      'Infrastructure documentation',
      'Runbook for common operations',
    ],
    timeline: '2-4 weeks',
    investment: 'Starting at $5,500',
    cta: 'Automate Your Infrastructure',
    ctaLink: '/contact',
  },
  {
    icon: RefreshCw,
    title: 'Technical Retainer',
    emoji: '🔄',
    whoFor: 'Businesses needing consistent technical support without hiring full-time',
    includes: [
      '20 or 40 hours/month of technical work',
      'Priority response time',
      'Mix of development, security, and infrastructure work',
      'Monthly strategy calls',
      'Flexible scope within hour bank',
    ],
    deliverables: [],
    timeline: 'Ongoing',
    investment: '20 hours/month: $4,000/month | 40 hours/month: $7,500/month',
    cta: 'Inquire About Retainer',
    ctaLink: '/contact',
  },
];

const faqs = [
  {
    question: 'Do you work with my tech stack?',
    answer: 'I specialize in Python, JavaScript/Node.js, Go, and most cloud platforms (AWS, GCP, Azure). If you\'re using something else, let\'s discuss—I\'m comfortable learning what\'s needed.',
  },
  {
    question: 'Can you start immediately?',
    answer: 'Depends on current project load. Typical onboarding is 1-2 weeks out, but rush projects can sometimes be accommodated.',
  },
  {
    question: 'What if the scope changes mid-project?',
    answer: 'We\'ll have clear milestone agreements. Changes are handled through change orders to keep everything transparent.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes—typically 50% upfront, 50% on delivery for fixed projects. Retainers are month-to-month.',
  },
  {
    question: 'What if I\'m not happy with the work?',
    answer: 'Every project includes revision rounds. If there\'s a major issue, we\'ll work it out or I\'ll refund the appropriate portion.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Services Built for Growing Businesses
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
            Clear packages. Transparent pricing. Real results.
          </p>
        </motion.div>

        {/* Service Packages */}
        <div className="space-y-12 mb-20">
          {servicePackages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{pkg.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg">
                        <Icon size={24} className="text-[var(--theme-primary)]" />
                      </div>
                      <h2 className="text-3xl font-bold text-[var(--theme-text)]">
                        {pkg.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                      WHO IT&apos;S FOR:
                    </h3>
                    <p className="text-[var(--theme-text-secondary)] mb-6">
                      {pkg.whoFor}
                    </p>

                    <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                      WHAT&apos;S INCLUDED:
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--theme-text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {pkg.deliverables.length > 0 && (
                      <>
                        <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                          DELIVERABLES:
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {pkg.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-4 mb-6">
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-semibold text-[var(--theme-text-secondary)]">TIMELINE: </span>
                          <span className="text-[var(--theme-text)] font-medium">{pkg.timeline}</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-[var(--theme-text-secondary)]">INVESTMENT: </span>
                          <span className="text-[var(--theme-primary)] font-semibold text-lg">{pkg.investment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href={pkg.ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
                  >
                    {pkg.cta}
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-8 md:p-10 mb-20"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Need Something Different?
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-6">
            Every business has unique challenges. If your project doesn&apos;t fit a package above, let&apos;s build a custom proposal.
          </p>
          <p className="text-[var(--theme-text-secondary)] mb-6">
            Areas I work in:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Data pipeline engineering',
              'API integration & webhooks',
              'Database optimization & migration',
              'Security incident response',
              'Technical consulting & architecture review',
            ].map((area, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[var(--theme-primary)] flex-shrink-0" />
                <span className="text-[var(--theme-text-secondary)]">{area}</span>
              </div>
            ))}
          </div>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors"
            >
              Request Custom Quote
            </motion.button>
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={32} className="text-[var(--theme-primary)]" />
            <h2 className="text-3xl font-bold text-[var(--theme-text)]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  A: {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
