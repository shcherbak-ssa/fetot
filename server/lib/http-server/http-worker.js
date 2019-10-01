'use strict';

const fetotEventEmitter = require('../fetot-event-emitter'),

	requestParse = require('./src/request-parse');

class HttpWorker {
	constructor(request, response) {
		this.config = {};
		this.request = request;
		this.response = response;
	}
	
	/*** static properties and methods ***/
	static server = {};
	static responseConfig = {};
	static clients = new Map();
	
	static async run() {
		HttpWorker.server.on('request', (request, response) => {
			switch( request.method ) {
				case 'GET':
			}
			let httpWorker = new HttpWorker(request, response);
			fetotEventEmitter.emit('http-request', httpWorker);
		})
	}
	
	/*** work methods ***/
	async start() {
		switch( this.request.method ) {
			case 'GET':
				await this.parseGETRequest();
				break;
			case 'POST':
				await this.parsePOSTRequest();
				break;
			default:
				this.response.end();
		}
	}
	async parseGETRequest() {
		try {
			let {type, response} = await requestParse.get(this.request);
			await this.sendResponse(type, response);
		} catch( err ) {
			if( typeof err === 'string' ) return await this.sendResponse('error', err);
			console.log( err );
		}
	}
	async parsePOSTRequest() {
	
	}
	
	async sendResponse(type, response) {
		switch( type ) {
			case 'file':
			case 'error':
				// response = HttpWorker.responseConfig[response];
				this.response.end(response);
				break;
			default:
				this.response.end('Hello, world');
		}
	}
}

module.exports = HttpWorker;