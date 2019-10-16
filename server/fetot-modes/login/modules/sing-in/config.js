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