const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: ['./src/styles/main.css', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './js/bundle.js'
  },
  module: {
    rules: [
    {
      use: 'babel-loader',
      test: /\.js$/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      })
    }]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `v${require('./package.json').version}`,
      raw: false,
      entryOnly: true
    }),
    new CopyPlugin([{from: './src/index.html', to: './' }]),
    new CopyPlugin([{ context: './src/images', from: '**/*', to:'./images' }]),
    new CopyPlugin([{ context: './src/assets', from: '**/*', to:'./assets' }]),
    new ExtractTextPlugin({
      filename: './styles/main.css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        server: {
          baseDir: ['build']
        }
      },
    //plugin options
      {
        reload: true
      }
    )
  ]
};

module.exports = config;
