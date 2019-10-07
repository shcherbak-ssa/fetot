'use strict';

const {MongoClient} = require('mongodb'),
	mongodbUrl = 'mongodb://localhost:27017',
	mongodbOptions = {useNewUrlParser: true, useUnifiedTopology: true},
	
	{connectionEventEmitter} = require('./server-events-emitters');

async function createMongodbServer() {
	let mongoClient = new MongoClient(mongodbUrl, mongodbOptions);
	
	return mongoClient.connect((err, client) => {
		if( err ) return Promise.reject(err);
		
		console.log('Mongodb server run');
		connectionEventEmitter.emit('connection-mongodb', client);
	})
}

module.exports = createMongodbServer;