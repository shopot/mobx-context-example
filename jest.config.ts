export default {
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
  rootDir: '.',
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|webp|jpeg|jpg)$': 'identity-obj-proxy',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!**/src/main.tsx',
    '!**/node_modules/**',
  ],
  coverageReporters: ['text'],
  testPathIgnorePatterns: ['./src/main.tsx'],
};
