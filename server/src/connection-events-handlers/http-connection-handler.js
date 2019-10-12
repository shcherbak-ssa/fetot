'use strict';

const parseInputMessage = require('../../lib/parse-input-message'),
	messageValidation = require('../../lib/message-validation'),
	ClientWorker = require('../workers/client-worker');

/*** exports [begin] ***/

async function httpConnectionHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
	message = await messageValidation(message);
	
	if( !message ) return response.end('Message error');
	
	response.end(JSON.stringify({message: {client: 1}}));
	// await ClientWorker.clientConnection(message, response);
}

/*** exports [end] ***/

module.exports = httpConnectionHandler;