'use strict';

/*** imports [begin] ***/

const fs = require('fs');
const path = require('path');

const getPublicFilename = require('../get-public-filename');
let fileResponseConfig = require('./src/file-response-config.json');

/*** imports [end] ***/
/*** init [begin] ***/

fileResponseConfig = new Proxy(fileResponseConfig, {
	get(target, prop) {
		let options = target[prop];
		return async (name, filename) => {
			filename = getPublicFilename(filename);
			return fs.existsSync(filename) ? Object.assign({filename}, options) : false;
		}
	}
});

/*** init [end] ***/
/*** exports [begin] ***/

async function isFileRequest(filename) {
	let parsedFilename = path.parse(filename);
	let [, type] = parsedFilename.ext.split('.');
	
	let options = (type in fileResponseConfig)
		? await fileResponseConfig[type](parsedFilename.name, filename) : false;
	
	return options || {error: '404'};
}

/*** exports [end] ***/

module.exports = isFileRequest;