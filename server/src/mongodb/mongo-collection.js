'use strict';

class MongoCollection {
	constructor(collection) {
		this.collection = collection;
	}
	
	async insertDocument(object) {
		return new Promise((success, error) => {
			return this.collection.insertOne(object, (err, result) => {
				return err ? error(err) : success( result.ops )
			})
		})
	}
	async findDocument(filter) {
		return new Promise((success, error) => {
			return this.collection.find(filter).toArray((err, document) => {
				return err ? error(err) : success( document );
			})
		})
	}
	async updateDocument() {
	
	}
	async deleteDocument(docID) {
		return new Promise((success, error) => {
			return this.collection.deleteOne(docID, (err, result) => {
				return err ? error(err) : success(result);
			})
		})
	}
}

module.exports = MongoCollection;