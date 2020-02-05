export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    eslint: true,
    prettier: true
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'babel-plugin-styled-components',
        libraryDirectory: 'es',
        style: true
      }
    ],
    ['styled-components', { ssr: true }]
  ]
}
