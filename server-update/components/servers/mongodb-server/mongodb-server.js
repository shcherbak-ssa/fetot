'use strict';

/*** imports [begin] ***/

const {MongoClient} = require('mongodb'),
	mongodbOptions = require('./mongodb-options'),
	{serverEvents} = require('../../server-events');

/*** imports [end] ***/
/*** exports [begin] ***/

async function initMongodbServer() {
	let mongoClient = new MongoClient(mongodbOptions.url, mongodbOptions.options);
	
	return mongoClient.connect((err, client) => {
		if( err ) return Promise.reject(err);
		serverEvents.emit('mongodb-connection', client);
	})
}

/*** exports [end] ***/

module.exports = initMongodbServer;