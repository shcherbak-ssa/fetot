'use strict';

/*** imports [begin] ***/

const {removeIDFromCollection} = require('../src/generate-client-id');
const parseClientID = require('../src/parse-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseCloseMessage(options) {
	await options.response(null);
	
	let {ip, message: {id}} = options;
	if( !clientWorker.client.isCorrectIP(id, ip) ) return;
	
	await closeClientConnection(id);
	await clientWorker.client.removeIP(id);
	await removeIDFromCollection(id);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function closeClientConnection(clientID) {
	let [id, label] = await parseClientID(clientID);
	if( label === 'l' ) return await clientWorker.client.remove('login', id);
	
	let client = await clientWorker.client('app', id);
	if( client.connections.size() === 1 ) return await clientWorker.client.removeConnection(client, label);
	
	await clientWorker.client.removeAppLinkID(id);
	await clientWorker.client.remove('app', id);
}

/*** src [end] ***/

module.exports = parseCloseMessage;