'use strict';

const parseInputMessage = require('../../lib/parse-input-message'),
	messageValidation = require('../../lib/message-validation'),
	ClientWorker = require('../workers/client-worker');

/*** exports [begin] ***/

async function httpConnectionHandler(request, response) {
	console.log('connection init');
	let message = await parseInputMessage({type: 'post-message', request});
	console.log(message);
	message = await messageValidation(message);
	
	if( !message ) return response.end('Message error');
	
	console.log('connection end');
	response.end(JSON.stringify({message: {client: 1}}));
	// await ClientWorker.clientConnection(message, response);
}

/*** exports [end] ***/

module.exports = httpConnectionHandler;