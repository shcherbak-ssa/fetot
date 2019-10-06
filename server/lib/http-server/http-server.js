'use strict';

const http = require('http'),
	server = http.createServer(),
	
	httpWorker = require('./http-worker');

async function createHttpServer(port, hostname) {
	server.listen(port, hostname, () => console.log('http server run'));
	return httpWorker(server);
}

module.exports = createHttpServer;