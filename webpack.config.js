var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //     title: 'Home Account'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'common' // Specify the common bundle's name.
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};