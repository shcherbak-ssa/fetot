'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	note: {
		title: '',
		content: [],
		info: {
			date: 0
		}
	}
};

const getters = {};

const mutations = {
	UPDATE(state, data) {
		state.note = { ...data }
	},
	UPDATE_VALUE(state, {key, value}) {
		state.note[key] = value;
	},
	UPDATE_INFO_VALUE(state, {key, value}) {
		state.note.info[key] = value;
	}
};

const actions = {
	async update(context, data) {
		context.commit('UPDATE', data)
	},
	async updateValue(context, options) {
		context.commit('UPDATE_VALUE', options)
	},
	async updateInfoValue(context, options) {
		context.commit('UPDATE_INFO_VALUE', options)
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createCurrentNoteStore() {
	StoreWorker.createStore('current-note', { state, getters, mutations, actions })
}

/*** exports [end] ***/

export {createCurrentNoteStore};