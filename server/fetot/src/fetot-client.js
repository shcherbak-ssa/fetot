'use strict';

const ModeWorker = require('../../lib/mode-worker'),
	
	EventEmitter = require('./event-emitter'),
	createClientID = require('./create-client-id');

class FetotClient {
	constructor(socketWorker) {
		this.socketWorker = socketWorker;
		this.clientID = 0;
		
		this.eventEmitter = new EventEmitter();
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
		
		await fetotClient.createClient();
		return {type: 'ws/connection', message: {clientID}};
	}
	static async checkID(clientID, {clientID: socketClientID}) {
		return clientID === socketClientID;
	}
	
	/*** work methods ***/
	setClientID(id) {
		this.clientID = id;
	}
	async createClient() {
		FetotClient.clients.set(this.clientID, this);
		
		this.eventEmitter.on('send-message', async (message) => {
			await this.socketWorker.sendMessage(message);
		})
	}
	
	async run(message) {
		await this.currentMode.run(message);
	}
	async emit(event, data) {
		await this.eventEmitter.emit(event, data)
	}
	
	async setCurrentMode({mode}) {
		let currentModeOptions = FetotClient.fetotModes.get(mode);
		Object.assign(currentModeOptions, {fetotClientEventEmitter: this});
		
		this.currentMode = await ModeWorker.init(currentModeOptions, FetotClient.mongoWorker);
	}
}

module.exports = FetotClient;