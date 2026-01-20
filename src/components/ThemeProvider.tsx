/**
 * ThemeProvider Component - Theme Context Provider
 *
 * @fileoverview Provides theme management context for the application.
 * Handles theme selection, color mode toggling, and persistence via localStorage.
 *
 * @description This provider manages:
 * - Current theme name (cyber, security, tech, etc.)
 * - Color mode (light/dark)
 * - Theme persistence across sessions
 * - CSS custom property application
 * - HTML class management for dark mode
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeName, ColorMode } from '@/types/theme';
import { getTheme, applyTheme } from '@/lib/themes';

/**
 * Shape of the theme context value
 */
interface ThemeContextType {
  themeName: ThemeName;
  colorMode: ColorMode;
  setThemeName: (theme: ThemeName) => void;
  toggleColorMode: () => void;
}

/**
 * Theme context for accessing theme state throughout the app
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 *
 * Provides theme context to the component tree with:
 * - Theme name state (persisted to localStorage)
 * - Color mode state (light/dark, persisted to localStorage)
 * - Automatic theme application on mount and changes
 * - Graceful handling of localStorage errors (SSR, private browsing)
 *
 * @param props - Component props
 * @param props.children - Child components that can access theme context
 * @returns Provider component wrapping children
 *
 * @example
 * ```tsx
 * // In your layout
 * <ThemeProvider>
 *   {children}
 * </ThemeProvider>
 *
 * // In any child component
 * const { themeName, setThemeName, colorMode, toggleColorMode } = useTheme();
 * ```
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeNameState] = useState<ThemeName>('security');
  const [colorMode, setColorMode] = useState<ColorMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage?.getItem('theme') as ThemeName | null;
      const savedColorMode = localStorage?.getItem('colorMode') as ColorMode | null;
      
      if (savedTheme) setThemeNameState(savedTheme);
      if (savedColorMode) setColorMode(savedColorMode);
    } catch (error) {
      // Handle localStorage errors gracefully (e.g., in SSR or private browsing)
      console.warn('Could not access localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const theme = getTheme(themeName, colorMode);
      applyTheme(theme);
      document.documentElement.classList.toggle('dark', colorMode === 'dark');
      try {
        localStorage?.setItem('theme', themeName);
        localStorage?.setItem('colorMode', colorMode);
      } catch (error) {
        console.warn('Could not save to localStorage:', error);
      }
    } else {
      // Apply default theme on initial mount to prevent flash
      const theme = getTheme(themeName, colorMode);
      applyTheme(theme);
      document.documentElement.classList.toggle('dark', colorMode === 'dark');
    }
  }, [themeName, colorMode, mounted]);

  const setThemeName = (theme: ThemeName) => {
    setThemeNameState(theme);
  };

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Always provide the context, even before mounted
  return (
    <ThemeContext.Provider value={{ themeName, colorMode, setThemeName, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access theme context
 *
 * Provides access to:
 * - themeName: Current theme name
 * - colorMode: Current color mode (light/dark)
 * - setThemeName: Function to change the theme
 * - toggleColorMode: Function to toggle light/dark mode
 *
 * @returns Theme context value
 * @throws Error if used outside of ThemeProvider
 *
 * @example
 * ```tsx
 * const { themeName, toggleColorMode } = useTheme();
 * ```
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

