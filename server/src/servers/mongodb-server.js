'use strict';

/*** imports [begin] ***/

const {MongoClient} = require('mongodb'),
	{connectionEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** init [begin] ***/

const	mongodbUrl = 'mongodb://localhost:27017',
	mongodbOptions = {useNewUrlParser: true, useUnifiedTopology: true};

/*** init [end] ***/
/*** exports [begin] ***/

async function createMongodbServer() {
	let mongoClient = new MongoClient(mongodbUrl, mongodbOptions);
	
	return mongoClient.connect((err, client) => {
		if( err ) return Promise.reject(err);
		connectionEventEmitter.emit('mongodb-connection', client);
	})
}

/*** exports [end] ***/

module.exports = createMongodbServer;