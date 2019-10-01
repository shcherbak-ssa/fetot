'use strict';

const fetotEventEmitter = require('../fetot-event-emitter');

class HttpWorker {
	constructor(request, response) {
		this.request = request;
		this.response = response;
	}
	
	/*** static properties and methods ***/
	static server = {};
	static async run() {
		HttpWorker.server.on('request', (request, response) => {
			let httpWorker = new HttpWorker(request, response);
			fetotEventEmitter.emit('http-request', httpWorker);
		})
	}
	
	/*** work methods ***/
	async start() {
		console.log('request');
		this.sendResponse();
	}
	sendResponse(type, response) {
		this.response.end('Hello, world');
	}
}

module.exports = HttpWorker;