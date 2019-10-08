'use strict';

const webSocketOutputMessageTemplate = {type: '', content: {}};

/*** exports [begin] ***/

async function responseWebSocketHandler(message, socket) {
	message = Object.assign(webSocketOutputMessageTemplate, message);
	message = JSON.stringify(message);
	
	socket.send(message);
}

/*** exports [end] ***/

module.exports = responseWebSocketHandler;