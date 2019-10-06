'use strict';

const fetotEventEmitter = require('./src/fetot-event-emitter'),
	createHttpServer = require('./src/http-server'),
	createMongodbClient = require('./src/mongodb-server'),
	createWebSocketServer = require('./src/web-socket-server'),

	MongodbWorker = require('./workers/mongodb-worker'),
	ClientWorker = require('./workers/client-worker');

runFetotServer(8080, 'localhost')
	.then(() => {
		console.log('Full server run')
	})
	.catch((err) => {
		console.log(err);
		process.exit(0);
	});

async function runFetotServer(port, host) {
	try {
		let httpServer = await createHttpServer(port, host);
		
		await createWebSocketServer(httpServer);
		await createMongodbClient();
		
		fetotEventEmitter
			.on('mongodb-connection', (mongoClient) => {
				MongodbWorker.mongoClient = mongoClient;
				ClientWorker.mongodbWorker = MongodbWorker;
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