'use strict';

/*** imports [begin] ***/

const path = require('path');

/*** imports [end] ***/
/*** init [begin] ***/

const appPageDirname = path.resolve(__dirname, '../build/app-page');

/*** init [end] ***/
/*** exports [begin] ***/

function app() {
	return {
		entry: {
			'app': appPageDirname
		},
		output: {
			path: path.resolve(__dirname, '../../public/js/app'),
			filename: 'a[name].js',
			chunkFilename: 'a[name].js'
		}
	}
}

/*** exports [end] ***/

module.exports = app;