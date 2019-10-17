'use strict';

/*** imports [begin] ***/

const getClientFilename = require('../../../lib/get-client-filename');

/*** imports [end] ***/
/*** exports [begin] ***/

const responseConfig = {
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
	},
	ico: {
		valid: [ 'favicon' ],
		async options(filename) {
			return {
				filename: getClientFilename('ico', filename),
				statusCode: 200,
				headers: {
					'Content-Type': 'image/x-icon'
				}
			}
		}
	},
	png: {
		valid: [ 'email-logo' ],
		async options(filename) {
			return {
				filename: getClientFilename('png', filename),
				statusCode: 200,
				headers: {
					'Content-Type': 'image/png'
				}
			}
		}
	}
};

/*** exports [end] ***/

module.exports = new Proxy(responseConfig, {
	get(target, prop) {
		let {valid, options} = target[prop];
		return async (filename) => {
			return valid.includes(filename) ? await options(filename) : false;
		}
	}
});