'use strict';

/*** imports [begin] ***/

const getPublicFilename = require('../get-public-filename');
let fileResponseConfig = require('./src/file-response-config.json');

/*** imports [end] ***/
/*** init [begin] ***/

fileResponseConfig = new Proxy(fileResponseConfig, {
	get(target, prop) {
		let {valid, options} = target[prop];
		return async (name, filename) => {
			if( !valid.includes(name) ) return false;
			
			filename = getPublicFilename(filename);
			return Object.assign({}, options, {filename});
		}
	}
});

/*** init [end] ***/
/*** exports [begin] ***/

async function isFileRequest(filename) {
	let [name, type] = filename.split('.'),
		options = (type in fileResponseConfig) ? await fileResponseConfig[type](name, filename) : false;
	
	return options || {error: '404'};
}

/*** exports [end] ***/

module.exports = isFileRequest;