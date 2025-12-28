'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/TheWinterShadow', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/elijah-winter', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:contact@thewintershadow.com', label: 'Email', icon: Mail },
  { href: 'https://www.elijahwinter.com', label: 'Resume', icon: FileText },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Let&apos;s Talk About Your Security
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
            No sales pitch. No pressure. Just 20 minutes to understand your challenges and see if I can help.
          </p>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-6 text-center">
            Choose Your Conversation Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { emoji: '🔒', label: 'Security Audit Discussion', desc: 'You need a security review for investors, customers, or compliance requirements' },
              { emoji: '🤖', label: 'AI Security Inquiry', desc: 'You\'re building AI/ML features and want to understand security risks' },
              { emoji: '🔐', label: 'IAM / Access Control Help', desc: 'Your permission system is getting complex and you need architecture help' },
              { emoji: '🚨', label: 'Incident Response (Urgent)', desc: 'You suspect or confirmed a security issue — I respond within 24 hours' },
              { emoji: '💬', label: 'General Security Question', desc: 'You\'re not sure exactly what you need yet — let\'s explore together' },
            ].map((option, index) => (
              <Link
                key={index}
                href="#contact"
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 hover:border-[var(--theme-primary)] transition-all group"
              >
                <div className="text-3xl mb-3">{option.emoji}</div>
                <h3 className="font-semibold text-[var(--theme-text)] mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
                  {option.label}
                </h3>
                <p className="text-sm text-[var(--theme-text-secondary)]">
                  {option.desc}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* What Happens Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-6 text-center">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'You Reach Out', desc: 'Fill out the form or email me directly' },
                { step: '2', title: 'I Respond', desc: 'Within 24 hours to schedule a call' },
                { step: '3', title: 'Discovery Call', desc: '20-minute free conversation (no obligation)' },
                { step: '4', title: 'Proposal', desc: 'Detailed proposal within 2-3 days if it\'s a fit' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--theme-primary)] font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-[var(--theme-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--theme-text-secondary)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Ways to Reach Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4 text-center">
              Other Ways to Reach Me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-4 bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg hover:border-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 transition-all group"
                  >
                    <Icon size={24} className="text-[var(--theme-primary)]" />
                    <span className="text-sm font-medium text-[var(--theme-text)]">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
            <p className="text-center text-sm text-[var(--theme-text-secondary)] mt-4">
              Response time: I typically respond within 24 hours on weekdays. For urgent security incidents, please indicate &quot;URGENT&quot; in your subject line or message.
            </p>
          </div>
        </motion.div>

        {/* Not Ready Yet Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-4 text-center">
              Not Ready to Talk Yet?
            </h2>
            <p className="text-[var(--theme-text-secondary)] mb-6 text-center">
              That&apos;s completely fine. Here are other ways to learn more about how I work:
            </p>
            <div className="space-y-3">
              {[
                { text: 'Read My Case Studies', href: '/projects', desc: 'See detailed examples of security projects I\'ve completed and the results achieved.' },
                { text: 'View Service Packages', href: '/services', desc: 'Review my service offerings and pricing to get a sense of investment levels.' },
                { text: 'Download My Resume', href: 'https://www.elijahwinter.com', external: true, desc: 'Get the full background on my experience at Amazon and CIA.' },
                { text: 'Follow on LinkedIn', href: 'https://www.linkedin.com/in/elijah-winter', external: true, desc: 'I share security insights, tips, and industry thoughts regularly.' },
                { text: 'Check Out My GitHub', href: 'https://github.com/TheWinterShadow', external: true, desc: 'See code examples and open-source security tools I\'ve contributed to.' },
              ].map((link, index) => {
                const LinkComponent = link.external ? 'a' : Link;
                const props = link.external
                  ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: link.href };
                return (
                  <LinkComponent
                    key={index}
                    {...props}
                    className="block p-4 bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg hover:border-[var(--theme-primary)] transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <ArrowRight size={18} className="text-[var(--theme-primary)] group-hover:translate-x-1 transition-transform" />
                      <span className="font-semibold text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors">
                        {link.text}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--theme-text-secondary)] ml-6">
                      {link.desc}
                    </p>
                  </LinkComponent>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-6 text-center">
              Quick Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Do you sign NDAs?',
                  a: 'Absolutely. Your security concerns and business details stay confidential.',
                },
                {
                  q: 'Can you start immediately?',
                  a: 'Typical lead time is 1-2 weeks for new projects. Emergency incident response can often be prioritized within 24 hours.',
                },
                {
                  q: 'Do you work remotely or onsite?',
                  a: 'Primarily remote (which keeps costs down). I\'m based in Arlington, VA and can meet onsite for DC/Northern Virginia clients when needed.',
                },
                {
                  q: 'What if we\'re not a good fit?',
                  a: 'I\'ll tell you honestly. If I\'m not the right person, I\'ll try to point you toward someone who is.',
                },
                {
                  q: 'Do you have a minimum project size?',
                  a: 'Most projects start around $5,000. For smaller needs, I offer hourly consulting or can recommend other resources.',
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-[var(--theme-border)] pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-[var(--theme-text)] mb-2">
                    Q: {faq.q}
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    A: {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8">
            The first conversation is always free. Let&apos;s talk about your security challenges and see if I can help.
          </p>
          <Link href="#contact">
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
      <ContactSection />
    </div>
  );
}

