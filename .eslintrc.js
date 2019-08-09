module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5',
      printWidth: 100,
    }],
    semi: 'off',
  },
};
