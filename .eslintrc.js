module.exports = {
  extends: [
    "@jungsoft/eslint-config/react",
    "@jungsoft/eslint-config/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    camelcase: "off",
    "@typescript-eslint/camelcase": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
      },
    },
  },
};
