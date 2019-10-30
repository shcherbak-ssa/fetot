'use strict';

/*** imports [begin] ***/

const Connection = require('../Connection');
const connections = require('./connections');

const MongodbWorker = require('../../../mongodb');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class Client {
	constructor(config) {
		this.config = config;
	}
	
	static async create(clientOptions) {
		if( '$module' in clientOptions ) {
			console.log(clientOptions);
			return new Client({});
		}
		
		let mongodbWorker = await MongodbWorker.createCollection({db: 'clients', collection: 'clients'});
		let {config} = await mongodbWorker.findOneDocument(clientOptions);
		
		return config ? new Client(config) : false;
	}
	
	connections = connections;
	
	async run(options) {
		console.log(options);
	}
	async createConnection(connection) {
		connection = await Connection.create(connection);
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