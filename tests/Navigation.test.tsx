/**
 * Unit tests for Navigation component
 * 
 * @fileoverview Tests for main navigation component including
 * scroll behavior, mobile menu, and smooth scrolling functionality
 * @author The Winter Shadow
 * @since 1.0.0
 */

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from '../src/components/Navigation';
import { ThemeProvider } from '../src/components/ThemeProvider';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    nav: React.forwardRef<HTMLElement, any>((props, ref) => {
      const { initial, animate, style, className, ...rest } = props;
      return <nav ref={ref} className={className} style={style} {...rest} />;
    }),
    div: React.forwardRef<HTMLDivElement, any>((props, ref) => {
      const { initial, animate, variants, transition, ...rest } = props;
      return <div ref={ref} {...rest} />;
    }),
    ul: React.forwardRef<HTMLUListElement, any>((props, ref) => {
      const { variants, ...rest } = props;
      return <ul ref={ref} {...rest} />;
    }),
    li: React.forwardRef<HTMLLIElement, any>((props, ref) => {
      const { variants, ...rest } = props;
      return <li ref={ref} {...rest} />;
    }),
    a: React.forwardRef<HTMLAnchorElement, any>((props, ref) => {
      const { whileHover, variants, ...rest } = props;
      return <a ref={ref} {...rest} />;
    }),
    button: React.forwardRef<HTMLButtonElement, any>((props, ref) => {
      const { whileHover, whileTap, variants, ...rest } = props;
      return <button ref={ref} {...rest} />;
    }),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

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

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">Menu</div>,
  X: () => <div data-testid="x-icon">X</div>,
}));

// Mock scroll behavior
const mockScrollIntoView = jest.fn();
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: mockScrollIntoView,
  writable: true,
});

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true,
});

// Helper to render Navigation with ThemeProvider
const renderNavigation = () => {
  return render(
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

/**
 * Test suite for Navigation component
 */
describe('Navigation Component', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear();
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  /**
   * Basic rendering tests
   */
  describe('Rendering', () => {
    test('renders navigation with all menu items', () => {
      renderNavigation();
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Experience')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Achievements')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    test('renders mobile menu button', () => {
      renderNavigation();
      
      const menuButton = screen.getByRole('button');
      expect(menuButton).toBeInTheDocument();
      expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
    });

    test('navigation items have correct href attributes', () => {
      renderNavigation();
      
      expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home');
      expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about');
      expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '#projects');
    });
  });

  /**
   * Scroll behavior tests
   */
  describe('Scroll Behavior', () => {
    test('adds scroll class when scrolled down', () => {
      renderNavigation();
      
      // Simulate scroll
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
        fireEvent.scroll(window);
      });
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('backdrop-blur-md');
    });

    test('removes scroll class when scrolled to top', () => {
      renderNavigation();
      
      // First scroll down
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
        fireEvent.scroll(window);
      });
      
      // Then scroll back to top
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
        fireEvent.scroll(window);
      });
      
      // Should not have backdrop blur when not scrolled
      const nav = screen.getByRole('navigation');
      expect(nav).not.toHaveClass('backdrop-blur-md');
    });
  });

  /**
   * Mobile menu tests
   */
  describe('Mobile Menu', () => {
    test('toggles mobile menu on button click', async () => {
      const user = userEvent.setup();
      renderNavigation();
      
      const menuButton = screen.getByRole('button');
      
      // Menu should be closed initially
      expect(screen.queryByTestId('x-icon')).not.toBeInTheDocument();
      
      // Open menu
      await act(async () => {
        await user.click(menuButton);
      });
      expect(screen.getByTestId('x-icon')).toBeInTheDocument();
      
      // Close menu
      await act(async () => {
        await user.click(menuButton);
      });
      expect(screen.queryByTestId('x-icon')).not.toBeInTheDocument();
    });

    test('closes mobile menu when navigation link is clicked', async () => {
      const user = userEvent.setup();
      
      // Mock querySelector to return a mock element
      const mockElement = { scrollIntoView: mockScrollIntoView };
      jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);
      
      renderNavigation();
      
      const menuButton = screen.getByRole('button');
      
      // Open menu
      await act(async () => {
        await user.click(menuButton);
      });
      expect(screen.getByTestId('x-icon')).toBeInTheDocument();
      
      // Click a navigation link in the mobile menu (use getAllByText and select the mobile menu one)
      const homeLinks = screen.getAllByText('Home');
      const mobileHomeLink = homeLinks.find(link => link.closest('.md\\:hidden'));
      
      await act(async () => {
        await user.click(mobileHomeLink!);
      });
      
      // Menu should close
      expect(screen.queryByTestId('x-icon')).not.toBeInTheDocument();
      
      // Cleanup
      jest.restoreAllMocks();
    });
  });

  /**
   * Navigation functionality tests
   */
  describe('Navigation Functionality', () => {
    test('calls scrollIntoView when navigation link is clicked', async () => {
      const user = userEvent.setup();
      
      // Mock querySelector to return a mock element
      const mockElement = { scrollIntoView: mockScrollIntoView };
      jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);
      
      renderNavigation();
      
      // Use the first Home link (desktop menu)
      const homeLinks = screen.getAllByText('Home');
      const desktopHomeLink = homeLinks[0];
      
      await act(async () => {
        await user.click(desktopHomeLink);
      });
      
      expect(document.querySelector).toHaveBeenCalledWith('#home');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      
      // Cleanup
      jest.restoreAllMocks();
    });

    test('handles missing target element gracefully', async () => {
      const user = userEvent.setup();
      
      // Mock querySelector to return null (element not found)
      jest.spyOn(document, 'querySelector').mockReturnValue(null);
      
      renderNavigation();
      
      const homeLinks = screen.getAllByText('Home');
      const desktopHomeLink = homeLinks[0];
      
      await act(async () => {
        await user.click(desktopHomeLink);
      });
      
      expect(document.querySelector).toHaveBeenCalledWith('#home');
      expect(mockScrollIntoView).not.toHaveBeenCalled();
      
      // Cleanup
      jest.restoreAllMocks();
    });
  });

  /**
   * Event cleanup tests
   */
  describe('Event Cleanup', () => {
    test('removes scroll event listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
      
      const { unmount } = renderNavigation();
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
      
      removeEventListenerSpy.mockRestore();
    });
  });
});