'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';
import {getBlocksPositionsConfigs} from '../workers/blocks-positions-config-worker';

/*** imports [end] ***/
/*** init [begin] ***/

/* store data */
const state = {
	documentWidth: getDocumentWidth(),
	frameState: 0, // is-default
	blocksPositions: []
};

const getters = {};

const mutations = {
	UPDATE_DOCUMENT_WIDTH(state, width) {
		state.documentWidth = width;
	},
	UPDATE_FRAME_STATE(state, currentState) {
		state.frameState = currentState;
	},
	
	REMOVE_BLOCKS_POSITIONS(state) {
		state.blocksPositions = null;
	},
	UPDATE_BLOCKS_POSITIONS(state, positions) {
		state.blocksPositions = positions
	}
};

const actions = {
	async updateDocumentWidth(context) {
		const documentWidth = getDocumentWidth();
		context.commit('UPDATE_DOCUMENT_WIDTH', documentWidth)
	},
	async updateFrameState(context, currentState) {
		context.commit('UPDATE_FRAME_STATE', currentState)
	},
	
	/* blocks positions */
	async removeBlocksPositions(context) {
		context.commit('REMOVE_BLOCKS_POSITIONS')
	},
	async updateBlocksPositions(context) {
		const blocksCount = StoreWorker.getStore('current-module').getters.settingsByKey('blocksCount');
		const blocksConfigs = getBlocksPositionsConfigs(blocksCount);
		
		const blocksPositions = new Array(blocksCount + 1);
		blocksConfigs.forEach(({left, indexList}) => {
			indexList.forEach((index, i) => {
				blocksPositions[index] = { left: left + 'px', index: index - 1}
			})
		});
		
		context.commit('UPDATE_BLOCKS_POSITIONS', blocksPositions)
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createPageStore() {
	StoreWorker.createStore('page', { state, getters, mutations, actions });
}

/*** exports [end] ***/
/*** src [begin] ***/

function getDocumentWidth() {
	return document.documentElement.clientWidth|| document.body.offsetWidth
}

/*** src [end] ***/

export {createPageStore};