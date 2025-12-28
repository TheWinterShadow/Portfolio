'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, Settings, AlertTriangle, Bot, RefreshCw, CheckCircle, ArrowRight, HelpCircle, Lightbulb, GraduationCap, Search } from 'lucide-react';

// Consultation & Advisory Services (shown first)
const consultationServices = [
  {
    icon: Lightbulb,
    emoji: '💡',
    title: 'Security Advisory Session',
    whoFor: 'Technical leaders who need expert guidance on a specific security decision, architecture review, or want a second opinion before committing to a larger initiative.',
    sessionTypes: [
      'Architecture review for a specific feature or system',
      'Threat modeling workshop for new product',
      'Security tool evaluation and selection advice',
      'Compliance readiness assessment (high-level)',
      'Career mentorship for security engineers',
      '"Am I secure enough?" reality check',
      'Vendor security assessment review',
      'Incident response planning discussion',
    ],
    includes: [
      '60-90 minute video call',
      'Written summary of recommendations',
      'Action items with priorities',
      'Resource links and references',
      '1 week of follow-up email support',
    ],
    timeline: '1 session',
    investment: '$500 per session',
    investmentNote: 'Perfect for: Quick decisions, second opinions, spot guidance',
    cta: 'Book Advisory Session',
  },
  {
    icon: GraduationCap,
    emoji: '🎓',
    title: 'Security Engineering Mentorship',
    whoFor: 'Junior to mid-level security engineers wanting to level up their skills, developers transitioning into security roles, or technical leaders building security expertise in their teams.',
    includes: [
      'Two 60-minute mentorship sessions per month',
      'Code review and feedback on your security projects',
      'Career guidance and skill development roadmap',
      'Access to my security resources and templates',
      'Async Slack/email support between sessions',
      'Real-world problem-solving practice',
      'Resume and interview preparation (if needed)',
    ],
    topics: [
      'Application security and secure code review',
      'Cloud security architecture (AWS focus)',
      'IAM and access control patterns',
      'Security automation and tooling',
      'Incident response and forensics',
      'Career progression in security engineering',
    ],
    timeline: 'Ongoing',
    investment: '$800/month',
    investmentNote: '(3-month minimum commitment) | Individual sessions: $500/hour (if not doing monthly package)',
    cta: 'Start Mentorship',
  },
  {
    icon: Search,
    emoji: '🔍',
    title: 'Rapid Security Review (1 Week)',
    whoFor: 'Startups that need quick security feedback before a demo day, product launch, or customer security questionnaire. Not a full audit, but faster and more affordable than comprehensive assessments.',
    includes: [
      'High-level architecture review',
      'Automated vulnerability scanning',
      'Common misconfiguration check',
      'Critical risk identification only (no deep dive)',
      '1-hour findings presentation',
      'Short written report (5-10 pages max)',
      'Quick-win recommendations list',
    ],
    notIncluded: [
      'Not a compliance audit',
      'Not penetration testing',
      'Not comprehensive threat modeling',
      'Not suitable for regulated industries (HIPAA, finance)',
    ],
    perfectFor: 'Early-stage startups, pre-seed to Series A',
    timeline: '1 week (5 business days)',
    investment: '$2,500',
    investmentNote: 'Includes: Assessment, report, and 1-hour presentation',
    cta: 'Get Quick Review',
  },
];

