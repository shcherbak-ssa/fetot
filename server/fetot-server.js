'use strict';

const modules = require('./modules');
const httpServer = require('./src/http-server')(modules);

httpServer(8080, 'localhost')
	.then(() => {
		console.log('Test server run')
	});