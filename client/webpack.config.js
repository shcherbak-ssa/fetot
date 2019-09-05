'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: "./index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.join(__dirname, "public"),
		publicPath: "/public/",
		filename: "index.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		publicPath: "http://localhost:3000/public/",
		hotOnly: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};