'use strict';

/*** imports [begin] ***/

const MongodbService = require('../../../services/mongodb');
// const loginModeModules = require('../../../../fetot/login-modules');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class LoginClient {
	constructor($module) {
		this.currentModule = $module;
		this.options = {
			store: new Map(),
			mongodb: MongodbService.createCollection({db: 'client', collection: 'client'}),
			message: {},
			response: {}
		};
	}
	
	static async create({$module}) {
		// return new LoginClient(loginModeModules[$module]);
		console.log($module);
		return new LoginClient($module);
	}
	
	async run({message: {type, data: message}, response}) {
		if( type === 'run-worker' ) {
			
			message = this._validate(message);
			if( !message ) return await this._runWorker({message, response});
			
		} else if( type === 'change-module' ) await this._changeModule(message);
		
		await response(null);
	}
	
	async _validate(message) {
		return message;
	}
	async _runWorker(options) {
		options = Object.assign({}, this.options, options);
		this.currentModule.worker(options);
	}
	async _changeModule({$module}) {
		if( $module === undefined ) return ;
		// this.currentModule = loginModeModules[$module];
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = LoginClient;