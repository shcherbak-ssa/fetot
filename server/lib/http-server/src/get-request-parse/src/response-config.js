'use strict';

const cookieConfig = require('./cookie-config'),
	responseConfig = {
		'sing-in': {
			filename: path.join(clientDirname, 'view', 'login.html'),
			statusCode: 200,
			headers: {
				'Content-Type': 'text/html',
				'Set-Cookie': cookieConfig['sing-in']
			}
		}
	};

module.exports = responseConfig;