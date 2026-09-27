/**
 * Footer Component - Site-wide Footer
 *
 * @fileoverview Renders on every page via the root layout. Surfaces every
 * outbound link the business relies on: contact channels, the freelance
 * site, resume, and previously designed client sites.
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { links, designedSites } from '@/data/links';

/**
 * Footer Component
 *
 * @returns The site footer JSX
 */
export default function Footer() {
  return (
    <footer className="border-t border-[var(--theme-border)] bg-[var(--theme-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="font-bold text-lg text-[var(--theme-text)] mb-2">The Winter Shadow</div>
          <p className="text-sm text-[var(--theme-text-secondary)]">
            Security Engineer, Developer, and IT Professional. Available for freelance work.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold text-[var(--theme-text)] mb-3">Site</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors">Home</Link></li>
            <li><Link href="/services" className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors">Services</Link></li>
            <li><Link href="/#projects" className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors">Projects</Link></li>
          </ul>
        </div>

        {/* Elsewhere */}
        <div>
          <h3 className="text-sm font-semibold text-[var(--theme-text)] mb-3">Elsewhere</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors">
                <Github size={14} /> GitHub
              </a>
            </li>
            <li>
              <a href={links.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors">
                <ArrowUpRight size={14} /> Resume
              </a>
            </li>
            <li>
              <a href={`mailto:${links.email}`} className="flex items-center gap-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors">
                <Mail size={14} /> Email
              </a>
            </li>
          </ul>
        </div>

        {/* Sites designed */}
        <div>
          <h3 className="text-sm font-semibold text-[var(--theme-text)] mb-3">Sites I&apos;ve Designed</h3>
          <ul className="space-y-2 text-sm">
            {designedSites.map((site) => (
              <li key={site.url}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors"
                >
                  {site.name}
                  <ArrowUpRight size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--theme-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-[var(--theme-text-secondary)] flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Elijah Winter &mdash; The Winter Shadow</span>
          <a href={links.freelance} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-primary)] transition-colors">
            Work with me &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
