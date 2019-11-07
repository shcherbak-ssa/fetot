'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = { modules: {} };

const getters = {};

const mutations = {
	ADD_MODULE(state, $module) {
		state.modules = Object.assign({}, state.modules, $module);
	}
};

const actions = {
	async addModule({commit, state}, $module) {
		let [name] = Object.keys($module);
		commit('ADD_MODULE', $module);
		
		return state.modules[name];
	},
	async hasModule({state}, moduleName) {
		return (moduleName in state.modules) ? state.modules[moduleName] : false;
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

let loginPageStore;

async function initLoginPageStore() {
	loginPageStore = StoreInterface.createStore('login-page', {
		namespaced: true, state, getters, mutations, actions
	});
}

/*** exports [end] ***/

export { loginPageStore, initLoginPageStore };