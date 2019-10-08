'use strict';

const http = require('http'),
	server = http.createServer(),
	
	{connectionEventEmitter, messageEventEmitter,
		responseEventEmitter} = require('../server-events-emitters');

/*** exports [begin] ***/

async function createHttpServer(port, hostname) {
	server
		.on('request', async (request, response) => {
			await requestParse(request, response);
		})
		.listen(port, hostname, () => {
			console.log('http server run')
		});
	
	return server;
}

/*** exports [end] ***/

async function requestParse(request, response) {
	switch( request.method ) {
		case 'GET':
			return await getRequestParse(request, response);
		case 'POST':
			return await postRequestParse(request, response);
		default:
			response.end('Oops :)')
	}
}
async function getRequestParse({url, headers}, response) {
	switch( true ) {
		case url === '/':
			return connectionEventEmitter.emit('http-root-request', headers, response);
		case /\/[a-z]+\.(js|css)/i.test(url):
			return connectionEventEmitter.emit('http-file-request', url, response);
		default:
			responseEventEmitter.emit('response-error-404', response);
	}
}
async function postRequestParse(request, response) {
	switch( request.url ) {
		case '/':
			return messageEventEmitter.emit('http-message', request, response);
		case 'connection':
			return connectionEventEmitter.emit('http-connection', request, response);
		default:
			response.end('Oops :)')
	}
}

module.exports = createHttpServer;