'use strict';

const modules = require('./modules'),
	 httpServer = require('./src/http-server')(modules);

let port = 8080, host = 'localhost';

httpServer(port, host)
	.then(() => {
		console.log(`Test server run at http://${host}:${port}/index.html`)
	});