'use strict';

/*** imports [begin] ***/

const Client = require('./components/client'),
	Connection = require('./components/connection');

/*** imports [end] ***/
/*** init [begin] ***/

const clientsCollections = {
	app: new Map(),
	appLinks: new Map(),
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
client.appendConnection = appendClientConnection;

client.getAppLink = getAppClientLink;
client.setAppLink = setAppClientLink;

client.remove = removeClient;
client.run = runClient;

/*** exports [end] ***/
/*** src [begin] ***/

async function createClient(page, id, options) {
	let client = await Client.create(options);
	clientsCollections.get(page).set(id, client);
}
async function appendClientConnection(client, options) {
	let connection = await Connection.create(options);
	await client.connections.append(connection);
}

/* client link functions */
async function getAppClientLink(clientOptions) {
	return clientsCollections.appLinks.get('links').get(clientOptions)
}
async function setAppClientLink(clientOptions, id) {
	clientsCollections.appLinks.set(clientOptions, id);
}

async function removeClient(client, connectionNumber) {}
async function runClient(client, message) {}

/*** src [end] ***/

module.exports = {
	client
};