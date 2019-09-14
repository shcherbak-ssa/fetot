'use strict';

// const runMongodProcess = require('./mongod-process');

const {MongoClient} = require('mongodb'),
	mongoUrl = 'mongodb://localhost:27017',
	mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const runMongodbClient = async () => {
	try {
		let mongoClient = new MongoClient(mongoUrl, mongoOptions);
		
		// await runMongodProcess();
		return mongoClientConnect(mongoClient);
	} catch( err ) {
		return Promise.reject(err);
	}
};

function mongoClientConnect(mongoClient) {
	return new Promise((success, error) => {
		return mongoClient.connect((err, client) => {
			if( err ) {
				console.log('mongo client error');
				return error(err);
			}
			
			console.log('mongo client connect run');
			return success(client)
		})
	})
}

module.exports = runMongodbClient;