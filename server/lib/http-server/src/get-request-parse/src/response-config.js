'use strict';

const path = require('path'),
	clientDirname = path.join(process.cwd(), 'client');

let
	rootResponseConfig = {
		async common(filename) {
			return {
				filename: path.join(clientDirname, 'view', `${filename}.html`),
				statusCode: 200,
				headers: {
					'Content-Type': 'text/html'
				}
			}
		},
		async login(currentModule) {
			return {
				headers: {
					'Set-Cookie': cookieConfig[currentModule]
				}
			}
		},
		async app() {
			return {}
		}
	},
	rootProxyHandler = {
		get(target, prop) {
			return async (currentModule) => {
				if( prop !== 'common' && prop in target ) {
					let filename = '';
					let common = target.common();
				}
				return false;
			}
		}
	},
	fileResponseConfig = {
		js: {
			valid: [ 'login', 'user', 'app' ],
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

rootResponseConfig = new Proxy(rootResponseConfig, rootProxyHandler);
fileResponseConfig = new Proxy(fileResponseConfig, fileProxyHandler);

module.exports = { rootResponseConfig, fileResponseConfig };