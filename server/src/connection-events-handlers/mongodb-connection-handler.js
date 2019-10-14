'use strict';

/*** exports [begin] ***/

async function mongodbConnectionHandler(mongoClient) {
	let MongodbWorker = require('../workers/mongodb-worker');
	MongodbWorker.mongoClient = mongoClient;
}

/*** exports [end] ***/

module.exports = mongodbConnectionHandler;