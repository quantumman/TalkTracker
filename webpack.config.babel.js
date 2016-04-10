import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: 'mithril',
      jQuery: 'jquery',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:3000/',
        secure: false,
        rewrite: (req) => {
          req.url = req.url.replace(/\/api\/v1/, ''); // eslint-disable-line no-param-reassign
        },
      },
      '/assets/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components|semantic)/,
      },
    ],
    loaders: [
      // ES6 transpiler
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      // SASS compiler
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      // Static files
      {
        test: /\.html$/,
        loader: 'static',
      },
      // Image files
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192',
      },
      // Font files
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
};
