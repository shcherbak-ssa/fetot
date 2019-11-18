'use strict';

/*** imports [begin] ***/

import $localStorage from '$fetot-services/local-storage';
import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	config: {},
	modules: {}
};

const getters = {};

const mutations = {
	INIT(state, {config, modules}) {
		state.config = {...config, ...$localStorage.item('client')};
		
		for( let [name, $module] of Object.entries(modules) )
			state.modules[name] = {...$module, blocks: [], init: false};
	},
	
	UPDATE_MODULE(state, {name, $module}) {
		state.modules[name] = {...$module}
	},
	UPDATE_MODULE_KEY(state, {name, key, value}) {
		state.modules[name][key] = value;
	}
};

const actions = {
	async init(context, options) {
		context.commit('INIT', options);
	},
	
	async updateModule(context, options) {
		context.commit('UPDATE_MODULE', options);
	},
	async updateModuleKey(context, options) {
		context.commit('UPDATE_MODULE_KEY', options);
	},
	
	hasModule(context, name) {
		return 'init' in context.state.modules[name];
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createClientStore() {
	StoreWorker.createStore('client', { state, getters, mutations, actions });
}

/*** exports [end] ***/

export {createClientStore};