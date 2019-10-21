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
	
	console.log('clientWorker.currentMode.settings', clientWorker.currentMode.settings);
	responseEventEmitter.emit('response-post-request', {
		response,
		message: {
			message: {
				client: clientID,
				settings: clientWorker.currentMode.settings || {}
			}
		}
	})
}

/*** exports [end] ***/

module.exports = clientConnectionHandler;