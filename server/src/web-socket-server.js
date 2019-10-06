'use strict';

const WebSocket = require('ws'),
	fetotEventEmitter = require('./fetot-event-emitter');

async function createWebSocketServer(httpServer) {
	let webSocketServer = new WebSocket.Server({server: httpServer});
	
	console.log('Web socket server run');
	
	webSocketServer.on('connection', (socket) => {
		socket
			.on('message', (message) => {
				fetotEventEmitter.emit('ws-message', message, socket)
			})
			.on('close', (event) => {
				console.log(event);
				// socket.close(1000, 'event.reason')
			});
	})
}

module.exports = createWebSocketServer;