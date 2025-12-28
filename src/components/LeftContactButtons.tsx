'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

const contactLinks = [
  { 
    href: 'https://github.com/TheWinterShadow', 
    label: 'GitHub', 
    icon: Github,
    tooltip: 'GitHub Profile'
  },
  { 
    href: 'https://www.linkedin.com/in/elijah-winter', 
    label: 'LinkedIn', 
    icon: Linkedin,
    tooltip: 'LinkedIn Profile'
  },
  { 
    href: 'mailto:contact@thewintershadow.com', 
    label: 'Email', 
    icon: Mail,
    tooltip: 'Send Email'
  },
  { 
    href: 'https://www.elijahwinter.com', 
    label: 'Resume', 
    icon: FileText,
    tooltip: 'View Resume'
  },
];

export default function LeftContactButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show immediately for faster perceived load
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          x: isVisible ? 0 : -20
        }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-center gap-3"
      >
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center p-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg hover:border-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 transition-all shadow-lg"
              aria-label={link.tooltip}
            >
              <Icon 
                size={24} 
                className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" 
              />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-sm text-[var(--theme-text)] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                {link.tooltip}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[var(--theme-border)]" />
              </div>
            </motion.a>
          );
        })}
        {/* Vertical line */}
        <div className="absolute left-1/2 top-full w-0.5 h-16 bg-[var(--theme-border)]" />
      </motion.div>
    </div>
  );
}

