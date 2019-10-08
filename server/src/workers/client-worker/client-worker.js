'use strict';

class ClientWorker {
	constructor({mongodbWorker}) {
		this.mongodbWorker = mongodbWorker;
	}
	
	static MongodbWorker = {};
	static activeClients = new Map();
	static async clientConnection(message, response) {
		let [currentMode, currentModule] = message.content.type.split('/'),
			client = Date.now();
		
		console.log(currentMode, currentModule, client);
	}
	static async createClient() {
	
	}
}

module.exports = ClientWorker;