'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	store: {
		data: {}, worker: {}, config: {}, options: {}
	}
};

const getters = {};

const mutations = {
	UPDATE(state, newModule) {
		console.log('new Module', newModule);
		// state.store = {...newModule};
		
		for( let [key, value] of Object.entries(newModule) )
			state.store[key] = value
	}
};

const actions = {
	async updateCurrentModule(context, {$module, options}) {
		context.commit('UPDATE', {...$module, options});
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function initCurrentModuleStore() {
	return StoreInterface.createStore('current-module', {
		namespaced: true, state, getters, mutations, actions
	});
}

/*** exports [end] ***/

export default initCurrentModuleStore;