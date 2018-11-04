const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
  context: path.join(__dirname, 'src'),
  mode: 'development',
  entry: ['whatwg-fetch', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports ={
//     context: path.join(__dirname, 'src'),
//         mode: 'development',
//     entry:'./index.js',
//     output: {
//         path:path.resolve(__dirname,'dist'),
//         filename:'./bundle.js'
//     }, 
//     module:{
//         rules:[
//             {
//             test:'/\.js$',
//             loader:'babel-loader'
//         }
//     ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './index.html',
//             inject: 'body'
//         })
//     ]
// }