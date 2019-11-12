'use strict';

/*** exports [begin] ***/

const updateDocuments = {
	async updateOneDocument(updated, updateObject) {
		await this.collection.updateOne(updated, updateObject)
	},
	async updateManyDocuments() {
	
	}
};

/*** exports [end] ***/

module.exports = updateDocuments;