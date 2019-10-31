'use strict';

/*** imports [begin] ***/

const MongodbWorker = require('../../../mongodb');
const loginModeModule = require('../../../../../fetot/login-mode-modules');

/*** imports [end] ***/
/*** init [begin] ***/

const mongodb = { db: 'clients', collection: 'clients' };

/*** init [end] ***/
/*** exports [begin] ***/

class LoginClient {
	constructor(currentModule, mongodbWorker) {
		this.currentModule = currentModule;
		
		this.options = {
			store: new Map(),
			mongodb: mongodbWorker,
			message: {},
			response: {}
		};
	}
	static async create({$module}) {
		let mongodbWorker = await MongodbWorker.createCollection(mongodb);
	}
	
	async run({message, response}) {
	
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = LoginClient;