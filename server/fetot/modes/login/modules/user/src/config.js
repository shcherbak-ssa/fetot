'use strict';

const config = {
	mongo: {
		db: 'clients',
		collection: 'clients'
	},
	messages: {
		'invalid-email': {
			type: 'error',
			message: {
				label: 'email',
				error: 'Invalid e-mail address'
			}
		},
		'invalid-fullname': {
			type: 'error',
			message: {
				label: 'fullname',
				error: 'Full name can only contain the letters'
			}
		},
		'invalid-password': {
			type: 'error',
			message: {
				label: 'password',
				error: 'Password cannot be under 8 symbols'
			}
		},
		'success': {
			type: 'success',
			message(id) {
				return { userID: id }
			}
		}
	}
};

module.exports = config;