'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	documentWidth: getDocumentWidth()
};

const getters = {};

const mutations = {
	UPDATE_DOCUMENT_WIDTH(state, width) {
		state.documentWidth = width;
	}
};

const actions = {
	async updateDocumentWidth(context) {
		const documentWidth = getDocumentWidth();
		context.commit('UPDATE_DOCUMENT_WIDTH', documentWidth)
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
	return document.documentElement.clientWidth || document.body.offsetWidth
}

/*** src [end] ***/

export {createPageStore};