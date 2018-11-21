module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
