module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-jsx',
    ['babel-plugin-react-css-modules', { option: 'value' }],
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-jsx',
        ['babel-plugin-react-css-modules', { option: 'value' }],
      ],
    },
  },
};
