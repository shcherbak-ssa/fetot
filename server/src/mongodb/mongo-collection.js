'use strict';

class MongoCollection {
	constructor(collection) {
		this.collection = collection;
	}
	
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
				return err ? error(err) : success( documents[0] );
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