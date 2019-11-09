'use strict';

/*** imports [begin] ***/

const insertDocuments = require('./components/insert-documents');
const findDocuments = require('./components/find-documents');
const deleteDocuments = require('./components/delete-documents');
const updateDocuments = require('./components/update-documents');

/*** imports [end] ***/
/*** exports [begin] ***/

class MongodbService {
	constructor(collection) {
		this.collection = collection;
	}
	
	static mongoClient = {};
	static createDatabase(db) {
		db += '';
		
		return {
			collection(collection) {
				return MongodbService.createCollection({db, collection});
			}
		}
	}
	static createCollection({db, collection}) {
		let mongoCollection = MongodbService.mongoClient.db(db).collection(collection);
		return new MongodbService(mongoCollection);
	}
}

Object.assign(
	MongodbService.prototype,
	insertDocuments,
	findDocuments,
	deleteDocuments,
	updateDocuments
);

/*** exports [end] ***/

module.exports = MongodbService;