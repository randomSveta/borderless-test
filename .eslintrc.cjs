module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "react/no-unescaped-entities": ["off"],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "always" },
    ],
  },
};
