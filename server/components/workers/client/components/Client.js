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
	constructor(config, client_id) {
		this.config = config;
		this.client_id = client_id;
	}
	
	/* static */
	static async create(clientOptions) {
		if( clientOptions.mode === 'login' ) return LoginClient.create(clientOptions);
		
		const [config, client_id] = await clientService.get(clientOptions);
		return config ? new Client(config, client_id) : false;
	}
	
	/* public */
	connections = createConnectionsWorker();
	
	async run({connectionLabel, message, response}) {
		const currentConnection = await this.connections(connectionLabel);
		message = await currentConnection.parseMessage(message);
		
		await response(message);
	}
	
	// connections
	async createConnection() {
		const connection = new Connection(this.client_id);
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