'use strict';

const path = require('path'),
	VueLoader = require('vue-loader/lib/plugin');

module.exports = (env) => {
	let entryFilename = `./src/fetot-${env.currentModule}.js`,
		outputFilename = `${env.currentModule}.js`;
	
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
					loader: 'vue-loader',
					// exclude: file => (
					// 	/\.(png|ttf|svg|woff|woff2|eot)$/.test(file)
					// )
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
					],
					// exclude: file => (
					// 	/\.(png|ttf|svg|woff|woff2|eot)$/.test(file)
					// )
				}
				// {
				// 	test: /\.(png|ttf|svg|woff|woff2|eot)$/,
				// 	exclude: file => (
				// 		/\.(png|ttf|svg|woff|woff2|eot)$/.test(file)
				// 	)
				// }
			]
		},
		plugins: [
			new VueLoader()
		]
	}
};