'use strict';

const SocketWorker = require('./socket-worker');

class WebSocketWorker {
	constructor(websocket) {
		this.websocket = websocket;
		this.sockets = new Map();
	}
	
	start(FetotUser) {
		this.websocket.on('connection', (socket) => {
			socket = new SocketWorker(socket, this.websocket);
			FetotUser.eventEmitter.emit('connection', socket.init())
		})
	}
}

module.exports = WebSocketWorker;