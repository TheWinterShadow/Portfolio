import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '@/components/Footer';

// Mock Framer Motion to prevent animation-related test issues
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { whileInView, initial, viewport, transition, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
  Github: () => <div data-testid="github-icon">Github Icon</div>,
  Linkedin: () => <div data-testid="linkedin-icon">LinkedIn Icon</div>,
  Mail: () => <div data-testid="mail-icon">Mail Icon</div>,
  Heart: () => <div data-testid="heart-icon">Heart Icon</div>,
}));

describe('Footer Component', () => {
  test('renders footer with all main sections', () => {
    render(<Footer />);
    
    expect(screen.getByText('The Winter Shadow')).toBeInTheDocument();
    expect(screen.getByText(/Security Engineer | Developer | IT Specialist/)).toBeInTheDocument();
    expect(screen.getByText(/Quick Links/)).toBeInTheDocument();
    expect(screen.getByText(/Connect/)).toBeInTheDocument();
  });

  test('renders without errors', () => {
    expect(() => render(<Footer />)).not.toThrow();
  });

  test('has proper semantic footer role', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders all quick navigation links', () => {
    render(<Footer />);
    
    const expectedNavItems = ['Home', 'About', 'Experience', 'Projects', 'Achievements', 'Contact'];
    
    expectedNavItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('navigation links have correct href attributes', () => {
    render(<Footer />);
    
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about');
    expect(screen.getByText('Experience').closest('a')).toHaveAttribute('href', '#experience');
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '#projects');
    expect(screen.getByText('Achievements').closest('a')).toHaveAttribute('href', '#achievements');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact');
  });

  test('social media links have correct URLs and attributes', () => {
    render(<Footer />);
    
    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/TheWinterShadow');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/elijah-winter');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    
    const emailLink = screen.getByText('contact@thewintershadow.com').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@thewintershadow.com');
  });

  test('external links open in new tab', () => {
    render(<Footer />);
    
    const externalLinks = [
      screen.getByText('GitHub').closest('a'),
      screen.getByText('LinkedIn').closest('a')
    ];
    
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('renders correct icons for each social platform', () => {
    render(<Footer />);
    
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  test('displays correct copyright information', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} The Winter Shadow`))).toBeInTheDocument();
  });

  test('social links have proper ARIA labels', () => {
    render(<Footer />);
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('contact@thewintershadow.com')).toBeInTheDocument();
  });

  test('navigation links are clickable', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    const homeLink = screen.getByText('Home');
    
    await expect(user.click(homeLink)).resolves.not.toThrow();
  });
});