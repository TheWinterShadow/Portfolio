import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LayoutProvider } from '@/lib/layout-context';
import BottomNavigation from '@/components/BottomNavigation';
import LeftContactButtons from '@/components/LeftContactButtons';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
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

