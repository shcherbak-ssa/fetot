'use strict';

/*** imports [begin] ***/

const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');

/*** imports [end] ***/
/*** init [begin] ***/

const appDirname = path.join(__dirname, 'app');
const componentsDirname = path.join(appDirname, 'components');

/*** init [end] ***/

module.exports = (env) => {
	let outputFilename = `${env.page}.js`;
	let entryFilename = `./build/${env.page}-page/index.js`;
	let chunkFilename = `[name].${env.page}.js`;
	
	return {
		entry: entryFilename,
		output: {
			path: path.resolve(__dirname, '../public/js/'),
			filename: outputFilename,
			chunkFilename
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
				'fetot-scss': path.join(appDirname, 'scss', 'src.scss'),
				'fetot-view': path.join(appDirname, 'view'),
				'fetot-network': path.join(componentsDirname, 'network'),
				'fetot-workers': path.join(componentsDirname, 'workers'),
				'fetot-store-workers': path.join(componentsDirname, 'store-workers.js'),
				'fetot-events-emitter': path.join(componentsDirname, 'events-emitter.js'),
				'fetot-storage': path.join(componentsDirname, 'storage'),
			}
		},
		plugins: [
			new VueLoader()
		]
	}
};