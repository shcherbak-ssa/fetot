'use strict';

const getClientFilename = require('../../../lib/get-client-filename'),
	responseConfig = {
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

module.exports = new Proxy(responseConfig, {
	get(target, prop) {
		return async () => {
			return await target.root(prop);
		}
	}
});