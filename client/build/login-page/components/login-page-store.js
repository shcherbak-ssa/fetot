'use strict';

/*** imports [begin] ***/

import StoreInterface from 'fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	inputs: {},
	modules: {}
};

const getters = {
	getInput(state) {
		return (input) => state.inputs[input];
	},
	getModule(state) {
		return ($module) => state.modules[$module];
	}
};

const mutations = {
	ADD_INPUTS(state, inputs) {
		state.inputs = Object.assign({}, state.inputs, inputs)
	},
	ADD_MODULE(state, $module) {
		state.modules = Object.assign({}, state.modules, $module);
	}
};

const actions = {
	async addInputs(context, inputs) {
		context.commit('ADD_INPUTS', inputs);
	},
	async addModule(context, $module) {
		context.commit('ADD_MODULE', $module);
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const loginPageStore = StoreInterface.createStore('login-page', {
	namespaced: true, state, getters, mutations, actions
});

/*** exports [end] ***/

export default loginPageStore;