var webpack = require('webpack');

var webpackConfig = {
  entry: './src/commonjs.js',
  output: {
    path: "./compliled",
    filename:'bundle.js'
  }
};

module.exports = webpackConfig;