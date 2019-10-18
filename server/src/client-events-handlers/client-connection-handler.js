'use strict';

/*** imports [begin] ***/

const ClientWorker = require('../workers/client-worker'),
	ModeWorker = require('../workers/mode-worker'),
	
	{generateClientId} = require('../../lib/generate-client-id'),
	{responseEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function clientConnectionHandler({message, clientIP, response}) {
	let currentMode = message.content.type,
		clientID = await generateClientId(),
		clientWorker = new ClientWorker({clientID, clientIP});
	
	clientWorker.currentMode = await ModeWorker.initMode(currentMode);
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