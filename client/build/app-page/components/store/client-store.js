'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	config: {},
	modules: {}
};

const getters = {};

const mutations = {
	INIT(state, {config, modules}) {
		state.config = {...config};
		state.modules = {...modules};
	}
};

const actions = {
	async init(context, options) {
		context.commit('INIT', options);
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

let clientStore;

async function createClientStore() {
	clientStore = StoreInterface.createStore('client', {
		namespaced: true, state, getters, mutations, actions
	});
	
	return clientStore;
}

/*** exports [end] ***/

export { clientStore, createClientStore };