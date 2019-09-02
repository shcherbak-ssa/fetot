'use strict';

const http = require('http');

let httpServer = http.createServer();

httpServer
	.on('request', httpServerWorker)
	.listen(8080, 'localhost', () => {
	
	});

function httpServerWorker(request, response) {

}