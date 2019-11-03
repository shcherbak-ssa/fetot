'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services/store';
createCollections('inputs', 'current-module');

import $localStorage from 'fetot-services/local-storage';

import ModuleWorker from './module-worker';
import loginPageVueComponent from '../view/login-page.vue';

/*** imports [end] ***/
/*** exports [begin] ***/

async function initLoginPage() {
	let $module = $localStorage.item.has('client-exist') ? 'login' : 'sing-in';
	await ModuleWorker.init($module);
	
	return {
		connectionOptions: {type: 'login', mode: '', $module},
		mainComponent: loginPageVueComponent
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

function createCollections(...names) {
	names.forEach((name) => {
		Store.collection.create(name)
	})
}

/*** src [end] ***/

export default initLoginPage;