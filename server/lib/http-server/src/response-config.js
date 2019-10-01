'use strict';

const path = require('path'),
	clientDirname = path.join(process.cwd(), 'client'),

	responseConfig = {
		'404': {
			type: 'file',
			response: {
				filename: path.join(clientDirname, 'view', '404.html'),
				headers: {
				
				}
			}
		}
		// 'get-file':
		// 404: {
		// 	type: 'error404',
		// 	response: {
		// 		filename: path.join(clientDirname, 'view/404.html')
		// 	}
		// },
		// 'js': {
		//
		// }
	};

module.exports = responseConfig;