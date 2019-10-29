'use strict';

/*** imports [begin] ***/

const {removeIDFromCollection} = require('../src/generate-client-id'),
	parseClientID = require('../src/parse-client-id'),
	clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseCloseMessage(options) {
	await parse(options);
	await removeIDFromCollection(options.id);
}

/*** exports [end] ***/
/*** src [begin] ***/
async function parse({id: clientID}) {
	let [id, label] = await parseClientID(clientID);
	if( label === 'l' ) return await clientWorker.client.remove('login', id);
	
	let client = await clientWorker.client('app', id);
	if( client.connections.size() === 1 ) return await clientWorker.client.removeConnection(client, label);
	
	await clientWorker.client.removeAppLinkID(id);
	await clientWorker.client.remove('app', id);
}

/*** src [end] ***/

module.exports = parseCloseMessage;