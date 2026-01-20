/**
 * ThemeToggle Component - Theme and Color Mode Controls
 *
 * @fileoverview A floating control panel for changing themes and toggling dark mode.
 * Provides fixed-position buttons for quick theme customization.
 *
 * @description Renders:
 * - Color mode toggle button (sun/moon icon)
 * - Theme selector button (palette icon)
 * - Animated dropdown with theme options
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ThemeName } from '@/types/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Available theme options with display names
 */
const themes: { name: ThemeName; label: string }[] = [
  { name: 'cyber', label: 'Cyber Command Center' },
  { name: 'security', label: 'Security Professional' },
  { name: 'tech', label: 'Tech Innovator' },
  { name: 'blue', label: 'Ocean Blue' },
  { name: 'green', label: 'Forest Green' },
  { name: 'orange', label: 'Sunset Orange' },
  { name: 'red', label: 'Crimson Red' },
  { name: 'purple', label: 'Royal Purple' },
];

/**
 * ThemeToggle Component
 *
 * Provides theme customization controls with:
 * - Fixed top-right positioning
 * - Animated toggle buttons
 * - Dropdown theme selector with all available themes
 * - Color mode toggle (light/dark)
 *
 * @returns The theme toggle controls JSX
 *
 * @example
 * ```tsx
 * // Typically included in the root layout
 * <ThemeToggle />
 * ```
 */
export default function ThemeToggle() {
  const { themeName, colorMode, setThemeName, toggleColorMode } = useTheme();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Theme Selector */}
      <AnimatePresence>
        {showThemeSelector && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg shadow-lg p-2 mb-2 max-h-64 overflow-y-auto"
          >
            <div className="grid grid-cols-1 gap-1">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => {
                    setThemeName(theme.name);
                    setShowThemeSelector(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    themeName === theme.name
                      ? 'bg-[var(--theme-primary)]/20 text-[var(--theme-primary)]'
                      : 'text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg)]'
                  }`}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Buttons */}
      <div className="flex gap-2 flex-row-reverse">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleColorMode}
          className="p-3 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] shadow-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {colorMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowThemeSelector(!showThemeSelector)}
          className="p-3 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] shadow-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
          aria-label="Change theme"
        >
          <Palette size={20} />
        </motion.button>
      </div>
    </div>
  );
}

