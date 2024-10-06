import js from '@eslint/js';
import globals from 'globals';

export default [

  js.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['/eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['warn'],
    },
  },
];