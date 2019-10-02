'use strict';

const fetotEventEmitter = require('../fetot-event-emitter'),
	getRequestParse = require('./src/get-request-parse'),
	PostRequestWorker = require('./src/post-request-worker');

function httpWorker(httpServer) {
	return {
		server: httpServer,
		async run() {
			httpServer.on('request', async (request, response) => {
				switch( request.method ) {
					case 'GET':
						return await getRequestParse(request, response);
					case 'POST':
						return fetotEventEmitter.emit('http-post-request', PostRequestWorker);
					default:
						response.end('Oops :)')
				}
			})
		}
	}
}

module.exports = httpWorker;