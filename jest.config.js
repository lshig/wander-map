module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['!<rootDir>/test/**'],
  coverageReporters: ['html', 'text'],
  setupFiles: ['<rootDir>/test/test-setup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true
};
