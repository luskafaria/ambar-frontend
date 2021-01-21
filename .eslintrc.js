module.exports = {
  extends: [
    "@jungsoft/eslint-config/react",
    "@jungsoft/eslint-config/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
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
