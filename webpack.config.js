const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      assetModuleFilename: "[name][ext]",
    },
    devtool: "source-map",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|webp|jpeg|jpg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Weather",
        filename: "index.html",
        template: "./src/template.html",
      }),
    ],
  };