'use strict';

const path = require('path'),
	clientDirname = path.join(process.cwd(), 'client'),
	cookieConfig = require('./cookie-config'),
	
	rootResponseConfig = {
		'sing-in': {
			filename: path.join(clientDirname, 'view', 'login.html'),
			statusCode: 200,
			headers: {
				'Content-Type': 'text/html',
				'Set-Cookie': cookieConfig['sing-in']
			}
		}
	},
	fileResponseConfig = {
		js: {
			valid: [ 'login', 'user' ],
			options(filename) {
				return {
					filename: path.join(clientDirname, 'js', `${filename}.js`),
					statusCode: 200,
					headers: {
						'Content-Type': 'text/javascript'
					}
				}
			}
		}
	};

module.exports = {
	rootResponseConfig,
	fileResponseConfig
};