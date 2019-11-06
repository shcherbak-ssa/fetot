'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	inputs: {},
	modules: {}
};

const getters = {
	getInputsForModuleWorker(state) {
		return (inputs) => {
			let retInputs = {};
			
			inputs.forEach((name) => {
				retInputs[name] = {...state.inputs[name], isEmpty}
			});
			
			return retInputs;
		}
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
/*** src [begin] ***/

function isEmpty() {
	return this.value === '' ? 'Current field cannot be empty' : false
}

/*** src [end] ***/

export { loginPageStore, initLoginPageStore };