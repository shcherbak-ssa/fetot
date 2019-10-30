'use strict';

/*** imports [begin] ***/

const Client = require('./components/client');
const Connection = require('./components/connection');

const clientIPAddressWorker = require('./components/client-ip-address-worker');
const clientAppLinkIDWorker = require('./components/client-app-link-id-worker');

/*** imports [end] ***/
/*** init [begin] ***/

const clientsCollections = {
	app: new Map(),
	login: new Map(),
	
	get(key) {
		return this[key];
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function client(page, id) {
	return clientsCollections.get(page).get(id);
}

client.create = createClient;
client.createConnection = createClientConnection;

client.remove = removeClient;
client.removeConnection = removeClientConnection;

client.appLinksID = clientAppLinkIDWorker;
client.ipAddress = clientIPAddressWorker;

/*** exports [end] ***/
/*** src [begin] ***/

// create functions
async function createClient(page, id, message) {
	let client = await Client.create(message);
	clientsCollections.get(page).set(id, client);
}
async function createClientConnection(client, options) {
	let connection = await Connection.create(options);
	return await client.connections.append(connection);
}

// remove functions
async function removeClient(page, id) {
	clientsCollections.get(page).delete(id);
}
async function removeClientConnection(client, connectionsLabel) {
	await client.connections.remove(connectionsLabel);
}

/*** src [end] ***/

module.exports = { client };