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
	
	/*** static properties and methods ***/
	static activeClients = new Map();
	static async controlClient(clientID, clientIP) {
		let clientWorker = ClientWorker.activeClients.get(clientID);
		return clientWorker.ip === clientIP ? clientWorker : false;
	}
	
	/*** work methods ***/
	async runCurrentModule(options) {
		await this.currentMode.runCurrentModule(options);
	}
	async changeCurrentMode() {
	
	}
	async changeCurrentModule(moduleName) {
		await this.currentMode.changeCurrentModule(moduleName);
	}
}

/*** exports [end] ***/

module.exports = ClientWorker;