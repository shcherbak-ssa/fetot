'use strict';

/*** exports [begin] ***/

const singInModuleConfig = {
	name: 'confirm-email',
	response: {
		'invalid-code': {
			type: 'error',
			message: {
				error: 'Invalid confirmation code'
			}
		},
		'success': {
			type: 'success',
			message: {}
		}
	}
};

/*** exports [end] ***/

module.exports = singInModuleConfig;