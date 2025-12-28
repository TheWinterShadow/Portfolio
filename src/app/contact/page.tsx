'use client';

import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

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
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
            Whether you need a security review, custom development, or infrastructure work—I&apos;d love to hear about what you&apos;re building.
          </p>
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
              Response time: I typically respond within 24 hours on weekdays.
            </p>
          </div>
        </motion.div>
      </div>
      <ContactSection />
    </div>
  );
}

