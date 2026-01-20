/**
 * Theme Type Definitions
 *
 * @fileoverview TypeScript type definitions for the theming system.
 * Defines theme names, color modes, and theme structure.
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

/**
 * Available theme names
 * Each theme provides a unique color palette and visual identity
 */
export type ThemeName =
  | 'cyber'    // Cyan/neon command center aesthetic
  | 'security' // Professional security-focused blue-green
  | 'tech'     // Creative purple/pink innovator style
  | 'blue'     // Clean ocean blue professional
  | 'green'    // Natural forest green
  | 'orange'   // Warm sunset orange
  | 'red'      // Bold crimson red
  | 'purple';  // Royal purple elegance

/**
 * Color mode options
 * Controls the overall brightness of the theme
 */
export type ColorMode = 'light' | 'dark';

/**
 * Complete theme configuration
 * Defines all colors used throughout the application
 */
export interface Theme {
  /** Internal theme identifier */
  name: ThemeName;
  /** Human-readable theme name for UI display */
  displayName: string;
  /** Theme color palette */
  colors: {
    /** Primary background color */
    bg: string;
    /** Surface/card background color */
    surface: string;
    /** Primary accent color (buttons, links, highlights) */
    primary: string;
    /** Secondary accent color */
    secondary: string;
    /** Tertiary accent color */
    accent: string;
    /** Primary text color */
    text: string;
    /** Muted/secondary text color */
    textSecondary: string;
    /** Border and divider color */
    border: string;
  };
}
