'use strict';

const config = {
	mongo: {
		db: 'clients',
		collection: 'clients'
	},
	messages: {
		'check-email': {
			type: 'sing-in',
			message: {
				status: 'success'
			}
		},
		'exist': {
			type: 'sing-in',
			message: {
				status: 'error',
				error: 'User with current e-mail already exist'
			}
		},
		'invalid-email': {
			type: 'sing-in',
			message: {
				status: 'error',
				error: 'Invalid e-mail address'
			}
		}
	}
};

module.exports = config;