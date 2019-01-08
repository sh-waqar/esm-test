"use strict";

const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");
const webpackBundlePhobia = require("webpack-bundle-phobia");
// const webpackBundlePhobia = require("../../webpack-bundle-phobia/build/plugin/index.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = require("./loaders");
const common = require("./webpack.common.conf.js");

module.exports = (env = {}) =>
  merge(common, {
    mode: "production",
    output: {
      filename: "scripts/[name].[contenthash:8].js"
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          uglifyOptions: {
            warnings: false,
            output: {
              comments: false
            }
          }
        })
      ],
      moduleIds: "hashed"
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: "maps/[file].map",
        exclude: [/locale/]
      }),
      new webpackBundlePhobia({
        name: 'abc123111'
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash:8].css'
      }),
      ...(env.analysis ? [new BundleAnalyzerPlugin()] : [])
    ]
  });
