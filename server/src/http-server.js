'use strict';

const http = require('http'),
	server = http.createServer(),
	
	{connectionEventEmitter, messageEventEmitter} = require('./server-events-emitters');

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
			return connectionEventEmitter.emit('root-http-request', headers, response);
		case /\/[a-z]+\.(js|css)/i.test(url):
			return connectionEventEmitter.emit('file-http-request', url, response);
		default:
			response.end('Oops :)')
	}
}
async function postRequestParse(request, response) {
	switch( request.url ) {
		case '/':
			return messageEventEmitter.emit('message-http-request', request, response);
		case 'connection':
			return connectionEventEmitter.emit('connection-http-request', request, response);
		default:
			response.end('Oops :)')
	}
}

module.exports = createHttpServer;