'use strict';

/*** imports [begin] ***/

const fileResponseConfig = require('./file-response-config');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseFileRequest(filename) {
	let [name, type] = filename.split('.'),
		options = (type in fileResponseConfig) ? await fileResponseConfig[type](name, filename) : false;
	
	return options || {error: '404'};
}

/*** exports [end] ***/

module.exports = parseFileRequest;