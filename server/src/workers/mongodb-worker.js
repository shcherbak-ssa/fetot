'use strict';

/*** exports [begin] ***/

class MongodbWorker {
	constructor(collection) {
		this.collection = collection;
	}
	
	/*** static properties and methods ***/
	static mongoClient = {};
	static createCollection({db, collection}) {
		let mongoCollection = MongodbWorker.mongoClient.db(db).collection(collection);
		return new MongodbWorker(mongoCollection);
	}
	
	/*** work methods ***/
	async insertDocument(object) {
		return new Promise((success, error) => {
			return this.collection.insertOne(object, (err, result) => {
				return err ? error(err) : success( result.ops[0] )
			})
		})
	}
	async findDocument(filter) {
		return new Promise((success, error) => {
			return this.collection.find(filter).toArray((err, documents) => {
				return err ? error(err) : success( documents[0] )
			})
		})
	}
	async updateDocument() {
		return new Promise((success, error) => {
		
		})
	}
	async deleteDocument(docID) {
		return new Promise((success, error) => {
			return this.collection.deleteOne(docID, (err, result) => {
				return err ? error(err) : success(result);
			})
		})
	}
}

/*** exports [end] ***/

module.exports = MongodbWorker;