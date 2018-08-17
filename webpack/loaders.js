'use strict';

const path = require('path');
const { extend } = require('lodash');

const config = require('./config');

const MODE_DEV = 'development';
const MODE_PROD = 'production';
const MODE_TEST = 'test';

exports.html = {
  test: /\.html$/,
  use: 'raw-loader'
};

exports.scripts = {
  test: /\.js$/,
  use: 'babel-loader',
  exclude: /node_modules/
};

exports.lint = mode => {
  const baseConfig = {
    test: /\.js$/,
    enforce: 'pre',
    loader: 'eslint-loader',
    options: {
      failOnError: true
    },
    exclude: /node_modules/
  };

  switch (mode) {
    case MODE_DEV:
      // TODO: Use Object spread here when Jenkins updates to npm 6 and node 8
      return extend({}, baseConfig, {
        options: {
          failOnError: false,
          emitWarning: true
        }
      });

    default:
      return baseConfig;
  }
};


exports.styles = {
  test: /\.(scss|css)$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};
