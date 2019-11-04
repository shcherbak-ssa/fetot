'use strict';

/*** imports [begin] ***/

import OutputMessage from 'fetot-workers/output-message';
import saveClientAndGotoApp from './save-client-and-goto-app';

/*** imports [end] ***/
/*** init [begin] ***/

const UPDATE_CURRENT_MODULE = 'UPDATE_CURRENT_MODULE';
const SET_NEW_MODULE_TO_COLLECTION = 'SET_NEW_MODULE_TO_COLLECTION';

/*** init [end] ***/
/*** exports [begin] ***/

const loginModuleWorker = {
	namespaced: true,
	state: {
		currentModule: {
			data: {},
			worker: {},
			config: {},
			options: {},
		},
		modulesCollection: {}
	},
	getters: {
		getCurrentModuleData(state) {
			return (key) => state.currentModule.data[key]
		},
		getModuleFromStore(state) {
			return (moduleName) => state.modulesCollection[moduleName]
		},
		hasModuleInStore(state) {
			return (moduleName) => moduleName in state.modulesCollection
		},
		getInputsForSaveClient(state, g, rS, rootGetters) {
			let getInput = rootGetters['inputs/getInput'];
			
			return {
				email: getInput('email').value,
				password: getInput('password').value
			}
		}
	},
	mutations: {
		[UPDATE_CURRENT_MODULE]: (state, {currentModule}) => {
			state.currentModule = Object.assign(state.currentModule, currentModule);
		},
		[SET_NEW_MODULE_TO_COLLECTION]: (state, {moduleName, $module}) => {
			state.modulesCollection[moduleName] = {...$module};
		}
	},
	actions: {
		async init({dispatch}, {$module, store}) {
			$module = await dispatch('importModule', $module);
			await store.dispatch('inputs-worker/appendInputToCollection', $module.store.inputs);
			
			await dispatch('updateCurrentModule', $module);
		},
		async runWorker({state, dispatch}) {
			let response = await state.currentModule.worker(state.currentModule.options);
			if( response ) await dispatch('changeModule')
		},
		async changeModule({state, getters, commit, dispatch, rootGetters}, label = 'byButton') {
			let nextModule = state.currentModule.config.next[label];
			if( !nextModule ) return await saveClientAndGotoApp(
				getters.getInputsForSaveClient
			);
			
			let $module = getters.hasModuleInStore(nextModule)
				? getters.getModuleFromStore(nextModule) : await dispatch('importModule', nextModule);
			
			await dispatch('updateCurrentModule', $module);
			
			let outputMessage = rootGetters['outputMessage/create']({type: 'change-module'});
			await outputMessage.set('$module', nextModule).send();
		},
		
		async updateCurrentModule({commit, rootGetters}, {store: {data, config}, worker}) {
			let currentModule = { worker, data, config, options: {
				inputs: {}, outputWorker: {}
			}};
			
			currentModule.options.inputs = rootGetters['inputs-worker/getInputsForModuleWorker'](data.content.inputs);
			currentModule.options.outputWorker = new OutputMessage({type: 'worker'});
			
			commit(UPDATE_CURRENT_MODULE, {currentModule});
		},
		async importModule(context, moduleName) {
			let $module = await import(`../modules/${moduleName}`).default;
			context.commit(SET_NEW_MODULE_TO_COLLECTION, $module);
			
			return $module
		}
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default loginModuleWorker;