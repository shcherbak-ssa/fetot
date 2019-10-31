'use strict';

/*** imports [begin] ***/

const MongodbWorker = require('../../mongodb');
const loginModeModules = require('../../../../fetot/login-mode-modules');

/*** imports [end] ***/
/*** init [begin] ***/

const mongodbWorker = MongodbWorker.createCollection({db: 'client', collection: 'client'});

/*** init [end] ***/
/*** exports [begin] ***/

class LoginClient {
	constructor($module) {
		this.currentModule = $module;
		this.options = {
			store: new Map(),
			mongodb: mongodbWorker,
			message: {},
			response: {}
		};
	}
	
	static async create({$module}) {
		return new LoginClient(loginModeModules[$module]);
	}
	
	async run({message: {type, data: message}, response}) {
		if( type === 'run-worker' ) {
			message = this.validate(message);
			if( !message ) return await this.runWorker({message, response});
		} else if( type === 'change-module' ) await this.changeModule(message);
		
		await response(null);
	}
	
	async validate(message) {
	
	}
	async runWorker(options) {
		options = Object.assign({}, this.options, options);
		this.currentModule.worker(options);
	}
	async changeModule({$module}) {
		if( $module === undefined ) return ;
		this.currentModule = loginModeModules[$module];
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = LoginClient;