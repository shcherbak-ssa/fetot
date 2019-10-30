'use strict';

/*** imports [begin] ***/

const generateClientID = require('../src/generate-client-id');
const clientWorker = require('../../client');

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
async function isLoginPageConnection({ip, message}) {
	let id = await generateClientID.forLoginPage();
	
	await clientWorker.client.create('login', id, message);
	await clientWorker.client.setIP(id, ip);
	
	return { id };
}

/* app page connection */
async function isAppPageConnection(options) {
	let id = await clientWorker.client.getAppLinkID(options.message.client);
	return id
		? await isNotFirstClientConnection(id, options)
		: await isFirstClientConnection(options);
}
async function isFirstClientConnection({ip, message}) {
	let id = await generateClientID.forAppPage();
	
	await clientWorker.client.setAppLinkID(message.client, id);
	await clientWorker.client.create('app', id, message);
	await clientWorker.client.setIP(id, options.ip);
	
	return { id }
}
async function isNotFirstClientConnection(id, {ip, message}) {
	let client = clientWorker.client('app', id);
	let connectionLabel = await clientWorker.client.createConnection(client, message.connection);
	
	id = `${id}/${connectionLabel}`;
	await clientWorker.client.setIP(id, ip);
	
	return { id }
}

/*** src [end] ***/

module.exports = parseConnectionMessage;