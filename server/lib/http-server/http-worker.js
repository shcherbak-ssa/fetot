'use strict';

const fetotEventEmitter = require('../fetot-event-emitter');

class HttpWorker {
	constructor(request, response) {
		this.request = request;
		this.response = response;
	}
	
	/*** static properties and methods ***/
	static httpServer = {};
	static async run() {
		HttpWorker.httpServer.on('request', (request, response) => {
			let httpWorker = new HttpWorker(request, response);
			fetotEventEmitter.emit('http-request', httpWorker);
		})
	}
	
	/*** work methods ***/
	async start() {
		console.log('request')
	}
	sendResponse(type, response) {
		this.response.end('Hello, world');
	}
}

module.exports = HttpWorker;