'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('../../lib/parse-input-message'),
	ClientWorker = require('../workers/client-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

async function httpConnectionHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
	if( !message ) return response.end('Message error');
	
	await ClientWorker.clientConnection(message, response);
}

/*** exports [end] ***/

module.exports = httpConnectionHandler;