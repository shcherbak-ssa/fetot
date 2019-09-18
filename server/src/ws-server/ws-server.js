'use strict';

const webSocket = require('ws'),
	WebSocketWorker = require('./web-socket-worker');

async function webSocketServer(httpServer) {
	const websocket = new webSocket.Server({ server: httpServer });
	return WebSocketWorker.init(websocket);
}

module.exports = webSocketServer;