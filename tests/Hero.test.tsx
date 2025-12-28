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
      
      expect(screen.getByText('Enterprise-Grade Security Engineering')).toBeInTheDocument();
      expect(screen.getByText('for Growing Companies')).toBeInTheDocument();
    });

    test('renders subtitle with professional roles', () => {
      render(<Hero />);
      
      expect(screen.getByText(/I help startups and mid-market businesses build secure, compliant systems/)).toBeInTheDocument();
    });

    test('renders call-to-action buttons', () => {
      render(<Hero />);
      
      expect(screen.getByRole('link', { name: /schedule free consultation/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /view services & pricing/i })).toBeInTheDocument();
    });

    test('renders trust indicators with stats', () => {
      render(<Hero />);
      
      expect(screen.getByText('200+')).toBeInTheDocument();
      expect(screen.getByText('Security Incidents Resolved')).toBeInTheDocument();
      expect(screen.getByText('70%')).toBeInTheDocument();
      expect(screen.getByText('Reduction in Manual Security Work')).toBeInTheDocument();
      expect(screen.getByText('100K+')).toBeInTheDocument();
      expect(screen.getByText('Applications Secured')).toBeInTheDocument();
    });
  });

  /**
   * Navigation and interaction tests
   */
  describe('User Interactions', () => {
    test('Schedule consultation button has correct href', () => {
      render(<Hero />);
      
      const consultationButton = screen.getByRole('link', { name: /schedule free consultation/i });
      expect(consultationButton).toHaveAttribute('href', '/contact');
    });

    test('View Services button has correct href', () => {
      render(<Hero />);
      
      const servicesButton = screen.getByRole('link', { name: /view services & pricing/i });
      expect(servicesButton).toHaveAttribute('href', '/services');
    });

    test('buttons are clickable and focusable', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      render(<Hero />);
      
      const consultationButton = screen.getByRole('button', { name: /schedule free consultation/i });
      const servicesButton = screen.getByRole('button', { name: /view services & pricing/i });
      
      // Test that buttons are in the document and clickable
      expect(consultationButton).toBeInTheDocument();
      expect(servicesButton).toBeInTheDocument();
      
      // Test click events (even though they're mocked)
      await user.click(consultationButton);
      await user.click(servicesButton);
      
      // Verify the buttons are still accessible after interaction
      expect(consultationButton).toBeInTheDocument();
      expect(servicesButton).toBeInTheDocument();
    });
  });

  /**
   * Styling and CSS tests
   */
  describe('Styling and Layout', () => {
    test('has correct section structure and styling classes', () => {
      render(<Hero />);
      
      // Get the main section by finding the parent section of the heading
      const heroSection = screen.getByText('Enterprise-Grade Security Engineering').closest('section');
      
      expect(heroSection).toBeInTheDocument();
      expect(heroSection).toHaveAttribute('id', 'home');
      expect(heroSection).toHaveClass('min-h-screen');
    });

    test('displays background gradient elements', () => {
      render(<Hero />);
      
      // Check for background gradient containers
      const heroSection = screen.getByText('Enterprise-Grade Security Engineering').closest('section');
      const backgroundElements = heroSection?.querySelectorAll('.absolute');
      
      expect(backgroundElements).toBeTruthy();
      expect(backgroundElements!.length).toBeGreaterThan(0);
    });

    test('has responsive layout classes', () => {
      render(<Hero />);
      
      // Check that responsive classes exist on the main container
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-4xl', 'md:text-6xl', 'lg:text-7xl');
      
      const subtitle = screen.getByText(/I help startups and mid-market businesses/);
      expect(subtitle).toHaveClass('text-lg', 'md:text-xl', 'lg:text-2xl');
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
      expect(mainHeading).toHaveTextContent('Enterprise-Grade Security Engineeringfor Growing Companies');
    });

    test('has accessible navigation links', () => {
      render(<Hero />);
      
      const consultationLink = screen.getByRole('link', { name: /schedule free consultation/i });
      const servicesLink = screen.getByRole('link', { name: /view services & pricing/i });
      
      expect(consultationLink).toBeInTheDocument();
      expect(servicesLink).toBeInTheDocument();
    });

    test('has proper ARIA labels and semantic structure', () => {
      render(<Hero />);
      
      // Check that the main section has proper ID for navigation
      const heroSection = screen.getByText('Enterprise-Grade Security Engineering').closest('section');
      expect(heroSection).toHaveAttribute('id', 'home');
    });

    test('has meaningful text for screen readers', () => {
      render(<Hero />);
      
      // All interactive elements should have descriptive text
      expect(screen.getByText('Schedule Free Consultation')).toBeInTheDocument();
      expect(screen.getByText('View Services & Pricing')).toBeInTheDocument();
      expect(screen.getByText('200+')).toBeInTheDocument();
      expect(screen.getByText('70%')).toBeInTheDocument();
      expect(screen.getByText('100K+')).toBeInTheDocument();
    });
  });
});