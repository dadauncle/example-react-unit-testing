var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src'),
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'lib'),
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.js$/,
      },
    ],
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: [
      '',
      '.js',
    ],
    moduleDirectories: [
      'src',
      'node_modules',
    ],
  }
};
