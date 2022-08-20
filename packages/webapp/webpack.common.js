const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const transform = require("@formatjs/ts-transformer").transform;

const child_process = require("child_process");
function git(command) {
  return child_process.execSync(`git ${command}`, { encoding: "utf8" }).trim();
}

const TEST_SERVER = "monocle.paris";
const NODE_ENV = process.env.NODE_ENV;
const GIT_VERSION = git("describe --always");
const GIT_AUTHOR_DATE = git("log -1 --format=%aI").split("\n").pop();

console.log({ NODE_ENV, GIT_VERSION, GIT_AUTHOR_DATE });

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV,
      GIT_VERSION,
      GIT_AUTHOR_DATE,
      TEST_SERVER,
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new FaviconsWebpackPlugin({
    //   logo: path.resolve(__dirname, "../icons/src/logo.svg"),
    //   cache: true,
    //   inject: true,
    //   favicons: {
    //     appName: "Monocle Security",
    //     appDescription: null,
    //     developerName: null,
    //     developerURL: null,
    //     background: "#ddd",
    //     theme_color: "#333",
    //     version: GIT_VERSION,
    //     icons: {
    //       android: false,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       windows: true,
    //       yandex: false,
    //     },
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.ejs"),
      templateParameters: {
        title: "Monocle Security",
        NODE_ENV,
        GIT_VERSION,
        GIT_AUTHOR_DATE,
        TEST_SERVER,
      },
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
              plugins: [
                // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                ["@babel/plugin-proposal-class-properties", { loose: true }],
              ],
              presets: [
                [
                  "@babel/preset-react",
                  {
                    runtime: "classic",
                    development: process.env.BABEL_ENV !== "production",
                  },
                ],
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.base.json",
              transpileOnly: true,
              compilerOptions: {
                jsx:
                  process.env.NODE_ENV === "development"
                    ? "react-jsxdev"
                    : "react-jsx",
              },
              getCustomTransformers() {
                return {
                  before: [
                    transform({
                      overrideIdFn: "[sha512:contenthash:base64:6]",
                    }),
                  ],
                };
              },
            },
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
