'use strict';

const WebSocket = require('ws'),
	{messageEventEmitter} = require('../server-events-emitters');

/*** exports [begin] ***/

async function createWebSocketServer(httpServer) {
	let webSocketServer = new WebSocket.Server({server: httpServer});
	
	webSocketServer.on('connection', (socket) => {
		socket
			.on('message', (message) => {
				messageEventEmitter.emit('message-ws-request', message, socket)
			})
			.on('close', (event) => {
				console.log(event);
				// socket.close(1000, 'event.reason')
			});
	})
}

/*** exports [end] ***/

module.exports = createWebSocketServer;