'use strict'
/* MODULES */
const path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");


const devMode = process.env.NODE_ENV !== 'production';

const DIR_PATH = string => path.resolve(__dirname, string);

const DIST_DIR = DIR_PATH('dist'),
			SRC_DIR = DIR_PATH('src');

module.exports = {
	entry: SRC_DIR,
	output: { filename: './js/bundle.js', path: DIST_DIR },
	mode : devMode ? 'development' : 'production',
  devtool: "source-map", // any "source-map"-like devtool is possible
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    writeToDisk:true,
    port: 3000
  },
  module: {
  	rules: [
		  { test: /\.(js|jsx|jpeg)$/, exclude: /node_modules/, use: { loader: "babel-loader" }},
      {
        test: /\.s?[ac]ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
			{
			  test: /\.(png|jpg|gif)$/,
			  use: [
			  	{ loader: 'url-loader', options: { limit: 8192, name: './img/[name].[ext]' }},         
        ]
      },
    ]  
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: `${SRC_DIR}/index.html` }),
    new MiniCssExtractPlugin({ filename: "./css/style.css" }),
  ]
};