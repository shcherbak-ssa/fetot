'use strict';

const path = require('path'),
	VueLoader = require('vue-loader/lib/plugin');

module.exports = (env) => {
	let outputFilename = `${env.currentModule}.js`;
	let entryFilename = `./${env.currentModule}/index.js`;
	
	return {
		mode: 'development',
		entry: entryFilename,
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
		resolve: {
			alias: {
				'fetot-main-scss': path.join(__dirname, 'src/scss/main.scss'),
				'fetot-src-scss': path.join(__dirname, 'src/scss/src.scss'),
				'fetot-components': path.join(__dirname, 'src/components'),
				'fetot-js-modules': path.join(__dirname, 'src/modules')
			}
		},
		plugins: [
			new VueLoader()
		]
	}
};