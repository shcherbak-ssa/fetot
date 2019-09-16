'use strict';

const mongoSchema = require('./mongo-schema');

class MongoCollection {
	constructor(collection) {
		this.collection = collection;
		this.schema = {};
	}
	
	async createShema(object) {
		this.schema = mongoSchema(object);
	}
	async addOneObject(object) {
		return new Promise((success, error) => {
			return this.collection.insertOne(object, (err, result) => {
				return err ? error(err) : success( result[0] )
			})
		})
	}
}

module.exports = MongoCollection;