const servicePackages = [
  {
    icon: Shield,
    emoji: '🔒',
    title: 'Security Audit & Compliance Preparation',
    whoFor: 'Startups preparing for investor due diligence, companies pursuing SOC 2 or ISO 27001 certification, or any business that needs to understand their current security posture.',
    includes: [
      'Comprehensive security assessment across infrastructure, applications, and processes',
      'Vulnerability identification and risk prioritization',
      'Compliance gap analysis (SOC 2, GDPR, HIPAA considerations)',
      'Threat modeling for your specific architecture',
      'Executive summary for non-technical stakeholders',
      'Detailed technical remediation roadmap',
      'Security policy templates and documentation',
      '2 weeks of implementation support',
    ],
    deliverables: [
      'Executive security report (for board, investors, customers)',
      'Technical findings document with proof-of-concepts',
      'Prioritized remediation roadmap (quick wins → long-term improvements)',
      'Security policies and procedures templates',
      'Compliance checklist specific to your industry',
    ],
    results: [
      'Identified 15-30 security issues before auditors/investors found them',
      'Reduced audit preparation time by 40%',
      'Achieved compliance certification on first attempt',
      'Gave technical teams clear direction on what to fix first',
    ],
    timeline: '2-4 weeks',
    investment: '$12,000 - $25,000',
    investmentNote: '(Varies based on infrastructure size and compliance requirements) | Includes: Comprehensive assessment, all documentation, and 2 weeks post-delivery support',
    cta: 'Request Security Audit',
  },
  {
    icon: Lock,
    emoji: '🔐',
    title: 'Identity & Access Management (IAM) Architecture',
    whoFor: 'SaaS companies scaling from 10 → 100+ users with complex permission requirements, businesses building multi-tenant systems, or teams struggling with unmaintainable authorization code.',
    includes: [
      'Current system assessment and pain point analysis',
      'Authorization model design (RBAC, ABAC, or FGAC based on needs)',
      'Zero-trust architecture planning',
      'Policy-as-code implementation',
      'OAuth 2.0 / SAML integration strategy',
      'Database schema design for permissions',
      'Developer documentation and best practices',
      '30 days post-implementation support',
    ],
    deliverables: [
      'IAM architecture document with diagrams',
      'Authorization model specification',
      'Reference implementation code',
      'Database migration scripts (if applicable)',
      'Developer guidelines and examples',
      'Testing strategy and test cases',
    ],
    results: [
      'Reduced unauthorized access incidents by 35%',
      'Enabled teams to scale from dozens to thousands of users',
      'Simplified permission management for complex enterprise requirements',
    ],
    impactNote: 'At Amazon, I partnered with 50+ development teams implementing ABAC and FGAC models',
    timeline: '3-5 weeks',
    investment: '$15,000 - $30,000',
    investmentNote: '(Depends on system complexity and integration requirements) | Includes: Full architecture, reference code, implementation support, and 30 days post-launch support',
    cta: 'Discuss IAM Project',
  },
  {
    icon: Settings,
    emoji: '⚙️',
    title: 'Security Automation & Continuous Monitoring',
    whoFor: 'Teams spending too much time on manual security reviews, companies wanting to shift left on security, or engineering organizations that need security integrated into CI/CD.',
    includes: [
      'Current security workflow assessment',
      'Automated vulnerability scanning pipeline',
      'CI/CD security integration (SAST, DAST, dependency scanning)',
      'Custom security tooling development (Python/AWS)',
      'Security metrics dashboard',
      'Alert and notification automation',
      'Runbook documentation',
      'Team training on new tools',
      '60 days of monitoring and refinement',
    ],
    deliverables: [
      'Automated security scanning infrastructure',
      'CI/CD pipeline security gates',
      'Security metrics dashboard',
      'Custom tooling (scripts, Lambda functions, automation)',
      'Documentation and training materials',
      'Alert configuration and response playbooks',
    ],
    results: [
      'Reduced manual security assessments by 70%',
      'Cut security review time from days to hours',
      'Decreased false positives by 30% through intelligent filtering',
      'Enabled security to scale without adding headcount',
    ],
    impactNote: 'From my work at Amazon automating security processes',
    timeline: '4-6 weeks',
    investment: '$18,000 - $35,000',
    investmentNote: '(Based on scope of automation and infrastructure complexity) | Includes: All tooling, implementation, training, and 60-day refinement period',
    cta: 'Automate Your Security',
  },
  {
    icon: AlertTriangle,
    emoji: '🚨',
    title: 'Incident Response & Investigation',
    whoFor: 'Companies that experienced or suspect a security breach, businesses needing incident response planning, or organizations wanting a security incident commander on call.',
    includesReactive: [
      'Immediate incident assessment and scoping',
      'Containment strategy and execution',
      'Digital forensics investigation',
      'Evidence collection and preservation',
      'Root cause analysis',
      'Remediation implementation',
      'Post-mortem documentation',
      'Process improvements to prevent recurrence',
    ],
    includesProactive: [
      'Incident response plan development',
      'Playbook creation for common scenarios',
      'Team training and tabletop exercises',
      'On-call retainer arrangement',
    ],
    deliverables: [
      'Incident timeline and attack vector analysis',
      'Forensics report with evidence',
      'Containment and remediation steps taken',
      'Post-mortem report for stakeholders',
      'Preventive measures roadmap',
      'Updated security procedures',
    ],
    experience: [
      'Investigated 200+ security incidents with 95% closure rate',
      'Reduced incident response time by 66% through automation',
      'Built investigation methodology and forensics frameworks',
      'Experience with insider threats, data breaches, and compromise scenarios',
    ],
    experienceNote: 'At Amazon and CIA',
    timeline: 'Immediate response - 2 weeks (incident-dependent)',
    investment: 'Emergency Response: $5,000 - $15,000 (incident-dependent) | Incident Response Planning: $6,000 - $10,000 | Emergency Retainer: $2,500/month (priority access, 4-hour SLA)',
    investmentNote: 'Available 24/7 for critical incidents',
    cta: 'Emergency Contact',
    ctaSecondary: 'Plan Ahead - Retainer Info',
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI & Machine Learning Security',
    whoFor: 'Companies building AI-powered products, startups using LLMs in production, or businesses needing to secure machine learning pipelines and training data.',
    includes: [
      'AI/ML security assessment (models, APIs, training data)',
      'Threat modeling for AI-specific attack vectors',
      'Prompt injection and jailbreak testing',
      'Model security framework implementation',
      'Data privacy and governance review',
      'Compliance considerations (AI regulations)',
      'Security monitoring for AI systems',
      'Developer guidelines for secure AI development',
      '3 weeks of implementation support',
    ],
    deliverables: [
      'AI security assessment report',
      'Threat model specific to your AI architecture',
      'Security framework adapted for AI workloads',
      'Testing results (prompt injection, model extraction attempts)',
      'Monitoring and alerting setup',
      'AI security best practices documentation',
    ],
    expertise: [
      'Co-founded AI Security Organization',
      'Created AI security standards adopted by 500+ development teams',
      'Secured 200+ AI models in production',
      'Built automated security tooling reducing AI security reviews by 70%',
      'Advised VPs and CISOs on AI security strategy',
    ],
    expertiseNote: 'At Amazon',
    timeline: '3-5 weeks',
    investment: '$20,000 - $40,000',
    investmentNote: '(Based on number of models, data sensitivity, and compliance requirements) | Includes: Full assessment, framework implementation, and 3 weeks support',
    cta: 'Secure Your AI Systems',
  },
  {
    icon: RefreshCw,
    emoji: '🔄',
    title: 'Ongoing Security Retainer',
    whoFor: 'Growing companies needing consistent security expertise without hiring full-time, businesses wanting priority access for emerging issues, or teams that benefit from monthly security reviews.',
    includes: [
      'Dedicated monthly hours (30 or 50 hour options)',
      'Priority response time (4-hour SLA for urgent issues)',
      'Flexible scope - mix of audits, development, consulting, incident response',
      'Monthly security review and strategy call',
      'Quarterly security posture reports',
      'Direct Slack/email access',
      'Proactive monitoring and recommendations',
      'First priority for emergency issues',
    ],
    howItWorks: [
      'Security reviews for new features',
      'Compliance preparation work',
      'IAM architecture refinement',
      'Incident response when needed',
      'Team training and knowledge transfer',
      'Strategic security planning',
    ],
    benefits: [
      '40% cost savings vs. hourly project work',
      'Consistent security oversight as you scale',
      'No sticker shock when emergencies arise',
      'I become familiar with your systems over time',
      'Faster responses because I know your context',
      'Predictable monthly expense for budgeting',
    ],
    retainerOptions: [
      {
        name: 'Starter Plan',
        price: '$3,500/month',
        hours: '15 hours per month',
        sla: '8-hour SLA for urgent issues',
        calls: 'Monthly check-in call',
        reporting: 'Perfect for early-stage startups',
      },
      {
        name: 'Standard Plan',
        price: '$7,000/month',
        hours: '30 hours per month',
        sla: '4-hour SLA for urgent issues',
        calls: 'Bi-weekly strategy calls',
        reporting: 'Quarterly security reporting',
      },
      {
        name: 'Premium Plan',
        price: '$12,000/month',
        hours: '50 hours per month',
        sla: '2-hour SLA for urgent issues',
        calls: 'Weekly strategy calls',
        reporting: 'Quarterly reporting + annual security roadmap',
      },
    ],
    retainerNote: 'All retainers include direct Slack/email access and rollover of up to 5 unused hours per month.',
    cta: 'Discuss Retainer Options',
  },
];

