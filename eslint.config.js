import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "src/components/ui"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // my config
      "no-var": "error",
      "no-await-in-loop": "error",
      "no-empty": "error",
      "prefer-spread": "warn",
      curly: "error",
      "no-func-assign": "error",
      "no-irregular-whitespace": "error",
      "require-await": "error",
      camelcase: "error",
      "no-magic-numbers": "error",
      "no-unused-expressions": "error",
      "@typescript-eslint/no-unused-vars": noVars,
      "no-unused-vars": noVars,
      "no-unused-labels": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  }
);
