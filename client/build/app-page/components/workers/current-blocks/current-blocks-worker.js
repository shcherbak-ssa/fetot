'use strict';

/*** imports [begin] ***/

import createCurrentBlocksStore from './current-blocks-store';

import sendOutputMessageService from '../../services/send-output-message';
import updateModuleDataService from '../../services/update-module-data';

/*** imports [end] ***/
/*** init [begin] ***/

const currentBlocksStore = createCurrentBlocksStore();

const sendOutputMessage = sendOutputMessageService('block');
const updateModuleData = updateModuleDataService('blocks', currentBlocksStore);

/*** init [end] ***/
/*** exports [begin] ***/

const currentBlocksWorker = {
	async create(block) {
		block = await sendOutputMessage('create', block);
		console.log('created-block', block);
		
		await currentBlocksWorker.actions.createBlock(block);
		
		updateModuleData();
	},
	async delete(block_id) {
	
	}
};

/*** exports [end] ***/
/*** src [begin] ***/
/*** src [end] ***/

export {currentBlocksStore, currentBlocksWorker};