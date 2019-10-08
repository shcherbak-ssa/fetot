'use strict';

/*** exports [begin] ***/

async function responseWebSocketHandler(message, socket) {
	message = JSON.stringify(message);
	socket.send(message);
}

/*** exports [end] ***/

module.exports = responseWebSocketHandler;