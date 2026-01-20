/**
 * Root Layout - Application Shell
 *
 * @fileoverview The root layout component that wraps all pages in the application.
 * Provides the base HTML structure, global styles, theme context, and persistent UI elements.
 *
 * @description This layout establishes the application shell including:
 * - HTML document structure with language and hydration settings
 * - Google Fonts preconnection and loading (Inter and JetBrains Mono)
 * - Theme provider for dynamic theming support
 * - Persistent UI controls (ThemeToggle and CLIToggle)
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import CLIToggle from '@/components/CLIToggle';

/**
 * Page metadata for SEO and social sharing
 * Configures title, description, keywords, and OpenGraph data
 */
export const metadata: Metadata = {
  title: 'Project Showcase | The Winter Shadow',
  description: 'Interactive showcase of projects spanning security, data engineering, web development, and more. Explore via web interface or CLI mode.',
  keywords: ['projects', 'portfolio', 'showcase', 'security', 'data engineering', 'web development'],
  authors: [{ name: 'Elijah Winter' }],
  openGraph: {
    title: 'Project Showcase | The Winter Shadow',
    description: 'Interactive showcase of projects spanning security, data engineering, web development, and more',
    type: 'website',
  },
};

/**
 * RootLayout Component
 *
 * Provides the application shell for all pages, including:
 * - HTML document structure
 * - Font loading configuration
 * - Theme context provider
 * - Persistent floating UI controls
 *
 * @param props - Component props
 * @param props.children - Child page content to render within the layout
 * @returns The complete HTML document structure
 *
 * @example
 * ```tsx
 * // Automatically wraps all pages in the app
 * // Access via any route in the application
 * ```
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          <ThemeToggle />
          <CLIToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}

