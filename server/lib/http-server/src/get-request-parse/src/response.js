'use strict';

const path = require('path'),
	clientDirname = path.join(process.cwd(), 'client');

let
	rootResponse = {
		async root(filename) {
			return {
				filename: path.join(clientDirname, 'view', `${filename}.html`),
				statusCode: 200,
				headers: {
					'Content-Type': 'text/html'
				}
			}
		}
	},
	rootProxyHandler = {
		get(target, prop) {
			return async () => {
				return await target.root(prop);
			}
		}
	},
	fileResponse = {
		js: {
			valid: [ 'login', 'app' ],
			async options(filename) {
				return {
					filename: path.join(clientDirname, 'js', `${filename}.js`),
					statusCode: 200,
					headers: {
						'Content-Type': 'text/javascript'
					}
				}
			}
		}
	},
	fileProxyHandler = {
		get(target, prop) {
			let {valid, options} = target[prop];
			return async (filename) => {
				return valid.includes(filename) ? await options(filename) : false;
			}
		}
	};

rootResponse = new Proxy(rootResponse, rootProxyHandler);
fileResponse = new Proxy(fileResponse, fileProxyHandler);

module.exports = { rootResponse, fileResponse };