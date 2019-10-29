'use strict';

/*** imports [begin] ***/

const parseClientID = require('../src/parse-client-id'),
	clientWorker = require('../../client');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function parseCloseMessage(options) {
	let [id, label] = await parseClientID(options.id);
	if( label === 'l' ) return await clientWorker.client.remove('login', id);
	
	let client = await clientWorker.client('app', id);
	if( client.connections.size() === 1 ) return await clientWorker.client.remove('app', id);
	
	await clientWorker.client.removeConnection(client, label);
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = parseCloseMessage;