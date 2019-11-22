'use strict';

/*** exports [begin] ***/

const updateDocuments = {
	async updateOneDocument(updated, updateObject) {
		const result = await this.collection.updateOne(updated, updateObject);
		return result.result;
	},
	async updateManyDocuments() {
	
	}
};

/*** exports [end] ***/

module.exports = updateDocuments;