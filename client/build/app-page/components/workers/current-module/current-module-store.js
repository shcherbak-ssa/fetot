'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	blocks: [],
	categories: [],
	workers: {}
};

const getters = {};

const mutations = {
	UPDATE(state, {blocks, categories, workers}) {
		state.blocks = blocks;
		state.categories = categories;
		state.workers = {...workers};
	}
};

const actions = {
	async update(context, options) {
		context.commit('UPDATE', options);
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function initCurrentModuleStore() {
	return StoreInterface.createStore('current-module', {
		namespaced: true, state, getters, mutations, actions
	});
}

/*** exports [end] ***/

export default initCurrentModuleStore;