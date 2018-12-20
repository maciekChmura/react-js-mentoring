module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prefer-stateless-function': 'error',
    'react/forbid-component-props': 'error',
    'react/forbid-prop-types': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/prop-types': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-target-blank': 'error'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
};
