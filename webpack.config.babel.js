var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    /*===== yeoman entry hook =====*/
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      /*===== yeoman provide plugin hook =====*/
      m: 'mithril'
    })
  ],
  module: {
    loaders: [
      // ES6 transpiler
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      /*===== yeoman sass hook start =====*/
      // SASS compiler
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      /*===== yeoman sass hook end =====*/
      // Static files
      {
        test: /\.html$/,
        loader: 'static'
      },
      // Image files
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192'
      },
      // Font files
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
}
