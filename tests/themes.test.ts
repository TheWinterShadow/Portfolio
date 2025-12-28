/**
 * Unit tests for theme system
 * 
 * @fileoverview Comprehensive test suite for theme management, application,
 * and CSS custom property handling
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { themes, lightThemes, getTheme, applyTheme } from '../src/lib/themes';
import { ThemeName, ColorMode } from '../src/types/theme';

// Mock document.documentElement for testing
Object.defineProperty(document, 'documentElement', {
  value: {
    style: {
      setProperty: jest.fn(),
    },
  },
  writable: true,
});

/**
 * Test suite for theme system
 */
describe('Theme System', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  /**
   * Theme data structure validation
   */
  describe('Theme Data Structure', () => {
    test('dark themes are properly defined', () => {
      expect(themes).toBeDefined();
      expect(typeof themes).toBe('object');
      
      const themeNames: ThemeName[] = ['cyber', 'security', 'tech', 'blue', 'green', 'orange', 'red', 'purple'];
      themeNames.forEach(themeName => {
        expect(themes[themeName]).toBeDefined();
        expect(themes[themeName].name).toBe(themeName);
        expect(themes[themeName].displayName).toBeTruthy();
        expect(themes[themeName].colors).toBeDefined();
      });
    });

    test('light themes are properly defined', () => {
      expect(lightThemes).toBeDefined();
      expect(typeof lightThemes).toBe('object');
      
      const themeNames: ThemeName[] = ['cyber', 'security', 'tech', 'blue', 'green', 'orange', 'red', 'purple'];
      themeNames.forEach(themeName => {
        expect(lightThemes[themeName]).toBeDefined();
        expect(lightThemes[themeName].name).toBe(themeName);
        expect(lightThemes[themeName].displayName).toBeTruthy();
        expect(lightThemes[themeName].colors).toBeDefined();
      });
    });

    test('all themes have required color properties', () => {
      const requiredColors = [
        'bg', 'surface', 'primary', 'secondary', 
        'accent', 'text', 'textSecondary', 'border'
      ];

      Object.values(themes).forEach(theme => {
        requiredColors.forEach(colorKey => {
          expect(theme.colors).toHaveProperty(colorKey);
          expect(typeof theme.colors[colorKey as keyof typeof theme.colors]).toBe('string');
          expect(theme.colors[colorKey as keyof typeof theme.colors]).toMatch(/^#[0-9a-fA-F]{6}$/);
        });
      });

      Object.values(lightThemes).forEach(theme => {
        requiredColors.forEach(colorKey => {
          expect(theme.colors).toHaveProperty(colorKey);
          expect(typeof theme.colors[colorKey as keyof typeof theme.colors]).toBe('string');
          expect(theme.colors[colorKey as keyof typeof theme.colors]).toMatch(/^#[0-9a-fA-F]{6}$/);
        });
      });
    });

    test('theme names are consistent between dark and light variants', () => {
      const darkThemeNames = Object.keys(themes) as ThemeName[];
      const lightThemeNames = Object.keys(lightThemes) as ThemeName[];
      
      expect(darkThemeNames.sort()).toEqual(lightThemeNames.sort());
      
      darkThemeNames.forEach(themeName => {
        expect(themes[themeName].name).toBe(lightThemes[themeName].name);
        expect(themes[themeName].displayName).toBe(lightThemes[themeName].displayName);
      });
    });
  });

  /**
   * getTheme function tests
   */
  describe('getTheme function', () => {
    test('returns dark theme when colorMode is dark', () => {
      const themeName: ThemeName = 'cyber';
      const result = getTheme(themeName, 'dark');
      
      expect(result).toBe(themes[themeName]);
      expect(result.name).toBe(themeName);
    });

    test('returns light theme when colorMode is light', () => {
      const themeName: ThemeName = 'security';
      const result = getTheme(themeName, 'light');
      
      expect(result).toBe(lightThemes[themeName]);
      expect(result.name).toBe(themeName);
    });

    test('works with all theme names', () => {
      const themeNames: ThemeName[] = ['cyber', 'security', 'tech', 'blue', 'green', 'orange', 'red', 'purple'];
      const colorModes: ColorMode[] = ['dark', 'light'];
      
      themeNames.forEach(themeName => {
        colorModes.forEach(colorMode => {
          const result = getTheme(themeName, colorMode);
          expect(result.name).toBe(themeName);
          expect(result).toBe(colorMode === 'dark' ? themes[themeName] : lightThemes[themeName]);
        });
      });
    });
  });

  /**
   * applyTheme function tests
   */
  describe('applyTheme function', () => {
    test('sets all required CSS custom properties', () => {
      const theme = themes.cyber;
      const mockSetProperty = document.documentElement.style.setProperty as jest.Mock;
      
      applyTheme(theme);
      
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-bg', theme.colors.bg);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-surface', theme.colors.surface);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-primary', theme.colors.primary);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-secondary', theme.colors.secondary);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-accent', theme.colors.accent);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-text', theme.colors.text);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-text-secondary', theme.colors.textSecondary);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-border', theme.colors.border);
      
      // Should be called exactly 8 times (one for each color)
      expect(mockSetProperty).toHaveBeenCalledTimes(8);
    });

    test('applies different themes correctly', () => {
      const mockSetProperty = document.documentElement.style.setProperty as jest.Mock;
      
      // Apply cyber theme
      applyTheme(themes.cyber);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-primary', themes.cyber.colors.primary);
      
      mockSetProperty.mockClear();
      
      // Apply security theme
      applyTheme(themes.security);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-primary', themes.security.colors.primary);
      
      // Should have different primary colors
      expect(themes.cyber.colors.primary).not.toBe(themes.security.colors.primary);
    });

    test('applies light themes correctly', () => {
      const mockSetProperty = document.documentElement.style.setProperty as jest.Mock;
      
      applyTheme(lightThemes.tech);
      
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-bg', lightThemes.tech.colors.bg);
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-text', lightThemes.tech.colors.text);
      
      // Light themes should have lighter backgrounds
      expect(lightThemes.tech.colors.bg).not.toBe(themes.tech.colors.bg);
    });
  });

  /**
   * Theme color validation tests
   */
  describe('Theme Color Validation', () => {
    test('cyber theme has appropriate colors', () => {
      const cyber = themes.cyber;
      
      // Should have dark background
      expect(cyber.colors.bg).toMatch(/^#[0-1]/); // Starts with 0 or 1 (dark)
      
      // Should have cyan/blue accent colors
      expect(cyber.colors.primary).toContain('f');
      expect(cyber.colors.accent).toContain('f');
    });

    test('security theme has professional colors', () => {
      const security = themes.security;
      
      // Should have dark professional background
      expect(security.colors.bg).toMatch(/^#[0-2]/);
      
      // Should have teal/mint accents
      expect(security.colors.primary).toMatch(/^#[0-9a-f]{6}$/i);
    });

    test('light themes have lighter backgrounds than dark themes', () => {
      const themeNames: ThemeName[] = ['cyber', 'security', 'tech', 'blue', 'green', 'orange', 'red', 'purple'];
      
      themeNames.forEach(themeName => {
        const darkBg = themes[themeName].colors.bg;
        const lightBg = lightThemes[themeName].colors.bg;
        
        // Light theme background should start with higher hex values (lighter)
        const darkValue = parseInt(darkBg.substring(1, 3), 16);
        const lightValue = parseInt(lightBg.substring(1, 3), 16);
        
        expect(lightValue).toBeGreaterThan(darkValue);
      });
    });

    test('text colors have appropriate contrast with backgrounds', () => {
      // Dark themes should have light text
      Object.values(themes).forEach(theme => {
        const textColor = theme.colors.text;
        const bgColor = theme.colors.bg;
        
        // Text should be lighter than background in dark themes
        const textValue = parseInt(textColor.substring(1, 3), 16);
        const bgValue = parseInt(bgColor.substring(1, 3), 16);
        
        expect(textValue).toBeGreaterThan(bgValue);
      });

      // Light themes should have dark text
      Object.values(lightThemes).forEach(theme => {
        const textColor = theme.colors.text;
        const bgColor = theme.colors.bg;
        
        // Text should be darker than background in light themes
        const textValue = parseInt(textColor.substring(1, 3), 16);
        const bgValue = parseInt(bgColor.substring(1, 3), 16);
        
        expect(textValue).toBeLessThan(bgValue);
      });
    });
  });

  /**
   * Theme integration tests
   */
  describe('Theme Integration', () => {
    test('complete theme switching workflow', () => {
      const mockSetProperty = document.documentElement.style.setProperty as jest.Mock;
      
      // Start with cyber dark
      const cyberDark = getTheme('cyber', 'dark');
      applyTheme(cyberDark);
      
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-primary', cyberDark.colors.primary);
      
      mockSetProperty.mockClear();
      
      // Switch to security light
      const securityLight = getTheme('security', 'light');
      applyTheme(securityLight);
      
      expect(mockSetProperty).toHaveBeenCalledWith('--theme-primary', securityLight.colors.primary);
      expect(mockSetProperty).toHaveBeenCalledTimes(8);
    });

    test('theme data consistency across variants', () => {
      const themeNames: ThemeName[] = ['cyber', 'security', 'tech', 'blue', 'green', 'orange', 'red', 'purple'];
      
      themeNames.forEach(themeName => {
        const darkTheme = themes[themeName];
        const lightTheme = lightThemes[themeName];
        
        // Names and display names should match
        expect(darkTheme.name).toBe(lightTheme.name);
        expect(darkTheme.displayName).toBe(lightTheme.displayName);
        
        // Both should have all required properties
        const requiredColors = ['bg', 'surface', 'primary', 'secondary', 'accent', 'text', 'textSecondary', 'border'];
        requiredColors.forEach(colorKey => {
          expect(darkTheme.colors).toHaveProperty(colorKey);
          expect(lightTheme.colors).toHaveProperty(colorKey);
        });
      });
    });
  });
});