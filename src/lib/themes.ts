/**
 * Theme system for The Winter Shadow Portfolio
 * 
 * @fileoverview Comprehensive theming system supporting multiple color schemes
 * and dark/light mode variants. Provides utilities for theme application and management.
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { Theme, ThemeName, ColorMode } from '@/types/theme';

/**
 * Dark theme configurations
 * 
 * Collection of dark mode themes, each representing a different personality
 * and aesthetic for the portfolio. Themes are applied using CSS custom properties
 * for dynamic switching without page reloads.
 */
export const themes: Record<ThemeName, Theme> = {
  cyber: {
    name: 'cyber',
    displayName: 'Cyber Command Center',
    colors: {
      bg: '#0a0a0a',
      surface: '#111111',
      primary: '#00f3ff',
      secondary: '#00d9ff',
      accent: '#00ffff',
      text: '#ffffff',
      textSecondary: '#a0a0a0',
      border: '#1a1a1a',
    },
  },
  security: {
    name: 'security',
    displayName: 'Security Professional',
    colors: {
      bg: '#1a1a2e',
      surface: '#16213e',
      primary: '#16d9e3',
      secondary: '#46c0d8',
      accent: '#6ee7b7',
      text: '#e2e8f0',
      textSecondary: '#94a3b8',
      border: '#1e293b',
    },
  },
  tech: {
    name: 'tech',
    displayName: 'Tech Innovator',
    colors: {
      bg: '#1e1e2e',
      surface: '#2d1b3d',
      primary: '#a855f7',
      secondary: '#ec4899',
      accent: '#f472b6',
      text: '#f1f5f9',
      textSecondary: '#cbd5e1',
      border: '#3b2a4a',
    },
  },
  blue: {
    name: 'blue',
    displayName: 'Ocean Blue',
    colors: {
      bg: '#0f172a',
      surface: '#1e293b',
      primary: '#3b82f6',
      secondary: '#60a5fa',
      accent: '#93c5fd',
      text: '#f1f5f9',
      textSecondary: '#cbd5e1',
      border: '#334155',
    },
  },
  green: {
    name: 'green',
    displayName: 'Forest Green',
    colors: {
      bg: '#0a1f0a',
      surface: '#1a2e1a',
      primary: '#22c55e',
      secondary: '#4ade80',
      accent: '#86efac',
      text: '#f0fdf4',
      textSecondary: '#bbf7d0',
      border: '#2d4a2d',
    },
  },
  orange: {
    name: 'orange',
    displayName: 'Sunset Orange',
    colors: {
      bg: '#1c0f05',
      surface: '#2d1a0a',
      primary: '#f97316',
      secondary: '#fb923c',
      accent: '#fdba74',
      text: '#fff7ed',
      textSecondary: '#fed7aa',
      border: '#3d2414',
    },
  },
  red: {
    name: 'red',
    displayName: 'Crimson Red',
    colors: {
      bg: '#1a0a0a',
      surface: '#2a1414',
      primary: '#ef4444',
      secondary: '#f87171',
      accent: '#fca5a5',
      text: '#fef2f2',
      textSecondary: '#fecaca',
      border: '#3a1f1f',
    },
  },
  purple: {
    name: 'purple',
    displayName: 'Royal Purple',
    colors: {
      bg: '#1a0f1f',
      surface: '#2a1a2f',
      primary: '#8b5cf6',
      secondary: '#a78bfa',
      accent: '#c4b5fd',
      text: '#faf5ff',
      textSecondary: '#e9d5ff',
      border: '#3a2a3f',
    },
  },
};

export const lightThemes: Record<ThemeName, Theme> = {
  cyber: {
    name: 'cyber',
    displayName: 'Cyber Command Center',
    colors: {
      bg: '#f5f5f5',
      surface: '#ffffff',
      primary: '#0066cc',
      secondary: '#0088ff',
      accent: '#00aaff',
      text: '#0a0a0a',
      textSecondary: '#666666',
      border: '#e0e0e0',
    },
  },
  security: {
    name: 'security',
    displayName: 'Security Professional',
    colors: {
      bg: '#f0f4f8',
      surface: '#ffffff',
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      accent: '#10b981',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
    },
  },
  tech: {
    name: 'tech',
    displayName: 'Tech Innovator',
    colors: {
      bg: '#faf5ff',
      surface: '#ffffff',
      primary: '#9333ea',
      secondary: '#d946ef',
      accent: '#f472b6',
      text: '#1e1e2e',
      textSecondary: '#6b7280',
      border: '#e9d5ff',
    },
  },
  blue: {
    name: 'blue',
    displayName: 'Ocean Blue',
    colors: {
      bg: '#eff6ff',
      surface: '#ffffff',
      primary: '#2563eb',
      secondary: '#3b82f6',
      accent: '#60a5fa',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
    },
  },
  green: {
    name: 'green',
    displayName: 'Forest Green',
    colors: {
      bg: '#f0fdf4',
      surface: '#ffffff',
      primary: '#16a34a',
      secondary: '#22c55e',
      accent: '#4ade80',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
    },
  },
  orange: {
    name: 'orange',
    displayName: 'Sunset Orange',
    colors: {
      bg: '#fff7ed',
      surface: '#ffffff',
      primary: '#ea580c',
      secondary: '#f97316',
      accent: '#fb923c',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
    },
  },
  red: {
    name: 'red',
    displayName: 'Crimson Red',
    colors: {
      bg: '#fef2f2',
      surface: '#ffffff',
      primary: '#dc2626',
      secondary: '#ef4444',
      accent: '#f87171',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
    },
  },
  purple: {
    name: 'purple',
    displayName: 'Royal Purple',
    colors: {
      bg: '#faf5ff',
      surface: '#ffffff',
      primary: '#7c3aed',
      secondary: '#8b5cf6',
      accent: '#a78bfa',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e9d5ff',
    },
  },
};

/**
 * Retrieves the appropriate theme based on theme name and color mode
 * 
 * Selects between dark and light variants of themes. Acts as the main
 * interface for theme selection throughout the application.
 * 
 * @param themeName - The name of the theme to retrieve
 * @param colorMode - Whether to use 'dark' or 'light' variant
 * @returns The complete theme object with color definitions
 * 
 * @example
 * ```typescript
 * const theme = getTheme('cyber', 'dark');
 * applyTheme(theme);
 * ```
 */
export function getTheme(themeName: ThemeName, colorMode: ColorMode): Theme {
  return colorMode === 'dark' ? themes[themeName] : lightThemes[themeName];
}

/**
 * Applies a theme to the document root by setting CSS custom properties
 * 
 * Updates CSS custom properties on the document root element, allowing
 * for instant theme switching without page reloads. All theme-aware
 * components use these CSS variables for consistent theming.
 * 
 * @param theme - The theme object to apply
 * 
 * @example
 * ```typescript
 * const cyberTheme = getTheme('cyber', 'dark');
 * applyTheme(cyberTheme);
 * ```
 */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--theme-bg', theme.colors.bg);
  root.style.setProperty('--theme-surface', theme.colors.surface);
  root.style.setProperty('--theme-primary', theme.colors.primary);
  root.style.setProperty('--theme-secondary', theme.colors.secondary);
  root.style.setProperty('--theme-accent', theme.colors.accent);
  root.style.setProperty('--theme-text', theme.colors.text);
  root.style.setProperty('--theme-text-secondary', theme.colors.textSecondary);
  root.style.setProperty('--theme-border', theme.colors.border);
}

