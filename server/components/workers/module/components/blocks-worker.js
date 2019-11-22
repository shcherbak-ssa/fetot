'use strict';

/*** imports [begin] ***/

const {ObjectId} = require('mongodb');

/*** imports [end] ***/
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
		delete message.id;
		const block = await this.blocksCollection.insertOneDocument(message);
		
		console.log('create-block', block);
		return { message: { id: transformBlockID(block).id } }
	},
	async _deleteBlock({id}) {
		id = ObjectId(id);
		const result = await this.blocksCollection.deleteOneDocument({_id: id});
		
		console.log('delete-block', result);
		return null
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