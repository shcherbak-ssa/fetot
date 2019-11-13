'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	categories: []
};

const getters = {};

const mutations = {
	UPDATE(state, categories) {
		state.categories = [...categories];
	},
	
	CREATE_CATEGORY(state, name) {
		state.categories.push(name);
	},
	DELETE_CATEGORY(state, name) {
		state.categories = state.categories.filter((item) => item !== name);
	},
	
	RENAME_CATEGORY(state, {index, name}) {
		state.categories = state.categories.map((it, i) => i === index ? name : it);
	},
	MOVE_CATEGORY(state, {currentIndex, newIndex}) {
		state.categories = [] // @todo
	}
};

const actions = {
	async update(context, categories) {
		context.commit('UPDATE', categories)
	},
	
	async createCategory(context, name) {
		context.commit('CREATE_CATEGORY', name)
	},
	async deleteCategory(context, name) {
		context.commit('DELETE_CATEGORY', name)
	},
	
	async renameCategory(context, options) {
		context.commit('RENAME_CATEGORY', options);
	},
	async moveCategory(context, options) {
		context.commit('MOVE_CATEGORY', options);
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createCurrentCategoryStore() {
	return StoreInterface.createStore('current-categories', {
		namespaced: true, state, getters, mutations, actions
	})
}

/*** exports [end] ***/

export default createCurrentCategoryStore;