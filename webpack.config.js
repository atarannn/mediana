const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    index: './src/assets/scripts/index-app.js',
    map: './src/assets/scripts/map.js',
    FullScreenScroll: './src/assets/scripts/FullScreenScroll.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};

module.exports = config;
