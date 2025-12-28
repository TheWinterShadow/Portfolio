/**
 * Utility functions for The Winter Shadow Portfolio
 * 
 * @fileoverview Collection of reusable utility functions for styling, performance optimization, and data formatting
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges Tailwind CSS classes intelligently
 * 
 * This utility function combines clsx for conditional class application
 * with tailwind-merge for intelligent class deduplication and override handling.
 * It's particularly useful for component libraries where you need to merge
 * default classes with user-provided overrides.
 * 
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * ```typescript
 * // Basic usage
 * cn('bg-red-500', 'text-white') // 'bg-red-500 text-white'
 * 
 * // With conditional classes
 * cn('base-class', isActive && 'active-class', {
 *   'error-class': hasError,
 *   'success-class': isSuccess
 * })
 * 
 * // With Tailwind overrides
 * cn('bg-red-500 text-sm', 'bg-blue-500 text-lg') // 'text-sm bg-blue-500 text-lg'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a debounced version of a function that delays execution
 * 
 * Debouncing is a performance optimization technique that limits the rate
 * at which a function can fire. It's particularly useful for search inputs,
 * resize handlers, and other frequently triggered events.
 * 
 * @template T - The type of the function to debounce
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced version of the input function
 * 
 * @example
 * ```typescript
 * // Debounced search handler
 * const debouncedSearch = debounce((query: string) => {
 *   performSearch(query);
 * }, 300);
 * 
 * // Usage in component
 * const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   debouncedSearch(e.target.value);
 * };
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Formats numbers for display with appropriate suffixes
 * 
 * Converts large numbers into more readable format with 'k' suffix
 * for thousands. Useful for displaying stats like GitHub stars,
 * downloads, or other metrics in the portfolio.
 * 
 * @param num - The number to format
 * @returns Formatted number string
 * 
 * @example
 * ```typescript
 * formatNumber(1234) // '1.2k'
 * formatNumber(999)  // '999'
 * formatNumber(1000) // '1.0k'
 * formatNumber(15432) // '15.4k'
 * ```
 */
export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

/**
 * Generates a random ID string for unique element identification
 * 
 * Creates a random string suitable for use as HTML element IDs,
 * React keys, or other unique identifiers within the application.
 * 
 * @param length - The desired length of the ID (default: 8)
 * @returns Random alphanumeric string
 * 
 * @example
 * ```typescript
 * generateId() // 'a7b9c2d1'
 * generateId(12) // 'x9y2z4a1b8c3'
 * ```
 */
export function generateId(length: number = 8): string {
  let result = '';
  
  while (result.length < length) {
    const randomPart = Math.random().toString(36).substring(2);
    result += randomPart;
  }
  
  return result.substring(0, length);
}

/**
 * Safely parses JSON with error handling
 * 
 * Attempts to parse a JSON string and returns the parsed value
 * or a default value if parsing fails. Useful for localStorage
 * operations and API response handling.
 * 
 * @template T - The expected type of the parsed JSON
 * @param json - The JSON string to parse
 * @param defaultValue - Value to return if parsing fails
 * @returns Parsed JSON value or default value
 * 
 * @example
 * ```typescript
 * const userData = safeJsonParse(localStorage.getItem('user'), {});
 * const settings = safeJsonParse(apiResponse, { theme: 'dark' });
 * ```
 */
export function safeJsonParse<T>(json: string | null, defaultValue: T): T {
  if (!json) return defaultValue;
  
  try {
    return JSON.parse(json) as T;
  } catch {
    return defaultValue;
  }
}

/**
 * Capitalizes the first letter of a string
 * 
 * Simple utility for consistent string formatting throughout
 * the application, particularly useful for display names and labels.
 * 
 * @param str - The string to capitalize
 * @returns String with first letter capitalized
 * 
 * @example
 * ```typescript
 * capitalize('hello world') // 'Hello world'
 * capitalize('HELLO') // 'HELLO'
 * capitalize('') // ''
 * ```
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

