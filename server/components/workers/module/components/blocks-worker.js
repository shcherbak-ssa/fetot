'use strict';

/*** exports [begin] ***/

const blocksWorker = {
	/* public */
	async getAllBlocks() {
		return await this.blocksCollection.findAllDocuments();
	},
	async blocks(type, options) {
		switch( type ) {
			case 'create': return await this._createBlock(options);
			case 'delete': return await this._deleteBlock(options);
			case 'update': return await this._updateBlock(options);
			case 'move-to-category': return await this._moveToCategoryBlock(options);
			case 'move-to-folder': return await this._moveToFolderBlock(options);
		}
	},
	
	/* private */
	async _createBlock(options) {
		console.log(options)
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