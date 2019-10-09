'use strict';

/*** imports [begin] ***/

import locStorage from 'fetot-js-module/local-storage';

/*** imports [end] ***/
/*** mode src [begin] ***/

import loginModule from '../modules/login';

const currentModule = {};

/*** mode src [end] ***/
/*** exports [begin] ***/

async function initLoginMode(options) {
	options.currentModule = locStorage.hasStorageItem('client-exist') ? 'login' : 'sing-in';
	
}

/*** exports [begin] ***/

export default {
	init: initLoginMode
}