'use strict';

const runHttpServer = require('./http-server');

let port = 8080, host = 'localhost';

runHttpServer(port, host)
	.then(() => {
		console.log(`Test server run at http://${host}:${port}/index.html`)
	});