'use strict';

/*** exports [begin] ***/

const insertDocuments = {
	async insertOneDocument(document) {
		let result = await this.collection.insertOne(document);
		return result.ops[0];
	},
	async insertManyDocuments(documents) {
		return await this.collection.insertMany(documents);
	}
};

/*** exports [end] ***/

module.exports = insertDocuments;