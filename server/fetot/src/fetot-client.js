'use strict';

const ModeWorker = require('../../lib/mode-worker'),
	createClientID = require('./create-client-id');

class FetotClient {
	constructor(socketWorker) {
		this.socketWorker = socketWorker;
		this.clientID = 0;
		
		this.currentMode = {};
	}
	
	/*** static properties and methods ***/
	static clients = new Map();
	
	static async init(mongoWorker, fetotModes) {
		FetotClient.mongoWorker = mongoWorker;
		FetotClient.fetotModes = new Map( Object.entries(fetotModes) );
	}
	static async connect({message: {message}, socketWorker}) {
		let clientID = createClientID(),
			fetotClient = new FetotClient(socketWorker);
		
		await fetotClient.setClientID(clientID);
		await socketWorker.setClientID(clientID);
		
		if( 'mode' in message ) {
			await fetotClient.setCurrentMode(message);
		} else {
			throw socketWorker.close('Did not found fetot-mode')
		}
		
		await FetotClient.setNewClient(fetotClient);
		return {type: 'connection', message: {clientID}};
	}
	static async checkID(clientID, {clientID: socketClientID}) {
		return clientID === socketClientID;
	}
	static async setNewClient(fetotClient) {
		FetotClient.clients.set(fetotClient.clientID, fetotClient);
	}
	
	/*** work methods ***/
	setClientID(id) {
		this.clientID = id;
	}
	
	async run(message) {
		let sendMessage = await this.currentMode.run(message);
		this.socketWorker.sendMessage(sendMessage);
	}
	
	async setCurrentMode({mode}) {
		let currentModeOptions = FetotClient.fetotModes.get(mode);
		this.currentMode = await ModeWorker.init(currentModeOptions, FetotClient.mongoWorker);
	}
}

module.exports = FetotClient;