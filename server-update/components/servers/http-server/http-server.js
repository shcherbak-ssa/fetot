'use strict';

/*** imports [begin] ***/

const http = require('http'),
	server = http.createServer(),

	requestHandler = require('./request-handler');

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