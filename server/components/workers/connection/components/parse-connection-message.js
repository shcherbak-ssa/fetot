'use strict';

/*** imports [begin] ***/

const generateClientID = require('../src/generate-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseConnectionMessage({ip, message: {content: {type, data: message}}, response}) {
	if( type === '' || !('client' in message) || !('connection' in message) )
		return await response(null);
	
	let id = await parse(type, message); // message = data = { client, connection }
	if( id === null ) message = null;
	else {
		await clientWorker.client.ipAddress[type].set(id, ip);
		message = { message: {id} };
	}
	
	await response(message);
	clientWorker.showCollection(); // for testing
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parse(type, message) {
	switch( type ) {
		case 'login':
			return await isLoginPageConnection(message);
		case 'app':
			return await isAppPageConnection(message);
	}
}

/* login page connection */
async function isLoginPageConnection({connection}) {
	let id = await generateClientID.forLoginPage();
	let success = await clientWorker.client.create('login', id, connection);
	
	return success ? id : null;
}

/* app page connection */
async function isAppPageConnection(message) {
	let id = await clientWorker.client.appLinksID.get(message.client);
	return id ? await isNotFirstClientConnection(id, message) : await isFirstClientConnection(message);
}
async function isFirstClientConnection({client: clientOptions, connection}) {
	let id = await generateClientID.forAppPage();
	
	let client = await clientWorker.client.create('app', id, clientOptions);
	if( !client ) return null;
	
	await clientWorker.client.appLinksID.set(clientOptions, id);
	return await createClientConnection(client, connection, id);
}
async function isNotFirstClientConnection(id, {connection}) {
	let client = clientWorker.client('app', id);
	return await createClientConnection(client, connection, id);
}

async function createClientConnection(client, connection, id) {
	let connectionLabel = await clientWorker.client.createConnection(client, connection);
	return `${id}/${connectionLabel}`;
}

/*** src [end] ***/

module.exports = parseConnectionMessage;