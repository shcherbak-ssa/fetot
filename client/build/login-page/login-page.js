'use strict';

/*** imports [begin] ***/

import Fetot from '$fetot';

import $localStorage from '$fetot-services/local-storage';
import eventsEmitterWorker from '$fetot-events-emitter';

import {importModuleHandler} from './components/login-page-handlers';

/*** imports [end] ***/
/*** init [begin] ***/

const fetotEventEmitter = eventsEmitterWorker.getEmitter('fetot');

Fetot.init()
	.then((Vue) => {
		return initLoginPage(Vue);
	})
	.then(() => {
		console.log('Login page - success')
	})
	.catch((err) => {
		console.log(new Error(err))
	});


/*** init [end] ***/
/*** src [begin] ***/

async function initLoginPage(VueModel) {
	let $module = $localStorage.item.has('client-exist') ? 'login' : 'sing-in';
	
	fetotEventEmitter.emit('import', {
		options: {
			type: 'module',
			path: `l${$module}.js`
		},
		handler: importModuleHandler
	})
	
	// imports( IMPORT_LOGIN_PAGE_COMPONENT, {name: 'login-page', path: './view/login-page.vue'} );
	// importEventEmitter.on( IMPORT_LOGIN_PAGE_COMPONENT, () => {} )
}

/*** src [end] ***/