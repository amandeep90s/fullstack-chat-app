import pluginJs from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      eqeqeq: 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'no-undef': 'warn',
      'no-empty': 'warn',
      'no-constant-condition': 'warn',
      'no-unsafe-negation': 'warn',
      'no-irregular-whitespace': 'warn'
    }
  }
];
