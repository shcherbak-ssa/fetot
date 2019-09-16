'use strict';

const webSocket = require('ws');
	// WebSocketWorker = require('./web-socket-worker');

async function webSocketServer(httpServer) {
	const server = new webSocket.Server({ server: httpServer });
	
	return server.on('connection', (socket, request) => {
		// return new WebSocketWorker(socket, request);
		socket.on('message', (data) => {
			JSON.parse(data);
			
			console.log(data);
			socket.send(JSON.stringify({type: 'fetot-sing-in', message: { error: false }}))
		})
	})
}

module.exports = webSocketServer;