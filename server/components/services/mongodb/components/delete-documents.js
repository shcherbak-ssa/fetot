'use strict';

/*** exports [begin] ***/

const deleteDocuments = {
	async deleteOneDocument(query) {
		const result = await this.collection.deleteOne(query);
		return result.result;
	},
	async deleteManyDocuments() {
	
	}
};

/*** exports [end] ***/

module.exports = deleteDocuments;