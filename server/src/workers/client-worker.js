'use strict';

/*** imports [begin] ***/

const {messageEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

class ClientWorker {
	constructor({client, mongodbWorker}) {
		this.id = client;
		this.mongodbWorker = mongodbWorker;
	}
	
	static MongodbWorker = {};
	static activeClients = new Map();
	static async clientConnection(message, response) {
		let {currentMode, currentModule} = message.content.data,
			client = Date.now();
		
		console.log(currentMode, currentModule, client);
		messageEventEmitter.emit('response-post-request', {label: 'success', message: {message: {client}}, response});
	}
	static async createClient() {
	
	}
}

/*** exports [end] ***/

module.exports = ClientWorker;