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
	'current-module-name': '',
	'current-module-store': {}
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
			let {email, password} = storeWorker.getGlobalStore('inputs');
			
			locStorage.setStorageItem('client', {id: clientID, email: email.value, password: password.value});
			locStorage.setStorageItem('client-exist', true);
			
			document.cookie = '$fetot={"client":true};path=/;max-age=3600';
			window.location.reload();
		})
}

/*** exports [begin] ***/
/*** src [begin] ***/

async function initNewModule(name) {
	currentModule = modules[name];
	
	modeStore.set('current-module-name', name);
	modeStore.set('current-module-store', currentModule.store);
	
	await currentModule.init();
}
async function changeCurrentModule(label) {
	let currentModuleName = modeStore.get('current-module-name');
	if( label === 'link' ) switch( currentModuleName ) {
		case 'sing-in':
			return 'login';
		case 'login':
		case 'confirm-email':
		case 'create-account':
			return 'sing-in';
	}
	switch( currentModuleName ) {
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