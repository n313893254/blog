// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1856
  },
};
