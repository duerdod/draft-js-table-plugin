module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-jsx',
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-jsx',
      ],
    },
  },
};
