'use strict';

/*** imports [begin] ***/

import eventsEmitterWorker from '$fetot-events-emitter';
import OutputMessage from '$fetot-services/output-message';

import {loginPageStore} from '../../store/login-page-store';
import initCurrentModuleStore from './current-module-store';

import saveClientAndGotoApp from '../../save-client-and-goto-app';
import importModuleHandler from '../../handlers/import-module-handler';

/*** imports [end] ***/
/*** init [begin] ***/

const loginPageEventEmitter = eventsEmitterWorker.getEmitter('login-page');
const fetotEventEmitter = eventsEmitterWorker.getEmitter('fetot');

/*** init [end] ***/
/*** exports [begin] ***/

let currentModuleStore;

const currentModuleWorker = {
	async init(name, $module) {
		currentModuleStore = await initCurrentModuleStore();
		
		// this.store = currentModuleStore.state.store;
		this.store = currentModuleStore.state;
		this.actions = currentModuleStore.actions;
		
		await this._sendMessageAndUpdateCurrentModule(name, $module);
	},
	async runWorker() {
		let response = await this.store.worker(this.store.options);
		if( response ) await this.changeModule();
	},
	async changeModule(label = 'byButton') {
		let nextModule = this.store.config.next[label];
		if( !nextModule ) return await saveClientAndGotoApp();
		
		let $module = await loginPageStore.actions.hasModule(nextModule);
		if( !$module ) await loginPageEventEmitter.emit('import-module', {
			options: { name: nextModule },
			handler: async (importModule) => {
				$module = await importModuleHandler(importModule);
			}
		});
		
		await this._sendMessageAndUpdateCurrentModule(nextModule, $module);
	},
	
	async _sendMessageAndUpdateCurrentModule(moduleName, $module) {
		let {inputs} = $module.data.content;
		
		await this.actions.updateCurrentModule({$module, options: {
			inputs: loginPageStore.getters.getInputsForModuleWorker(inputs),
			outputMessage: new OutputMessage({type: 'worker'})
		}});
		
		let outputMessage = new OutputMessage({type: 'change-module'});
		outputMessage.set('$module', moduleName);
		
		fetotEventEmitter.emit('send-output-message', {outputMessage, handler() {}})
	}
};

/*** exports [end] ***/

export { currentModuleStore, currentModuleWorker };