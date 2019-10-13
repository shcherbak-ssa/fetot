'use strict';

const config = {
	mongo: {
		db: 'clients',
		collection: 'clients'
	},
	messages: {
		'success': {
			type: 'login/success',
			message: {}
		},
		'error': {
			type: 'login/error',
			message: {
				error: 'Invalid e-mail address or password'
			}
		}
	}
};

module.exports = config;