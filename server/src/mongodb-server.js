'use strict';

const {MongoClient} = require('mongodb'),
	mongoUrl = 'mongodb://localhost:27017',
	mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true},
	
	fetotEventEmitter = require('./fetot-event-emitter');

async function createMongodbServer() {
	let mongoClient = new MongoClient(mongoUrl, mongoOptions);
	
	return mongoClient.connect((err, client) => {
		if( err ) return Promise.reject(err);
		
		console.log('Mongodb server run');
		fetotEventEmitter.emit('mongodb-connection', client);
	})
}

module.exports = createMongodbServer;