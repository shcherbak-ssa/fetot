'use strict';

/*** imports [begin] ***/

const path = require('path');

/*** imports [end] ***/
/*** init [begin] ***/

const loginPageDirname = path.resolve(__dirname, '../build/login-page');
const loginPageModulesDirname = path.resolve(loginPageDirname, './modules');

/*** init [end] ***/
/*** exports [begin] ***/

function login() {
	return {
		entry: {
			'login': loginPageDirname
		},
		output: {
			path: path.resolve(__dirname, '../../public/js/login'),
			filename: 'l[name].js',
			chunkFilename: 'l[name].js'
		}
	}
}

/*** exports [end] ***/

module.exports = login;