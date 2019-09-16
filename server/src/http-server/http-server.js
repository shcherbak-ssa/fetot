'use strict';

const http = require('http'),
	server = http.createServer(),
	httpRequest = require('./request'),
	sendFile = require('./send-file');

async function runHttpServer(port, hostname) {
	server.on('request', httpServerWorker);
	return server.listen(port, hostname, () => server)
}
async function httpServerWorker(request, response) {
	if( request.method !== 'GET' ) return response.end('Oops');
	
	let filename = null;
	try {
		filename = await httpRequest(request.url);
	} catch( err ) {
		if( typeof err === 'object' ) return err;
		filename = err;
	} finally {
		if( filename ) await sendFile(filename, response);
	}
}

module.exports = runHttpServer;