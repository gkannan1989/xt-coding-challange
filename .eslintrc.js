module.exports = {
  settings: {
    'import/resolver': {
      webpack: {
        config: 'client.js',
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  globals: {
    newrelic: true,
    SB: true,
    BackofficeEventTracker: true,
    EventTracker: true,
    Stripe: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: '',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  overrides: [
    {
      files: ['**/__test{,s}__/*.{js,jsx,coffee,ts,tsx}'],
      env: {
        jest: true,
        jasmine: true,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': ['off'],
        'no-undef': ['off'],
      },
    },
  ],
  rules: {
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-restricted-globals': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0, // Doesn't support TypeScript type imports
    'max-len': [2, { code: 120 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-restricted-syntax': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': 2,
    'jsx-a11y/control-has-associated-label': 0,
    'no-use-before-define': 0, // Currently broken
  },
};
