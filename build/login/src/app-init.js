'use strict';

/*** imports [begin] ***/

import Events from 'fetot-js-modules/events';
import storeWorker from 'fetot-worker-modules/store-worker';

import loginMode from './login-mode';

import inputsStore from './store/inputs.json';
import modulesStore from './store/modules.json';

/*** imports [end] ***/
/*** exports [begin] ***/

const appEvents = Events.createEmitter('app'),
	loginModeEvents = Events.createEmitter('login-mode');

const loginStore = {
	inputs: inputsStore,
	modules: modulesStore
};

async function initApplication() {
	let appEvents = await initAppEvents(),
		store = await storeWorker.init(loginStore),
		currentModule = await loginMode.init();
	
	return { appEvents, store, currentModule }
}

/*** exports [end] ***/
/*** src [begin] ***/

async function initAppEvents() {
	appEvents
		.on('workspace-button-click', () => {
			console.log('workspace-button-click')
		})
		.on('workspace-link-click', () => {
			console.log('workspace-link-click');
			loginModeEvents.emit('change-module');
		});
}

/*** src [end] ***/

export default initApplication;