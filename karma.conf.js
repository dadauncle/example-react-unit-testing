var webpackConfig = require('./webpack.config.js');

var config = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine'
    ],
    files: [
      'client/**/spec.js',
    ],
    preprocessors: {
      'client/**/*.js': [
        'webpack',
        'sourcemap',
      ],
      'client/**/*.js': [
        'webpack',
        'sourcemap',
      ],
    },
    webpack: webpackConfig,
    frameworks: [
      'jasmine'
    ],
    reporters: [
      'progress',
      'coverage',
    ],
    colors: true,
    autoWatch: true,
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher',
    ],
  });
};

module.exports = config;
