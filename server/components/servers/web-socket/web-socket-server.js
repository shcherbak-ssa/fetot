'use strict';

/*** imports [begin] ***/

const WebSocket = require('ws');
const messageHandler = require('./message-handler');

const getClientIPAddress = require('../../../lib/get-client-ip-address');

/*** imports [end] ***/
/*** exports [begin] ***/

async function initWebSocketServer(httpServer) {
	let webSocketServer = new WebSocket.Server({server: httpServer});
	
	webSocketServer.on('connection', (socket, request) => {
		let ip = getClientIPAddress(request);
		
		socket
			.on('message', async (message) => {
				await messageHandler({ip, message}, socket)
			})
			.on('close', (event) => {
				console.log(event);
			});
	})
}

/*** exports [end] ***/

module.exports = initWebSocketServer;