'use strict';

/*** imports [begin] ***/

const MongodbService = require('../../../services/mongodb');
const validationService = require('../../../services/validation');
// const loginModeModules = require('../../../../fetot/login-modules');

/*** imports [end] ***/
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
		console.log('$module', $module);
		return new LoginClient($module);
	}
	
	async run(options) {
		console.log(options);
	}
	// async run({message: {type, data: message}, response}) {
	// 	if( type === 'worker' ) {
	//
	// 		message = await this._validate(message);
	// 		if( !message ) return await this._runWorker({message, response});
	//
	// 	} else if( type === 'change-module' ) await this._runChangeModule(message);
	//
	// 	await response(null);
	// }
	//
	// async _runWorker(options) {
	// 	options = Object.assign({}, this.options, options);
	// 	this.currentModule.worker(options);
	// }
	// async _runChangeModule({$module}) {
	// 	if( $module === undefined ) return ;
	//
	// 	// this.currentModule = loginModeModules[$module];
	// 	this._validate = validationService(this.currentModule.schema);
	// }
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = LoginClient;