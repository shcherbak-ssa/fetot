'use strict';

const createClientID = require('./src/create-client-id');

class FetotClient {
	constructor(socketWorker) {
		this.socketWorker = socketWorker;
		this.clientID = 0;
		
		this.currentMode = {};
		this.currentModule = {};
		
		this.modules = {};
	}
	
	/*** static properties and methods ***/
	static clients = new Map();
	
	static init(mongoWorker, fetotModes, fetotModules) {
		FetotClient.mongoWorker = mongoWorker;
		FetotClient.fetotModes = fetotModes;
		FetotClient.fetotModules = fetotModules;
	}
	static async connect({message: {message}, socketWorker}) {
		let clientID = createClientID(),
			fetotClient = new FetotClient(socketWorker);
		
		await fetotClient.setClientID(clientID);
		await socketWorker.setClientID(clientID);
		
		if( 'fetot-mode' in message ) {
			fetotClient.setCurrentMode(message['fetot-mode']);
		} else {
			throw socketWorker.close('Did not found fetot-mode')
		}
		
		await FetotClient.setNewClient(fetotClient);
		return {type: 'connection', message: {clientID}};
	}
	static async setNewClient(fetotClient) {
		FetotClient.clients.set(fetotClient.clientID, fetotClient);
	}
	
	/*** work methods ***/
	setClientID(id) {
		this.clientID = id;
	}
	
	parseMessage(message) {}
	
	changeMode(message) {}
	setCurrentMode(mode) {
		this.currentMode = FetotClient.fetotModes[mode];
	}
	
	changeModule(message) {}
	setCurrentModule(fmodule) {
		this.currentModule = this.currentMode.modules[fmodule];
	}
}

module.exports = FetotClient;