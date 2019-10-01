'use strict';

const http = require('http'),
	server = http.createServer(),
	
	HttpWorker = require('./http-worker');

async function createHttpServer(port, hostname) {
	server.listen(port, hostname, () => console.log('http server run'));
	
	HttpWorker.server = server;
	return HttpWorker
}

module.exports = createHttpServer;