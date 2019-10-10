'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';
import initAppEventsEmitter from './app-events-emitter';
import loginMode from './login-mode';

import inputsStore from './store/inputs.json';
import modulesStore from './store/modules.json';

/*** imports [end] ***/
/*** exports [begin] ***/

const store = {
	inputs: inputsStore,
	modules: modulesStore
};

async function initApplication() {
	await initAppEventsEmitter();
	await loginMode.init();
	
	return await storeWorker.init(store)
}

/*** exports [end] ***/

export default initApplication;