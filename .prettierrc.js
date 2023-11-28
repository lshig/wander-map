/** @type {import("prettier").Config} */

module.exports = {
  trailingComma: 'none',
  overrides: [
    {
      files: '**/*.json',
      options: {
        singleQuote: false
      }
    },
    {
      files: '**/*.(js|ts|tsx)',
      options: {
        singleQuote: true
      }
    }
  ]
};
