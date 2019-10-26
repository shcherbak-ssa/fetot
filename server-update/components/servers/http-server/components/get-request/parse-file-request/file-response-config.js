'use strict';

/*** imports [begin] ***/

const responseConfig = require('./response-config.json'),
	getPublicFilename = require('../../../src/get-public-filename');

/*** imports [end] ***/
/*** exports [begin] ***/

const fileResponseConfig = new Proxy(responseConfig, {
	get(target, prop) {
		let {valid, options} = target[prop];
		return async (name, filename) => {
			if( !valid.includes(name) ) return false;
			
			filename = getPublicFilename(filename);
			return Object.assign({}, options, {filename});
		}
	}
});

/*** exports [end] ***/

module.exports = fileResponseConfig;