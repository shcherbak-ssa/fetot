'use strict';

/*** imports [begin] ***/

const {createClientID} = require('../../lib/create-id'),
	ClientWorker = require('../workers/client-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

async function clientConnectionHandler({message, clientIP, response}) {
	let {currentMode, currentModule} = message.content.data,
		clientID = await createClientID();
	
	let options = {currentMode, currentModule, clientIP, clientID, response};
	await ClientWorker.createClient(options);
}

/*** exports [end] ***/

module.exports = clientConnectionHandler;