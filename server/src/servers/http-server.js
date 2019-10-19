'use strict';

/*** imports [begin] ***/

const http = require('http'),
	server = http.createServer(),
	
	{connectionEventEmitter, messageEventEmitter,
	requestEventEmitter, responseEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function createHttpServer(port, hostname) {
	server
		.on('request', async (request, response) => {
			await requestParse(request, response);
		})
		.listen(port, hostname, () => {
			console.log('-----------------------')
		});
	
	return server;
}

/*** exports [end] ***/
/*** src [begin] ***/

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
			return requestEventEmitter.emit('request-root-http', headers, response);
		case /\/[-\w]+\.\w{1,5}/i.test(url):
			return requestEventEmitter.emit('request-file-http', url, response);
		default:
			responseEventEmitter.emit('response-error-404', response);
	}
}
async function postRequestParse(request, response) {
	switch( request.url ) {
		case '/':
			return messageEventEmitter.emit('message-http', request, response);
		case '/connection':
			return connectionEventEmitter.emit('connection-http', request, response);
		default:
			response.end('Oops :)')
	}
}

/*** src [end] ***/

module.exports = createHttpServer;