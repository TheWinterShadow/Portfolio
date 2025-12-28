/**
 * Jest configuration for The Winter Shadow Portfolio
 * 
 * @fileoverview Jest configuration for testing React components and utilities in a Next.js application
 * @author The Winter Shadow
 * @since 1.0.0
 */

const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const config = {
  // Setup files run before each test file
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Test environment
  testEnvironment: 'jsdom',
  
  // Module name mapping for path aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
  },
  
  // Coverage configuration - expand to include key components
  collectCoverageFrom: [
    'src/components/Hero.tsx',
    'src/components/Navigation.tsx',
    'src/components/ThemeProvider.tsx', 
    'src/components/ThemeToggle.tsx',
    'src/components/ProjectCard.tsx',
    'src/components/Footer.tsx',
    'src/lib/utils.ts',
    'src/lib/themes.ts',
    'src/lib/github-api.ts',
    'src/lib/layout-context.tsx',
    'src/data/projects.ts',
    // Exclude test files, config files, and pure presentational components
    '!src/**/*.d.ts',
    '!src/**/*.config.{js,ts}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  
  // Coverage thresholds - realistic targets based on current coverage
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 67,
      lines: 80,
      statements: 80,
    },
    // Per-file thresholds for critical utilities
    './src/lib/utils.ts': {
      branches: 90,
      functions: 100,
      lines: 95,
      statements: 95,
    },
  },
  
  // Test file patterns
  testMatch: [
    '<rootDir>/tests/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.(test|spec).{js,jsx,ts,tsx}',
  ],
  
  // Transform ignore patterns
  transformIgnorePatterns: [
    '/node_modules/(?!(framer-motion|@emailjs|lucide-react)/)',
  ],
  
  // Test match patterns for consolidated tests directory
  testMatch: [
    '<rootDir>/tests/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)