const faqs = [
  {
    question: 'Do you work with my tech stack?',
    answer: 'I specialize in AWS, Python, JavaScript/Node.js, PostgreSQL, and most modern development stacks. I\'m technology-agnostic and comfortable learning what\'s needed. If you\'re using something unusual, let\'s discuss—I\'ve worked with everything from cutting-edge AI frameworks to legacy mainframe systems.',
  },
  {
    question: 'Can you start immediately?',
    answer: 'It depends on current project commitments. Typical lead time is 1-2 weeks for new engagements. Emergency incident response can often be prioritized within 24 hours. Retainer clients get immediate priority access.',
  },
  {
    question: 'What if the scope changes mid-project?',
    answer: 'We\'ll establish clear milestones and check-ins. If scope changes, we handle it through a transparent change order process—you\'ll always know what you\'re paying for and why. No surprise bills.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. Standard terms for project work are 50% upfront, 50% on delivery. For larger engagements over $20K, we can structure milestone-based payments. Retainers are invoiced monthly in advance.',
  },
  {
    question: 'Do you sign NDAs and work under contract?',
    answer: 'Absolutely. Your security concerns and business details stay confidential. I\'ll sign your NDA or we can use mine. All work is done under a clear contract with defined scope, deliverables, and terms.',
  },
  {
    question: 'Do you work onsite or remote?',
    answer: 'Primarily remote, which keeps costs down for you. I\'m based in Arlington, VA and can meet onsite for initial kickoffs or critical sessions if you\'re in the DC/Northern Virginia area.',
  },
  {
    question: 'What if we\'re not a good fit?',
    answer: 'I\'ll tell you honestly in our first conversation. If I\'m not the right person for your needs, I\'ll likely know someone who is and can make a referral.',
  },
  {
    question: 'Do you have experience with [specific compliance standard]?',
    answer: 'I\'ve worked extensively with SOC 2, HIPAA, and GDPR requirements, particularly at Amazon where compliance was critical. If you need specialized expertise in CMMC, PCI-DSS, or other frameworks, I can advise or bring in a specialist partner.',
  },
  {
    question: 'What happens after the project ends?',
    answer: 'Every engagement includes a support period (typically 2-4 weeks) for questions and minor adjustments. After that, you own all deliverables and documentation. Many clients convert to retainers for ongoing support.',
  },
  {
    question: 'How do you communicate progress?',
    answer: 'Weekly status updates minimum, plus async updates via Slack/email as needed. For longer engagements, bi-weekly check-in calls. You\'ll always know what\'s been done, what\'s next, and if there are any blockers.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Security Engineering Services
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-3xl mx-auto mb-6">
            Enterprise-quality security adapted for growing companies. Clear scope, transparent pricing, measurable results.
          </p>
          <p className="text-[var(--theme-text-secondary)] max-w-4xl mx-auto mb-4">
            I offer specialized security services designed for startups and mid-market companies that need more than basic security but aren&apos;t ready to hire a full security team. All services include documentation, knowledge transfer, and a support period after delivery.
          </p>
          <p className="text-[var(--theme-text-secondary)] max-w-4xl mx-auto">
            I offer services at multiple price points because I remember what it was like starting out. Sometimes you just need an hour of expert advice ($500 advisory session). Sometimes you need a quick security check before a big demo ($2,500 rapid review). And sometimes you need comprehensive security engineering ($15K+ full projects). Start where it makes sense for your stage and budget. Many clients begin with advisory sessions, then move to larger projects once we&apos;ve built trust and they see the value.
          </p>
        </motion.div>

        {/* Start Small Call-Out Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-primary)]/10 border-2 border-[var(--theme-primary)] rounded-lg p-8 mb-16"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--theme-text)] mb-3">
                Not Sure If You Need a Full Engagement?
              </h2>
              <p className="text-[var(--theme-text-secondary)] mb-4">
                Start with a $500 advisory session or $2,500 rapid review. Get expert guidance without committing to a full project.
              </p>
              <p className="text-[var(--theme-text-secondary)] mb-6">
                Many clients start small to build trust, then move to larger engagements when they see the value.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors"
                >
                  Book Advisory Session
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Consultation & Advisory Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-4 text-center">
            Quick Consultations & Advisory Sessions
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-12 text-center max-w-3xl mx-auto">
            Not every security challenge needs a full engagement. Sometimes you just need expert advice, a second opinion, or guidance on a specific decision.
          </p>
          <div className="space-y-12">
            {consultationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{service.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg">
                          <Icon size={24} className="text-[var(--theme-primary)]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--theme-text)]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        WHO THIS IS FOR:
                      </h4>
                      <p className="text-[var(--theme-text-secondary)] mb-6">
                        {service.whoFor}
                      </p>

                      <h4 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        {service.sessionTypes ? 'Single-Focus Sessions (choose one):' : 'WHAT YOU GET:'}
                      </h4>
                      {service.sessionTypes && (
                        <ul className="space-y-2 mb-4">
                          {service.sessionTypes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {service.topics && (
                        <>
                          <p className="text-sm font-semibold text-[var(--theme-text)] mb-2">Topics we can cover:</p>
                          <ul className="space-y-2 mb-4">
                            {service.topics.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--theme-text-secondary)]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {service.includes && (
                        <>
                          <p className="text-sm font-semibold text-[var(--theme-text)] mb-2">Each session includes:</p>
                          <ul className="space-y-2">
                            {service.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--theme-text-secondary)]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    <div>
                      {service.notIncluded && (
                        <>
                          <h4 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                            What this is NOT:
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {service.notIncluded.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-red-400">→</span>
                                <span className="text-[var(--theme-text-secondary)]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {service.perfectFor && (
                        <p className="text-sm font-semibold text-[var(--theme-text)] mb-2">
                          Perfect for: {service.perfectFor}
                        </p>
                      )}
                      <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-4 mt-6">
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-semibold text-[var(--theme-text-secondary)]">TIMELINE: </span>
                            <span className="text-[var(--theme-text)] font-medium">{service.timeline}</span>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-[var(--theme-text-secondary)]">INVESTMENT: </span>
                            <span className="text-[var(--theme-primary)] font-semibold text-lg">{service.investment}</span>
                          </div>
                          {service.investmentNote && (
                            <p className="text-sm text-[var(--theme-text-secondary)] mt-2">
                              {service.investmentNote}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
                    >
                      {service.cta}
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Service Packages */}
        <div className="space-y-16 mb-20">
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
                      WHO THIS IS FOR:
                    </h3>
                    <p className="text-[var(--theme-text-secondary)] mb-6">
                      {pkg.whoFor}
                    </p>

                    <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                      WHAT&apos;S INCLUDED:
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {(pkg.includes || []).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--theme-text-secondary)]">{item}</span>
                        </li>
                      ))}
                      {pkg.includesReactive && (
                        <>
                          <li className="text-sm font-semibold text-[var(--theme-text)] mt-4 mb-2">Reactive (Incident Already Occurred):</li>
                          {pkg.includesReactive.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                          <li className="text-sm font-semibold text-[var(--theme-text)] mt-4 mb-2">Proactive (Before Incident):</li>
                          {pkg.includesProactive?.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  </div>

                  <div>
                    {pkg.deliverables && pkg.deliverables.length > 0 && (
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

                    {pkg.results && (
                      <>
                        <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                          TYPICAL RESULTS:
                        </h3>
                        {pkg.impactNote && (
                          <p className="text-sm text-[var(--theme-text-secondary)] italic mb-2">
                            {pkg.impactNote}:
                          </p>
                        )}
                        <ul className="space-y-2 mb-6">
                          {pkg.results.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {pkg.experience && (
                      <>
                        <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                          SPECIALIZED BACKGROUND:
                        </h3>
                        {(pkg as any).expertiseNote && (
                          <p className="text-sm text-[var(--theme-text-secondary)] italic mb-2">
                            {(pkg as any).expertiseNote}:
                          </p>
                        )}
                        <ul className="space-y-2 mb-6">
                          {pkg.experience.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {pkg.experience && pkg.experienceNote && (
                      <>
                        <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                          TRACK RECORD:
                        </h3>
                        <p className="text-sm text-[var(--theme-text-secondary)] italic mb-2">
                          {pkg.experienceNote}:
                        </p>
                        <ul className="space-y-2 mb-6">
                          {pkg.experience.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {pkg.howItWorks && (
                      <>
                        <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                          HOW IT WORKS:
                        </h3>
                        <p className="text-[var(--theme-text-secondary)] mb-3">
                          You get a bank of hours each month to use as needed:
                        </p>
                        <ul className="space-y-2 mb-6">
                          {pkg.howItWorks.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-[var(--theme-text-secondary)] italic mb-4">
                          Hours don&apos;t roll over, but we plan monthly to ensure efficient use.
                        </p>
                      </>
                    )}

                    {pkg.benefits && (
                      <>
                        <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                          WHY RETAINER WORKS:
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {pkg.benefits.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {pkg.retainerOptions && (
                      <>
                        <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                          RETAINER OPTIONS:
                        </h3>
                        <div className="space-y-4 mb-6">
                          {pkg.retainerOptions.map((option, idx) => (
                            <div key={idx} className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-4">
                              <div className="font-semibold text-[var(--theme-text)] mb-2">{option.name}: {option.price}</div>
                              <ul className="text-sm text-[var(--theme-text-secondary)] space-y-1">
                                <li>• {option.hours}</li>
                                <li>• {option.sla}</li>
                                <li>• {option.calls}</li>
                                <li>• {option.reporting}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-[var(--theme-text-secondary)]">
                          {pkg.retainerNote || 'All retainers include direct access via Slack/email and first priority for overflow work.'}
                        </p>
                      </>
                    )}

                    <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-4 mt-6">
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-semibold text-[var(--theme-text-secondary)]">TIMELINE: </span>
                          <span className="text-[var(--theme-text)] font-medium">{pkg.timeline}</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-[var(--theme-text-secondary)]">INVESTMENT: </span>
                          <span className="text-[var(--theme-primary)] font-semibold text-lg">{pkg.investment}</span>
                        </div>
                        {pkg.investmentNote && (
                          <p className="text-sm text-[var(--theme-text-secondary)] mt-2">
                            {pkg.investmentNote}
                          </p>
                        )}
                        {pkg.investment && pkg.investment.includes('Includes:') && (
                          <p className="text-sm text-[var(--theme-text-secondary)] mt-2">
                            Includes: All assessment work, documentation, and 2 weeks post-delivery support
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
                    >
                      {pkg.cta}
                    </motion.button>
                  </Link>
                  {pkg.ctaSecondary && (
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors"
                      >
                        {pkg.ctaSecondary}
                      </motion.button>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-8 text-center">
            Which Service Is Right For You?
          </h2>
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--theme-bg)]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--theme-text)] border-b border-[var(--theme-border)]">Your Situation</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--theme-text)] border-b border-[var(--theme-border)]">Recommended Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--theme-text)] border-b border-[var(--theme-border)]">Investment</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--theme-text)] border-b border-[var(--theme-border)]">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { situation: '"I need quick advice on a specific security decision"', service: 'Security Advisory Session', investment: '$500', timeline: '1 session' },
                    { situation: '"I want to learn security engineering from an expert"', service: 'Technical Mentorship', investment: '$800/month', timeline: 'Ongoing' },
                    { situation: '"We need basic security feedback before launching"', service: 'Rapid Security Review', investment: '$2,500', timeline: '1 week' },
                    { situation: '"We\'re preparing for investor due diligence"', service: 'Security Audit & Compliance', investment: '$12K-$25K', timeline: '2-4 weeks' },
                    { situation: '"Our permissions system is becoming unmaintainable"', service: 'IAM Architecture', investment: '$15K-$30K', timeline: '3-5 weeks' },
                    { situation: '"We waste too much time on manual security work"', service: 'Security Automation', investment: '$18K-$35K', timeline: '4-6 weeks' },
                    { situation: '"We\'re building AI-powered features"', service: 'AI/ML Security', investment: '$20K-$40K', timeline: '3-5 weeks' },
                    { situation: '"We suspect a security breach"', service: 'Incident Response', investment: '$5K-$15K', timeline: 'Immediate' },
                    { situation: '"We need ongoing security support"', service: 'Security Retainer', investment: '$3.5K-$12K/mo', timeline: 'Monthly' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[var(--theme-surface)]' : 'bg-[var(--theme-bg)]'}>
                      <td className="px-6 py-4 text-sm text-[var(--theme-text-secondary)] border-b border-[var(--theme-border)]">{row.situation}</td>
                      <td className="px-6 py-4 text-sm font-medium text-[var(--theme-text)] border-b border-[var(--theme-border)]">{row.service}</td>
                      <td className="px-6 py-4 text-sm text-[var(--theme-primary)] font-semibold border-b border-[var(--theme-border)]">{row.investment}</td>
                      <td className="px-6 py-4 text-sm text-[var(--theme-text-secondary)] border-b border-[var(--theme-border)]">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

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
            Every business has unique security challenges. If your needs don&apos;t fit a standard package above, let&apos;s discuss a custom engagement.
          </p>
          <p className="text-[var(--theme-text-secondary)] mb-6">
            Additional areas I work in:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Application security reviews and penetration testing',
              'Cloud security architecture (AWS, Azure, GCP)',
              'Security training and team enablement',
              'Data pipeline security and governance',
              'Compliance program development',
              'Third-party security assessments',
              'Security tool evaluation and selection',
              'Technical security advisory (fractional CISO work)',
            ].map((area, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[var(--theme-primary)] flex-shrink-0" />
                <span className="text-[var(--theme-text-secondary)]">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-[var(--theme-text-secondary)] mb-6">
            I&apos;ll work with you to define scope, deliverables, timeline, and pricing that fits your situation.
          </p>
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
              Common Questions
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
            Schedule a free 20-minute consultation to discuss your security needs. No obligation, no sales pressure—just an honest conversation about your challenges and how I can help.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
