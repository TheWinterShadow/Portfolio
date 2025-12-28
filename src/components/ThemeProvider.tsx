'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeName, ColorMode } from '@/types/theme';
import { getTheme, applyTheme } from '@/lib/themes';

interface ThemeContextType {
  themeName: ThemeName;
  colorMode: ColorMode;
  setThemeName: (theme: ThemeName) => void;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeNameState] = useState<ThemeName>('security');
  const [colorMode, setColorMode] = useState<ColorMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage?.getItem('theme') as ThemeName | null;
      const savedColorMode = localStorage?.getItem('colorMode') as ColorMode | null;
      
      if (savedTheme) setThemeNameState(savedTheme);
      if (savedColorMode) setColorMode(savedColorMode);
    } catch (error) {
      // Handle localStorage errors gracefully (e.g., in SSR or private browsing)
      console.warn('Could not access localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const theme = getTheme(themeName, colorMode);
      applyTheme(theme);
      document.documentElement.classList.toggle('dark', colorMode === 'dark');
      try {
        localStorage?.setItem('theme', themeName);
        localStorage?.setItem('colorMode', colorMode);
      } catch (error) {
        console.warn('Could not save to localStorage:', error);
      }
    } else {
      // Apply default theme on initial mount to prevent flash
      const theme = getTheme(themeName, colorMode);
      applyTheme(theme);
      document.documentElement.classList.toggle('dark', colorMode === 'dark');
    }
  }, [themeName, colorMode, mounted]);

  const setThemeName = (theme: ThemeName) => {
    setThemeNameState(theme);
  };

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Always provide the context, even before mounted
  return (
    <ThemeContext.Provider value={{ themeName, colorMode, setThemeName, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

