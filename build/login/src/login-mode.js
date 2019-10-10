'use strict';

/*** imports [begin] ***/

import locStorage from 'fetot-js-modules/local-storage';

import loginModule from './modules/login';

/*** imports [end] ***/
/*** exports [begin] ***/

let currentModuleName = '';

async function initLoginMode(loginModeEvents) {
	currentModuleName = locStorage.hasStorageItem('client-exist') ? 'login' : 'sing-in';
	await initLoginModeEvents(loginModeEvents);
	return currentModuleName;
}

/*** exports [begin] ***/
/*** src [begin] ***/

async function initLoginModeEvents(loginModeEvents) {
	loginModeEvents
		.on('change-module', () => {
		
		})
}

/*** src [end] ***/

export default {
	init: initLoginMode
}