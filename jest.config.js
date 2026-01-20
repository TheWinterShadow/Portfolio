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

  // Coverage configuration - only include files that have tests
  collectCoverageFrom: [
    'src/lib/themes.ts',
    'src/data/projects.ts',
  ],

  // Coverage thresholds - per-file only since we're targeting specific files
  coverageThreshold: {
    './src/lib/themes.ts': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './src/data/projects.ts': {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100,
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
