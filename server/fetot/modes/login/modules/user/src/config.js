'use strict';

const config = {
	mongo: {
		db: 'clients',
		collection: 'clients'
	},
	messages: {
		'invalid-fullname': {
			type: 'fullname',
			message: {
				status: 'error',
				error: 'Full name can only contain the letters'
			}
		}
	}
};

module.exports = config;