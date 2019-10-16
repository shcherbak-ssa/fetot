'use strict';

/*** imports [begin] ***/

const ClientWorker = require('../workers/client-worker'),
	ModeWorker = require('../workers/mode-worker'),
	
	{createClientID} = require('../../lib/create-id'),
	{responseEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function clientConnectionHandler({message, clientIP, response}) {
	let {currentMode, currentModule} = message.content.data,
		clientID = await createClientID(),
		clientWorker = new ClientWorker({clientID, clientIP});
	
	clientWorker.currentMode = await ModeWorker.initMode(currentMode, currentModule);
	ClientWorker.activeClients.set(clientID, clientWorker);
	
	responseEventEmitter.emit('response-post-request', {
		label: 'success',
		response,
		message: {
			message: {client: clientID}
		}
	})
}

/*** exports [end] ***/

module.exports = clientConnectionHandler;