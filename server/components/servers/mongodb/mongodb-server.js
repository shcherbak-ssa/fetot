'use strict';

/*** imports [begin] ***/

const {MongoClient} = require('mongodb');
const {url, options} = require('./mongodb-options');

const MongodbService = require('../../services/mongodb');

/*** imports [end] ***/
/*** exports [begin] ***/

async function initMongodbServer() {
	let mongoClient = new MongoClient(url, options);
	
	return mongoClient.connect((err, client) => {
		if( err ) return Promise.reject(err);
		MongodbService.mongoClient = client;
	})
}

/*** exports [end] ***/

module.exports = initMongodbServer;