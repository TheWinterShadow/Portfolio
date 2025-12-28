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
 * Security Professional Layout
 * Traditional vertical scrolling layout with card-based sections
 * Clean, professional, centered content
 */
export default function SecurityLayout() {
  return (
    <main className="min-h-screen">
      <EasterEggs />
      <Navigation />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <FreelanceSection />
      <ContactSection />
      <ThemeToggle />
    </main>
  );
}

