import globals from 'globals';

export default [
  {
    files: ['public/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'always']
    }
  }
];