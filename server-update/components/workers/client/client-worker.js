'use strict';

/*** imports [begin] ***/

const Client = require('./components/client'),
	Connection = require('./components/connection');

/*** imports [end] ***/
/*** init [begin] ***/

const clientsCollections = {
	app: new Map(),
	appLinksID: new Map(),
	login: new Map(),
	get(key) {
		return this[key];
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function client(label, id) {
	return (label === 'login') ? clientsCollections.login.get(id) : clientsCollections.app.get(id);
}

client.create = createClient;
client.createConnection = createClientConnection;

client.getAppLinkID = getAppClientLinkID;
client.setAppLinkID = setAppClientLinkID;

client.remove = removeClient;
client.removeConnection = removeClientConnection;

client.run = runClient;

/*** exports [end] ***/
/*** src [begin] ***/

// create functions
async function createClient(page, id, options) {
	let client = await Client.create(options);
	clientsCollections.get(page).set(id, client);
}
async function createClientConnection(client, options) {
	let connection = await Connection.create(options);
	return await client.connections.append(connection);
}

// client link-id functions
async function getAppClientLinkID(clientOptions) {
	return clientsCollections.appLinksID.get(clientOptions)
}
async function setAppClientLinkID(clientOptions, id) {
	clientsCollections.appLinksID.set(clientOptions, id);
}

// remove functions
async function removeClient(page, id) {
	clientsCollections.get(page).delete(id);
}
async function removeClientConnection(client, connectionsLabel) {
	await client.connections.remove(connectionsLabel);
}

async function runClient(client, message) {}

/*** src [end] ***/

module.exports = { client };