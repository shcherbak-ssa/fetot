'use strict';

/*** imports [begin] ***/

import EventsEmitter from 'fetot-js-modules/events-emitter';
import storeWorker from 'fetot-worker-modules/store-worker';

import loginMode from './login-mode';
import inputsStore from './store/inputs.json';

/*** imports [end] ***/
/*** init [begin] ***/

const appEventsEmitter = EventsEmitter.createEmitter('app'),
	loginModeEventsEmitter = EventsEmitter.createEmitter('login-mode');

/*** init [end] ***/
/*** exports [begin] ***/

async function initApplication() {
	await storeWorker.appendGlobalStore('inputs', inputsStore);
	
	let modeStore = await loginMode.init();
	await loginMode.initEvents(loginModeEventsEmitter);
	
	await initAppEvents();
	return { events: appEventsEmitter, store: modeStore }
}

/*** exports [end] ***/
/*** src [begin] ***/

async function initAppEvents() {
	appEventsEmitter
		.on('fetot-button-click', () => {
			loginModeEventsEmitter.emit('run-current-module-worker');
		})
		.on('fetot-link-click', () => {
			loginModeEventsEmitter.emit('change-module', 'link');
		});
}

/*** src [end] ***/

export default initApplication;