'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

/**
 * Card Stack Layout
 * Cards that stack and flip, interactive card-based navigation
 */
export default function CardStackLayout() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const cards = [
    { id: 'hero', title: 'Elijah Winter', content: 'hero' },
    { id: 'projects', title: 'Projects', content: 'projects' },
    { id: 'skills', title: 'Skills', content: 'skills' },
    { id: 'freelance', title: 'Freelance', content: 'freelance' },
    { id: 'contact', title: 'Contact', content: 'contact' },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      <Navigation />
      
      <div className="relative w-full max-w-4xl">
        {/* Stacked Cards */}
        <div className="relative" style={{ height: '600px' }}>
          {cards.map((card, index) => {
            const isActive = activeCard === card.id;
            const zIndex = isActive ? 50 : cards.length - index;
            const offset = isActive ? 0 : (cards.length - index - 1) * 20;
            const scale = isActive ? 1.05 : 1 - (cards.length - index - 1) * 0.05;

            return (
              <motion.div
                key={card.id}
                initial={{ y: 0, scale: 1 }}
                animate={{
                  y: isActive ? -50 : offset,
                  scale: scale,
                  rotateY: isActive ? 0 : 5,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={() => setActiveCard(isActive ? null : card.id)}
                className="absolute inset-0 cursor-pointer"
                style={{ zIndex }}
              >
                <div className="h-full bg-[var(--theme-surface)] border-2 border-[var(--theme-border)] rounded-lg shadow-2xl overflow-hidden">
                  <div className="p-6 border-b border-[var(--theme-border)] flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[var(--theme-text)]">{card.title}</h2>
                    {isActive && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCard(null);
                        }}
                        className="p-2 hover:bg-[var(--theme-bg)] rounded"
                      >
                        <X size={20} className="text-[var(--theme-text-secondary)]" />
                      </button>
                    )}
                  </div>
                  <div className="h-[calc(100%-80px)] overflow-y-auto p-6">
                    {card.content === 'hero' && (
                      <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">
                          <span className="text-[var(--theme-text)]">Elijah</span>
                          <br />
                          <span className="text-[var(--theme-primary)]">Winter</span>
                        </h1>
                        <p className="text-xl text-[var(--theme-text-secondary)]">
                          Security Engineer | Developer | IT Specialist
                        </p>
                      </div>
                    )}
                    {card.content === 'projects' && <ProjectsSection />}
                    {card.content === 'skills' && <SkillsSection />}
                    {card.content === 'freelance' && <FreelanceSection />}
                    {card.content === 'contact' && <ContactSection />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ThemeToggle />
    </main>
  );
}

