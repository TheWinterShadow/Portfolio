/**
 * Unit tests for Hero component
 * 
 * @fileoverview Comprehensive test suite for the Hero component including
 * animation behavior, tagline rotation, user interactions, and accessibility
 * @author The Winter Shadow
 * @since 1.0.0
 */

import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../src/components/Hero';

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

// Enhanced framer-motion mock to prevent DOM attribute warnings
jest.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef<HTMLDivElement, any>((props, ref) => {
      const { whileHover, whileTap, animate, initial, transition, exit, ...rest } = props;
      return React.createElement('div', { ref, ...rest });
    }),
    section: React.forwardRef<HTMLElement, any>((props, ref) => {
      const { whileHover, whileTap, animate, initial, transition, exit, ...rest } = props;
      return React.createElement('section', { ref, ...rest });
    }),
    h1: React.forwardRef<HTMLHeadingElement, any>((props, ref) => {
      const { whileHover, whileTap, animate, initial, transition, exit, ...rest } = props;
      return React.createElement('h1', { ref, ...rest });
    }),
    button: React.forwardRef<HTMLButtonElement, any>((props, ref) => {
      const { whileHover, whileTap, animate, initial, transition, exit, ...rest } = props;
      return React.createElement('button', { ref, ...rest });
    }),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

/**
 * Test suite for Hero component rendering
 */
