'use strict';

/*** exports [begin] ***/

async function connectionMongodbHandler(mongoClient) {
	let MongodbWorker = require('../../workers/mongodb-worker');
	MongodbWorker.mongoClient = mongoClient;
}

/*** exports [end] ***/

module.exports = connectionMongodbHandler;