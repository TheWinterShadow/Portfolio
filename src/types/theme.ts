export type ThemeName = 'cyber' | 'security' | 'tech' | 'blue' | 'green' | 'orange' | 'red' | 'purple';
export type ColorMode = 'light' | 'dark';
export type LayoutId = 'security' | 'cyber' | 'tech' | 'minimal' | 'grid' | 'split' | 'timeline' | 'magazine' | 'dashboard' | 'carousel' | 'isometric' | 'fullscreen' | 'cardstack' | 'modern';

export interface Theme {
  name: ThemeName;
  displayName: string;
  colors: {
    bg: string;
    surface: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

