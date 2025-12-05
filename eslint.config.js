// eslint.config.js (ESLint 9 - Flat Config)

import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Ignorar arquivos e pastas
  {
    ignores: ["node_modules", "dist"],
  },

  // Configuração para arquivos TypeScript
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        URL: "readonly",
        fetch: "readonly",
      },      
    },

    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },

    rules: {
      ...eslint.configs.recommended.rules, // Regras padrão do ESLint
      ...tseslint.configs.recommended.rules, // Regras padrão TS
      ...prettierConfig.rules, // Remove regras que conflitam com Prettier

      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["off"],
      "@typescript-eslint/no-explicit-any": "off"
      
    },
  },
];
