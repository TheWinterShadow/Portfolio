import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LayoutProvider, useLayout } from '@/lib/layout-context';
import { LayoutId } from '@/types/theme';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock console.error for error boundary tests
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

describe('Layout Context', () => {
  // Test component that uses the context
  const TestConsumer = () => {
    const { layout, setLayout } = useLayout();
    return (
      <div>
        <div data-testid="current-layout">{layout}</div>
        <button data-testid="set-cyber" onClick={() => setLayout('cyber')}>Set Cyber</button>
        <button data-testid="set-tech" onClick={() => setLayout('tech')}>Set Tech</button>
        <button data-testid="set-minimal" onClick={() => setLayout('minimal')}>Set Minimal</button>
      </div>
    );
  };

  const renderLayoutProvider = () => {
    return render(
      <LayoutProvider>
        <TestConsumer />
      </LayoutProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  test('provides default layout when no saved layout exists', () => {
    renderLayoutProvider();
    expect(screen.getByTestId('current-layout')).toHaveTextContent('modern');
  });

  test('loads saved layout from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('cyber');
    renderLayoutProvider();
    act(() => {});
    expect(screen.getByTestId('current-layout')).toHaveTextContent('cyber');
  });

  test('updates layout state when setLayout is called', async () => {
    const user = userEvent.setup();
    renderLayoutProvider();
    
    await user.click(screen.getByTestId('set-cyber'));
    expect(screen.getByTestId('current-layout')).toHaveTextContent('cyber');
  });

  test('persists layout changes to localStorage after mount', async () => {
    const user = userEvent.setup();
    renderLayoutProvider();
    
    await user.click(screen.getByTestId('set-cyber'));
    act(() => {});
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('layout', 'cyber');
  });

  test('validates layout from localStorage and falls back to default for invalid layouts', () => {
    localStorageMock.getItem.mockReturnValue('invalid-layout');
    renderLayoutProvider();
    expect(screen.getByTestId('current-layout')).toHaveTextContent('modern');
  });

  test('handles missing localStorage gracefully', () => {
    localStorageMock.getItem.mockReturnValue(null);
    renderLayoutProvider();
    expect(screen.getByTestId('current-layout')).toHaveTextContent('modern');
  });

  test('accepts all valid layout IDs', () => {
    const validLayouts: LayoutId[] = [
      'security', 'cyber', 'tech', 'minimal', 'grid', 'split', 
      'timeline', 'magazine', 'dashboard', 'carousel', 'isometric', 
      'fullscreen', 'cardstack', 'modern'
    ];

    validLayouts.forEach(layout => {
      localStorageMock.getItem.mockReturnValue(layout);
      const { unmount } = renderLayoutProvider();
      act(() => {});
      expect(screen.getByTestId('current-layout')).toHaveTextContent(layout);
      unmount();
    });
  });

  test('rejects invalid layout IDs', () => {
    const invalidLayouts = ['invalid', 'unknown', 'bad-layout', ''];
    
    invalidLayouts.forEach(invalidLayout => {
      localStorageMock.getItem.mockReturnValue(invalidLayout);
      const { unmount } = renderLayoutProvider();
      expect(screen.getByTestId('current-layout')).toHaveTextContent('modern');
      unmount();
    });
  });

  test('throws error when useLayout is used outside provider', () => {
    expect(() => {
      render(<TestConsumer />);
    }).toThrow('useLayout must be used within a LayoutProvider');
  });

  test('enables localStorage save after mount', async () => {
    const user = userEvent.setup();
    renderLayoutProvider();
    
    const setCyberButton = screen.getByTestId('set-cyber');
    await user.click(setCyberButton);
    act(() => {});
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('layout', 'cyber');
  });

  test('provides layout and setLayout function', () => {
    renderLayoutProvider();
    expect(screen.getByTestId('current-layout')).toBeInTheDocument();
    expect(screen.getByTestId('set-cyber')).toBeInTheDocument();
  });

  test('setLayout function updates state consistently', async () => {
    const user = userEvent.setup();
    renderLayoutProvider();
    
    await user.click(screen.getByTestId('set-cyber'));
    expect(screen.getByTestId('current-layout')).toHaveTextContent('cyber');
    
    await user.click(screen.getByTestId('set-tech'));
    expect(screen.getByTestId('current-layout')).toHaveTextContent('tech');
    
    await user.click(screen.getByTestId('set-minimal'));
    expect(screen.getByTestId('current-layout')).toHaveTextContent('minimal');
  });

  test('handles server-side rendering', () => {
    expect(() => renderLayoutProvider()).not.toThrow();
    expect(screen.getByTestId('current-layout')).toHaveTextContent('modern');
  });

  test('hydrates correctly with saved layout', () => {
    localStorageMock.getItem.mockReturnValue('security');
    renderLayoutProvider();
    act(() => {});
    expect(screen.getByTestId('current-layout')).toHaveTextContent('security');
  });
});