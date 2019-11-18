'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	name: '',
	config: {},
	actives: {
		category: -1,
		block: -1
	}
};

const getters = {};

const mutations = {
	UPDATE(state, {name, config}) {
		state.name = name;
		state.config = {...config};
		
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

function createCurrentModuleStore() {
	return StoreWorker.createStore('current-module', { state, getters, mutations, actions });
}

/*** exports [end] ***/

export {createCurrentModuleStore};