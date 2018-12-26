module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    eqeqeq: ['error', 'smart'],
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-console': 'off',
    'no-extend-native': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'no-var': 'error',
    'prefer-const': 'error',
    strict: 'error',

    // Code styling
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    quotes: ['error', 'single', 'avoid-escape'],
    'semi-spacing': 'error',
    semi: ['error', 'always'],
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'template-curly-spacing': ['error', 'never']
  }
};
