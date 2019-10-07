'use strict';

const getClientFilename = require('../../lib/get-client-filename'),
	
	responseConfig = {
		js: {
			valid: [ 'login', 'app' ],
			async options(filename) {
				return {
					filename: getClientFilename('js', filename),
					statusCode: 200,
					headers: {
						'Content-Type': 'text/javascript'
					}
				}
			}
		}
	};

module.exports = new Proxy(responseConfig, {
	get(target, prop) {
		let {valid, options} = target[prop];
		return async (filename) => {
			return valid.includes(filename) ? await options(filename) : false;
		}
	}
});