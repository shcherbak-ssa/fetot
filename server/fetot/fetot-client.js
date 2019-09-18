'use strict';

class FetotClient {
	constructor({message, socketWroker}) {
		this.clientID = 'clientId';
		this.socketWorker = socketWroker;
		
		this.currentMode = {};
		this.currentModule = {};
		
		this.modules = {};
	}
	
	/*** static properties and methods ***/
	static clients = new Map();
	// static mongoWorker = {};
	// static fetotModes = {};
	// static fetotModules = {};
	
	static init(mongoWorker, fetotModes, fetotModules) {
		FetotClient.mongoWorker = mongoWorker;
		FetotClient.fetotModes = fetotModes;
		FetotClient.fetotModules = fetotModules;
	}
	static connect(options) {
		let fetotClient = new FetotClient(options);
		FetotClient.clients.set(fetotClient.clientID, fetotClient);
		
		return {message: 'I am ready!!!'};
	}
	
	/*** work methods ***/
	parseMessage(message) {}
	changeMode(message) {}
	changeModule(message) {}
}

module.exports = FetotClient;