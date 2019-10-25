'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('./parse-input-message'),
	preparingOptions = require('./preparing-options'),

	{serverEvents} = require('../../../server-events');

/*** imports [end] ***/
/*** exports [begin] ***/

async function messageHandler({ip, message}, socket) {
	message = parseInputMessage(message);
	if( !message ) return socket.close('invalid message');
	
	let options = await preparingOptions(ip, message, socket);
	serverEvents.emit('connection', options);
}

/*** exports [end] ***/

module.exports = messageHandler;