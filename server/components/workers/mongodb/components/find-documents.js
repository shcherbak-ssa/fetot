'use strict';

/*** exports [begin] ***/

const findDocuments = {
	async findOneDocument(query) {
		return await this.collection.findOne(query);
	},
	async findManyDocument(query, options) {
		let cursor = await this.collection.find(query);
		return await cursor.toArray();
	}
};

/*** exports [end] ***/

module.exports = findDocuments;