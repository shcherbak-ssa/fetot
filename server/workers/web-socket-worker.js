'use strict';

const outputMessageTemplate = {type: '', message: {}};

class WebSocketWorker {
	constructor(socket) {
		this.socket = socket;
	}
	
	async sendMessage(message) {
		let sendMessage = Object.assign(outputMessageTemplate, message);
		sendMessage = JSON.stringify(sendMessage);
		
		this.socket.send(sendMessage);
	}
}

module.exports = WebSocketWorker;