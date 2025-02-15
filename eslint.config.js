const globals = require('globals')
const js = require('@eslint/js')
const pluginPrettier = require('eslint-plugin-prettier')
const configPrettier = require('eslint-config-prettier')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  js.configs.recommended,
  {
    ignores: ['node_modules'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  configPrettier,
]
