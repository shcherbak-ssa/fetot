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
async function isLoginPageConnection(options) {}

/* app page connection */
async function isAppPageConnection(options) {}
async function isFirstClientConnection(options) {}
async function isNotFirstClientConnection(client, options) {}

/*** src [end] ***/

module.exports = parseConnectionMessage;