'use strict';

const MongoCollection = require('./mongo-collection');

class MongoWorker {
	constructor(client) {
		this.client = client;
		this.databases = new Map();
	}
	
	async createDB(name) {
		let db = this.client.db(name);
		this.databases.set(name, db);
		
		return db;
	}
	createCollection(dbName, collectionName) {
		let collection = this.databases.get(dbName).collection(collectionName);
		return new MongoCollection(collection);
	}
	
	closeMongo() {
		this.client.close();
	}
}

module.exports = MongoWorker;