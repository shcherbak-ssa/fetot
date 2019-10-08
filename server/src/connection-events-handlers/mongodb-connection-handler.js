'use strict';

/*** exports [begin] ***/

async function mongodbConnectionHandler(mongoClient) {
	let MongodbWorker = require('../workers/mongodb-worker'),
		ClientWorker = require('../workers/client-worker');
	
	MongodbWorker.mongoClient  = mongoClient;
	ClientWorker.MongodbWorker = MongodbWorker;
}

/*** exports [end] ***/

module.exports = mongodbConnectionHandler;