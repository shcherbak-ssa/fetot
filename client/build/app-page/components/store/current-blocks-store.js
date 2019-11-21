'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

import sendOutputMessageService from '../services/send-output-message';
import updateModuleDataService from '../services/update-module-data';

/*** imports [end] ***/
/*** init [begin] ***/

const sendOutputMessage = sendOutputMessageService('block');
const updateModuleData = updateModuleDataService('blocks');

let currentBlocksStore = {};

/* store data */
const state = {
	blocks: {}
};

const getters = {
	getLikeArray(state) {
		return () => Object.entries(state.blocks).map(([id, block]) => block);
	}
};

const mutations = {
	UPDATE(state, blocks) {
		const parsedBlocks = blocks.map((block) => [block.id, block]);
		state.blocks = { ...Object.fromEntries(parsedBlocks) };
	},
	UPDATE_BLOCK_ID(state, id) {
		const block = state.blocks['0'];
		delete state.blocks['0'];
		
		block.id = id;
		state.blocks[id] = block;
	},
	
	CREATE_BLOCK(state, block) {
		state.blocks[block.id] = block;
	},
	DELETE_BLOCK(state, block_id) {
		delete state.blocks[block_id]
	}
};

const actions = {
	async update(context, blocks) {
		context.commit('UPDATE', blocks);
	},
	
	async createBlock(context, block) {
		block.id = '0';
		context.commit('CREATE_BLOCK', block);
		
		const response = await sendOutputMessage('create', block);
		context.commit('UPDATE_BLOCK_ID', response.id);
		
		updateModuleData( currentBlocksStore );
	},
	async deleteBlock(context, block_id) {
		context.commit('DELETE_BLOCK', block_id);
		
		sendOutputMessage('delete', {id: block_id});
		updateModuleData( currentBlocksStore )
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createCurrentBlocksStore() {
	StoreWorker.createStore('current-blocks', { state, getters, mutations, actions });
	currentBlocksStore = StoreWorker.getStore('current-blocks');
}

/*** exports [end] ***/
/*** src [begin] ***/

async function sendOutputMessageAndUpdateModuleData(type, message) {
	const response = await sendOutputMessage(type, message);
	updateModuleData( StoreWorker.getStore('current-blocks') );
}

/*** src [end] ***/

export {createCurrentBlocksStore};