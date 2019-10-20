'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const loginStore = {
	title: 'Login',
	link: 'Do not have an account',
	content: {
		text: '',
		inputs: [ 'email', 'password' ],
		button: 'Enter'
	}
};

storeWorker.appendGlobalStore('login-module', loginStore);

/*** init [end] ***/
/*** exports [begin] ***/

const store = storeWorker.createLocalStore(loginStore);

/*** exports [end] ***/

export default store;