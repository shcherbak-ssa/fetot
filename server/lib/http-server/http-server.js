'use strict';

const http = require('http'),
	server = http.createServer(),

	HttpWorker = require('./http-worker');

async function runHttpServer(port, hostname) {
	HttpWorker.httpServer = server;
	return server.listen(port, hostname, () => HttpWorker)
}

module.exports = runHttpServer;