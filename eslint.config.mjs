import antfu from '@antfu/eslint-config'

export default antfu({
  isInEditor: false,
  astro: true,
  formatters: true,
  // Hidden editor scratch files are local state, not project configuration.
  ignores: ['.vscode/.*'],
  rules: {
    // Keep package-manager behaviour independent of formatting fixes.
    'pnpm/yaml-enforce-settings': 'off',
  },
})
