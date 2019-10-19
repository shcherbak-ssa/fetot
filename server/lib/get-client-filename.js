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
		'i-ttf': join(clientAssetsDirname, 'icons')
	}));

/*** init [end] ***/
/*** exports [begin] ***/

function getClientFilename(type, filename, isFont) {
	if( isFont === undefined ) return join(clientDirnameMap.get(type), `${filename}.${type}`);
	
	let key = isFont ? `f-${type}` : `i-${type}`;
	return join(clientDirnameMap.get(key), `${filename}.${type}`)
}

/*** exports [end] ***/

module.exports = getClientFilename;