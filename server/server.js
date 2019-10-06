'use strict';

const fetotEventEmitter = require('./src/fetot-event-emitter'),
	
	createHttpServer = require('./src/http-server'),
	createMongodbClient = require('./src/mongodb-server'),
	createWebSocketServer = require('./src/web-socket-server');

runFetotServer()
	.then(() => {
		console.log('Full server run')
	})
	.catch((err) => {
		console.log(err);
		process.exit(0);
	});

async function runFetotServer() {
	let port = 8080, host = 'localhost';
	
	try {
		let httpServer = await createHttpServer(port, host);
		
		await createWebSocketServer(httpServer);
		await createMongodbClient();
		
		fetotEventEmitter
			.on('mongodb-connection', (mongoClient) => {

			})
			.on('http-get-request', async (request, response) => {
				response.end('http-get-request');
			})
			.on('http-post-request', async (request, response) => {
		
			})
			.on('ws-message', async (message, socket) => {
			
			});
		
		return Promise.resolve();
	} catch( err ) {
		return Promise.reject(err);
	}
}