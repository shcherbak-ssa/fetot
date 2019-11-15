'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	name: '',
	config: {},
	workers: {},
	actives: {
		category: -1,
		block: -1
	}
};

const getters = {};

const mutations = {
	UPDATE(state, {name, config, workers}) {
		state.name = name;
		state.config = {...config};
		state.workers = {...workers};
		
		state.actives.category = -1;
		state.actives.block = -1
	},
	UPDATE_ACTIVES(state, {key, value}) {
		state.actives[key] = value === undefined ? -1 : value;
	}
};

const actions = {
	async update(context, options) {
		context.commit('UPDATE', options);
	},
	async updateActives(context, options) {
		context.commit('UPDATE_ACTIVES', options)
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