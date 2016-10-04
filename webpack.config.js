var webpack = require('webpack');

var config = {
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
        test: /\.js/,
      },
    ],
  },
  plugins: [
  ],
};

module.exports = config;
