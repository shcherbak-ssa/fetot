'use strict';

class WebSocketWorker {
	constructor(socket) {
		this.socket = socket;
		this.clientID = '';
	}
	
	/*** static properties and methods ***/
	static outputMessageTemplate = { type: '', message: {} };
	static webSocket = {};
	static sockets = new Map();
	
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
	
	async setClientID(id) {
		this.clientID = id;
	}
	async sendMessage(message) {
		let sendMessage = Object.assign(WebSocketWorker.outputMessageTemplate, message);
		sendMessage = JSON.stringify(sendMessage);
		
		this.socket.send(sendMessage);
	}
	async close(reason) {
		this.socket.close(1000, reason);
		this.removeSocket();
	}
	removeSocket() {
		WebSocketWorker.sockets.delete(this.clientID);
	}
}

module.exports = WebSocketWorker;