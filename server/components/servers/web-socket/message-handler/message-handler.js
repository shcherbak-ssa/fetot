'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('./parse-input-message');
const preparingOptions = require('./preparing-options');

const connectionWorker = require('../../../workers/connection');

/*** imports [end] ***/
/*** exports [begin] ***/

async function messageHandler({ip, message}, socket) {
	message = parseInputMessage(message);
	if( !message ) return socket.close('invalid message');
	
	let options = await preparingOptions(ip, message, socket);
	await connectionWorker.connectionHandler(options);
}

/*** exports [end] ***/

module.exports = messageHandler;