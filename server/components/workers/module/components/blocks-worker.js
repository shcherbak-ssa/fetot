'use strict';

/*** exports [begin] ***/

const blocksWorker = {
	/* public */
	async getAllBlocks() {
		const blocks = await this.blocksCollection.findAllDocuments();
		return blocks.map(transformBlockID)
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
		console.log('create-block: ', message);
		
		const block = this.blocksCollection.insertOneDocument(message);
		return { message: transformBlockID(block) }
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
/*** src [begin] ***/

function transformBlockID(block) {
	block.id = block._id;
	delete block._id;
	
	return block;
}

/*** src [end] ***/

module.exports = blocksWorker;