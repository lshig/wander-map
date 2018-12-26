module.exports = {
  globals: {
    ga: true
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    './config/eslint-react.js',
    './config/eslint-import.js',
    'prettier'
  ],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '16.7'
    }
  }
};
