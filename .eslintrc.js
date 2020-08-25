const builtInModules = require('builtin-modules');

module.exports = {
  extends: ['react-app', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier', 'eslint-plugin-import-helpers'],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-pascal-case': 'off',
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error', 'dir', 'group', 'groupEnd'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          ['/^react/'],
          [`/^(${builtInModules.join('|')})$/`],
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
};
