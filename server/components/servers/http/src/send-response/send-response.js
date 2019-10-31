'use strict';

/*** imports [begin] ***/

const sendFile = require('./src/send-file'),
	sendError = require('./src/send-error'),
	sendMessage = require('./src/send-message');

/*** imports [end] ***/
/*** exports [begin] ***/

async function sendResponse(options, response) {
	switch( true ) {
		case 'error' in options:
			await sendError[options.error](response);
			break;
		case 'message' in options:
			await sendMessage(options.message, response);
			break;
		default:
			await sendFile(options, response);
	}
}

/*** exports [end] ***/

module.exports = sendResponse;