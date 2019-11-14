'use strict';

/*** exports [begin] ***/

const blocksWorker = {
	/* public */
	async getAllBlocks() {
		return await this.blocksCollection.findAllDocuments();
	},
	async blocks(type, message) {
		switch( type ) {
			case 'create': return await this._createBlock(message);
			case 'delete': return await this._deleteBlock(message);
			case 'update': return await this._updateBlock(message);
			case 'move-to-category': return await this._moveToCategoryBlock(message);
			case 'move-to-folder': return await this._moveToFolderBlock(message);
		}
	},
	
	/* private */
	async _createBlock(message) {
		console.log('create-block: ', message)
	},
	async _deleteBlock(options) {
		console.log(options)
	},
	async _updateBlock(options) {
		console.log(options)
	},
	async _moveToCategoryBlock(options) {
		console.log(options)
	},
	async _moveToFolderBlock(options) {
		console.log(options)
	}
};

/*** exports [end] ***/

module.exports = blocksWorker;