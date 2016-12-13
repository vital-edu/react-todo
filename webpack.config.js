const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      Main: 'app/components/Main.jsx',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
      },
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
};