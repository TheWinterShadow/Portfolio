/**
 * Nav Component - Primary Site Navigation
 *
 * @fileoverview Sticky top navigation with brand, primary routes, and the
 * main conversion CTA. Renders on every page via the root layout.
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { links } from '@/data/links';

/**
 * Primary in-site navigation links
 */
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/#projects', label: 'Projects' },
];

/**
 * Nav Component
 *
 * Renders a sticky header with brand mark, primary navigation, and a
 * "Hire Me" CTA linking to the freelance business site. Collapses into a
 * hamburger menu on small screens.
 *
 * @returns The site navigation JSX
 */
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--theme-border)] bg-[var(--theme-bg)]/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-[var(--theme-text)] hover:text-[var(--theme-primary)] transition-colors"
        >
          The Winter Shadow
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.freelance}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-[var(--theme-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--theme-secondary)] transition-colors"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 text-[var(--theme-text)] cursor-pointer"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[var(--theme-border)] bg-[var(--theme-bg)]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={links.freelance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-[var(--theme-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--theme-secondary)] transition-colors"
              >
                Hire Me
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
