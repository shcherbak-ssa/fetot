'use strict';

// const runMongodProcess = require('./mongod-process');

const {MongoClient} = require('mongodb'),
	mongoUrl = 'mongodb://localhost:27017',
	mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true },
	
	MongoWorker = require('./mongodb-worker');

async function runMongodbServer() {
	try {
		let mongoClient = new MongoClient(mongoUrl, mongoOptions); // await runMongodProcess();
		return await mongoClientConnect(mongoClient);
	} catch( err ) {
		return Promise.reject(err);
	}
}
async function mongoClientConnect(mongoClient) {
	return new Promise((success, error) => {
		return mongoClient.connect((err, client) => {
			if( err ) return error(err);
			
			MongoWorker.mongoClient = client;
			return success( MongoWorker )
		})
	})
}

module.exports = runMongodbServer;