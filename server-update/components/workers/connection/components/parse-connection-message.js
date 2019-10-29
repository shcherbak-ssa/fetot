'use strict';

/*** imports [begin] ***/

const generateClientID = require('../src/generate-client-id'),
	clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseConnectionMessage(options) {
	let {ip, message: {content: {type, data}}} = options,
		message = await parse(type,{ip, message: data});
	
	await options.response({message});
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parse(type, options) {
	switch( type ) {
		case 'login':
			return await isLoginPageConnection(options);
		case 'app':
			return await isAppPageConnection(options);
	}
}

/* login page connection */
async function isLoginPageConnection(options) {
	let id = await generateClientID.forLoginPage();
	
	await clientWorker.client.create('login', id, options);
	return { id };
}

/* app page connection */
async function isAppPageConnection(options) {
	let id = await clientWorker.client.getAppLinkID(options.client);
	return id
		? await isNotFirstClientConnection(id, options.connection)
		: await isFirstClientConnection(options);
}
async function isFirstClientConnection(options) {
	let id = await generateClientID.forAppPage();
	
	await clientWorker.client.setAppLinkID(options.client, id);
	await clientWorker.client.create('app', id, options);
	
	return { id }
}
async function isNotFirstClientConnection(id, options) {
	let client = clientWorker.client('app', id),
		connectionLabel = await clientWorker.client.createConnection(client, options);
	
	return { id: `${id}/${connectionLabel}` }
}

/*** src [end] ***/

module.exports = parseConnectionMessage;