describe('Hero Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  /**
   * Basic rendering tests
   */
  describe('Rendering', () => {
    test('renders main heading with correct text', () => {
      render(<Hero />);
      
      expect(screen.getByText('Elijah Winter')).toBeInTheDocument();
      expect(screen.getByText('/ The Winter Shadow')).toBeInTheDocument();
    });

    test('renders subtitle with professional roles', () => {
      render(<Hero />);
      
      expect(screen.getByText('Security Engineer | Developer | IT Specialist')).toBeInTheDocument();
    });

    test('renders call-to-action buttons', () => {
      render(<Hero />);
      
      expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
    });

    test('renders expertise icons with labels', () => {
      render(<Hero />);
      
      expect(screen.getByText('Security')).toBeInTheDocument();
      expect(screen.getByText('Development')).toBeInTheDocument();
      expect(screen.getByText('Infrastructure')).toBeInTheDocument();
    });
  });

  /**
   * Tagline rotation functionality tests
   */
  describe('Tagline Rotation', () => {
    test('displays initial tagline on mount', () => {
      render(<Hero />);
      
      expect(screen.getByText('Building secure systems')).toBeInTheDocument();
    });

    test('rotates to next tagline after 3 seconds', async () => {
      render(<Hero />);
      
      // Initial tagline
      expect(screen.getByText('Building secure systems')).toBeInTheDocument();
      
      // Advance timers by 3 seconds with act wrapper
      act(() => {
        jest.advanceTimersByTime(3000);
      });
      
      // Should show second tagline
      await waitFor(() => {
        expect(screen.getByText('Automating security workflows')).toBeInTheDocument();
      });
    });

    test('cycles through all taglines', async () => {
      render(<Hero />);
      
      const taglines = [
        'Building secure systems',
        'Automating security workflows',
        'Bridging dev & security',
      ];
      
      // Test each tagline appears in sequence
      for (let i = 0; i < taglines.length; i++) {
        expect(screen.getByText(taglines[i])).toBeInTheDocument();
        
        act(() => {
          jest.advanceTimersByTime(3000);
        });
        
        if (i < taglines.length - 1) {
          await waitFor(() => {
            expect(screen.getByText(taglines[i + 1])).toBeInTheDocument();
          });
        }
      }
      
      // Should cycle back to first tagline
      await waitFor(() => {
        expect(screen.getByText(taglines[0])).toBeInTheDocument();
      });
    });

    test('cleans up interval on unmount', () => {
      const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
      const { unmount } = render(<Hero />);
      
      unmount();
      
      expect(clearIntervalSpy).toHaveBeenCalled();
      clearIntervalSpy.mockRestore();
    });
  });

  /**
   * Navigation and interaction tests
   */
  describe('User Interactions', () => {
    test('View Projects button has correct href', () => {
      render(<Hero />);
      
      const projectsButton = screen.getByRole('link', { name: /view projects/i });
      expect(projectsButton).toHaveAttribute('href', '/projects');
    });

    test('Contact Me button has correct href', () => {
      render(<Hero />);
      
      const contactButton = screen.getByRole('link', { name: /contact me/i });
      expect(contactButton).toHaveAttribute('href', '/contact');
    });

    test('buttons are clickable and focusable', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      render(<Hero />);
      
      const projectsButton = screen.getByRole('button', { name: /view projects/i });
      const contactButton = screen.getByRole('button', { name: /contact me/i });
      
      // Test that buttons are in the document and clickable
      expect(projectsButton).toBeInTheDocument();
      expect(contactButton).toBeInTheDocument();
      
      // Test click events (even though they're mocked)
      await user.click(projectsButton);
      await user.click(contactButton);
      
      // Verify the buttons are still accessible after interaction
      expect(projectsButton).toBeInTheDocument();
      expect(contactButton).toBeInTheDocument();
    });
  });

  /**
   * Styling and CSS tests
   */
  describe('Styling and Layout', () => {
    test('has correct section structure and styling classes', () => {
      render(<Hero />);
      
      // Get the main section by finding the parent section of the heading
      const heroSection = screen.getByText('Elijah Winter').closest('section');
      
      expect(heroSection).toBeInTheDocument();
      expect(heroSection).toHaveAttribute('id', 'home');
      expect(heroSection).toHaveClass('min-h-screen');
    });

    test('displays background gradient elements', () => {
      render(<Hero />);
      
      // Check for background gradient containers
      const heroSection = screen.getByText('Elijah Winter').closest('section');
      const backgroundElements = heroSection?.querySelectorAll('.absolute');
      
      expect(backgroundElements).toBeTruthy();
      expect(backgroundElements!.length).toBeGreaterThan(0);
    });

    test('has responsive layout classes', () => {
      render(<Hero />);
      
      // Check that responsive classes exist on the main container
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
      
      const subtitle = screen.getByText('Security Engineer | Developer | IT Specialist');
      expect(subtitle).toHaveClass('text-xl', 'md:text-2xl');
    });
  });

  /**
   * Accessibility tests
   */
  describe('Accessibility', () => {
    test('has proper heading structure', () => {
      render(<Hero />);
      
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
      expect(mainHeading).toHaveTextContent('Elijah Winter/ The Winter Shadow');
    });

    test('has accessible navigation links', () => {
      render(<Hero />);
      
      const projectsLink = screen.getByRole('link', { name: /view projects/i });
      const contactLink = screen.getByRole('link', { name: /contact me/i });
      
      expect(projectsLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });

    test('has proper ARIA labels and semantic structure', () => {
      render(<Hero />);
      
      // Check that the main section has proper ID for navigation
      const heroSection = screen.getByText('Elijah Winter').closest('section');
      expect(heroSection).toHaveAttribute('id', 'home');
    });

    test('has meaningful text for screen readers', () => {
      render(<Hero />);
      
      // All interactive elements should have descriptive text
      expect(screen.getByText('View Projects')).toBeInTheDocument();
      expect(screen.getByText('Contact Me')).toBeInTheDocument();
      expect(screen.getByText('Security')).toBeInTheDocument();
      expect(screen.getByText('Development')).toBeInTheDocument();
      expect(screen.getByText('Infrastructure')).toBeInTheDocument();
    });
  });

  /**
   * Performance and optimization tests
   */
  describe('Performance', () => {
    test('does not create memory leaks with interval', () => {
      const setIntervalSpy = jest.spyOn(global, 'setInterval');
      const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
      
      const { unmount } = render(<Hero />);
      
      // Verify interval is created
      expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 3000);
      
      unmount();
      
      // Verify interval is cleaned up
      expect(clearIntervalSpy).toHaveBeenCalled();
      
      setIntervalSpy.mockRestore();
      clearIntervalSpy.mockRestore();
    });

    test('tagline state updates correctly without infinite renders', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      render(<Hero />);
      
      // Advance through several tagline cycles with act wrapper
      act(() => {
        jest.advanceTimersByTime(15000); // 5 cycles
      });
      
      // Should not have any console errors about infinite renders
      // Filter out act warnings since those are expected in tests
      const infiniteRenderErrors = consoleSpy.mock.calls.filter(call => 
        call[0] && call[0].includes('infinite')
      );
      expect(infiniteRenderErrors).toHaveLength(0);
      
      consoleSpy.mockRestore();
    });
  });
});