'use strict';

/*** imports [begin] ***/

import fetot from 'fetot';

import {store} from 'fetot-store-workers';
import inputsWorker from 'fetot-workers/inputs';
import $localStorage from 'fetot-storage/local-storage';

import loginModuleWorker from './components/login-module-worker';
import loginPageComponent from './view/login-page.vue';

/*** imports [end] ***/
/*** init [begin] ***/

let $module = $localStorage.item.has('client-exist') ? 'login' : 'sing-in';

store.registerModule('inputs-worker', inputsWorker.worker);
store.registerModule('module-worker', loginModuleWorker);
store.dispatch('module-worker/init', {$module, store});

let fetotOptions = {
	connectionOptions: {type: 'login', mode: '', $module},
	enterComponent: loginPageComponent
};

fetot.init(fetotOptions)
	.catch((err) => {
		console.log(err);
	});

/*** init [end] ***/
/*** src [begin] ***/
/*** src [end] ***/