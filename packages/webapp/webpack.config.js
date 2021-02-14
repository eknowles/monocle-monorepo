const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      '@monocle/components': path.resolve(__dirname, '../components/src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|woff|ttf|wav|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
