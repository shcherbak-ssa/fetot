'use strict';

/*** imports [begin] ***/

const http = require('http');
const server = http.createServer();

const requestHandler = require('./src/request-handler');

/*** imports [end] ***/
/*** exports [begin] ***/

async function initHttpServer(port, hostname) {
	server
		.on('request', async (req, res) => {
			await requestHandler(req, res);
		})
		.listen(port, hostname, () => {
			console.log('server run')
		});
	
	return server;
}

/*** exports [end] ***/

module.exports = initHttpServer;