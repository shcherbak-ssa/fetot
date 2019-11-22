'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	documentWidth: getDocumentWidth(),
	frameState: 0, // is-default
};

const getters = {};

const mutations = {
	UPDATE_DOCUMENT_WIDTH(state, width) {
		state.documentWidth = width;
	},
	UPDATE_FRAME_STATE(state, currentState) {
		state.frameState = currentState;
	}
};

const actions = {
	async updateDocumentWidth(context) {
		const documentWidth = getDocumentWidth();
		context.commit('UPDATE_DOCUMENT_WIDTH', documentWidth)
	},
	async updateFrameState(context, currentState) {
		context.commit('UPDATE_FRAME_STATE', currentState)
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