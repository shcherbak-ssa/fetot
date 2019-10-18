'use strict';

/*** exports [begin] ***/

const singInModuleConfig = {
	name: 'create-account',
	mongodb: {
		db: 'clients',
		collection: 'clients'
	},
	response: {
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