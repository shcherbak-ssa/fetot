'use strict';

const http = require('http'),
	server = http.createServer(),
	
	fetotEventEmitter = require('./fetot-event-emitter');

async function createHttpServer(port, hostname) {
	server.on('request', (request, response) => {
		switch( request.method ) {
			case 'GET':
				let {url, headers} = request;
				fetotEventEmitter.emit('http-get-request', {url, headers}, response);
				break;
			case 'POST':
				fetotEventEmitter.emit('http-post-request', request, response);
				break;
			default:
				response.end('Oops :)')
		}
	});
	server.listen(port, hostname, () => {
		console.log('http server run')
	});
	
	return server;
}

module.exports = createHttpServer;