'use strict';

/*** imports [begin] ***/

const initHttpServer = require('./components/servers/http');
const initMongodbServer = require('./components/servers/mongodb');

const {initServerEvents} = require('./components/server-events');

/*** imports [end] ***/
/*** init [begin] ***/

runFetotServer(8080, 'localhost')
	.then(() => {
		console.log('Full server run')
	})
	.catch((err) => {
		console.log(err);
		process.exit(0);
	});

/*** init [end] ***/
/*** src [begin] ***/

async function runFetotServer(port, hostname) {
	try {
		// let httpServer = await initHttpServer(port, hostname);
		await initHttpServer(port, hostname);
		await initMongodbServer();
		
		await initServerEvents();
		
		return Promise.resolve();
	} catch( err ) {
		return Promise.reject(err);
	}
}

/*** src [end] ***/