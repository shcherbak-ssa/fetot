'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	module: {
		name: '',
		config: {},
		settings: {}
	}
};

const getters = {
	name(state) {
		return () => state.module.name;
	},
	configByKey(state) {
		return (key) => state.module.config[key]
	},
	settingsByKey(state) {
		return (key) => state.module.settings[key]
	}
};

const mutations = {
	UPDATE(state, options) {
		state.module = {...options}
	}
};

const actions = {
	async update(context, options) {
		context.commit('UPDATE', options);
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createCurrentModuleStore() {
	return StoreWorker.createStore('current-module', { state, getters, mutations, actions });
}

/*** exports [end] ***/

export {createCurrentModuleStore};