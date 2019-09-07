'use strict';

const path = require('path'),
	VueLoader = require('vue-loader/lib/plugin');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, '../client/js/'),
		filename: 'index.js',
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: file => (
					/node_modules/.test(file) &&
					!/\.vue\.js/.test(file)
				)
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new VueLoader()
	]
};