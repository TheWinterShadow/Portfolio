'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Isometric/3D Layout
 * 3D perspective, isometric design, depth and dimension
 */
export default function IsometricLayout() {
  return (
    <main className="min-h-screen perspective-1000" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      {/* Isometric Hero */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, rotateX: -30 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="transform-style-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="bg-[var(--theme-surface)] border border-[var(--theme-border)] p-12 rounded-lg shadow-2xl"
              style={{
                transform: 'rotateX(5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="text-[var(--theme-text)]">Elijah</span>
                <br />
                <span className="text-[var(--theme-primary)]">Winter</span>
              </h1>
              <p className="text-xl text-[var(--theme-text-secondary)]">
                Security Engineer | Developer | IT Specialist
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Projects', component: ProjectsSection },
              { title: 'Skills', component: SkillsSection },
              { title: 'Freelance', component: FreelanceSection },
            ].map((item, index) => {
              const Component = item.component;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, rotateY: -20 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="transform-style-3d"
                  style={{
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className="bg-[var(--theme-surface)] border border-[var(--theme-border)] p-6 rounded-lg shadow-xl h-full"
                    style={{
                      transform: 'translateZ(20px)',
                    }}
                  >
                    <h2 className="text-2xl font-bold text-[var(--theme-text)] mb-4">
                      {item.title}
                    </h2>
                    <Component />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
      <ThemeToggle />
    </main>
  );
}

