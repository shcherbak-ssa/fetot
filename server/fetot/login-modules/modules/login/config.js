'use strict';

/*** exports [begin] ***/

const loginModuleConfig = {
	name: 'login',
	responseOptions: {
		'many-enter-count': {
			type: 'error',
			message: {
				error: 'many-enter-count'
			}
		},
		'not-exist': {
			type: 'error',
			message: {
				error: 'Invalid email or password'
			}
		},
		'success': {
			type: 'success',
			message: {
				success: true
			}
		}
	}
};

/*** exports [end] ***/

module.exports = loginModuleConfig;