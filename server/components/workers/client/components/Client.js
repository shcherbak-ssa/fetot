'use strict';

/*** imports [begin] ***/

const Connection = require('./Connection');
const LoginClient = require('./LoginClient');

const createConnectionsWorker = require('./workers/connections-worker');

const clientService = require('../../../services/client');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class Client {
	constructor(config) {
		this.config = config;
	}
	
	/* static */
	static async create(clientOptions) {
		if( clientOptions.mode === 'login' ) return LoginClient.create(clientOptions);
		
		const config = await clientService.get(clientOptions);
		return config ? new Client(config) : false;
	}
	
	/* public */
	connections = createConnectionsWorker();
	
	async run({connectionLabel, message, response}) {
		const currentConnection = await this.connections(connectionLabel);
		console.log('connectionLabel', connectionLabel);
		message = await currentConnection.parseMessage(message);
		
		await response(message);
	}
	
	// connections
	async createConnection(connection) {
		connection = new Connection(connection);
		return await this.connections.add(connection);
	}
	async removeConnection(connectionLabel) {
		await this.connections.remove(connectionLabel)
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = Client;