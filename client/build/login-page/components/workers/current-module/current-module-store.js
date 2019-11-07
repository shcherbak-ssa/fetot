'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	data: {}, worker: {}, config: {}, options: {}
};

const getters = {};

const mutations = {
	UPDATE(state, newModule) {
		for( let [key, value] of Object.entries(newModule) ) state[key] = value;
	},
	UPDATE_TEXT(state, text) {
		state.data.content.text = text;
	}
};

const actions = {
	async updateCurrentModule(context, {$module, options}) {
		context.commit('UPDATE', {...$module, options});
	},
	async updateText(context, text) {
		context.commit('UPDATE_TEXT', text);
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