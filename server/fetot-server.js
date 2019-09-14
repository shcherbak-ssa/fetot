'use strict';

const runHttpServer = require('./http-server'),
	 runMongodbClient = require('./mongodb');

runFetotServer().catch((err) => {
	console.log(err);
	process.exit(0);
});

async function runFetotServer() {
	let port = 8080, host = 'localhost';
	
	try {
		const httpServer = await runHttpServer(port, host);
		console.log(`Test server run at http://${host}:${port}`);
		
		// const mongoClient = await runMongodbClient();
		// console.log('mongo run');
		// mongoClient.close();
	} catch( err ) {
		return Promise.reject(err);
	}
}