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
	
	static async createClient({currentMode, currentModule, clientIP, clientID, response}) {
		let clientWorker = new ClientWorker({clientID, clientIP});
		clientWorker.currentMode = await ModeWorker.initMode(currentMode, currentModule);
		
		ClientWorker.activeClients.set(clientID, clientWorker);
		
		let message = { message: { client: clientID } };
		responseEventEmitter.emit('response-post-request', {label: 'success', response, message})
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