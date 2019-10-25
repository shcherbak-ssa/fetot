'use strict';

/*** imports [begin] ***/

const responseConfig = require('./response-config.json'),
	getClientFilename = require('../../../src/get-client-filename');

/*** imports [end] ***/
/*** exports [begin] ***/

const fileResponseConfig = new Proxy(responseConfig, {
	get(target, prop) {
		let {valid, options} = target[prop];
		return async (name, filename) => {
			if( !valid.includes(name) ) return false;
			
			filename = getClientFilename(filename);
			return Object.assign({}, options, {filename});
		}
	}
});

/*** exports [end] ***/

module.exports = fileResponseConfig;