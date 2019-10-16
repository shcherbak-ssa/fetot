'use strict';

/*** imports [begin] ***/

import fetchRequest from 'fetot-network-modules/fetch-request';
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
const modeStore = storeWorker.createLocalStore({
	'current-module': '',
	modules: {
		'login': loginModule.store,
		'sing-in': singInModule.store
	}
});

let currentModule = {};

/*** init [end] ***/
/*** exports [begin] ***/

async function initLoginMode() {
	await initNewModule(locStorage.hasStorageItem('client-exist') ? 'login' : 'sing-in');
	return modeStore;
}
async function initLoginModeEvents(loginModeEvents) {
	loginModeEvents
		.on('change-module', async (label) => {
			let currentModuleName = await changeCurrentModule(label),
				response = await fetchRequest.post({
					message: {
						type: 'change-module',
						content: {
							type: currentModuleName,
							data: {}
						}
					}
				});
			
			if( response.type === 'success' )	await initNewModule(currentModuleName);
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
	let currentModule = modeStore.get('current-module');
	if( label === 'link' ) switch( currentModule ) {
		case 'sing-in':
			return 'login';
		case 'login':
		case 'confirm-email':
		case 'create-account':
			return 'sing-in';
	}
	if( label === 'button' ) switch( currentModule ) {
		case 'sing-in':
			return 'confirm-email';
		case 'confirm-email':
			return 'create-account';
		case 'login':
		case 'create-account':
			return ''
	}
}

/*** src [end] ***/

export default {
	init: initLoginMode,
	initEvents: initLoginModeEvents
}