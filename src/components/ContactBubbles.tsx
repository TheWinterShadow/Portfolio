/**
 * ContactBubbles Component - Social and Contact Links
 *
 * @fileoverview A reusable component for displaying contact and social media links.
 * Supports horizontal and vertical layouts with optional labels.
 *
 * @description Renders animated contact icons linking to:
 * - GitHub profile
 * - Email contact
 * - Contact section anchor
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { motion } from 'framer-motion';
import { Github, Mail, MessageCircle } from 'lucide-react';

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
 * - Email contact link
 * - Smooth scroll to contact section
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
  /**
   * Handles click on the contact anchor link
   * Prevents default and smoothly scrolls to the contact section
   * @param e - The mouse click event
   */
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerClass = variant === 'horizontal'
    ? 'flex items-center gap-2'
    : 'flex flex-col items-center gap-3';

  const linkClass = showLabels
    ? 'flex items-center gap-2 p-2 hover:bg-[var(--theme-surface)] rounded-lg transition-colors group'
    : 'p-2 hover:bg-[var(--theme-surface)] rounded-lg transition-colors group';

  return (
    <div className={`${containerClass} ${className}`}>
      <motion.a
        href="https://github.com/TheWinterShadow"
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
        href="mailto:contact@thewintershadow.com"
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
      <motion.a
        href="#contact"
        onClick={handleContactClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={linkClass}
        aria-label="Contact"
        title="Contact"
      >
        <MessageCircle size={18} className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" />
        {showLabels && (
          <span className="text-sm text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors">
            Contact
          </span>
        )}
      </motion.a>
    </div>
  );
}
