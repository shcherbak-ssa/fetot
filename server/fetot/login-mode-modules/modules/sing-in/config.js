'use strict';

/*** exports [begin] ***/

const singInModuleConfig = {
	name: 'sing-in',
	mongodb: {
		db: 'clients',
		collection: 'clients'
	},
	response: {
		'client-exist': {
			type: 'error',
			message: {
				error: 'Client with current email already exist'
			}
		},
		'success': {
			type: 'success',
			message: {
				success: true
			}
		}
	},
	emailLetterConfig(email, code) {
		return {
			clientEmail: email,
			subject: 'Confirm email',
			type: 'confirm-email',
			data: { code }
		}
	}
};

/*** exports [end] ***/

module.exports = singInModuleConfig;