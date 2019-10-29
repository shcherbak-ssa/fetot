'use strict';

/*** imports [begin] ***/

const sendFile = require('./send-file'),
	sendError = require('./send-error'),
	sendMessage = require('./send-message');

/*** imports [end] ***/
/*** exports [begin] ***/

async function sendResponse(options, response) {
	if( options === null ) return response.end();
	
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