const { merge } = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  entry: {
    app: [path.resolve(__dirname, "./src/index.tsx")],
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    client: {
      progress: true,
    },
  },
  stats: {
    errorDetails: true,
  }
});
