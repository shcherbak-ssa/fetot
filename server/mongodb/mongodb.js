'use strict';

const runMongodProcess = require('./mongod-process');

const {MongoClient} = require('mongodb'),
	mongoUrl = 'mongodb://localhost:27017',
	mongoOptions = { useNewUrlParser: true };

async function runMongodbClient() {
	let mongoClient = new MongoClient(mongoUrl, mongoOptions);
	
	runMongodProcess();
	
	return mongoClient.connect( async (err, client) => {
		return err ? Promise.reject(err) : client;
	})
}

module.exports = runMongodbClient;