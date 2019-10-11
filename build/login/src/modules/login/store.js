'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';

/*** imports [end] ***/
/*** exports [begin] ***/

const store = storeWorker.createLocalStore({
	title: 'Login',
	link: 'Do not have an account',
	content: {
		inputs: [ 'email', 'password' ],
		button: 'Enter'
	}
});

/*** exports [end] ***/

export default store;