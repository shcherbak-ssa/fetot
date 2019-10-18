'use strict';

/*** exports [begin] ***/

const singInModuleConfig = {
	name: 'login',
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