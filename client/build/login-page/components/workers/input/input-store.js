'use strict';

/*** imports [begin] ***/

import StoreInterface from '$fetot-store-interface';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	name: '',
	type: 'text',
	value: '',
	placeholder: '',
	icon: '',
	error: '',
	event: false
};

const getters = {
	isEmpty(state) {
		return state.value === '' ? 'Current field cannot be empty' : false
	}
};

const mutations = {
	UPDATE_VALUE(state, newValue) {
		state.value = newValue
	},
	UPDATE_ERROR(state, error) {
		state.error = error;
	}
};

const actions = {
	updateValue({commit, state}, newValue) {
		commit('UPDATE_VALUE', newValue);
	},
	updateError(context, error = '') {
		context.commit('UPDATE_ERROR', error)
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const inputStore = {
	create(name, data) {
		return StoreInterface.createStore(name, {
			namespaced: true, state: Object.assign({}, state, data),
			getters, mutations, actions
		})
	}
};

/*** exports [end] ***/

export default inputStore;