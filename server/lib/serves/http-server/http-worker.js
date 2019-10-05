'use strict';

const fetotEventEmitter = require('../../fetot-event-emitter'),
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
						try {
							let postRequestWorker = await PostRequestWorker.parseRequest(request, response);
							return fetotEventEmitter.emit('http-post-request', postRequestWorker);
						} catch( err ) {
							return Promise.reject(err)
						}
					default:
						response.end('Oops :)')
				}
			})
		}
	}
}

module.exports = httpWorker;