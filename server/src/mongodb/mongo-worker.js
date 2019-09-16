'use strict';

const MongoCollection = require('./mongo-collection');

class MongoWorker {
	constructor(client) {
		this.client = client;
		this.databases = new Map();
	}
	
	async createDB(dbname) {
		let db = this.client.db(dbname);
		this.databases.set(dbname, db);
		
		return db;
	}
	async createCollection(dbname, collectionName) {
		let collection = this.databases.get(dbname).collection(collectionName);
		return new MongoCollection(collection);
	}
	
	closeMongo() {
		this.client.close();
	}
}

module.exports = MongoWorker;