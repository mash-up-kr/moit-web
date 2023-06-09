module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'airbnb-typescript', 'plugin:react/recommended', 'prettier', 'plugin:import/typescript', 'plugin:storybook/recommended'],
  settings: {
    'import/resolver': {
      typescript: {
        directory: './src'
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/external-module-folders': ['.yarn'],
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react-refresh', 'react', 'react-hooks', 'prettier', '@typescript-eslint', 'import'],
  rules: {
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'import/order': ['error', {
      groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
      pathGroups: [{
        pattern: 'react*',
        group: 'external',
        position: 'before'
      }, {
        pattern: '@hooks/*',
        group: 'internal',
        position: 'after'
      }, {
        pattern: '@pages/*',
        group: 'internal',
        position: 'after'
      }, {
        pattern: '@components/*',
        group: 'internal',
        position: 'after'
      }],
      pathGroupsExcludedImportTypes: ['@tanstack*'],
      alphabetize: {
        order: 'asc'
      }
    }],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["**/stories/**"],
      "optionalDependencies": false
    }]
  }
};