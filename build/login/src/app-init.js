'use strict';

/*** imports [begin] ***/

import Events from 'fetot-js-modules/events';
import storeWorker from 'fetot-worker-modules/store-worker';

import loginMode from './login-mode';
import inputsStore from './store/inputs.json';

/*** imports [end] ***/
/*** exports [begin] ***/

const appEvents = Events.createEmitter('app'),
	loginModeEvents = Events.createEmitter('login-mode');

async function initApplication() {
	await storeWorker.appendGlobalStore('inputs', inputsStore);
	
	let modeStore = await loginMode.init();
	await loginMode.initEvents(loginModeEvents);
	
	await initAppEvents();
	return { events: appEvents, store: modeStore }
}

/*** exports [end] ***/
/*** src [begin] ***/

async function initAppEvents() {
	appEvents
		.on('workspace-button-click', () => {
			console.log('workspace-button-click');
			loginModeEvents.emit('run-current-module-worker');
		})
		.on('workspace-link-click', () => {
			console.log('workspace-link-click');
			loginModeEvents.emit('change-module', 'link');
		});
}

/*** src [end] ***/

export default initApplication;