'use strict';

/*** imports [begin] ***/

import locStorage from 'fetot-js-modules/local-storage';
import storeWorker from 'fetot-worker-modules/store-worker';

import loginModule from './modules/login';
import singInModule from './modules/sing-in';
import confirmEmailModule from './modules/confirm-email';
import createAccountModule from './modules/create-account';

/*** imports [end] ***/
/*** init [begin] ***/

const modules = {
	'login': loginModule,
	'sing-in': singInModule,
	'confirm-email': confirmEmailModule,
	'create-account': createAccountModule
};
const modeStore = storeWorker.createLocalStore({
	'current-module': '',
	modules: {
		'login': loginModule.store,
		'sing-in': singInModule.store,
		'confirm-email': confirmEmailModule.store,
		'create-account': createAccountModule.store
	}
});

let currentModule = {};

/*** init [end] ***/
/*** exports [begin] ***/

async function initLoginMode() {
	let currentModuleName = locStorage.hasStorageItem('client-exist') ? 'login' : 'sing-in';
	await initNewModule(currentModuleName);
	
	return modeStore;
}
async function initLoginModeEvents(loginModeEventsEmitter) {
	loginModeEventsEmitter
		.on('change-module', async (label) => {
			let currentModuleName = await changeCurrentModule(label);
			await initNewModule(currentModuleName);
		})
		.on('run-current-module-worker', async () => {
			await currentModule.worker();
		})
		.on('save-client', (clientID) => {
			locStorage.setStorageItem('client-id', clientID);
			locStorage.setStorageItem('client-exist', true);
			
			document.cookie = '$fetot={"client":true};path=/;max-age=60';
			window.location.reload();
		})
}

/*** exports [begin] ***/
/*** src [begin] ***/

async function initNewModule(name) {
	modeStore.set('current-module', name);
	
	currentModule = modules[name];
	await currentModule.init();
}
async function changeCurrentModule(label) {
	let currentModule = modeStore.get('current-module');
	if( label === 'link' ) switch( currentModule ) {
		case 'sing-in':
			return 'login';
		case 'login':
		case 'confirm-email':
		case 'create-account':
			return 'sing-in';
	}
	switch( currentModule ) {
		case 'sing-in':
			return 'confirm-email';
		case 'confirm-email':
			return 'create-account';
	}
}

/*** src [end] ***/

export default {
	init: initLoginMode,
	initEvents: initLoginModeEvents
}