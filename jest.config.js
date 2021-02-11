module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['!src/index.js', 'src/**/*.js', '!test/**'],
  coverageReporters: ['html', 'text'],
  setupFiles: ['<rootDir>/test/setup-tests.js'],
  moduleNameMapper: {
    '^.*[.](css|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: 'node',
  transform: {
    '^.+.jsx?$': '<rootDir>/test/setup-jest.js'
  },
  verbose: true
};
