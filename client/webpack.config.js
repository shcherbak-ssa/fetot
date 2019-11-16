'use strict';

/*** imports [begin] ***/

const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack/common');

/*** imports [end] ***/
/*** init [begin] ***/

const appDirname = path.resolve(__dirname, './app');
const componentsDirname = path.resolve(appDirname, './components');

/*** init [end] ***/

module.exports = (env) => {
	let currentPage = require(`./webpack/${env.page}.js`);
	return merge([
		common(),
		currentPage(),
		{
			resolve: {
				alias: {
					'$fetot': path.resolve(appDirname, './fetot'),
					'$fetot-scss': path.resolve(appDirname, './scss/src.scss'),
					'$fetot-view': path.resolve(appDirname, './view'),
					'$fetot-view-components': path.resolve(appDirname, './view/components'),
					'$fetot-components': componentsDirname,
					'$fetot-services': path.resolve(componentsDirname, './services'),
					'$fetot-workers': path.resolve(componentsDirname, './workers'),
					'$fetot-events-emitter': path.resolve(componentsDirname, './events-emitter'),
					'$fetot-store-interface': path.resolve(componentsDirname, './store-interface')
				}
			},
		}
	])
};