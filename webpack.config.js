var path = require('path');

var webpack = require('webpack');




var CSS_LOADER = "style!css!postcss",
    SCSS_LOADER = "style!css!postcss?minimize!sass-loader";
    
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
     { test: /\.css$/,
      loader: CSS_LOADER
     },
     {
        test: /\.scss$/,
        loader: SCSS_LOADER
      },
    {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
