'use strict';

/*** imports [begin] ***/

const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');

/*** imports [end] ***/
/*** init [begin] ***/

const appDirname = path.join(__dirname, 'app');
const viewDirname = path.join(appDirname, 'view');
const componentsDirname = path.join(appDirname, 'components');

/*** init [end] ***/

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
				'fetot-scss': path.join(viewDirname, 'scss', 'src.scss'),
				'fetot-vue': path.join(viewDirname, 'vue'),
				'fetot-network': path.join(componentsDirname, 'network'),
				'fetot-workers': path.join(componentsDirname, 'workers'),
				'fetot-services': path.join(componentsDirname, 'services'),
			}
		},
		plugins: [
			new VueLoader()
		]
	}
};