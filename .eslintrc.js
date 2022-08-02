module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'no-console': 0,
    'class-methods-use-this': 'off',
    'max-lines-per-function': [
      'error',
      40,
    ],
  },
  ignorePatterns: [
    'index.html',
    'webpack.config.js',
    'webpack.dev.config.js',
    'webpack.prod.config.js',
  ],
};
