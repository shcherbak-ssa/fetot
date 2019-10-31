'use strict';

/*** imports [begin] ***/

const {join, resolve} = require('path');

/*** imports [end] ***/
/*** init [begin] ***/

const publicDirname = resolve(process.cwd(), '../public'),
	publicAssetsDirname = join(publicDirname, 'assets'),
	publicIconsDirname = join(publicAssetsDirname, 'icons'),
	
	clientDirnameMap = new Map(Object.entries({
		'html': join(publicDirname, 'view'),
		'js': join(publicDirname, 'js'),
		'ico': publicAssetsDirname,
		'png': join(publicAssetsDirname, 'images'),
		'f-ttf': join(publicAssetsDirname, 'fonts'),
		
		'i-ttf': publicIconsDirname,
		'i-svg': publicIconsDirname,
		'i-eot': publicIconsDirname,
		'i-woff': publicIconsDirname,
		'i-woff2': publicIconsDirname
	}));

/*** init [end] ***/
/*** exports [begin] ***/

function getPublicFilename(filename) {
	let type = parseFileType(filename);
	return join(clientDirnameMap.get(type), filename);
}

/*** exports [end] ***/
/*** src [begin] ***/

function parseFileType(filename) {
	let [, type] = filename.split('.');
	return /^(ttf|svg|eot|woff|woff2)$/.test(type) ? `${filename[0]}-${type}` : type;
}

/*** src [end] ***/

module.exports = getPublicFilename;