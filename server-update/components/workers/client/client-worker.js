'use strict';

/*** imports [begin] ***/

const Client = require('./components/client');
const Connection = require('./components/connection');

/*** imports [end] ***/
/*** init [begin] ***/

const clientsCollections = {
	app: new Map(),
	appLinksID: new Map(),
	
	login: new Map(),
	
	ipAddress: new Map(),
	
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

client.getAppLinkID = getAppClientLinkID;
client.setAppLinkID = setAppClientLinkID;
client.removeAppLinkID = removeAppClientLinkID;

client.remove = removeClient;
client.removeConnection = removeClientConnection;

client.setIP = setClientIPAddress;
client.removeIP = removeClientIPAddress;
client.isCorrectIP = isCorrectClientIPAddress;

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
async function removeAppClientLinkID(id) {
	for( let [key, val] of clientsCollections.appLinksID.entries() ) {
		if( val === id ) return clientsCollections.appLinksID.delete(key);
	}
}

// remove functions
async function removeClient(page, id) {
	clientsCollections.get(page).delete(id);
}
async function removeClientConnection(client, connectionsLabel) {
	await client.connections.remove(connectionsLabel);
}

// ip functions
async function setClientIPAddress(id, ip) {
	clientsCollections.ipAddress.set(id, ip);
}
async function removeClientIPAddress(id) {
	clientsCollections.ipAddress.delete(id)
}
async function isCorrectClientIPAddress(id, ip) {
	return clientsCollections.ipAddress.get(id) === ip;
}

// run function
async function runClient(client, message) {}

/*** src [end] ***/

module.exports = { client };