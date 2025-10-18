// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Regras do eslint:recommended
      ...js.configs.recommended.rules,

      // Regras do plugin:react/recommended
      ...react.configs.recommended.rules,

      // Regras do plugin:react/jsx-runtime
      ...react.configs['jsx-runtime'].rules,

      // Regras do plugin:react-hooks/recommended
      ...reactHooks.configs.recommended.rules,

      // Regras personalizadas
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unsafe-finally': 'off',
      'no-unused-vars': 'off',
      'react/jsx-key': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
