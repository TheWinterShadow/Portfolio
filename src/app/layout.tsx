import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LayoutProvider } from '@/lib/layout-context';
import BottomNavigation from '@/components/BottomNavigation';
import LeftContactButtons from '@/components/LeftContactButtons';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

// Use system fonts for better offline build compatibility
// The fonts are loaded via CSS in globals.css using @import from Google Fonts
const fontVariables = '--font-sans --font-mono';

export const metadata: Metadata = {
  title: 'The Winter Shadow | Security Engineer & Developer',
  description: 'Portfolio of Elijah Winter - Security Engineer, Developer, and IT Professional. Showcasing projects in security, data engineering, and web development.',
  keywords: ['security engineer', 'developer', 'portfolio', 'AWS', 'cybersecurity', 'data engineering'],
  authors: [{ name: 'Elijah Winter' }],
  openGraph: {
    title: 'The Winter Shadow | Security Engineer & Developer',
    description: 'Portfolio of Elijah Winter - Security Engineer, Developer, and IT Professional',
    type: 'website',
  },
};

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
          <LayoutProvider>
            <EasterEggs />
            <LeftContactButtons />
            <BottomNavigation />
            {children}
            <ThemeToggle />
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

