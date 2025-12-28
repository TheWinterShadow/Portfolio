'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Modern Layout
 * Clean, professional design inspired by modern portfolio sites
 * Single-page scroll with smooth transitions
 */
export default function ModernLayout() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ThemeToggle />
    </main>
  );
}

