'use strict';

/*** exports [begin] ***/

async function connectionMongodbHandler(mongoClient) {
	let MongodbWorker = require('../../workers/mongodb');
	MongodbWorker.mongoClient = mongoClient;
}

/*** exports [end] ***/

module.exports = connectionMongodbHandler;