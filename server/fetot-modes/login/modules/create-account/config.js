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

/*** exports [end] ***/

module.exports = singInModuleConfig;