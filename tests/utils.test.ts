/**
 * Unit tests for utility functions
 * 
 * @fileoverview Comprehensive test suite for utility functions in The Winter Shadow Portfolio
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { cn, debounce, formatNumber, generateId, safeJsonParse, capitalize } from '../src/lib/utils';

/**
 * Test suite for the cn (class name) utility function
 */
describe('cn utility function', () => {
  test('combines multiple class strings', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  test('handles conditional classes with objects', () => {
    expect(cn('base', { active: true, disabled: false })).toBe('base active');
  });

  test('handles undefined and null values', () => {
    expect(cn('base', undefined, null, 'valid')).toBe('base valid');
  });

  test('merges conflicting Tailwind classes correctly', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
    expect(cn('text-sm', 'text-lg')).toBe('text-lg');
  });

  test('preserves non-conflicting Tailwind classes', () => {
    expect(cn('bg-red-500 text-white', 'border-2')).toBe('bg-red-500 text-white border-2');
  });

  test('handles complex Tailwind merging scenarios', () => {
    const result = cn(
      'bg-red-500 text-sm px-4 py-2',
      'bg-blue-500 text-lg',
      { 'hover:bg-green-500': true }
    );
    expect(result).toContain('bg-blue-500');
    expect(result).toContain('text-lg');
    expect(result).toContain('px-4');
    expect(result).toContain('py-2');
    expect(result).toContain('hover:bg-green-500');
  });
});

/**
 * Test suite for the debounce utility function
 */
describe('debounce utility function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('delays function execution', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('cancels previous calls when called multiple times', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('passes arguments correctly', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn('arg1', 'arg2', 123);
    jest.advanceTimersByTime(300);

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2', 123);
  });

  test('maintains correct function signature', () => {
    const originalFn = (a: string, b: number): string => `${a}-${b}`;
    const debouncedFn = debounce(originalFn, 300);

    // TypeScript should allow this call
    debouncedFn('test', 123);
    jest.advanceTimersByTime(300);
  });

  test('handles rapid successive calls correctly', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    // Rapid calls
    debouncedFn('call1');
    jest.advanceTimersByTime(50);
    debouncedFn('call2');
    jest.advanceTimersByTime(50);
    debouncedFn('call3');
    
    // Still shouldn't have been called
    expect(mockFn).not.toHaveBeenCalled();
    
    // Now it should be called with the last arguments
    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('call3');
  });
});

/**
 * Test suite for the formatNumber utility function
 */
describe('formatNumber utility function', () => {
  test('formats numbers under 1000 as-is', () => {
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber(42)).toBe('42');
    expect(formatNumber(999)).toBe('999');
  });

  test('formats thousands with k suffix', () => {
    expect(formatNumber(1000)).toBe('1.0k');
    expect(formatNumber(1234)).toBe('1.2k');
    expect(formatNumber(9999)).toBe('10.0k');
  });

  test('rounds to one decimal place', () => {
    expect(formatNumber(1234)).toBe('1.2k');
    expect(formatNumber(1299)).toBe('1.3k');
    expect(formatNumber(15678)).toBe('15.7k');
  });

  test('handles edge cases', () => {
    expect(formatNumber(1000)).toBe('1.0k');
    expect(formatNumber(999.9)).toBe('999.9'); // JavaScript keeps 999.9 as is
    expect(formatNumber(1000.1)).toBe('1.0k');
  });
});

/**
 * Test suite for the generateId utility function
 */
describe('generateId utility function', () => {
  test('generates string of default length', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBe(8);
  });

  test('generates string of specified length', () => {
    expect(generateId(4)).toHaveLength(4);
    expect(generateId(8)).toHaveLength(8);
    expect(generateId(12)).toHaveLength(12);
    expect(generateId(16)).toHaveLength(16);
    
    // Test that it generates unique strings
    const ids = Array.from({ length: 10 }, () => generateId(8));
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test('generates different IDs on each call', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });

  test('generates alphanumeric characters only', () => {
    const id = generateId(20);
    expect(id).toMatch(/^[a-z0-9]+$/);
  });
});

/**
 * Test suite for the safeJsonParse utility function
 */
describe('safeJsonParse utility function', () => {
  test('parses valid JSON correctly', () => {
    const validJson = '{"name": "test", "value": 123}';
    const result = safeJsonParse(validJson, {});
    expect(result).toEqual({ name: 'test', value: 123 });
  });

  test('returns default value for invalid JSON', () => {
    const invalidJson = '{"invalid": json}';
    const defaultValue = { fallback: true };
    const result = safeJsonParse(invalidJson, defaultValue);
    expect(result).toBe(defaultValue);
  });

  test('returns default value for null input', () => {
    const defaultValue = { fallback: true };
    const result = safeJsonParse(null, defaultValue);
    expect(result).toBe(defaultValue);
  });

  test('returns default value for empty string', () => {
    const defaultValue = { fallback: true };
    const result = safeJsonParse('', defaultValue);
    expect(result).toBe(defaultValue);
  });

  test('handles different data types', () => {
    // Array
    expect(safeJsonParse('[1, 2, 3]', [])).toEqual([1, 2, 3]);
    
    // Number
    expect(safeJsonParse('42', 0)).toBe(42);
    
    // Boolean
    expect(safeJsonParse('true', false)).toBe(true);
    
    // String
    expect(safeJsonParse('"hello"', '')).toBe('hello');
  });

  test('preserves type safety with generics', () => {
    interface User {
      name: string;
      age: number;
    }
    
    const userJson = '{"name": "John", "age": 30}';
    const defaultUser: User = { name: 'Anonymous', age: 0 };
    
    const result: User = safeJsonParse<User>(userJson, defaultUser);
    expect(result.name).toBe('John');
    expect(result.age).toBe(30);
  });
});

/**
 * Test suite for the capitalize utility function
 */
describe('capitalize utility function', () => {
  test('capitalizes first letter of lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('preserves already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('WORLD');
  });

  test('capitalizes first letter only', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('multiple WORDS here')).toBe('Multiple WORDS here');
  });

  test('handles edge cases', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
    expect(capitalize('A')).toBe('A');
  });

  test('handles special characters', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('!hello')).toBe('!hello');
    expect(capitalize(' hello')).toBe(' hello');
  });
});