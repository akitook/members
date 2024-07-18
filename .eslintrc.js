// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
  },
  env: {
    browser: true,
    jquery: true,
  },
  extends: ["standard", "prettier"],
  rules: {
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    indent: [2, 2],
    "no-var": 2,
    semi: [2, "always"],
    "new-cap": 0,
  },
};
