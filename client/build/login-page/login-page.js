'use strict';

/*** imports [begin] ***/

import Fetot from '$fetot';

import connectionRequest from '$fetot-components/network/connection-request';
import $localStorage from '$fetot-services/local-storage';
import OutputMessage from '$fetot-services/output-message';
import eventsEmitterWorker from '$fetot-events-emitter';

import {initLoginPageStore} from './components/store/login-page-store';
import {currentModuleWorker} from './components/workers/current-module';

import './components/login-page-events';
import importModuleHandler from './components/handlers/import-module-handler';

/*** imports [end] ***/
/*** init [begin] ***/

connectionRequest((response) => {
	OutputMessage.clientID = response.id;
});

const loginPageEventEmitter = eventsEmitterWorker.getEmitter('login-page');

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
	await initLoginPageStore();
	
	let moduleName = $localStorage.item.has('client-exist') ? 'login' : 'sing-in';
	let $module = await loginPageEventEmitter.emit('import-module', {
		options: { name: moduleName },
		handler: importModuleHandler
	});
	
	await currentModuleWorker.init(moduleName, $module[0]);
	
	await loginPageEventEmitter.emit('import-login-page-component', {
		handler: () => VueModel.$data.pageComponent = 'login-page'
	});
}

/*** src [end] ***/