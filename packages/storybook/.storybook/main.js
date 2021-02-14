const path = require('path');

module.exports = {
  stories: [
    '../../components/**/*.stories.mdx',
    '../../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules = [
      {
        test: /\.(jpe?g|gif|png|woff|ttf|wav|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { configFile: 'tsconfig.base.json' },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ];
    return config;
  },
};
