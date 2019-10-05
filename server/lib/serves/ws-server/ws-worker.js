'use strict';

const fetotEventEmitter = require('../../fetot-event-emitter');

class WSWorker {
	constructor(socket) {
		this.socket = socket;
		this.clientID = '';
	}
	
	/*** static properties and methods ***/
	static outputMessageTemplate = { type: '', message: {} };
	static webSocket = {};
	static sockets = new Map();
	
	static async run() {
		WSWorker.webSocket.on('connection', (socket) => {
			const wsWorker = new WSWorker(socket);
			fetotEventEmitter.emit('ws-connection', wsWorker)
		})
	}
	
	/*** work methods ***/
	async start() {
		this.socket.on('message', (message) => {
			fetotEventEmitter.emit('ws-message', message, this);
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