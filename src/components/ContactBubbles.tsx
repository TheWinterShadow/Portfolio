/**
 * ContactBubbles Component - Social and Contact Links
 *
 * @fileoverview A reusable component for displaying contact and social media links.
 * Supports horizontal and vertical layouts with optional labels.
 *
 * @description Renders animated contact icons linking to:
 * - GitHub profile
 * - LinkedIn profile
 * - Email contact
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { links } from '@/data/links';

/**
 * Props for the ContactBubbles component
 */
interface ContactBubblesProps {
  variant?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  className?: string;
}

/**
 * ContactBubbles Component
 *
 * Displays animated contact and social media links with:
 * - GitHub profile link
 * - LinkedIn profile link
 * - Email contact link
 * - Hover animations and visual feedback
 *
 * @param props - Component props
 * @param props.variant - Layout direction: 'horizontal' or 'vertical'
 * @param props.showLabels - Whether to display text labels alongside icons
 * @param props.className - Additional CSS classes to apply
 * @returns The contact bubbles JSX
 *
 * @example
 * ```tsx
 * // Horizontal layout without labels (default)
 * <ContactBubbles />
 *
 * // Vertical layout with labels
 * <ContactBubbles variant="vertical" showLabels={true} />
 * ```
 */
export default function ContactBubbles({
  variant = 'horizontal',
  showLabels = false,
  className = '',
}: ContactBubblesProps) {
  const containerClass = variant === 'horizontal'
    ? 'flex items-center gap-2'
    : 'flex flex-col items-center gap-3';

  const linkClass = showLabels
    ? 'flex items-center gap-2 p-2 hover:bg-[var(--theme-surface)] rounded-lg transition-colors group'
    : 'p-2 hover:bg-[var(--theme-surface)] rounded-lg transition-colors group';

  return (
    <div className={`${containerClass} ${className}`}>
      <motion.a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={linkClass}
        aria-label="GitHub"
        title="GitHub"
      >
        <Github size={18} className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" />
        {showLabels && (
          <span className="text-sm text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors">
            GitHub
          </span>
        )}
      </motion.a>
      <motion.a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={linkClass}
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <Linkedin size={18} className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" />
        {showLabels && (
          <span className="text-sm text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors">
            LinkedIn
          </span>
        )}
      </motion.a>
      <motion.a
        href={`mailto:${links.email}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={linkClass}
        aria-label="Email"
        title="Email"
      >
        <Mail size={18} className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" />
        {showLabels && (
          <span className="text-sm text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors">
            Email
          </span>
        )}
      </motion.a>
    </div>
  );
}
