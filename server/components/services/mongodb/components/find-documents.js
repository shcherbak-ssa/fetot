'use strict';

/*** exports [begin] ***/

const findDocuments = {
	async findOneDocument(query) {
		return await this.collection.findOne(query);
	},
	async findManyDocuments(query, options) {
		const cursor = await this.collection.find(query);
		return await cursor.toArray();
	},
	async findAllDocuments() {
		const cursor = await this.collection.find();
		return await cursor.toArray();
	}
};

/*** exports [end] ***/

module.exports = findDocuments;