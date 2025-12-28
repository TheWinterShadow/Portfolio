'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, X, Check } from 'lucide-react';
import { useLayout } from '@/lib/layout-context';
import { LayoutId } from '@/types/theme';

const layouts = [
  { id: 'modern', name: 'Modern Portfolio', description: 'Clean, professional design inspired by modern portfolio sites' },
  { id: 'security', name: 'Security Professional', description: 'Traditional vertical scrolling, card-based sections' },
  { id: 'cyber', name: 'Cyber Command Center', description: 'Terminal/IDE style with sidebar navigation' },
  { id: 'tech', name: 'Tech Innovator', description: 'Creative asymmetrical with overlapping sections' },
  { id: 'minimal', name: 'Minimalist', description: 'Ultra-clean design with generous whitespace' },
  { id: 'grid', name: 'Grid-Based', description: 'Masonry grid layout with dynamic positioning' },
  { id: 'split', name: 'Split-Screen', description: 'Two-column focused design' },
  { id: 'timeline', name: 'Timeline Story', description: 'Narrative flow with timeline progression' },
  { id: 'magazine', name: 'Magazine Editorial', description: 'Multi-column magazine style with editorial design' },
  { id: 'dashboard', name: 'Dashboard Analytics', description: 'Data-driven with charts, metrics, widgets' },
  { id: 'carousel', name: 'Carousel Slideshow', description: 'Slide-based navigation, one section per slide' },
  { id: 'isometric', name: 'Isometric 3D', description: '3D perspective, isometric design with depth' },
  { id: 'fullscreen', name: 'Fullscreen Cinematic', description: 'Hero-driven with fullscreen backgrounds' },
  { id: 'cardstack', name: 'Card Stack', description: 'Interactive cards that stack and flip' },
];

export default function LayoutSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { layout, setLayout } = useLayout();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] shadow-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
        aria-label="Select layout"
      >
        <Layout size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[80vh] bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
              >
              <div className="p-6 border-b border-[var(--theme-border)] flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[var(--theme-text)]">Select Layout</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[var(--theme-bg)] rounded transition-colors"
                  aria-label="Close"
                >
                  <X size={24} className="text-[var(--theme-text-secondary)]" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {layouts.map((layoutOption) => (
                    <motion.button
                      key={layoutOption.id}
                      onClick={() => {
                        setLayout(layoutOption.id as LayoutId);
                        setIsOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        layout === layoutOption.id
                          ? 'border-[var(--theme-primary)] bg-[var(--theme-primary)]/10'
                          : 'border-[var(--theme-border)] bg-[var(--theme-bg)] hover:border-[var(--theme-primary)]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-[var(--theme-text)]">
                          {layoutOption.name}
                        </h3>
                        {layout === layoutOption.id && (
                          <Check size={20} className="text-[var(--theme-primary)]" />
                        )}
                      </div>
                      <p className="text-sm text-[var(--theme-text-secondary)]">
                        {layoutOption.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

