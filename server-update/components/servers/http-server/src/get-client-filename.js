'use strict';

/*** imports [begin] ***/

const {join} = require('path');

/*** imports [end] ***/
/*** init [begin] ***/

const clientDirname = join(process.cwd(), 'client'),
	clientAssetsDirname = join(clientDirname, 'assets'),
	
	clientDirnameMap = new Map(Object.entries({
		'html': join(clientDirname, 'view'),
		'js': join(clientDirname, 'js'),
		'ico': clientAssetsDirname,
		'png': join(clientAssetsDirname, 'images'),
		'f-ttf': join(clientAssetsDirname, 'fonts'),
		'i-ttf': join(clientAssetsDirname, 'icons'),
		'i-svg': join(clientAssetsDirname, 'icons'),
		'i-eot': join(clientAssetsDirname, 'icons'),
		'i-woff': join(clientAssetsDirname, 'icons'),
		'i-woff2': join(clientAssetsDirname, 'icons')
	}));

/*** init [end] ***/
/*** exports [begin] ***/

function getClientFilename(filename) {
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

module.exports = getClientFilename;