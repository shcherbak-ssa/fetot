'use strict';

/*** exports [begin] ***/

const singInModuleConfig = {
	name: 'login',
	mongodb: {
		db: 'clients',
		collection: 'clients'
	},
	response: {
		'many-enter-count': {
			type: 'error',
			message: {
				error: ''
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

singInModuleConfig.response = new Proxy(singInModuleConfig.response, {
	get(target, prop) {
		return (responseModule) => {
			return {
				label: 'success',
				message: target[prop],
				response: responseModule
			}
		}
	}
});

/*** exports [end] ***/

module.exports = singInModuleConfig;