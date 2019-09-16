'use strict';

const webSocket = require('ws'),
	WebSocketWorker = require('./web-socket-worker');

async function webSocketServer(httpServer) {
	const server = new webSocket.Server({ server: httpServer });
	
	return server.on('connection', (socket, request) => {
		return new WebSocketWorker(socket, request);
	})
}

module.exports = webSocketServer;