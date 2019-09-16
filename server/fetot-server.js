'use strict';

const runHttpServer = require('./src/http-server'),
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
		const httpServer = await runHttpServer(port, host);
		const webSockerWorker = await runWebSocketServer(httpServer);
		// const mongoWorker = await runMongodbClient();
		
		console.log(`Server run`);
	} catch( err ) {
		return Promise.reject(err);
	}
}