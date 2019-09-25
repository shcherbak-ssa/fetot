'use strict';

const config = {
	mongo: {
		db: 'clients',
		collection: 'clients'
	},
	messages: {
		'success': {
			type: 'sing-in/success',
			message: {}
		},
		'exist': {
			type: 'sing-in/error',
			message: {
				error: 'User with current e-mail already exist'
			}
		},
		'invalid-email': {
			type: 'sing-in/error',
			message: {
				error: 'Invalid e-mail address'
			}
		}
	}
};

module.exports = config;