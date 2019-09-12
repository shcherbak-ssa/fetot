'use strict';

const runHttpServer = require('./http-server'),
	runMongodbClient  = require('./mongodb');

let port = 8080, host = 'localhost';

runHttpServer(port, host)
	.then(() => {
		console.log(`Test server run at http://${host}:${port}`);
		return runMongodbClient();
	})
	.then((mongoClient) => {
		console.log('mongo run');
		mongoClient.close();
	})
	.catch((err) => {
		console.log(err);
	});