'use strict';

const WebSocket = require('ws'),
	WebSocketWorker = require('./web-socket-worker');

async function webSocketServer(httpServer) {
	WebSocketWorker.webSocket = new WebSocket.Server({ server: httpServer });
	return WebSocketWorker;
}

module.exports = webSocketServer;