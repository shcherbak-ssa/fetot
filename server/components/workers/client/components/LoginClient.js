'use strict';

/*** imports [begin] ***/

const MongodbService = require('../../../services/mongodb');
const validationService = require('../../../services/validation');

const loginModules = require('../../../../fetot/login-modules');

/*** imports [end] ***/
/*** init [begin] ***/

const changeModuleValidation = validationService({
	$module: {
		type: String,
		required: true,
		valid: ['login', 'sing-in', 'confirm-email', 'create-account']
	}
});

/*** init [end] ***/
/*** exports [begin] ***/

class LoginClient {
	constructor() {
		this.worker = {};
		this.messageValidation = {};
		
		this.options = {
			store: new Map(),
			mongodb: LoginClient.mongodb,
			message: {},
			response: {}
		};
	}
	
	/* static */
	static mongodb = null;
	static async create() {
		if( LoginClient.mongodb === null ) LoginClient.mongodb =
			MongodbService.createCollection({db: 'client', collection: 'client'});
		
		return new LoginClient();
	}
	
	/* public */
	async run({message: {type, data: message}, response}) {
		let result = '';
		switch( type ) {
			case 'worker':
				result = await this.messageValidation(message);
				if( typeof result === 'object' ) return await response(result);
				
				return await this._workerHandler({message, response});
			case 'change-module':
				result = await changeModuleValidation(message);
				if( typeof result !== 'object' ) await this._changeModuleHandler(message);
		}
		await response(null)
	}

	/* privet */
	async _workerHandler(options) {
		console.log('worker', options.message);
		
		options = Object.assign({}, this.options, options);
		await this.worker(options);
	}
	async _changeModuleHandler({$module}) {
		let {worker, schema} = loginModules[$module];
		
		this.worker = worker;
		this.messageValidation = validationService(schema);
	}
}

/*** exports [end] ***/

module.exports = LoginClient;