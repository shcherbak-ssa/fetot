'use strict';

/*** imports [begin] ***/

const VueLoader = require('vue-loader/lib/plugin');

/*** imports [end] ***/
/*** exports [begin] ***/

function common() {
	return {
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
		plugins: [
			new VueLoader()
		]
	}
}

/*** exports [end] ***/

module.exports = common;