const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');
const precss = require('precss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  devtool: 'eval-source-map',
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    //new ExtractTextPlugin('./stylesheets/app.css', { allChunks: true })
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      /*{
        test : /\.scss$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss!sass?sourceMap')
      }*/
      {
        test: /\.scss$/,
        loader: combineLoaders([
          {
          loader: 'style-loader'
          }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
          }, {
          loader: 'sass-loader'
          }
        ])
        }
    ]
  },
  postcss() {
    return [autoprefixer, precss];
  },
  devServer: {
    contentBase: BUILD_DIR,
    inline: true
  }
};

module.exports = config;