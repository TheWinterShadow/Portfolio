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
            Get In Touch
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Prominent Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 p-6 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg hover:border-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 transition-all group"
                >
                  <div className="p-3 bg-[var(--theme-primary)]/20 rounded-lg group-hover:bg-[var(--theme-primary)]/30 transition-colors">
                    <Icon size={24} className="text-[var(--theme-primary)]" />
                  </div>
                  <span className="font-semibold text-[var(--theme-text)]">{social.label}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
      <ContactSection />
    </div>
  );
}

