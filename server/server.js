'use strict';

const createHttpServer = require('./src/servers/http-server'),
	createWebSocketServer = require('./src/servers/web-socket-server'),
	createMongodbClient = require('./src/servers/mongodb-server'),
	
	{setConnectionEventsHandlers, setMessageEventsHandlers,
		setClientEventsHandlers} = require('./src/set-events-handlers');

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
		
		await setConnectionEventsHandlers();
		await setMessageEventsHandlers();
		await setClientEventsHandlers();
		
		return Promise.resolve();
	} catch( err ) {
		return Promise.reject(err);
	}
}