const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    alias: {
      "@monocle/components": path.resolve(__dirname, "../components/src"),
      react: path.resolve(__dirname, "./../../node_modules/react"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|woff|ttf|wav|mp3)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-react",
                  {
                    runtime: "classic",
                  },
                ],
              ],
            },
          },
          {
            loader: "ts-loader",
            options: { configFile: "tsconfig.base.json", transpileOnly: true },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/],
};
