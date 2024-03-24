const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const distributions = require("./distributions.js");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

process.env.NODE_ENV = "production";

if (!process.env.BRAND) {
  console.warn("Missing BRAND env var")
  process.env.BRAND = "monocle"
}

module.exports = merge(common(distributions[process.env.BRAND]), {
  mode: "production",
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: process.env.CI ? "json" : "server",
    // }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
});
