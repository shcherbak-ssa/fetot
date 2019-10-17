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
		'png': join(clientAssetsDirname, 'images')
	}));

/*** init [end] ***/
/*** exports [begin] ***/

function getClientFilename(type, filename) {
	return join(clientDirnameMap.get(type), `${filename}.${type}`)
}

/*** exports [end] ***/

module.exports = getClientFilename;