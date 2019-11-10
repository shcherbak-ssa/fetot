'use strict';

/*** imports [begin] ***/

const Client = require('./components/Client');

const ipAddressWorker = require('./components/workers/ip-address-worker');
const appLinkIDWorker = require('./components/workers/app-link-id-worker');

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

client.run = runClient;

client.create = createClient;
client.createConnection = createClientConnection;

client.remove = removeClient;
client.removeConnection = removeClientConnection;

client.appLinksID = appLinkIDWorker;
client.ipAddress = { login: ipAddressWorker.get(), app: ipAddressWorker.get() };

/*** exports [end] ***/
/*** src [begin] ***/

// create functions
async function createClient(page, id, clientOptions) {
	let client = await Client.create(clientOptions);
	if( !client ) return false;
	
	clientsCollections.get(page).set(id, client);
	return client;
}
async function createClientConnection(client, connection) {
	return await client.createConnection(connection);
}

// remove functions
async function removeClient(page, id) {
	clientsCollections.get(page).delete(id);
}
async function removeClientConnection(client, connectionsLabel) {
	await client.removeConnection(connectionsLabel);
}

// run function
async function runClient(client, options) {
	await client.run(options);
}

/*** src [end] ***/

// for testing
function showCollection() {
	console.log('app collection -', 	clientsCollections.app.keys());
	
	client.ipAddress.app.showCollection();
	client.appLinksID.showCollection();
}

module.exports = { client, showCollection };