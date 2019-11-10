'use strict';

/*** imports [begin] ***/

const generateClientID = require('../src/generate-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function connectionWorker({ip, message: {content: {type, data: message}}, response}) {
	if( type === '' || !('client' in message) || !('connection' in message) )
		return await response(null);
	
	message = await parse(type, message); // message = data = { client, connection }
	if( message !== null ) {
		await clientWorker.client.ipAddress[type].set(message.id, ip);
		message = {message}
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
	const id = await generateClientID.forLoginPage();
	const success = await clientWorker.client.create('login', id, connection);
	
	return success ? { id } : null;
}

/* app page connection */
async function isAppPageConnection(message) {
	const id = await clientWorker.client.appLinksID.get(message.client);
	return id ? await isNotFirstClientConnection(id, message) : await isFirstClientConnection(message);
}
async function isFirstClientConnection({client: clientOptions, connection}) {
	const id = await generateClientID.forAppPage();
	
	const client = await clientWorker.client.create('app', id, clientOptions);
	if( !client ) return null;
	
	await clientWorker.client.appLinksID.set(clientOptions, id);
	return await createClientConnection(client, connection, id);
}
async function isNotFirstClientConnection(id, {connection}) {
	const client = await clientWorker.client('app', id);
	return await createClientConnection(client, connection, id);
}

async function createClientConnection(client, connection, id) {
	const connectionLabel = await clientWorker.client.createConnection(client, connection);
	return { id: `${id}/${connectionLabel}`, client: client.config }
}

/*** src [end] ***/

module.exports = connectionWorker;