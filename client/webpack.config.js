'use strict';

const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');

const appDirname = path.join(__dirname, 'app');

module.exports = (env) => {
	let outputFilename = `${env.page}.js`,
		entryFilename = `./build/${env.page}-page/index.js`;
	
	return {
		entry: entryFilename,
		output: {
			path: path.resolve(__dirname, '../public/js/'),
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
				'fetot': path.join(appDirname, 'fetot'),
				'fetot-scss': path.join(appDirname, 'UI', 'scss', 'src.scss'),
				'fetot-vue': path.join(appDirname, 'UI', 'vue'),
				'fetot-network-components': path.join(appDirname, 'components', 'network'),
				'fetot-workers-components': path.join(appDirname, 'components', 'workers'),
				'fetot-services-components': path.join(appDirname, 'components', 'services'),
			}
		},
		plugins: [
			new VueLoader()
		]
	}
};