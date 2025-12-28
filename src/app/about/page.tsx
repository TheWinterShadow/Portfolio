'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-6">
            Former Amazon Security Leader—Now Helping Growing Companies Build Secure Systems
          </h1>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed">
              Hi, I&apos;m Elijah Winter.
            </p>
            <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed">
              I spent 7+ years building security systems at Amazon and the CIA—the kinds of systems that protect hundreds of millions of users and some of the nation&apos;s most sensitive information.
            </p>
            <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed">
              At Amazon, I co-founded the AI Security Organization and created security frameworks used by 500+ development teams to build safe AI products. I partnered with 50+ engineering teams implementing access control systems, investigated 200+ security incidents, and built automation that reduced manual security work by 70%. Before that, I worked at the CIA on digital forensics, threat detection, and protecting classified networks.
            </p>
          </div>
        </motion.div>

        {/* Why I Freelance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10 mb-12"
        >
          <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-6">Why I Freelance</h2>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-[var(--theme-text-secondary)] leading-relaxed">
              Here&apos;s what I learned working at enterprise scale: most startups and mid-market companies face the same security challenges Amazon solved years ago—but they can&apos;t hire a 20-person security team to solve them.
            </p>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed">
              That&apos;s the gap I fill.
            </p>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed">
              I take the frameworks, tools, and processes that work at Amazon scale and adapt them for fast-moving teams. You get enterprise-quality security engineering without the enterprise overhead, complexity, or six-month timelines.
            </p>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed">
              I also learned that the best security work happens when you deeply understand a company&apos;s context—their business model, their technical debt, their competitive pressure, their actual risks. As a consultant, I can focus entirely on your problems without the distractions of corporate politics or unrelated priorities.
            </p>
          </div>
        </motion.div>

        {/* What Makes Me Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-8">What Makes Me Different</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Real Enterprise Experience at Scale',
                body: 'I didn\'t learn security from tutorials or certifications—I built it at Amazon and the CIA. I\'ve secured systems protecting millions of users, investigated actual breaches, and seen every edge case. When you hire consultants who\'ve only worked with 10-20 companies, you get theory. When you hire me, you get battle-tested experience from organizations that operate at a scale most companies will never reach.',
              },
              {
                title: 'I Understand the Business Context',
                body: 'At Amazon, I partnered with VPs and CISOs, consulted with 40+ healthcare customers on architecture decisions, and advised leadership on enabling innovation safely. I learned that security isn\'t about saying "no"—it\'s about understanding what you\'re trying to accomplish and finding the secure path to get there. I care about your business outcomes, not just checking security boxes.',
              },
              {
                title: 'Specialized AI/ML Security Expertise',
                body: 'Most security consultants learned their craft before AI became critical infrastructure. I co-founded Amazon\'s AI Security Organization and spent years securing machine learning systems, from training pipelines to production models. I understand prompt injection, model inversion, data poisoning, and every other attack vector that didn\'t exist five years ago. If you\'re building AI-powered products, this expertise is rare and valuable.',
              },
              {
                title: 'Built for Scale from Day One',
                body: 'The frameworks I use aren\'t just for today—they\'re designed to scale with you. I\'ve seen how companies grow from 10 to 10,000 employees, and I know which security decisions will help that transition and which will become technical debt. You get architecture that works now and grows with you.',
              },
            ].map((point, index) => (
              <div
                key={index}
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3">
                  {point.title}
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-8">How I Work</h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Discovery First',
                body: 'I spend time understanding your business, not just your tech stack. What are you optimizing for? Speed to market? Investor confidence? Compliance? Customer trust? The right security solution depends on your actual goals and constraints.',
              },
              {
                step: '2',
                title: 'Practical, Not Perfect',
                body: 'Perfect security doesn\'t exist, and even if it did, it would mean you\'d never ship. I focus on the security controls you need now, with a clear roadmap for what comes later as you scale. My recommendations are always prioritized: quick wins first, then strategic improvements.',
              },
              {
                step: '3',
                title: 'Knowledge Transfer Matters',
                body: 'When I\'m done, you should understand WHY we implemented things a certain way, not just WHAT we built. I document everything thoroughly and train your team so they can maintain and extend the work. You\'re not dependent on me forever.',
              },
              {
                step: '4',
                title: 'Long-Term Partnership',
                body: 'Security isn\'t one-and-done. Systems change, threats evolve, companies grow. Many of my clients keep me on retainer because having someone who already knows your systems and can respond quickly is valuable. But even if we don\'t work together long-term, I\'m available for questions.',
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center">
                  <span className="text-[var(--theme-primary)] font-bold text-lg">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Background & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-8">Background & Experience</h2>
          
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 mb-6">
            <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
              Senior Security Engineer | Amazon | 2021 - Present
            </h3>
            <ul className="space-y-2 text-[var(--theme-text-secondary)]">
              {[
                'Co-founded Amazon\'s AI Security Organization, defining strategy and organizational structure for team of 15+ security engineers',
                'Created AI security standards adopted by 500+ development teams across Amazon',
                'Partnered with 50+ engineering teams to implement attribute-based and fine-grained access control',
                'Architected security posture management tool for 100,000+ applications',
                'Consulted with 40+ healthcare customers on security architecture',
                'Led security reviews for high-impact product launches with VPs and CISOs',
                'Investigated 200+ insider threat incidents with 95% resolution rate',
                'Built security analytics data lake processing 10TB+ daily events',
                'Reduced manual security work by 70% through automation',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 mb-6">
            <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
              Central Intelligence Agency | 2018 - 2021
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[var(--theme-text)] mb-2">Cyber Security Advisor (2021)</h4>
                <ul className="space-y-1 text-[var(--theme-text-secondary)] text-sm">
                  <li>• Managed cyber security team of 8 analysts</li>
                  <li>• Conducted security assessments across 15+ enterprise systems</li>
                  <li>• Advised executive leadership on critical vulnerabilities</li>
                  <li>• Developed security awareness training for 300+ users</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--theme-text)] mb-2">Cyber Data Specialist (2020-2021)</h4>
                <ul className="space-y-1 text-[var(--theme-text-secondary)] text-sm">
                  <li>• Researched 50+ Advanced Persistent Threats (APTs)</li>
                  <li>• Automated data analytics workflows using Python and Spark</li>
                  <li>• Led data science projects applying machine learning to security datasets</li>
                  <li>• Served as Systems Administrator for classified networks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--theme-text)] mb-2">Digital Forensics Engineer Intern (2018-2020)</h4>
                <ul className="space-y-1 text-[var(--theme-text-secondary)] text-sm">
                  <li>• Researched emerging file formats, mobile devices, and storage technologies</li>
                  <li>• Developed Python scripts for information recovery and threat identification</li>
                  <li>• Analyzed digital datasets to identify malicious behaviors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-4">Education</h3>
            <p className="text-[var(--theme-text-secondary)]">
              <strong>Bachelor of Science in Cyber Security Engineering</strong><br />
              George Mason University Honors College | 2020
            </p>
          </div>

          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-4">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--theme-text-secondary)]">
              <div>
                <strong className="text-[var(--theme-text)]">Cloud & Infrastructure:</strong> AWS (Expert), Azure, Docker, Kubernetes, Terraform
              </div>
              <div>
                <strong className="text-[var(--theme-text)]">Programming:</strong> Python (Expert), Java, JavaScript, C, Bash, SQL
              </div>
              <div>
                <strong className="text-[var(--theme-text)]">Security Tools:</strong> Splunk, Elasticsearch, Kibana, EnCase, FTK, Wireshark
              </div>
              <div>
                <strong className="text-[var(--theme-text)]">Specializations:</strong> AI/ML Security, IAM/Access Control, Incident Response, Digital Forensics, Application Security, Cloud Security
              </div>
            </div>
          </div>
        </motion.div>

        {/* Beyond The Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">Beyond The Code</h2>
          <p className="text-[var(--theme-text-secondary)] leading-relaxed">
            When I&apos;m not debugging authorization policies or investigating security incidents, I&apos;m usually exploring new security research, contributing to open-source projects, or staying current on emerging threats (particularly in the AI security space).
          </p>
          <p className="text-[var(--theme-text-secondary)] leading-relaxed mt-4">
            I believe good work comes from a balanced life, and I apply the same systematic thinking to my personal interests as I do to security engineering. I&apos;m based in Arlington, Virginia, which keeps me close to the government and tech communities that shaped my career.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Let&apos;s Talk About Your Security Challenges
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
            Whether you&apos;re preparing for an audit, scaling your infrastructure, building AI features, or just know your security is behind where it should be—let&apos;s have an honest conversation.
          </p>
          <p className="text-[var(--theme-text-secondary)] mb-8">
            I&apos;ll tell you if I&apos;m the right fit. If not, I&apos;ll try to point you in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg flex items-center gap-2"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors"
              >
                View My Work
              </motion.button>
            </Link>
            <a
              href="https://www.elijahwinter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
