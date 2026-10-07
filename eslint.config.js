import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactX from "eslint-plugin-react-x";
import reactHooks from 'eslint-plugin-react-hooks'
import reactDom from "eslint-plugin-react-dom";
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactDom.configs.recommended,
      reactX.configs['recommended-typescript'],
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
