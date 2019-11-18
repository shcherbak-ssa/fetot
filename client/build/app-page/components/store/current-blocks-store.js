'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

import sendOutputMessageService from '../services/send-output-message';
import updateModuleDataService from '../services/update-module-data';

/*** imports [end] ***/
/*** init [begin] ***/

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
		context.commit('CREATE_BLOCK', block)
	},
	async deleteBlock(context, block_id) {
		context.commit('DELETE_BLOCK', block_id);
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createCurrentBlocksStore() {
	StoreWorker.createStore('current-blocks', { state, getters, mutations, actions })
}

/*** exports [end] ***/

export {createCurrentBlocksStore};