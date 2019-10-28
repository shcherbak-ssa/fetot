'use strict';

/*** exports [begin] ***/

async function sendResponse(message, socket) {
	socket.send(JSON.stringify(message));
}

/*** exports [end] ***/

module.exports = sendResponse;