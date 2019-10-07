'use strict';

const path = require('path'),
	clientDirname = path.join(process.cwd(), 'client'),

	clientDirnameMap = new Map(Object.entries({
		'html': path.join(clientDirname, 'view'),
		'js': path.join(clientDirname, 'js')
	}));

function getClientFilename(type, filename) {
	return path.join(clientDirnameMap.get(type), `${filename}.${type}`)
}

module.exports = getClientFilename;