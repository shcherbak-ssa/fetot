'use strict';

const fetotEventEmitter = require('./lib/fetot-event-emitter'),
	
	createHttpServer = require('./lib/http-server'),
	createWSServer = require('./lib/ws-server'),
	createMongodbClient = require('./lib/mongodb-server');

runFetotServer()
	.then(() => {
		console.log('Server run')
	})
	.catch((err) => {
		console.log(err);
		process.exit(0);
	});

async function runFetotServer() {
	const port = 8080,
		host = 'localhost';
	
	try {
		const httpServer = await createHttpServer(port, host),
			WSWorker = await createWSServer(httpServer.server),
			mongodbWorker = await createMongodbClient();
		
		await httpServer.run();
		await WSWorker.run();
		
		fetotEventEmitter.on('http-post-request', async (PostRequestWorker) => {
		
		});
		fetotEventEmitter.on('ws-connection', async (wsWorker) => {
			await wsWorker.start(fetotEventEmitter)
		});
		fetotEventEmitter.on('ws-message', async (message, wsWorker) => {
			console.log('ws-message')
			// await parseInputMessage({message, socketWorker});
		});
		
		return Promise.resolve();
	} catch( err ) {
		return Promise.reject(err);
	}
}