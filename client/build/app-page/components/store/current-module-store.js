'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';
import sendOutputMessageService from '../services/send-output-message';

/*** imports [end] ***/
/*** init [begin] ***/

const sendOutputMessage = sendOutputMessageService('module');

/* store data */
const state = {
	module: {
		name: '',
		config: {},
		categories: [],
		settings: {},
		positions: []
	},
	isFirst: true
};

const getters = {
	name(state) {
		return () => state.module.name;
	},
	positions(state) {
		return () => state.module.positions
	},
	
	configByKey(state) {
		return (key) => state.module.config[key]
	},
	settingsByKey(state) {
		return (key) => state.module.settings[key]
	},
};

const mutations = {
	UPDATE(state, options) {
		state.module = {...options}
	},
	UPDATE_SETTINGS_BY_KEY(state, {key, value}) {
		state.module.settings[key] = value;
	},
	
	UPDATE_IS_FIRST(state) {
		state.isFirst = false
	},
	
	UPDATE_POSITIONS(state, positions) {
		state.module.positions = positions;
	}
};

const actions = {
	async update(context, options) {
		context.commit('UPDATE', options);
	},
	async updateSettingsByKey({commit, getters}, options) {
		const {key, value} = options;
		
		if( key === 'blocksSizeType' && value === 2 )
			return commit('UPDATE_SETTINGS_BY_KEY', options);
		
		if( key === 'blocksCount' ) {
			const blocksCount = getters.settingsByKey(key);
			options = {key, value: blocksCount + value}
		}
		
		commit('UPDATE_SETTINGS_BY_KEY', options);
		sendOutputMessage('update-settings', options);
	},
	
	async updateIsFirst(context) {
		context.commit('UPDATE_IS_FIRST');
	},
	
	async updatePositions(context, positions) {
		context.commit('UPDATE_POSITIONS', positions);
		sendOutputMessage('update-positions', {positions});
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function createCurrentModuleStore() {
	return StoreWorker.createStore('current-module', { state, getters, mutations, actions });
}

/*** exports [end] ***/

export {createCurrentModuleStore};