'use strict';

/*** imports [begin] ***/

import locStorage from 'fetot-js-modules/local-storage';
import storeWorker from 'fetot-worker-modules/store-worker';

import loginModule from './modules/login';
import singInModule from './modules/sing-in';
import confirmEmailModule from './modules/confirm-email';
import createAccount from './modules/create-account';

/*** imports [end] ***/
/*** init [begin] ***/

const modules = {
	'login': loginModule,
	'sing-in': singInModule,
	'confirm-email': confirmEmailModule,
	'create-account': createAccount
};
let modeStore = {
	'current-module': '',
	modules: {
		'login': loginModule.store,
		'sing-in': singInModule.store
	}
};
console.log('wtf', {
	'current-module': '',
	modules: {
		'login': loginModule.store,
		'sing-in': singInModule.store
	}
});
modeStore = storeWorker.createLocalStore(modeStore);

let currentModule = {};

/*** init [end] ***/
/*** exports [begin] ***/

async function initLoginMode() {
	await initNewModule(locStorage.hasStorageItem('client-exist') ? 'login' : 'sing-in');
	console.log('init', modeStore);
	return modeStore;
}
async function initLoginModeEvents(loginModeEvents) {
	loginModeEvents
		.on('change-module', async (label) => {
			let currentModuleName = await changeCurrentModule(label);
			await initNewModule(currentModuleName);
		})
		.on('run-current-module-worker', async () => {
			await currentModule.worker();
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
	if( label === 'link' ) switch( modeStore.get('current-module') ) {
		case 'sing-in':
			return 'login';
		case 'login':
		case 'confirm-email':
		case 'create-account':
			return 'sing-in';
	} else {}
}

/*** src [end] ***/

export default {
	init: initLoginMode,
	initEvents: initLoginModeEvents
}