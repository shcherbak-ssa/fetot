'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services/store';
import EventsEmitter from 'fetot-workers/events-emitter';
import OutputMessage from 'fetot-workers/output-message';

import saveClientAndGotoApp from './save-client-and-goto-app';

/*** imports [end] ***/
/*** init [begin] ***/

const modules = new Map();
let currentModuleWorker = {};

class ModuleWorker {
	constructor({worker, config, inputs}) {
		this.worker = worker;
		this.config = config;
		
		this.options = {
			inputs, outputMessage: new OutputMessage({type: 'worker'})
		};
	}
	
	/* public */
	async runWorker() {
		let response = await this.worker(this.options);
		if( response ) await this.changeModule();
	}
	async changeModule(label = 'byButton') {
		let nextModule = this.config.next[label];
		if( !nextModule ) return await saveClientAndGotoApp(Store.collection('inputs'));
		
		let $module = modules.has(nextModule)
			? modules.get(nextModule) : await importModule(nextModule);
		
		await updateModuleWorker($module);
		
		let outputMessage = new OutputMessage({type: 'change-module'});
		await outputMessage.set('$module', nextModule).send();
	}
}

/*** init [end] ***/
/*** exports [begin] ***/

async function initModuleWorker(moduleName) {
	let $module = await importModule(moduleName);
	await updateModuleWorker($module);
	
	EventsEmitter
		.createEmitter('module-worker')
		.on('change-module', async (label) => {
			await currentModuleWorker.changeModule(label);
		})
		.on('run-worker', async () => {
			await currentModuleWorker.runWorker();
		});
}

/*** exports [end] ***/
/*** src [begin] ***/

async function importModule(moduleName) {
	let $module = await import(`../modules/${moduleName}`);
	modules.set(moduleName, $module.default);
	
	return $module.default
}
async function updateModuleWorker({store, worker}) {
	let {inputs, data, config} = store;
	
	Store.collection('inputs').set(inputs);
	Store.collection('current-module').set(data).set('name', config.name);
	
	currentModuleWorker = new ModuleWorker({
		worker, config, inputs: getInputsFromStore(data.content.inputs)
	});
}

// transform inputs
function getInputsFromStore(inputs) {
	let storeInputs = Store.inputs;
	let retInputs = {};
	
	inputs.forEach((name) => {
		retInputs[name] = Object.assign(storeInputs.get(name), {
			isEmpty() {
				if( this.value === '' ) {
					this.error = 'Current field cannot be empty';
					return true;
				}
				return false
			}
		})
	});
	
	return retInputs;
}

/*** src [end] ***/

export default { init: initModuleWorker };