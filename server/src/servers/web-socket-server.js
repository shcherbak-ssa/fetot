'use strict';

/*** imports [begin] ***/

const WebSocket = require('ws'),
	{messageEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function createWebSocketServer(httpServer) {
	let webSocketServer = new WebSocket.Server({server: httpServer});
	
	webSocketServer.on('connection', (socket) => {
		socket
			.on('message', (message) => {
				messageEventEmitter.emit('web-socket-message', message, socket)
			})
			.on('close', (event) => {
				console.log(event);
			});
	})
}

/*** exports [end] ***/

module.exports = createWebSocketServer;