'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Minimalist Layout
 * Ultra-clean design with generous whitespace
 * Minimal navigation, focus on content
 */
export default function MinimalLayout() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Navigation />
        <div className="mt-32 mb-32">
          <Hero />
        </div>
        <div className="mb-32">
          <ProjectsSection />
        </div>
        <div className="mb-32">
          <SkillsSection />
        </div>
        <div className="mb-32">
          <FreelanceSection />
        </div>
        <div className="mb-32">
          <ContactSection />
        </div>
      </div>
      <ThemeToggle />
    </main>
  );
}

