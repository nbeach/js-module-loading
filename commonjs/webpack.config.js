var webpack = require('webpack');

var webpackConfig = {
  entry: './src/commonjs.js',
  output: {
    path: "./compiled",
    filename:'bundle.js'
  }
};

module.exports = webpackConfig;