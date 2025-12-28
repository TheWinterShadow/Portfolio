'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, FolderKanban, Mail, Github, Linkedin, FileText, Mail as MailIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { href: 'https://github.com/TheWinterShadow', label: 'GitHub', icon: Github, external: true },
  { href: 'https://www.linkedin.com/in/elijah-winter', label: 'LinkedIn', icon: Linkedin, external: true },
  { href: 'mailto:contact@thewintershadow.com', label: 'Email', icon: MailIcon, external: false },
  { href: 'https://www.elijahwinter.com', label: 'Resume', icon: FileText, external: true },
];

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const { themeName } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true); // Auto-open on desktop
      } else {
        setIsOpen(false); // Auto-close on mobile
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] shadow-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-64 bg-[var(--theme-surface)] border-r border-[var(--theme-border)] z-40 flex flex-col shadow-xl"
          >
            {/* Logo/Brand */}
            <div className="p-6 border-b border-[var(--theme-border)]">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-2xl font-bold text-[var(--theme-primary)] hover:text-[var(--theme-accent)] transition-colors"
              >
                The Winter Shadow
              </Link>
              <p className="text-sm text-[var(--theme-text-secondary)] mt-1">
                Technical Portfolio
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] border border-[var(--theme-primary)]/30'
                        : 'text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg)] hover:text-[var(--theme-text)]'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Social Links */}
            <div className="p-4 border-t border-[var(--theme-border)] space-y-2">
              <p className="text-xs font-semibold text-[var(--theme-text-secondary)] uppercase tracking-wider mb-3 px-4">
                Connect
              </p>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                
                if (social.external) {
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg)] hover:text-[var(--theme-primary)] transition-colors group"
                    >
                      <Icon size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg)] hover:text-[var(--theme-primary)] transition-colors group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle - can add here if needed */}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main content offset for desktop */}
      <div className={`${isOpen && !isMobile ? 'lg:ml-64' : ''} transition-all duration-300`} />
    </>
  );
}

