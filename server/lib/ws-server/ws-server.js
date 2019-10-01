'use strict';

const WebSocket = require('ws'),
	WSWorker = require('./ws-worker');

async function runWebSocketServer(httpServer) {
	WSWorker.webSocket = new WebSocket.Server({server: httpServer});
	return WSWorker;
}

module.exports = runWebSocketServer;