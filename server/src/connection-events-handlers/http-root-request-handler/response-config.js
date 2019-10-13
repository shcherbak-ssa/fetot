'use strict';

/*** imports [begin] ***/

const getClientFilename = require('../../../lib/get-client-filename');

/*** imports [end] ***/
/*** exports [begin] ***/

const responseConfig = {
	async root(filename) {
		return {
			filename: getClientFilename('html', filename),
			statusCode: 200,
			headers: {
				'Content-Type': 'text/html'
			}
		}
	}
};

/*** exports [end] ***/

module.exports = new Proxy(responseConfig, {
	get(target, prop) {
		return async () => {
			return await target.root(prop);
		}
	}
});