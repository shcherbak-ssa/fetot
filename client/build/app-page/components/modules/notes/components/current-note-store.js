'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const state = {
	note: {
		id: 0,
		title: '',
		content: [],
		info: {
			date: 0
		}
	}
};

const getters = {
	note(state) {
		return () => {
			const note = state.note;
			note.info.date = +note.info.date;
			
			return note;
		}
	},
	noteForDelete(state) {
		return () => {}
	},
	title(state) {
		return () => state.note.title;
	},
	content(state) {
		return () => state.note.content;
	},
	date(state) {
		return () => state.note.info.date;
	}
};

const mutations = {
	UPDATE(state, data) {
		state.note = { ...data }
	},
	UPDATE_FOR_CREATE(state, {date}) {
		const title = state.note.title;
		state.note = { id: 0, title, content: [], info: { date: +date } }
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
	async updateForCreate(context, data) {
		context.commit('UPDATE_FOR_CREATE', data)
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