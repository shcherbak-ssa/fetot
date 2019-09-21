'use strict';

class MongoCollection {
	constructor(collection) {
		this.collection = collection;
	}
	
	async addOneDocument(object) {
		return new Promise((success, error) => {
			return this.collection.insertOne(object, (err, result) => {
				return err ? error(err) : success( result[0] )
			})
		})
	}
}

module.exports = MongoCollection;