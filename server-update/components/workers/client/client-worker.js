'use strict';

/*** imports [begin] ***/

const Client = require('./components/Client');

const ipAddressWorker = require('./components/ip-address-worker');
const appLinkIDWorker = require('./components/app-link-id-worker');

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

client.appLinksID = appLinkIDWorker;
client.ipAddress = {
	login: Object.assign({}, ipAddressWorker),
	app: Object.assign({}, ipAddressWorker)
};

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

/*** src [end] ***/

// for testing
function showCollection() {
	console.log('login collection -', clientsCollections.login.keys());
	// console.log('app collection -', 	clientsCollections.app.entries());
	
	client.ipAddress.login.showCollection();
	// client.appLinksID.showCollection();
}

module.exports = { client, showCollection };