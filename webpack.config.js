var getConfig = require('hjs-webpack');

var config = getConfig({

  isDev: false,
  // entry point for the app
  in: 'src/index.js',
  out: 'dist',
  output: {
    filename: 'bundle.js'
  },
  clearBeforeBuild: true
});

  config.output.libraryTarget = "commonjs2";
module.exports = config;
