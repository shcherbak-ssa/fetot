'use strict';

/*** imports [begin] ***/

const {join, resolve, parse} = require('path');

/*** imports [end] ***/
/*** init [begin] ***/

const publicDirname = resolve(process.cwd(), '../public');
const publicAssetsDirname = join(publicDirname, 'assets');
const publicIconsDirname = join(publicAssetsDirname, 'icons');

const clientDirnameMap = new Map(Object.entries({
	'html': join(publicDirname, 'view'),
	'l-js': join(publicDirname, 'js', 'login'),
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
	let [, type] = parse(filename).ext.split('.');
	return /^(ttf|svg|eot|woff|woff2|js)$/.test(type) ? `${filename[0]}-${type}` : type;
}

/*** src [end] ***/

module.exports = getPublicFilename;