'use strict';

/*** imports [begin] ***/

const ModeWorker = require('./mode-worker'),
	{responseEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

class ClientWorker {
	constructor({clientID, clientIP}) {
		this.id = clientID;
		this.ip = clientIP;
		
		this.currentMode = {};
	}
	
	static activeClients = new Map();
	
	static async createClient(options) {
	
	}
	static async controlClient(clientID, clientIP) {
		let clientWorker = ClientWorker.activeClients.get(clientID);
		return clientWorker.ip === clientIP ? clientWorker : false;
	}
	
	async changeCurrentMode() {}
	async changeCurrentModule() {}
}

/*** exports [end] ***/

module.exports = ClientWorker;