/**
 * CLIToggle Component - Floating CLI Access Button
 *
 * @fileoverview A fixed-position floating action button that opens the CLI interface.
 * Provides persistent access to the terminal-style project navigator from any scroll position.
 *
 * @description This component renders a floating button in the bottom-right corner
 * that opens the CLI modal when clicked. It handles project navigation from CLI
 * commands, scrolling to and highlighting the target project card.
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import CLI from './CLI';
import { projects } from '@/data/projects';

/**
 * CLIToggle Component
 *
 * Renders a floating action button for CLI access with:
 * - Fixed bottom-right positioning
 * - Animated entrance and hover effects
 * - Project navigation with scroll and highlight
 *
 * @returns The floating button and CLI modal JSX
 *
 * @example
 * ```tsx
 * // Typically included in the root layout
 * <CLIToggle />
 * ```
 */
export default function CLIToggle() {
  const [cliOpen, setCliOpen] = useState(false);

  /**
   * Handles navigation to a project from CLI commands
   * Closes CLI, scrolls to project, and applies temporary highlight
   * @param projectId - The ID of the project to navigate to
   */
  const handleNavigateToProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setCliOpen(false);
      setTimeout(() => {
        const element = document.getElementById(`project-${project.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight the project briefly
          element.classList.add('ring-4', 'ring-[var(--theme-primary)]');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-[var(--theme-primary)]');
          }, 2000);
        }
      }, 100);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setCliOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-[var(--theme-primary)] text-white rounded-full shadow-lg hover:bg-[var(--theme-secondary)] transition-colors"
        aria-label="Open CLI"
      >
        <Terminal size={24} />
      </motion.button>
      <CLI
        isOpen={cliOpen}
        onClose={() => setCliOpen(false)}
        onNavigateToProject={handleNavigateToProject}
      />
    </>
  );
}
