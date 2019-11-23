'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';
import sendOutputMessageService from '../services/send-output-message';

/*** imports [end] ***/
/*** init [begin] ***/

const sendOutputMessage = sendOutputMessageService('block');

let currentBlocksStore = {};

/* store data */
const state = {
	blocks: {}
};

const getters = {
	getLikeArray(state) {
		return () => {
			const positions = StoreWorker.getStore('current-module').getters.positions();
			return positions.map((id) => state.blocks[id]);
		}
	}
};

const mutations = {
	UPDATE(state, blocks) {
		const parsedBlocks = blocks.map((block) => [block.id, block]);
		state.blocks = { ...Object.fromEntries(parsedBlocks) };
	},
	UPDATE_BLOCK_TITLE(state, {id, title}) {
		state.blocks[id].title = title
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
	async updateBlockTitle(context, options) {
		context.commit('UPDATE_BLOCK_TITLE', options)
	},
	
	async createBlock({commit, state}, block) {
		const {id} = await sendOutputMessage('create', block);
		await updateCurrentModuleData('create', id, 1);
		
		block.id = id;
		commit('CREATE_BLOCK', block)
	},
	async deleteBlock(context, block_id) {
		await updateCurrentModuleData('delete', block_id, -1);
		context.commit('DELETE_BLOCK', block_id);
		
		sendOutputMessage('delete', {id: block_id});
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

async function updateCurrentModuleData(label, id, settingsValue) {
	const currentModuleStore = StoreWorker.getStore('current-module');
	
	await currentModuleStore.actions.updateSettingsByKey({
		key: 'blocksCount', value: settingsValue
	});
	
	let positions = currentModuleStore.getters.positions();
	
	switch( label ) {
		case 'create':
			positions.unshift(id);
			break;
		case 'delete':
			positions = positions.filter((item) => item !== id);
	}
	
	await currentModuleStore.actions.updatePositions(positions);
}

/*** src [end] ***/

export {createCurrentBlocksStore};