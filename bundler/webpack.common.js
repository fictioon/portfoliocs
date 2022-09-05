const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    hashFunction: 'xxhash64',
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, '../src/static') }]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/index.html'),
      minify: true
    }),
    new MiniCSSExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]'
        }
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader']
      }
    ]
  }
}
