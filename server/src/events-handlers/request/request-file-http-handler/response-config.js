'use strict';

/*** imports [begin] ***/

const getClientFilename = require('../../../../lib/get-client-filename');

/*** imports [end] ***/
/*** init [begin] ***/

const responseConfigTemplate = {
	statusCode: 200
};

/*** init [end] ***/
/*** exports [begin] ***/

const responseConfig = {
	js: {
		valid: [ 'login', 'app' ],
		options(filename) {
			return {
				filename: getClientFilename('js', filename),
				headers: {
					'Content-Type': 'text/javascript'
				}
			}
		}
	},
	ico: {
		valid: [ 'favicon' ],
		options(filename) {
			return {
				filename: getClientFilename('ico', filename),
				headers: {
					'Content-Type': 'image/x-icon'
				}
			}
		}
	},
	png: {
		valid: [ 'email-logo' ],
		options(filename) {
			return {
				filename: getClientFilename('png', filename),
				headers: {
					'Content-Type': 'image/png'
				}
			}
		}
	},
	ttf: {
		valid: [ 'fRobotoRegular', 'fRobotoBold', 'fRobotoLight', 'fRobotoMedium', 'icons' ],
		options(filename) {
			return {
				filename: getClientFilename('ttf', filename, filename[0] === 'f'),
				headers: {
					'Content-Type': 'application/x-font-ttf'
				}
			}
		}
	},
	woff: {
		valid: [ 'icons' ],
		options(filename) {
			return {
				filename: getClientFilename('woff', filename, filename[0] === 'f'),
				headers: {
					'Content-Type': 'application/font-woff'
				}
			}
		}
	},
	woff2: {
		valid: [ 'icons' ],
		options(filename) {
			return {
				filename: getClientFilename('woff2', filename, filename[0] === 'f'),
				headers: {
					'Content-Type': 'application/font-woff2'
				}
			}
		}
	},
	svg: {
		valid: [ 'icons' ],
		options(filename) {
			return {
				filename: getClientFilename('svg', filename, filename[0] === 'f'),
				headers: {
					'Content-Type': 'image/svg+xml'
				}
			}
		}
	},
	eot: {
		valid: [ 'icons' ],
		options(filename) {
			return {
				filename: getClientFilename('eot', filename, filename[0] === 'f'),
				headers: {
					'Content-Type': 'application/vnd.ms-fontobject'
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
			return !valid.includes(filename) ? false : Object.assign({}, responseConfigTemplate, options(filename));
		}
	}
});