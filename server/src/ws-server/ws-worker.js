'use strict';

class WSWorker {
	constructor(socket) {
		this.socket = socket;
		this.clientID = '';
	}
	
	/*** static properties and methods ***/
	static outputMessageTemplate = { type: '', message: {} };
	static webSocket = {};
	static sockets = new Map();
	
	static async start(fetotEventEmitter) {
		WSWorker.webSocket.on('connection', (socket) => {
			const webSocketWorker = new WSWorker(socket);
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
		let sendMessage = Object.assign(WSWorker.outputMessageTemplate, message);
		sendMessage = JSON.stringify(sendMessage);
		
		this.socket.send(sendMessage);
	}
	async close(reason) {
		this.socket.close(1000, reason);
		this.removeSocket();
	}
	removeSocket() {
		WSWorker.sockets.delete(this.clientID);
	}
}

module.exports = WSWorker;