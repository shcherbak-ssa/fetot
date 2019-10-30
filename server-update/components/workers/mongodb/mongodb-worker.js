'use strict';

/*** imports [begin] ***/

const insertDocuments = require('./components/insert-documents');
const findDocuments = require('./components/find-documents');
const deleteDocuments = require('./components/delete-documents');
const updateDocuments = require('./components/update-documents');

/*** imports [end] ***/
/*** exports [begin] ***/

class MongodbWorker {
	constructor(collection) {
		this.collection = collection;
	}
	
	static mongoClient = {};
	static createCollection({db, collection}) {
		let mongoCollection = MongodbWorker.mongoClient.db(db).collection(collection);
		return new MongodbWorker(mongoCollection);
	}
}

Object.assign(
	MongodbWorker.prototype,
	insertDocuments,
	findDocuments,
	deleteDocuments,
	updateDocuments
);

/*** exports [end] ***/

module.exports = MongodbWorker;