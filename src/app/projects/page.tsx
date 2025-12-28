'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Github, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    title: 'Security Automation Platform for Growing SaaS Company',
    subtitle: 'B2B SaaS Startup | 6 Weeks | Python, AWS Lambda, Terraform',
    challenge: 'A Series A SaaS company with 200+ customers was conducting security reviews manually for every new feature launch. Reviews took 3-5 days, slowing down development velocity and frustrating product teams. With plans to triple their customer base, they needed security to scale without adding headcount.',
    solution: 'Built an automated security review platform that integrated into their CI/CD pipeline, providing immediate security feedback to developers without manual intervention.',
    solutionPoints: [
      'Automated static code analysis integrated into GitHub pull requests',
      'Dynamic API security testing in staging environments',
      'Dependency vulnerability scanning with auto-remediation recommendations',
      'Security metrics dashboard showing trends and high-risk areas',
      'Custom detection rules for their specific compliance requirements (HIPAA)',
    ],
    results: [
      'Reduced security review time from 3-5 days to <4 hours (95% reduction)',
      'Caught 40+ vulnerabilities before production in first 90 days',
      'Freed security team to focus on architecture instead of repetitive reviews',
      'Enabled 2x increase in deployment frequency without compromising security',
      'Zero security incidents in the 12 months following implementation',
    ],
    buttons: [
      { text: 'View Technical Architecture', href: '#', icon: ExternalLink },
      { text: 'Similar Project', href: '/services', icon: ArrowRight },
    ],
  },
  {
    title: 'Enterprise IAM Overhaul for Healthcare Platform',
    subtitle: 'Healthcare Tech Company | 8 Weeks | Node.js, PostgreSQL, AWS Cognito',
    challenge: 'A healthcare technology platform had outgrown their simple role-based permission system. They needed fine-grained access control where doctors could only see patients they\'re treating, administrators could manage their facility but not others, and insurance partners could access aggregate data but not PHI. Their existing codebase had permission checks scattered everywhere, making changes risky and slow.',
    solution: 'Migrated from basic RBAC to an attribute-based access control (ABAC) model with centralized policy enforcement.',
    solutionPoints: [
      'Designed ABAC model supporting complex healthcare access rules',
      'Centralized policy engine replacing scattered permission checks',
      'Database schema migration to support attribute-based queries',
      'Policy-as-code framework enabling non-engineers to update rules',
      'Comprehensive audit logging for HIPAA compliance',
    ],
    results: [
      'Reduced unauthorized access attempts by 42% through better enforcement',
      'Cut time to implement new permission rules from 2 weeks to 2 days',
      'Reduced permission-related code by 60% through centralization',
      'Passed HIPAA audit with zero access control findings',
      'Enabled new business model (facility-specific pricing) previously impossible',
    ],
    quote: {
      text: 'Elijah didn\'t just build us a permission system—he taught us how to think about access control at scale. Six months later, we\'re still finding new use cases the framework handles elegantly.',
      author: 'VP Engineering, Healthcare Platform',
    },
    buttons: [
      { text: 'View Architecture Document', href: '#', icon: ExternalLink },
      { text: 'Discuss Similar Project', href: '/contact', icon: ArrowRight },
    ],
  },
  {
    title: 'Security Incident Response for E-commerce Platform',
    subtitle: 'E-commerce Startup | 10 Days | Digital Forensics, Python, AWS',
    challenge: 'An e-commerce platform detected unusual API activity suggesting unauthorized access to customer data. They weren\'t sure what was compromised, how the attacker got in, or if the breach was still active. With thousands of customers potentially affected and a legal obligation to report within 72 hours, they needed fast, definitive answers.',
    solution: 'Led complete incident response from detection through remediation and post-mortem.',
    solutionSections: [
      {
        title: 'Investigation & Containment:',
        points: [
          'Forensic analysis of application logs, database queries, and AWS CloudTrail',
          'Identified attack vector (exposed API endpoint with weak authentication)',
          'Determined scope: 1,247 customer records accessed over 6 days',
          'Contained breach by rotating credentials and patching vulnerability',
          'Collected evidence for potential law enforcement reporting',
        ],
      },
      {
        title: 'Remediation & Prevention:',
        points: [
          'Implemented API authentication and rate limiting',
          'Added monitoring alerts for similar access patterns',
          'Conducted security audit of remaining endpoints',
          'Created incident response playbook for future events',
        ],
      },
    ],
    results: [
      'Fully contained breach within 18 hours of engagement',
      'Determined exact scope for accurate customer notification',
      'Provided documentation meeting legal reporting requirements',
      'Zero additional customer records compromised after containment',
      'Prevented estimated $200K+ in potential regulatory fines through proper handling',
      'Company maintained customer trust through transparent, professional response',
    ],
    buttons: [
      { text: 'View Post-Mortem Report', href: '#', icon: ExternalLink },
      { text: 'Emergency Response Services', href: '/services', icon: ArrowRight },
    ],
  },
  {
    title: 'AI Security Framework for ML Platform',
    subtitle: 'AI/ML SaaS Company | 5 Weeks | Python, MLOps, AWS SageMaker',
    challenge: 'An AI-powered analytics platform was preparing for Series B funding. Investors were asking detailed questions about AI security: "How do you prevent prompt injection? What\'s your model governance? How do you secure training data?" The team had strong ML expertise but limited security experience, and generic security consultants didn\'t understand AI-specific risks.',
    solution: 'Implemented comprehensive AI security framework based on Amazon\'s AI security standards, adapted for their startup scale.',
    solutionPoints: [
      'Threat model for their specific AI architecture (fine-tuned LLMs for data analysis)',
      'Input validation and sanitization to prevent prompt injection attacks',
      'Model output filtering to prevent data leakage',
      'Secure model training pipeline with data lineage tracking',
      'Access controls for model artifacts and training data',
      'Monitoring for adversarial inputs and model behavior anomalies',
    ],
    results: [
      'Identified and fixed 12 AI-specific security vulnerabilities',
      'Passed investor security review with zero critical findings',
      'Closed Series B at $18M valuation (security cited as competitive advantage)',
      'Reduced AI model deployment security review from 2 weeks to 2 days',
      'Framework now used for 15+ models in production',
      'Zero AI security incidents in 18 months since implementation',
    ],
    quote: {
      text: 'As ML engineers, we knew our models worked—but we didn\'t know if they were secure. Elijah brought real-world experience from Amazon\'s AI Security org. His framework gave us credibility with enterprise customers we couldn\'t have built ourselves.',
      author: 'CTO, AI/ML Platform',
    },
    buttons: [
      { text: 'View AI Security Framework', href: '#', icon: ExternalLink },
      { text: 'AI Security Services', href: '/services', icon: ArrowRight },
    ],
  },
  {
    title: 'SOC 2 Compliance Preparation',
    subtitle: 'Series A SaaS Company | 12 Weeks | Multi-Cloud, Policy Development',
    challenge: 'A fast-growing SaaS company needed SOC 2 Type II certification to close enterprise deals, but had been moving too fast to think about compliance. They had 6 months until their largest prospect\'s deadline and no idea where they stood on SOC 2 requirements.',
    solution: 'Conducted gap analysis and implemented security controls to achieve SOC 2 Type II compliance.',
    solutionPoints: [
      'Access control policies and implementation (principle of least privilege)',
      'Encryption at rest and in transit across all data stores',
      'Logging and monitoring infrastructure for audit trails',
      'Incident response procedures and documentation',
      'Vendor risk management program',
      'Security awareness training program',
      'Business continuity and disaster recovery plans',
      'Change management and code review processes',
    ],
    results: [
      'Passed SOC 2 Type II audit on first attempt with zero findings',
      'Completed in 5.5 months (ahead of 6-month deadline)',
      'Closed $1.2M enterprise deal that required certification',
      'Unlocked 12+ additional enterprise sales opportunities',
      'Improved actual security posture (not just paperwork compliance)',
      'Built compliance foundation for future certifications (ISO 27001, HIPAA)',
    ],
    buttons: [
      { text: 'View Compliance Services', href: '/services', icon: ArrowRight },
      { text: 'Download SOC 2 Preparation Checklist', href: '#', icon: ExternalLink },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Security Projects & Case Studies
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-3xl mx-auto">
            Real security challenges I&apos;ve solved for real companies. Each project shows the business problem, technical solution, and measurable impact.
          </p>
          <p className="text-sm text-[var(--theme-text-secondary)] mt-4 italic">
            Note: Some details are anonymized or aggregated to protect client confidentiality.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-2">
                {study.title}
              </h2>
              <p className="text-[var(--theme-text-secondary)] mb-8">
                {study.subtitle}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
                  THE CHALLENGE:
                </h3>
                <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
                  THE SOLUTION:
                </h3>
                <p className="text-[var(--theme-text-secondary)] mb-4">
                  {study.solution}
                </p>
                {study.solutionPoints && (
                  <>
                    <p className="text-sm font-semibold text-[var(--theme-text)] mb-3">Key components:</p>
                    <ul className="space-y-2">
                      {study.solutionPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--theme-text-secondary)]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {study.solutionSections && (
                  <div className="space-y-6">
                    {study.solutionSections.map((section, idx) => (
                      <div key={idx}>
                        <p className="text-sm font-semibold text-[var(--theme-text)] mb-3">{section.title}</p>
                        <ul className="space-y-2">
                          {section.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-start gap-3">
                              <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
                  THE RESULTS:
                </h3>
                <ul className="space-y-3">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--theme-text-secondary)]">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {study.quote && (
                <div className="bg-[var(--theme-bg)] border-l-4 border-[var(--theme-primary)] rounded p-6 mb-8">
                  <p className="text-lg text-[var(--theme-text-secondary)] italic mb-4">
                    &quot;{study.quote.text}&quot;
                  </p>
                  <p className="text-[var(--theme-text)] font-semibold">
                    — {study.quote.author}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--theme-border)]">
                {study.buttons.map((button, idx) => {
                  const Icon = button.icon;
                  return (
                    <Link
                      key={idx}
                      href={button.href}
                      className="flex items-center gap-2 px-6 py-3 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors font-medium"
                    >
                      <Icon size={20} />
                      <span>{button.text}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
            More Work Examples
          </h2>
          <p className="text-[var(--theme-text-secondary)] mb-6">
            Beyond these detailed case studies, I&apos;ve worked on:
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Insider Threat Detection (Amazon)',
                desc: 'Built automated detection system that investigated 200+ potential insider threat incidents, achieving 95% case closure rate within SLA. Created 12 new behavioral detection rules reducing manual investigation time by 66%.',
              },
              {
                title: 'Security Posture Management Tool (Amazon)',
                desc: 'Architected tool visualizing security posture for 100,000+ applications, reducing security review time by 15% and enabling real-time risk assessment across AWS organization.',
              },
              {
                title: 'Security Analytics Data Lake (Amazon)',
                desc: 'Designed data lake processing 10TB+ daily security events, enabling real-time threat detection and reducing false positives by 30% across 18 security teams.',
              },
              {
                title: 'Cloud Migration Security (Multiple Clients)',
                desc: 'Secured cloud migrations for 5+ companies moving from on-premise to AWS/Azure, ensuring zero security incidents during transitions and improved security posture post-migration.',
              },
              {
                title: 'Security Training Program (Amazon)',
                desc: 'Designed and launched engineering bootcamp for 25+ junior security engineers, reducing onboarding time by 40% and expanding team capabilities.',
              },
            ].map((project, idx) => (
              <div key={idx} className="border-l-4 border-[var(--theme-primary)] pl-4">
                <h3 className="font-semibold text-[var(--theme-text)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Have a Similar Challenge?
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
            These projects show the range of security work I do—from strategic frameworks to hands-on incident response. If you&apos;re facing something similar, let&apos;s talk about how I can help.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
            >
              Discuss Your Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
