'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type LayoutId = 'security' | 'cyber' | 'tech' | 'minimal' | 'grid' | 'split' | 'timeline' | 'magazine' | 'dashboard' | 'carousel' | 'isometric' | 'fullscreen' | 'cardstack' | 'modern';

interface LayoutContextType {
  layout: LayoutId;
  setLayout: (layout: LayoutId) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layout, setLayoutState] = useState<LayoutId>('modern');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLayout = localStorage.getItem('layout') as LayoutId | null;
    const validLayouts: LayoutId[] = ['security', 'cyber', 'tech', 'minimal', 'grid', 'split', 'timeline', 'magazine', 'dashboard', 'carousel', 'isometric', 'fullscreen', 'cardstack', 'modern'];
    if (savedLayout && validLayouts.includes(savedLayout)) {
      setLayoutState(savedLayout);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('layout', layout);
    }
  }, [layout, mounted]);

  const setLayout = (newLayout: LayoutId) => {
    setLayoutState(newLayout);
  };

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}

