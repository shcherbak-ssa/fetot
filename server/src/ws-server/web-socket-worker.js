'use strict';

class WebSocketWorker {
	constructor(socket) {
		this.socket = socket;
		this.socketID = '';
	}
	
	/*** static properties and methods ***/
	static webSocket = {};
	static sockets = new Map();
	
	static async init(websocket) {
		WebSocketWorker.webSocket = websocket;
		return WebSocketWorker;
	}
	static async start(fetotEventEmitter) {
		WebSocketWorker.webSocket.on('connection', (socket) => {
			const webSocketWorker = new WebSocketWorker(socket);
			fetotEventEmitter.emit('connection', webSocketWorker)
		})
	}
	
	/*** work methods ***/
	async start(fetotEventEmitter) {
		this.socket.on('message', (message) => {
			fetotEventEmitter.emit('message', message, this);
		});
		this.socket.on('close', (event) => {
			console.log(event);
			this.removeSocket();
		})
	}
	
	setSocketID(id) {
		this.socketID = id;
	}
	async sendMessage(message) {
		message = JSON.stringify(message);
		this.socket.send(message);
	}
	async close(reason) {
		this.socket.close(1000, reason);
		this.removeSocket();
	}
	removeSocket() {
		WebSocketWorker.sockets.delete(this.socketID);
	}
}

module.exports = WebSocketWorker;