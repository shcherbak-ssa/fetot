'use strict';

/*** exports [begin] ***/

const singInModuleConfig = {
	name: 'login',
	mongodb: {
		db: 'clients',
		collection: 'clients'
	},
	response: {}
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