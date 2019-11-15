'use strict';

/*** imports [begin] ***/

const {removeIDFromCollection} = require('../src/generate-client-id');
const parseClientID = require('../src/parse-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function closeWorker({ip, message, response}) {
	await response(null);
	console.log('close-worker', message);
	
	let id = message.id;
	let page = id[id.length - 1] === 'l' ? 'login' : 'app';
	if( !clientWorker.client.ipAddress[page].isCorrect(id, ip) ) return;
	
	await closeClientConnection(id);
	await removeIDFromCollection(id);
	await clientWorker.client.ipAddress[page].remove(id);
	
	//clientWorker.showCollection(); // for testing
}

/*** exports [end] ***/
/*** src [begin] ***/

async function closeClientConnection(clientID) {
	let [id, label] = await parseClientID(clientID);
	if( label === 'l' ) return await clientWorker.client.remove('login', clientID);
	
	let client = await clientWorker.client('app', id);
	console.log('client.connections.size()', client.connections.size());
	if( client.connections.size() !== 1 ) return await clientWorker.client.removeConnection(client, label);
	
	await clientWorker.client.appLinksID.remove(id);
	await clientWorker.client.remove('app', id);
}

/*** src [end] ***/

module.exports = closeWorker;