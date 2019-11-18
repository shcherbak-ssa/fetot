'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

import sendOutputMessageService from '../services/send-output-message';
import updateModuleDataService from '../services/update-module-data';

/*** imports [end] ***/
/*** init [begin] ***/

const sendOutputMessage = sendOutputMessageService('category');
const updateModuleData = updateModuleDataService('categories');

/* store data */
const state = {
	categories: []
};

const getters = {};

const mutations = {
	UPDATE(state, categories) {
		state.categories = [...categories];
	},
	
	CREATE_CATEGORY(state, name) {
		state.categories.push(name);
	},
	DELETE_CATEGORY(state, name) {
		state.categories = state.categories.filter((item) => item !== name);
	},
	RENAME_CATEGORY(state, {index, name}) {
		state.categories = state.categories.map((it, i) => i === index ? name : it);
	}
};

const actions = {
	async update(context, categories) {
		context.commit('UPDATE', categories)
	},
	
	async createCategory(context, name) {
		context.commit('CREATE_CATEGORY', name);
		await sendOutputMessageAndUpdateModuleData('create', {name});
	},
	async deleteCategory(context, name) {
		context.commit('DELETE_CATEGORY', name);
		await sendOutputMessageAndUpdateModuleData('delete', {name});
	},
	
	async renameCategory(context, options) {
		context.commit('RENAME_CATEGORY', options);
		await sendOutputMessageAndUpdateModuleData('rename', options);
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createCurrentCategoriesStore() {
	StoreWorker.createStore('current-categories', {state, getters, mutations, actions})
}

/*** exports [end] ***/
/*** src [begin] ***/

async function sendOutputMessageAndUpdateModuleData(type, message) {
	updateModuleData( StoreWorker.getStore('current-categories') );
	sendOutputMessage(type, message);
}

/*** src [end] ***/

export {createCurrentCategoriesStore};