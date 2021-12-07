module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint-recommended',
    'plugin:@typescrypt-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-console': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
  },
  'import/resolver': {
    typescrypt: {
      alwaysTryTypes: true,
      project: './tsconfig.json',
    },
  },
};
