'use strict';

const path = require('path'),
	VueLoader = require('vue-loader/lib/plugin');

module.exports = (env) => {
	let outputFilename = `${env.currentModule}.js`;
	
	return {
		mode: 'development',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, '../client/js/'),
			filename: outputFilename,
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
				},
				// {
				// 	test: /\.(png|ttf|svg|woff|woff2|eot)$/,
				// 	exclude: /src/
				// }
			]
		},
		plugins: [
			new VueLoader()
		]
	}
};