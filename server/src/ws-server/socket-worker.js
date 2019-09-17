'use strict';

class SocketWorker {
	constructor(id, socket, websocketWorker) {
		this.id = id;
		this.socket = socket;
		
		this.websocketWorker = websocketWorker;
	}
	
	init() {
		this.socket.on('close', (event) => {
			console.log(event);
			this.removeSocket();
		});
		return this;
	}
	
	setSocketID(id) {
		this.id = id;
		this.websocketWorker.sockets.set(id, this);
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
		this.websocketWorker.delete(this.id);
	}
}

module.exports = SocketWorker;