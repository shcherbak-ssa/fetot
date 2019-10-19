'use strict';

const path = require('path'),
	VueLoader = require('vue-loader/lib/plugin'),
	StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = (env) => {
	let outputFilename = `${env.mode}.js`,
		entryFilename = `./${env.mode}/index.js`;
	
	return {
		entry: entryFilename,
		output: {
			path: path.resolve(__dirname, '../client/js/'),
			filename: outputFilename,
		},
		devtool: 'inline-source-map',
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
						{
							loader: 'css-loader',
							options: {
								url: false
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.(ttf|eot|woff|woff2|svg)$/,
					loader: 'file-loader',
					options: {
						name: '../assets/build/[name].[ext]'
					}
				}
			]
		},
		resolve: {
			alias: {
				'fetot-main-scss': path.join(__dirname, 'src', 'scss', 'main.scss'),
				'fetot-src-scss': path.join(__dirname, 'src', 'scss', 'src.scss'),
				'fetot-components': path.join(__dirname, 'src', 'components'),
				'fetot-js-modules': path.join(__dirname, 'src', 'modules'),
				'fetot-worker-modules': path.join(__dirname, 'src', 'modules', 'workers'),
				'fetot-network-modules': path.join(__dirname, 'src', 'modules', 'network')
			}
		},
		plugins: [
			new VueLoader(),
			new StringReplacePlugin()
		]
	}
};