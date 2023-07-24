module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["**/*.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react-hooks/exhaustive-deps": 1,
    "react/jsx-curly-brace-presence": [
      2,
      { props: "never", children: "ignore" },
    ],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react-hooks/rules-of-hooks": 2,
  },
};
