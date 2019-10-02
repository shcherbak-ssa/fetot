'use strict';

const fetotEventEmitter = require('../fetot-event-emitter'),
	getRequestParse = require('./src/get-request-parse');

class HttpWorker {
	constructor(request, response) {
		this.config = {};
		this.request = request;
		this.response = response;
	}
	
	/*** static properties and methods ***/
	static server = {};
	static clients = new Map();
	
	static async run() {
		HttpWorker.server.on('request', async (request, response) => {
			switch( request.method ) {
				case 'GET':
					return await getRequestParse(request, response);
				case 'POST':
					let httpWorker = new HttpWorker(request, response);
					return fetotEventEmitter.emit('http-post-request', httpWorker);
				default:
					response.end('Oops :)')
			}
		})
	}
	
	/*** work methods ***/
	async parseRequest() {
	
	}
	
	async sendResponse(type, options) {
	
	}
}

module.exports = HttpWorker;