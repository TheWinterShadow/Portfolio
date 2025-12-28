import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LayoutProvider } from '@/lib/layout-context';
import BottomNavigation from '@/components/BottomNavigation';
import LeftContactButtons from '@/components/LeftContactButtons';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

// Fonts are loaded via HTML link tags in the head element for better offline build compatibility
// This allows the build to complete without network access to Google Fonts
// CSS variables with fallback font stacks are defined in globals.css

export const metadata: Metadata = {
  title: 'Elijah Winter | Full-Stack Technical Solutions for Growing Businesses',
  description: 'Security audits, backend development, and infrastructure automation for startups and businesses. One expert, end-to-end delivery. Starting at $4,500.',
  keywords: ['freelance security engineer', 'backend developer', 'devops consultant', 'security audit', 'API development', 'infrastructure automation', 'startup technical consultant', 'AWS security', 'cybersecurity consultant'],
  authors: [{ name: 'Elijah Winter' }],
  openGraph: {
    title: 'Elijah Winter | Full-Stack Technical Solutions for Growing Businesses',
    description: 'Security audits, backend development, and infrastructure automation. One expert, end-to-end delivery.',
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

