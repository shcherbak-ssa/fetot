'use strict';

const http = require('http'),
	server = http.createServer(),
	httpRequest = require('./request'),
	sendFile = require('./send-file');

async function runHttpServer(port, hostname) {
	server.on('request', httpServerWorker);
	return server.listen(port, hostname, () => {
		return Promise.resolve(server)
	})
}
async function httpServerWorker(request, response) {
	if( request.method !== 'GET' ) return response.end('Oops');
	
	let filename = null;
	try {
		if( request.headers.connection.toLowerCase() === 'upgrade' &&
			  request.headers.upgrade.toLowerCase() === 'websocket' ) {
			console.log('hello');
			return response.end();
		}
		
		filename = await httpRequest(request.url);
		// await sendFile(filename, response);
	} catch( err ) {
		if( typeof err === 'object' ) return console.log(err);
		filename = err;
	} finally {
		if( filename ) await sendFile(filename, response);
	}
}

module.exports = runHttpServer;