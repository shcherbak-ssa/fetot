'use strict';

const parseInputMessage = require('../../lib/parse-input-message'),
	messageValidation = require('../../lib/message-validation');

/*** exports [begin] ***/

async function httpConnectionHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
	
	message = await messageValidation(message);
	if( !message ) response.end('Message error');
}

/*** exports [end] ***/

module.exports = httpConnectionHandler;