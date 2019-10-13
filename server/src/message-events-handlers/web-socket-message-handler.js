'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('../../lib/parse-input-message');

/*** imports [end] ***/
/*** imports [end] ***/

async function webSocketMessageHandler(message, socket) {
	message = await parseInputMessage({type: 'ws-message', message});
}

/*** imports [end] ***/

module.exports = webSocketMessageHandler;