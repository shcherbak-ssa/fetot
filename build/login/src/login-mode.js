'use strict';

/*** imports [begin] ***/

import locStorage from 'fetot-js-modules/local-storage';

import loginModule from './modules/login';

/*** imports [end] ***/
/*** exports [begin] ***/

async function initLoginMode() {
	let currentModule = locStorage.hasStorageItem('client-exist') ? 'login' : 'sing-in';
	console.log('init login mode, module: ', currentModule);
}

/*** exports [begin] ***/

export default {
	init: initLoginMode
}