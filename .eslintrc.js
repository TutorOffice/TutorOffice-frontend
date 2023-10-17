const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',
  mode: 'only-warns',
  presets: [
    presets.imports({
      sort: {
        newline: true,
      },
      alias: {
        paths: { '@': './src' },
      },
    }),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react(),
  ],
  extend: {
    rules: {
      'import/no-default-export': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y': 'off',
    },
  },
})
