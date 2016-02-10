var webpack = require('webpack');

var webpackConfig = {
  output: {
    path: "./compliled",
    filename:'bundle.js'
  },
  entry: './src/commonjs.js'
};

module.exports = webpackConfig;