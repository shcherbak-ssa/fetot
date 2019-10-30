'use strict';

/*** imports [begin] ***/

const {removeIDFromCollection} = require('../src/generate-client-id');
const parseClientID = require('../src/parse-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseCloseMessage({ip, message: {id}, response}) {
	await response(null);
	
	if( !clientWorker.client.ipAddress.isCorrect(id, ip) ) return;
	
	await closeClientConnection(id);
	await removeIDFromCollection(id);
	await clientWorker.client.ipAddress.remove(id);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function closeClientConnection(clientID) {
	let [id, label] = await parseClientID(clientID);
	if( label === 'l' ) return await clientWorker.client.remove('login', clientID);
	
	let client = await clientWorker.client('app', id);
	if( client.connections.size() > 1 ) return await clientWorker.client.removeConnection(client, label);
	
	await clientWorker.client.appLinksID.remove(id);
	await clientWorker.client.remove('app', id);
}

/*** src [end] ***/

module.exports = parseCloseMessage;