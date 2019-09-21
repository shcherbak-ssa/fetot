'use strict';

const runFetotApplication = require('./fetot'),
	
	runHttpServer = require('./src/http-server'),
	runWebSocketServer = require('./src/ws-server'),
	runMongodbClient = require('./src/mongodb');

runFetotServer().catch((err) => {
	console.log(err);
	process.exit(0);
});

async function runFetotServer() {
	let port = 8080,
		host = 'localhost';
	
	try {
		const httpServer = await runHttpServer(port, host),
			WebSocketWorker = await runWebSocketServer(httpServer),
			mongoWorker = await runMongodbClient();
		
		await runFetotApplication(WebSocketWorker, mongoWorker);
		console.log(`Application run`);
	} catch( err ) {
		return Promise.reject(err);
	}
}