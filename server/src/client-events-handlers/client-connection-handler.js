'use strict';

/*** imports [begin] ***/

const {createClientID} = require('../../lib/create-id'),
	ClientWorker = require('../workers/client-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

async function clientConnectionHandler({message, clientIP, response}) {
	let {currentMode, currentModule} = message.content.data,
		clientID = await createClientID();
	
	await ClientWorker.createClient({currentMode, currentModule, clientIP, clientID, response});
}

/*** exports [end] ***/

module.exports = clientConnectionHandler;