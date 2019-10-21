'use strict';

/*** imports [begin] ***/

const ClientWorker = require('../../workers/client-worker'),
	ModeWorker = require('../../workers/mode-worker'),
	
	{generateClientId} = require('../../../lib/generate-client-id'),
	{responseEventEmitter} = require('../../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function clientConnectionHandler({message, clientIP, response}) {
	let {type: currentMode, data: messageData = {}} = message.content,
		clientID = await generateClientId(),
		clientWorker = new ClientWorker({clientID, clientIP});
	
	clientWorker.currentMode = await ModeWorker.initMode(currentMode, messageData);
	ClientWorker.activeClients.set(clientID, clientWorker);
	
	responseEventEmitter.emit('response-post-request', {
		response,
		message: {
			message: {
				client: clientWorker.id,
				config: clientWorker.currentMode.config || {}
			}
		}
	})
}

/*** exports [end] ***/

module.exports = clientConnectionHandler;