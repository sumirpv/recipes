const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//require('dotenv').config();

module.exports = {
  context: path.join(__dirname, 'src'),
   mode: 'development',
  entry: [ './index.js'],
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
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    })
  ]
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