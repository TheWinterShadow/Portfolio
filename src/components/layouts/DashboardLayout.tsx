'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Code, Shield, Activity, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';
import { projects } from '@/data/projects';

/**
 * Dashboard/Analytics Layout
 * Data-driven with charts, metrics, widgets, dashboard-style
 */
export default function DashboardLayout() {
  const stats = [
    { label: 'Projects', value: projects.length, icon: Code, color: 'var(--theme-primary)' },
    { label: 'Open Source', value: projects.filter(p => Array.isArray(p.type) ? p.type.includes('Open Source') : p.type === 'Open Source').length, icon: Code, color: 'var(--theme-secondary)' },
    { label: 'Security Focus', value: projects.filter(p => p.domain === 'Security').length, icon: Shield, color: 'var(--theme-accent)' },
    { label: 'Years Experience', value: '5+', icon: TrendingUp, color: 'var(--theme-primary)' },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      {/* Dashboard Header */}
      <div className="bg-[var(--theme-surface)] border-b border-[var(--theme-border)] p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[var(--theme-text)] mb-2">
            Dashboard
          </h1>
          <p className="text-[var(--theme-text-secondary)]">
            Security Engineer | Developer | IT Specialist
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <section className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                      <Icon size={24} style={{ color: stat.color }} />
                    </div>
                    <Activity size={20} className="text-[var(--theme-text-secondary)]" />
                  </div>
                  <div className="text-3xl font-bold text-[var(--theme-text)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--theme-text-secondary)]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Widget Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-[var(--theme-text)] mb-4">Projects</h2>
                <ProjectsSection />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
                <h2 className="text-xl font-bold text-[var(--theme-text)] mb-4">Skills</h2>
                <SkillsSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FreelanceSection />
      <ContactSection />
      <ThemeToggle />
    </main>
  );
}

