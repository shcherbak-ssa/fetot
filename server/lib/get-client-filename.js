'use strict';

const path = require('path'), {join} = path,
	
	clientDirname = join(process.cwd(), 'client'),
	clientAssetsDirname = join(clientDirname, 'assets'),

	clientDirnameMap = new Map(Object.entries({
		'html': join(clientDirname, 'view'),
		'js': join(clientDirname, 'js'),
		'ico': clientAssetsDirname
	}));

function getClientFilename(type, filename) {
	return join(clientDirnameMap.get(type), `${filename}.${type}`)
}

module.exports = getClientFilename;