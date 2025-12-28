'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/TheWinterShadow',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/elijah-winter',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:contact@thewintershadow.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--theme-border)]"
      style={{ backgroundColor: 'var(--theme-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[var(--theme-primary)] mb-4">
              The Winter Shadow
            </h3>
            <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">
              Security Engineer | Developer | IT Specialist
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-[var(--theme-text)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-[var(--theme-text)] mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name === 'Email' ? undefined : '_blank'}
                    rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-3 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">
                      {social.name === 'Email' ? 'contact@thewintershadow.com' : social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[var(--theme-border)] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[var(--theme-text-secondary)] text-sm text-center md:text-left">
            © {currentYear} The Winter Shadow. All rights reserved.
          </p>
          <p className="text-[var(--theme-text-secondary)] text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js and
            Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

